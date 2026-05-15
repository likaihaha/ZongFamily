#!/usr/bin/env node
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { writeFile } from "node:fs/promises";
import { EdgeTTS } from "edge-tts-universal";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const voiceDir = path.join(root, "game", "assets", "audio", "voice");

function fromBase64(value) {
  return Buffer.from(value, "base64").toString("utf8");
}

const clips = [
  {
    file: "chen-jing-blog-edge.mp3",
    voice: "zh-CN-XiaoxiaoNeural",
    rate: "-12%",
    pitch: "-2Hz",
    text: fromBase64("5LuK5aSp5Yaz5a6a5Zue5LqR5bGx5Y6/44CC5oiR5aaI5Lul5YmN5b6I5bCR5o+Q5aSW5YWs77yM5Y+q6K+05oiR5ael5ael5bm06L275pe25Zyo5LqR5bGx5ZCD6L+H5b6I5aSa6Ium44CC5pyJ5Lqb5ZCN5a2X77yM6K6w5L2P5LqG5Lmf5LiN6IO95Y+r5Ye65Y+j44CC")
  },
  {
    file: "anonymous-call-edge.mp3",
    voice: "zh-CN-YunxiNeural",
    rate: "-10%",
    pitch: "-4Hz",
    text: fromBase64("56ys5LiD5Liq57un5om/5Lq66L+Y5rS7552A5rKh5pyJ5LiN6YeN6KaB44CC5aW555qE5ZCO5Luj5bey57uP5Zue5Yiw5LqR5bGx44CC")
  },
  {
    file: "zong-deathbed-edge.mp3",
    voice: "zh-CN-YunjianNeural",
    rate: "-24%",
    pitch: "-8Hz",
    text: fromBase64("6L+Y5pyJ5LiA5Lu25LqL77yM5oiR5LiA55u05rKh6K+044CC5YW25a6e77yM5oiR5Zyo5aSW6Z2i6L+Y5pyJ5LiA5Liq5a2p5a2Q44CC")
  }
];

await mkdir(voiceDir, { recursive: true });

for (const clip of clips) {
  const out = path.join(voiceDir, clip.file);
  console.log(`Generating ${clip.file} with ${clip.voice}...`);
  const tts = new EdgeTTS(clip.text, clip.voice, {
    rate: clip.rate,
    pitch: clip.pitch,
    volume: "+0%"
  });
  const result = await tts.synthesize();
  const audioBuffer = Buffer.from(await result.audio.arrayBuffer());
  await writeFile(out, audioBuffer);
}

console.log(`Generated ${clips.length} Edge TTS clips in ${voiceDir}`);
