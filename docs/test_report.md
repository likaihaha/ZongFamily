# 测试报告

更新时间：2026-05-16 02:19 Asia/Shanghai

## 2026-05-16 02:19 Asia/Shanghai 集团与公证设定回归

命令：
```powershell
node --check game\app.js
npm.cmd run validate
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
Select-String -Path casebook\group_history.md -Pattern '42 亿元','未上市','港安信托','灰色边界' -Encoding UTF8
```

结果：
- `game/app.js` 语法检查通过。
- 内容包、提交答案一致性、未来资产清单和游戏数据校验通过。
- Edge headless 自动通关烟测通过，重新生成 `docs/smoke-dom.html`。
- `casebook/group_history.md` 已记录集团规模、未上市口径、公益/政商关系和灰色边界；信托、公证入口与县域人口信息已同步到内容包和正式版文档。

## 2026-05-16 02:08 Asia/Shanghai 备忘录手动整理回归

命令：
```powershell
node --check game\app.js
npm.cmd run validate
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

补充检查：
```powershell
Select-String -Path docs\smoke-dom.html -Pattern 'data-task-state|data-autotest="pass"' -Encoding UTF8
```

结果：
- `game/app.js` 语法检查通过。
- 内容包、提交答案一致性、未来资产清单和游戏数据校验通过。
- Edge headless 自动通关烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- DOM 检查确认调查备忘录渲染“锁定 / 忽略”按钮，且自动通关状态仍为 `data-autotest="pass"`。
- 应用内浏览器连接超时，本轮未取得交互式截图；以 Edge headless 烟测和 DOM 检查作为验证依据。

## 2026-05-16 01:22 Asia/Shanghai 渐进解锁回归

命令：
```powershell
node --check game\app.js
npm.cmd run validate
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

补充检查：
```powershell
# Edge headless 打开普通入口 game/index.html，生成 docs/progressive-unlock-dom.html 和 docs/progressive-unlock.png
```

结果：
- `game/app.js` 语法检查通过。
- 内容包、提交答案一致性、未来资产清单和游戏数据校验通过。
- Edge headless 自动通关烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 普通入口 DOM 检查通过：包含“公开资料”、地点 `data-location-id="archives"` 和隐藏家谱“未核验”占位；普通入口未带 `data-autotest="pass"`。
- 默认关系卡防剧透检查通过：关系核验下拉和说明文本未提前显示罗月珍、陈静或陈嘉东。

## 2026-05-16 01:07 Asia/Shanghai 集团时间线回归

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
- DOM 检查确认“世昌集团 2016 年春治理调整备忘”和“世昌集团代理董事长”已渲染。

## 2026-05-16 00:52 Asia/Shanghai 拟物像素图标回归

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
- 人工查看烟测截图，侧栏导航已从单字章升级为 CSS 像素物件图标，当前项状态正常。

## 2026-05-16 00:19 Asia/Shanghai 正式版计划页检查

命令：
```powershell
Select-String -Path yunshan_formal_version_plan.html -Pattern '<h1>','<h2>','建议立刻做','渐进解锁系统' -Encoding UTF8
node --check game\app.js
npm.cmd run validate
```

结果：
- `yunshan_formal_version_plan.html` 存在《云山宗氏案》正式版本计划标题。
- 页面包含产品愿景、首次游玩、设计原则、游戏结构、正式版家谱、资料库渐进解锁、核心系统、内容规模、数据与校验、界面规划、制作阶段和下一步执行 12 个主要章节。
- 下一步执行段明确建议优先实现“家谱页 + 资料库”的渐进解锁系统。
- `game/app.js` 语法检查和内容包校验通过。

## 2026-05-16 00:01 Asia/Shanghai 关系证据解释回归

命令：
```powershell
node --check game\app.js
npm.cmd run validate
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
Select-String -Path docs\smoke-dom.html -Pattern '为什么这些证据成立|relation-reasoning|data-autotest="pass"' -Encoding UTF8
```

结果：
- `game/app.js` 语法检查通过。
- 内容包、提交答案一致性、未来资产清单和游戏数据校验通过。
- Edge headless 烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- DOM 检查确认关系解释折叠块已渲染，且自动通关状态仍为 `data-autotest="pass"`。
- in-app browser 视觉检查重试两次仍超时；本轮以 Edge headless 烟测和 DOM 检查作为验证依据。

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
