# Agent 接力文档

更新时间：2026-05-15 01:58 Asia/Shanghai

## 项目目标

在 2026-05-15 09:30 前尽可能完成《云山宗氏案》可玩版本。用户希望无人干预推进、合理 Git 提交、自己测试、自己评估、自己迭代。

## 当前稳定提交

最新提交：

`dde0001 Add ambient audio toggle`

提交历史：

- `0accaee` Create playable Yunshan case MVP shell
- `e8bbe21` Add clue board and voice playback
- `a75186a` Expand case content and add smoke test
- `251d8e1` Add investigation notes and discovered keywords
- `73d321b` Improve investigation pacing and add launcher
- `416d398` Add public-family and misidentification puzzles
- `6d76261` Add agent handoff notes
- `cfeb920` Add source-specific document styling
- `e930d6b` Fix mobile layout overflow
- `dde0001` Add ambient audio toggle

## 当前游戏入口

打开：

`game/index.html`

或运行：

```powershell
powershell -ExecutionPolicy Bypass -File tools/launch_game.ps1
```

## 当前内容规模

- 人物：17
- 资料：27
- 关键关系谜题：6
- UI：资料库、家谱、证据箱、笔记、提交
- 音频：6 个 UI 音效、1 个占位环境底噪、3 个 TTS 占位语音
- 环境音：已接入顶部开关，默认关闭，用户点击后循环播放
- 美术：1 张风格/UI 样张，已接入首页空状态

## 验证命令

```powershell
node --check game/app.js
node tools/validate_game.js
powershell -ExecutionPolicy Bypass -File tools/run_smoke.ps1
```

当前验证状态：

- 数据自检通过
- Edge headless 自动通关烟测通过
- 截图输出：`docs/smoke-autotest.png`

## 下一步优先级

1. 增加结局报告的“证据链回顾”模块。
2. 扩充人物头像/剪影资源，可以先用 CSS 占位，后续再批量生成图片。
3. 加入更多可选旁支资料，但不要破坏主线唯一解。
4. 做一次真人试玩式搜索路径复盘，调整默认线索顺序。
5. 如有时间，封装为 Electron/Vite 项目；否则保持当前静态 Web 版本。

## 注意事项

- 不要删除用户已有文档。
- 不要把当前静态版本重构到无法运行。
- 任何大改前先确保 `tools/run_smoke.ps1` 通过。
- 每完成一个稳定功能点就 Git commit。
