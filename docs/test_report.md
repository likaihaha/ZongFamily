# 测试报告

更新时间：2026-05-15 23:08 Asia/Shanghai

## 2026-05-15 23:08 Asia/Shanghai 拟真侧栏导航回归

命令：
```powershell
node --check game\app.js
npm.cmd run validate
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `game/app.js` 语法检查通过。
- 内容包、提交答案一致性、未来资产清单和游戏数据校验通过。
- Edge headless 烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 人工查看烟测截图，侧栏导航已呈现纸纹索引条、红色当前签条和淡红“当前”章。

## 2026-05-15 23:06 Asia/Shanghai 关系证据卡片回归

命令：
```powershell
node --check game\app.js
npm.cmd run validate
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `game/app.js` 语法检查通过。
- 内容包、提交答案一致性、未来资产清单和游戏数据校验通过。
- Edge headless 烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 另生成 `docs/relation-evidence-cards.png`，确认“误认关系澄清”使用已绑定摘要和分组证据卡展示。

## 2026-05-15 23:00 Asia/Shanghai 人物档案筛选回归

命令：
```powershell
node --check game\app.js
npm.cmd run validate
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
Select-String -Path docs\smoke-dom.html -Pattern 'people-filters|data-people-filter="hidden"|人物档案|data-autotest="pass"' -Encoding UTF8
```

结果：
- `game/app.js` 语法检查通过。
- 内容包、提交答案一致性、未来资产清单和游戏数据校验通过。
- Edge headless 烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- DOM 检查确认人物档案筛选控件已渲染，且自动通关状态仍为 `data-autotest="pass"`。

## 2026-05-15 22:53 Asia/Shanghai 家谱界面回归

命令：
```powershell
node --check game\app.js
npm.cmd run validate
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `game/app.js` 语法检查通过。
- 内容包、提交答案一致性、未来资产清单和游戏数据校验通过。
- Edge headless 烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- DOM 检查包含 `血脉关系图`、`当前关系核验`、`relation-step-nav` 和 `data-autotest="pass"`。
- 另生成家谱页人工观感截图 `docs/tree-review-v3.png`，确认隐藏血脉链条不再被压成竖排文本。

## 2026-05-15 22:00 Asia/Shanghai 回归

命令：
```powershell
node --check game\app.js
npm.cmd run validate
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `game/app.js` 语法检查通过。
- 内容包、提交答案一致性、未来资产清单和游戏数据校验通过。
- 游戏数据自检结果：24 名人物、50 条资料、6 条关键关系、0 错误、0 警告。
- Edge headless 烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 本轮新增资料只补强搜索链和误导材料，不改变最终提交答案。

## 2026-05-15 21:05 Asia/Shanghai 回归

命令：
```powershell
node --check game\app.js
npm.cmd run validate
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `game/app.js` 语法检查通过。
- 内容包、提交答案一致性、未来资产清单和游戏数据校验通过。
- Edge headless 烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- DOM 检查确认 `data-autotest="pass"`、调查备忘录、主线/支线/教学待办和最终提交复查按钮均已渲染。
- in-app browser 视觉检查连接超时，本轮未取得交互式截图；当前以 headless 烟测和 DOM 检查作为验证依据。

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
- 游戏数据自检通过：24 名人物、48 条资料、6 条关键关系、0 错误、0 警告。
- Edge headless 烟测通过，已生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 本轮新增的关系冲突提示不影响自动通关路径。
- 本轮新增的设置页不影响自动通关路径；烟测 DOM 已确认包含设置页、导出按钮和输入确认式重置按钮。
- 本轮宗家冲突和地方关系补充已纳入校验：内容包为 28 份资料、23 条线索、13 名人物；游戏内资料库为 48 条资料。
- GitHub Pages 发布目录模拟通过：发布包约 58.41 MB，保留 `game/` 可玩入口、证据图片、地点背景图和实际引用的头像/文档素材，同时排除未引用生成源图。

### 数据自检

命令：

```powershell
node tools/validate_game.js
```

结果：

- 人物：24
- 资料：48
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
