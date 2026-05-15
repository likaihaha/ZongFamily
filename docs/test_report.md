# 测试报告

更新时间：2026-05-15 17:32 Asia/Shanghai

## 已执行

### 本轮回归

命令：

```powershell
node --check game\app.js
npm.cmd run validate
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：

- `game/app.js` 语法检查通过。
- 内容包校验通过。
- 提交答案一致性校验通过。
- 游戏数据自检通过：17 名人物、27 条资料、6 条关键关系、0 错误、0 警告。
- Edge headless 烟测通过，已生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 本轮新增的关系冲突提示不影响自动通关路径。
- 本轮新增的设置页不影响自动通关路径；烟测 DOM 已确认包含设置页、导出按钮和输入确认式重置按钮。
- GitHub Pages 发布目录模拟通过：排除未来素材后约 7.59 MB，保留 `game/` 可玩入口和证据图片。

### 数据自检

命令：

```powershell
node tools/validate_game.js
```

结果：

- 人物：17
- 资料：27
- 关键关系：6
- 错误：0
- 警告：0

### 音频生成

命令：

```powershell
powershell -ExecutionPolicy Bypass -File tools/generate_audio.ps1
```

结果：

- 生成 6 个 UI 音效
- 生成 1 个占位环境底噪
- 生成 3 个 Windows TTS 占位语音

### 免费神经网络 TTS

命令：

```powershell
powershell -ExecutionPolicy Bypass -File tools/generate_edge_tts.ps1
```

结果：

- 生成陈静博客朗读：`chen-jing-blog-edge.mp3`
- 生成匿名电话：`anonymous-call-edge.mp3`
- 生成宗世昌临终录音：`zong-deathbed-edge.mp3`
- 当前免费 TTS 由 Node 包 `edge-tts-universal` 生成，许可证为 AGPL-3.0，商业发布前需处理授权风险。

### 浏览器烟测

命令：

```powershell
powershell -ExecutionPolicy Bypass -File tools/run_smoke.ps1
```

结果：

- Edge headless 打开 `game/index.html?autotest=1`
- 自动阅读全部资料
- 自动收藏关键证据
- 自动填写六条关键关系
- 自动提交最终报告
- 页面输出 `data-autotest="pass"`
- 生成截图：`docs/smoke-autotest.png`

## 当前风险

- 尚未进行真人试玩，无法判断搜索关键词和线索密度是否舒适。
- 人物头像仍以样张和文字卡为主，缺少批量档案照。
- BGM 是程序生成的占位底噪，商业质感不足。
- 当前是静态 Web MVP，尚未封装为桌面应用。
