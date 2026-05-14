$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$sfxDir = Join-Path $root "game\assets\audio\sfx"
$bgmDir = Join-Path $root "game\assets\audio\bgm"
$voiceDir = Join-Path $root "game\assets\audio\voice"
New-Item -ItemType Directory -Force -Path $sfxDir, $bgmDir, $voiceDir | Out-Null

Add-Type -TypeDefinition @"
using System;
using System.IO;
using System.Text;

public static class WavMaker {
  public static void WriteTone(string path, double seconds, int sampleRate, Func<double, double> sampleFn) {
    int samples = (int)(seconds * sampleRate);
    short[] data = new short[samples];
    for (int i = 0; i < samples; i++) {
      double t = (double)i / sampleRate;
      double env = Math.Min(1.0, Math.Min(t / 0.02, (seconds - t) / 0.04));
      double v = Math.Max(-1.0, Math.Min(1.0, sampleFn(t) * Math.Max(0.0, env)));
      data[i] = (short)(v * short.MaxValue * 0.35);
    }
    WriteWav(path, sampleRate, data);
  }

  public static void WriteNoise(string path, double seconds, int sampleRate, int seed, double amp) {
    int samples = (int)(seconds * sampleRate);
    short[] data = new short[samples];
    Random rand = new Random(seed);
    double last = 0;
    for (int i = 0; i < samples; i++) {
      double t = (double)i / sampleRate;
      double env = Math.Min(1.0, Math.Min(t / 0.05, (seconds - t) / 0.08));
      last = last * 0.92 + (rand.NextDouble() * 2 - 1) * 0.08;
      data[i] = (short)(last * env * amp * short.MaxValue);
    }
    WriteWav(path, sampleRate, data);
  }

  public static void WriteWav(string path, int sampleRate, short[] data) {
    using (var bw = new BinaryWriter(File.Create(path))) {
      int byteRate = sampleRate * 2;
      int dataBytes = data.Length * 2;
      bw.Write(Encoding.ASCII.GetBytes("RIFF"));
      bw.Write(36 + dataBytes);
      bw.Write(Encoding.ASCII.GetBytes("WAVEfmt "));
      bw.Write(16);
      bw.Write((short)1);
      bw.Write((short)1);
      bw.Write(sampleRate);
      bw.Write(byteRate);
      bw.Write((short)2);
      bw.Write((short)16);
      bw.Write(Encoding.ASCII.GetBytes("data"));
      bw.Write(dataBytes);
      foreach (short s in data) bw.Write(s);
    }
  }
}
"@

function Tone($name, $seconds, $script) {
  $path = Join-Path $sfxDir $name
  [WavMaker]::WriteTone($path, $seconds, 44100, $script)
}

Tone "ui-click.wav" 0.12 { param($t) [Math]::Sin(2 * [Math]::PI * 700 * $t) * [Math]::Exp(-35 * $t) }
Tone "search-start.wav" 0.65 { param($t) ([Math]::Sin(2 * [Math]::PI * (190 + 220 * $t) * $t) + 0.35 * [Math]::Sin(2 * [Math]::PI * 760 * $t)) * [Math]::Exp(-2.4 * $t) }
Tone "evidence-added.wav" 0.75 { param($t) ([Math]::Sin(2 * [Math]::PI * 330 * $t) + [Math]::Sin(2 * [Math]::PI * 495 * $t) * 0.45) * [Math]::Exp(-1.7 * $t) }
Tone "relation-ok.wav" 0.7 { param($t) ([Math]::Sin(2 * [Math]::PI * 392 * $t) + [Math]::Sin(2 * [Math]::PI * 588 * $t) * 0.5) * [Math]::Exp(-1.5 * $t) }
Tone "relation-conflict.wav" 0.55 { param($t) ([Math]::Sin(2 * [Math]::PI * 110 * $t) + [Math]::Sin(2 * [Math]::PI * 147 * $t) * 0.7) * [Math]::Exp(-2.8 * $t) }
[WavMaker]::WriteNoise((Join-Path $sfxDir "paper-open.wav"), 0.8, 44100, 11, 0.22)
[WavMaker]::WriteNoise((Join-Path $bgmDir "archive-room-bed.wav"), 30.0, 44100, 37, 0.08)

Add-Type -AssemblyName System.Speech
$voice = New-Object System.Speech.Synthesis.SpeechSynthesizer
$voice.SelectVoice("Microsoft Huihui Desktop")
$voice.Rate = -2
$voice.Volume = 82

function FromUtf8Base64($text) {
  return [System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($text))
}

$clips = @(
  @{
    File = "chen-jing-blog.wav"
    Text = FromUtf8Base64 "5LuK5aSp5Yaz5a6a5Zue5LqR5bGx5Y6/44CC5oiR5aaI5Lul5YmN5b6I5bCR5o+Q5aSW5YWs77yM5Y+q6K+05oiR5ael5ael5bm06L275pe25Zyo5LqR5bGx5ZCD6L+H5b6I5aSa6Ium44CC5pyJ5Lqb5ZCN5a2X77yM6K6w5L2P5LqG5Lmf5LiN6IO95Y+r5Ye65Y+j44CC"
  },
  @{
    File = "anonymous-call.wav"
    Text = FromUtf8Base64 "56ys5LiD5Liq57un5om/5Lq66L+Y5rS7552A5rKh5pyJ5LiN6YeN6KaB44CC5aW555qE5ZCO5Luj5bey57uP5Zue5Yiw5LqR5bGx44CC"
  },
  @{
    File = "zong-deathbed.wav"
    Text = FromUtf8Base64 "6L+Y5pyJ5LiA5Lu25LqL77yM5oiR5LiA55u05rKh6K+044CC5YW25a6e77yM5oiR5Zyo5aSW6Z2i6L+Y5pyJ5LiA5Liq5a2p5a2Q44CC"
  }
)

foreach ($clip in $clips) {
  $out = Join-Path $voiceDir $clip.File
  $voice.SetOutputToWaveFile($out)
  $voice.Speak($clip.Text)
  $voice.SetOutputToNull()
}

Write-Host "Generated audio assets under game\assets\audio"
