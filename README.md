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

设置页可统一管理音效、环境音、手动保存、JSON 进度导出和本地进度重置。

当前资料库已扩到 44 份资料。除主线强证据外，新增了一批围绕接生登记、供销社借支、黔中汇款、李桂兰信稿、罗建宁访谈和学校家访的交叉线索；第二轮起步内容补入了公司股权、董事会换届、KTV 租赁、鼎辉尽调和社区走访，也补充了云山县县情、2020 年秋办事须知和云山至黔中旧客运线路。

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

生成免费神经网络 TTS 语音：

```powershell
powershell -ExecutionPolicy Bypass -File tools/generate_edge_tts.ps1
```

当前实现走 Node 包 `edge-tts-universal`，第一次运行前请先执行 `npm install`，不需要 API key。注意该包许可证为 AGPL-3.0；如果未来商业发布，建议替换为已确认商业授权的 TTS 或真人配音。

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
