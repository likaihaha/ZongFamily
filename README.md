# 云山宗氏案

《云山宗氏案》是一个档案检索 + 家谱推理 + 证据绑定的单机 Web 游戏原型。

## 当前入口

直接用浏览器打开：

`game/index.html`

不需要安装依赖，也不需要启动服务器。当前版本把人物、资料和谜题逻辑放在 `game/app.js` 中，方便快速迭代。

## 当前玩法

1. 在资料库中搜索关键词，例如 `宗世昌`、`罗月珍`、`陈嘉东`、`信托`、`DNA`。
2. 阅读资料，判断来源可信度。
3. 把关键资料加入证据箱。
4. 在家谱页填写关键关系，并绑定证据。
5. 在提交页提交第七支血脉判断。

## 当前真相核心

宗世昌与罗月珍有一名非婚生女罗建宁。罗建宁之女为陈静，陈静之女为陈嘉东。根据 1998 年香港家族信托条款，陈嘉东虽不姓宗，仍具有继承资格。

## 验证

运行数据自检：

```powershell
node tools/validate_game.js
```

生成占位音频：

```powershell
powershell -ExecutionPolicy Bypass -File tools/generate_audio.ps1
```

运行浏览器烟测：

```powershell
powershell -ExecutionPolicy Bypass -File tools/run_smoke.ps1
```

用 Edge 打开游戏：

```powershell
powershell -ExecutionPolicy Bypass -File tools/launch_game.ps1
```

## 版本控制约定

- `mvp/playable-shell`：可打开、可搜索、可提交的最小闭环。
- `mvp/audio-assets`：程序合成音效和 Windows TTS 占位语音。
- `mvp/content-pass`：扩写资料、人物和误导线。
- `mvp/test-pass`：自检报告、浏览器测试和修复。
