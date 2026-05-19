# 开发状态
## 2026-05-19 13:43 Asia/Shanghai 真人试玩一键会话
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、试玩执行包、结果模板、Git 状态和真实回收文件；确认 12:12 已有“防空填”校验推进，当前仍没有真实 `docs/manual_playtest_result_*.md` 回收文件。
- 主要阻塞仍是真人试玩尚未执行；本轮没有伪造试玩结论，也没有继续增加游戏内提示。
- 为减少观察员执行步骤，新增 `tools/start_manual_playtest.ps1`：运行时会寻找可用本地端口，启动 `tools/serve_manual_playtest.mjs`，打印执行包、游戏入口和建议保存的结果文件名，并默认打开系统浏览器；试玩结束后按 Enter 会停止本地服务。
- `package.json` 新增 `npm.cmd run manual:start` 和 `npm.cmd run check:manual-session`，并把 `powershell -ExecutionPolicy Bypass -File tools/start_manual_playtest.ps1 -Check` 接入 `npm.cmd run validate`。
- README 已补充一键会话用法，说明保存回收 Markdown 后继续运行 `npm.cmd run check:manual-results`。
- 修改文件：`tools/start_manual_playtest.ps1`、`package.json`、`README.md`、`docs/status.md`、`docs/test_report.md`。
- 验证通过：PowerShell 解析器检查、`npm.cmd run check:manual-session`、`node --check tools\serve_manual_playtest.mjs`、`npm.cmd run validate`；额外用 `-NoOpen` 短暂启动会话脚本，确认本地执行包 URL 返回 200 并可停止服务。
- 下一步建议：运行 `npm.cmd run manual:start`，在打开的执行包中完成至少 1 轮真人试玩；保存生成的 `docs\manual_playtest_result_20260519_observer.md` 后运行 `npm.cmd run check:manual-results`。

## 2026-05-19 12:12 Asia/Shanghai 真人试玩回收防空填
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、试玩执行包、结果模板和 Git 状态；确认 11:43 后仍没有真实 `docs/manual_playtest_result_*.md` 回收文件。
- 主要阻塞仍是真人试玩尚未执行；本轮没有伪造试玩结论，也没有继续增加游戏内提示。
- 为避免后续出现“保存了结果文件但仍是模板默认值”的假通过，`docs/manual_playtest_packet.html` 的“通过标准”增加 5 个可填写判定下拉项，生成的回收 Markdown 会带入通过 / 未通过 / 未记录。
- `tools/validate_manual_playtest_packet.mjs` 新增对判定字段和生成脚本的检查；`tools/validate_manual_playtest_results.mjs` 在发现真实 `manual_playtest_result_*.md` 后，会要求基础信息、至少一项核心观察、至少一项路线记录、至少一项判定和下一步建议不是空值或默认值。
- README 已同步说明结果校验会检查关键字段是否已填写，避免只有模板结构而没有有效观察。
- 修改文件：`docs/manual_playtest_packet.html`、`tools/validate_manual_playtest_packet.mjs`、`tools/validate_manual_playtest_results.mjs`、`README.md`、`docs/status.md`、`docs/test_report.md`。
- 验证通过：`node --check tools\validate_manual_playtest_packet.mjs`、`node --check tools\validate_manual_playtest_results.mjs`、`node tools\validate_manual_playtest_packet.mjs`、`node tools\validate_manual_playtest_results.mjs`、`npm.cmd run validate`。
- 下一步建议：运行 `npm.cmd run manual:serve`，执行至少 1 轮真人试玩；在执行包中填写记录、判定下拉和结论后生成并保存 `docs/manual_playtest_result_YYYYMMDD_observer.md`，再运行 `npm.cmd run check:manual-results`。

## 2026-05-19 11:43 Asia/Shanghai 真人试玩本地 HTTP 入口
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、试玩执行包、结果模板、校验脚本和当前 Git 状态；确认 10:41 后仍没有真实 `docs/manual_playtest_result_*.md` 回收文件，主要阻塞仍是真人试玩尚未执行。
- 针对应用内浏览器拒绝 `file://` 本地页面的问题，新增 `tools/serve_manual_playtest.mjs`，提供只读本地 HTTP 静态入口；默认打开 `docs/manual_playtest_packet.html`，同时可访问 `game/index.html`。
- `package.json` 新增 `npm.cmd run manual:serve` 和 `npm.cmd run check:manual-serve`，并把只读文件检查接入 `npm.cmd run validate`；README 已补充当 `file://` 被拦截时的执行方式。
- 本轮没有伪造真人试玩结果，也没有继续叠加游戏内提示；目标是降低观察员打开执行包和游戏入口的摩擦。
- 修改文件：`tools/serve_manual_playtest.mjs`、`package.json`、`README.md`、`docs/status.md`、`docs/test_report.md`。
- 验证通过：`node --check tools\serve_manual_playtest.mjs`、`npm.cmd run check:manual-serve`、`npm.cmd run validate`；额外短暂启动 `PORT=8791 node tools/serve_manual_playtest.mjs` 后，HTTP 检查确认试玩包和游戏入口均返回 200。
- 下一步建议：运行 `npm.cmd run manual:serve`，用打印出的本地 HTTP 地址执行至少 1 轮真人试玩；保存页面生成的 `manual_playtest_result_YYYYMMDD_observer.md` 后运行 `npm.cmd run check:manual-results`。

## 2026-05-19 10:41 Asia/Shanghai 真人试玩入口复核
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、试玩执行包、结果模板、校验脚本和当前 Git 状态；发现 08:38 已有“真人试玩阻塞复核”记录，未覆盖这些既有未提交改动。
- 当前仍没有真实 `docs/manual_playtest_result_*.md` 回收文件；本轮没有伪造试玩结论，也没有继续叠加游戏内提示，避免在缺少玩家观察时增加界面噪声。
- 尝试用应用内浏览器打开 `docs/manual_playtest_packet.html` 做入口复核时，`file://` 本地页面被浏览器安全策略拒绝；这不是项目构建或资源问题，本轮没有绕过该策略。
- 修改文件：`docs/status.md`、`docs/test_report.md`；游戏运行时代码、内容包、试玩执行包和结果模板未改动。
- 验证通过：`npm.cmd run validate`；内容包、提交答案一致性、内容同步、资产、解锁矩阵、基础数据、搜索路径、真人试玩清单、执行包、结果模板和可玩表面校验均无错误。
- 下一步建议：由观察员直接在系统浏览器中打开 `docs/manual_playtest_packet.html` 执行至少 1 轮真人试玩，在页面中生成 Markdown 后保存为 `docs/manual_playtest_result_YYYYMMDD_observer.md`，再运行 `npm.cmd run check:manual-results`。

## 2026-05-19 08:38 Asia/Shanghai 真人试玩阻塞复核
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、试玩执行包、结果模板和校验脚本；发现 07:39 已新增“执行包生成回收 Markdown”能力，未覆盖这些既有未提交改动。
- 当前仍没有真实 `docs/manual_playtest_result_*.md` 回收文件；本轮没有伪造试玩结论，也没有继续叠加游戏内提示，避免在缺少玩家观察时增加界面噪声。
- 复核结果确认当前阻塞不是构建、数据同步、试玩包或结果回收格式，而是真人试玩观察尚未执行；下一步应直接用 `docs/manual_playtest_packet.html` 做至少 1 轮真人试玩。
- 修改文件：`docs/status.md`、`docs/test_report.md`；游戏运行时代码、内容包和试玩执行包未改动。
- 验证通过：`node --check game\app.js`、`node --check tools\validate_manual_playtest_packet.mjs`、`node --check tools\validate_manual_playtest_results.mjs`、`node tools\validate_manual_playtest_packet.mjs`、`node tools\validate_manual_playtest_results.mjs`、`npm.cmd run validate`。
- 下一步建议：打开 `docs/manual_playtest_packet.html` 执行真人试玩，在页面中生成 Markdown 后保存为 `docs/manual_playtest_result_YYYYMMDD_observer.md`，再运行 `npm.cmd run check:manual-results`。

## 2026-05-19 07:39 Asia/Shanghai 真人试玩回收降摩擦
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、试玩执行包、结果模板和校验脚本；确认 06:37 已复跑验证且当前仍没有真实 `manual_playtest_result_*.md` 回收文件。
- 未伪造真人试玩结论，也没有继续叠加游戏内提示；本轮只推进真人试玩回收链路，减少观察员从 HTML 记录到 Markdown 结果文件的手工整理成本。
- `docs/manual_playtest_packet.html` 新增可填写的基础信息和记录字段，并提供“生成回收 Markdown / 复制 Markdown”按钮；生成内容匹配结果模板结构，可保存为 `docs/manual_playtest_result_YYYYMMDD_observer.md`。
- `tools/validate_manual_playtest_packet.mjs` 新增对可编辑字段、生成区和内联生成脚本的结构断言；`tools/validate_manual_playtest_results.mjs` 在保留模板校验的同时，会自动检查已有 `manual_playtest_result_*.md` 结果文件结构。
- 同步更新 `docs/manual_playtest_results_template.md` 和 `README.md`，说明执行包可生成回收 Markdown，且结果文件出现后会纳入校验。
- 验证通过：`node --check tools\validate_manual_playtest_packet.mjs`、`node --check tools\validate_manual_playtest_results.mjs`、`node tools\validate_manual_playtest_packet.mjs`、`node tools\validate_manual_playtest_results.mjs`、`npm.cmd run validate`；额外用 Node 编译 `docs/manual_playtest_packet.html` 中 1 段内联脚本通过。
- 下一步建议：直接打开 `docs/manual_playtest_packet.html` 执行至少 1 轮真人试玩，在页面中生成 Markdown 后保存为 `docs/manual_playtest_result_YYYYMMDD_observer.md`，再运行 `npm.cmd run check:manual-results`。

## 2026-05-19 06:37 Asia/Shanghai 真人试玩前监督复跑
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告和可用脚本；确认上轮主要结论仍成立：当前不是功能缺口阻塞，而是需要至少 1 轮真人试玩观察来判断引导是否自然。
- 未继续增加游戏内 UI、提示或资料内容，避免在缺少玩家反馈时继续堆叠噪声；本轮只做监督复跑、失败定位和回归确认。
- 首次 `npm.cmd run smoke` 因 Edge 临时 profile / 截图文件占用失败；检查错误日志后，安全清理工作区内 `.tmp-edge-profile` 和旧截图，再次运行通过。
- 修改文件：`docs/status.md`、`docs/test_report.md`；`npm.cmd run playtest` 重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`；`npm.cmd run smoke` 重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证通过：`node --check game\app.js`、`node --check tools\validate_playable_surface.mjs`、`node --check tools\validate_manual_playtest_packet.mjs`、`node --check tools\validate_manual_playtest_results.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：直接打开 `docs/manual_playtest_packet.html` 做至少 1 轮真人试玩，并把观察结果填入从 `docs/manual_playtest_results_template.md` 复制出的结果文件；只有结果显示玩家漏看或误解，再改视觉权重、按钮文案、搜索路径或资料内容。

## 2026-05-19 05:36 Asia/Shanghai 试玩交付物监督复核
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、真人试玩清单、试玩执行包、结果回收模板和可玩表面校验；确认 2026-05-19 04:34 已补齐真人试玩结果回收模板，未覆盖这些既有未提交改动。
- 当前游戏可玩闭环、自动试玩、烟测、内容包同步和试玩交付物校验均未发现阻塞；主要剩余风险仍是真人观察本身，自动化不能判断玩家是否自然注意到“更多回查 / 新问询入口 / 先看材料 / 锁定提示”。
- 本轮没有继续增加游戏内 UI 或文案入口，避免在缺少真人反馈时继续堆叠提示；只做监督复核、复跑回归并确认下一步应进入真人试玩。
- 修改文件：`docs/status.md`、`docs/test_report.md`；`npm.cmd run playtest` 重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`，`npm.cmd run smoke` 重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证通过：`node --check game\app.js`、`node --check tools\validate_playable_surface.mjs`、`node --check tools\validate_manual_playtest_packet.mjs`、`node --check tools\validate_manual_playtest_results.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：直接打开 `docs/manual_playtest_packet.html` 执行至少 1 轮真人试玩，并把观察结果填入从 `docs/manual_playtest_results_template.md` 复制出的结果文件；只有结果显示玩家漏看或误解，再改视觉权重、按钮文案、搜索路径或资料内容。

## 2026-05-19 04:34 Asia/Shanghai 真人试玩结果回收模板
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、README、真人试玩清单和执行包；确认 2026-05-19 03:33 已新增真人试玩执行包，未覆盖这些既有未提交改动。
- 当前主要剩余阻塞仍是真人观察本身；本轮不继续叠加游戏内 UI，而是补齐试玩后的结果回收格式，避免真人反馈回来后只有散乱描述、无法直接转成开发任务。
- 新增 `docs/manual_playtest_results_template.md`，要求记录玩家原话、30 秒以上停顿、自发搜索词、走访/问询动作、回查入口理解、通过判定和修改建议。
- 新增 `tools/validate_manual_playtest_results.mjs`，并在 `package.json` 增加 `npm.cmd run check:manual-results`、接入 `npm.cmd run validate`；README 和游戏内更新日志已同步说明。
- 修改文件：`docs/manual_playtest_results_template.md`、`tools/validate_manual_playtest_results.mjs`、`package.json`、`README.md`、`game/app.js`、`docs/status.md`、`docs/test_report.md`；试玩与烟测产物已重新生成。
- 验证通过：`node --check tools\validate_manual_playtest_results.mjs`、`node --check game\app.js`、`npm.cmd run check:manual-results`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：用 `docs/manual_playtest_packet.html` 执行至少 1 轮真人试玩，并把观察结果填入复制后的 `docs/manual_playtest_results_template.md`；只有结果显示玩家漏看或误解，再改视觉权重、按钮文案、搜索路径或资料内容。

## 2026-05-19 03:33 Asia/Shanghai 真人试玩执行包
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、README、真人试玩清单、可玩表面校验和当前未提交改动；确认 2026-05-19 02:34 已新增可玩表面守门校验，未覆盖这些既有改动。
- 当前 `npm.cmd run validate` 基线通过；主要剩余阻塞仍是真人观察本身，而不是玩法入口或自动回归缺失。本轮继续不叠加游戏内“更多回查”提示，避免缺少玩家反馈时增加备忘录噪声。
- 新增 `docs/manual_playtest_packet.html`，把试玩基础信息、8 步执行路线、关键观察点、记录表、通过标准和结论选项做成可直接打开或打印的一页执行包，方便下一轮真人试玩按同一口径记录。
- 新增 `tools/validate_manual_playtest_packet.mjs`，并在 `package.json` 增加 `npm.cmd run check:manual-packet`、接入 `npm.cmd run validate`；README 和游戏内更新日志已同步说明该执行包。
- 修改文件：`docs/manual_playtest_packet.html`、`tools/validate_manual_playtest_packet.mjs`、`package.json`、`README.md`、`game/app.js`、`docs/status.md`、`docs/test_report.md`；试玩与烟测产物已重新生成。
- 验证通过：`node --check tools\validate_manual_playtest_packet.mjs`、`node --check game\app.js`、`npm.cmd run check:manual-packet`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：直接用 `docs/manual_playtest_packet.html` 做至少 1 轮真人试玩；只有记录到玩家漏看“更多回查 / 新问询入口”或不理解“先看材料 / 锁定提示”后，再改视觉权重、动效时长或按钮文案。

## 2026-05-19 02:34 Asia/Shanghai 可玩表面守门校验
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、README、校验脚本和当前未提交改动；确认 2026-05-18 至 2026-05-19 01:32 已有“更多回查 / 新问询入口 / 真人试玩清单 / 监督回归复查”成果，未覆盖这些既有改动。
- 当前完整回归、原件口吻审计和内容包同步均可通过；主要体验风险仍是真人是否自然注意到“更多回查 / 新问询入口 / 先看材料”，本轮没有继续叠加游戏内入口或视觉动效。
- 为避免后续 UI 精简或重构误删核心可玩闭环，新增 `tools/validate_playable_surface.mjs`，显式检查走访、资料库、家谱、证据箱、备忘录、设置、提交、更新日志、本地存档、JSON 导出、隐藏试玩模式、自动通关模式、程序音效和 TTS 占位语音入口。
- `package.json` 新增 `npm.cmd run check:surface`，并把该校验接入 `npm.cmd run validate`；README 已补充可玩表面校验说明；游戏内更新日志已加入本轮记录。
- 修改文件：`tools/validate_playable_surface.mjs`、`package.json`、`README.md`、`game/app.js`、`docs/status.md`、`docs/test_report.md`；`npm.cmd run playtest` 重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`，`npm.cmd run smoke` 重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证通过：`node --check tools\validate_playable_surface.mjs`、`node --check game\app.js`、`npm.cmd run check:surface`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`、`npm.cmd run audit:originals`。
- 下一步建议：直接按 `docs/manual_playtest_checklist.md` 做至少 1 轮真人试玩；只有观察到玩家漏看“更多回查 / 新问询入口”或不理解“先看材料”后，再调整视觉权重、动效时长或按钮文案。

## 2026-05-19 01:32 Asia/Shanghai 监督回归复查
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、README、真人试玩清单和手工清单校验脚本；确认 2026-05-18 至 2026-05-19 00:29 已有“更多回查 / 新问询入口 / 真人试玩清单 / 监督回归复跑”成果，未覆盖这些未提交改动。
- 当前没有发现需要立刻改代码的阻塞；自动化链已覆盖内容包、提交答案、内容同步、资产引用、资料视觉映射、解锁矩阵、基础数据、搜索路径和真人试玩清单。
- 本轮继续不新增备忘录入口、走访入口或视觉动效，避免在缺少真人观察数据时增加界面噪声；只做监督复查、复跑回归并重生成普通试玩与烟测产物。
- 修改文件：`docs/status.md`、`docs/test_report.md`；`npm.cmd run playtest` 重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`，`npm.cmd run smoke` 重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证通过：`node --check game\app.js`、`node --check tools\validate_manual_playtest_checklist.mjs`、`npm.cmd run check:manual-playtest`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：直接按 `docs/manual_playtest_checklist.md` 做真人试玩；只有观察到玩家漏看“更多回查 / 新问询入口”或不理解“先看材料”后，再调整视觉权重、动效时长或按钮文案。

## 2026-05-19 00:29 Asia/Shanghai 监督回归复跑
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、README、真人试玩清单和相关校验脚本；确认 2026-05-18 已有“更多回查 / 新问询入口 / 真人试玩清单”多轮未提交成果，未覆盖这些既有改动。
- 当前代码和文档已经把走访问询回查、先看材料直达、备忘录更多回查、回查批次记忆、搜索路径矩阵和真人试玩清单接入验证链；本轮没有在缺少真人观察数据时继续增加游戏内入口或视觉提示。
- 复跑完整回归后确认未发现构建失败、数据漂移、普通试玩断链或自动通关失败；剩余关键风险仍是真人是否自然注意到“更多回查 / 新问询入口 / 先看材料”。
- 修改文件：`docs/status.md`、`docs/test_report.md`；`npm.cmd run playtest` 重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`，`npm.cmd run smoke` 重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证通过：`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：直接按 `docs/manual_playtest_checklist.md` 做至少 1 轮真人试玩；只有观察到玩家漏看“更多回查 / 新问询入口”或不理解“先看材料”后，再调整视觉权重、动效时长或按钮文案。

## 2026-05-18 23:28 Asia/Shanghai 监督回归确认
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、README、真人试玩清单和清单校验脚本；确认 22:27 已完成真人试玩前复核，未覆盖这些既有成果。
- 当前阻塞仍是真人试玩观察缺失；自动化已经覆盖内容包、提交答案、解锁矩阵、搜索路径、备忘录回查检查点和手工试玩清单，因此本轮没有继续增加游戏内入口或视觉提示。
- 复跑完整回归后确认未发现构建失败、数据漂移、普通试玩断链或自动通关失败；`docs/manual_playtest_checklist.md` 仍是下一步最重要输入。
- 修改文件：`docs/status.md`、`docs/test_report.md`；`npm.cmd run playtest` 重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`，`npm.cmd run smoke` 重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证通过：`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：按 `docs/manual_playtest_checklist.md` 做至少 1 轮真人试玩；只有观察到玩家漏看“更多回查 / 新问询入口”或不理解“先看材料”后，再改视觉权重、动效时长或按钮文案。

## 2026-05-18 22:27 Asia/Shanghai 真人试玩前复核
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、README、真人试玩清单和清单校验脚本；确认 21:29 已新增 `docs/manual_playtest_checklist.md` 并接入 `npm.cmd run validate`，未覆盖这些既有成果。
- 当前主要阻塞仍是真人试玩反馈缺失，而不是代码入口不足；因此没有继续叠加备忘录提示、走访入口或视觉动效，避免在无观察数据时增加界面噪声。
- 复核 `docs/manual_playtest_checklist.md` 后确认它已经覆盖“更多回查 / 新问询入口 / 首次展开 / 1 项待回查”、侧栏阶段提示、先看材料、锁定提示、通过标准和记录模板。
- 修改文件：`docs/status.md`、`docs/test_report.md`；`npm.cmd run playtest` 重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`，`npm.cmd run smoke` 重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证通过：`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：按 `docs/manual_playtest_checklist.md` 做至少 1 轮真人试玩；只有试玩者确实漏看“更多回查”或不理解“先看材料”后，再调整视觉权重、动效时长或按钮文案。

## 2026-05-18 21:29 Asia/Shanghai 真人试玩清单
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告、README 和搜索路线复盘；确认 20:28 已加固备忘录/问询回查外层回归，当前主要阻塞仍是缺少真人试玩反馈。
- 没有继续叠加游戏内入口或视觉提示，避免在无玩家反馈时增加备忘录噪声；改为新增 `docs/manual_playtest_checklist.md`，把“更多回查 / 新问询入口 / 首次展开 / 1 项待回查”拆成真人试玩路线、观察问题、通过标准和记录模板。
- 新增 `tools/validate_manual_playtest_checklist.mjs`，校验手工清单必须保留关键观察点、至少 7 个路线步骤、至少 6 个玩家观察问题和记录表；`npm.cmd run validate` 已接入该脚本，README 新增手工试玩清单说明和 `npm.cmd run check:manual-playtest`。
- 修改文件：`docs/manual_playtest_checklist.md`、`tools/validate_manual_playtest_checklist.mjs`、`package.json`、`README.md`、`docs/status.md`、`docs/test_report.md`；`npm.cmd run playtest` 重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`，`npm.cmd run smoke` 重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证通过：`node --check tools\validate_manual_playtest_checklist.mjs`、`npm.cmd run check:manual-playtest`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：按 `docs/manual_playtest_checklist.md` 做至少 1 轮真人试玩；只有试玩者确实漏看“更多回查”后，再调整视觉权重或动效，不再提前增加新入口。

## 2026-05-18 20:28 Asia/Shanghai 备忘录回查外层回归
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档、测试报告和回归脚本；确认 19:26 已做一次只复核不改功能的监督回归，当前主要剩余风险仍是缺少真人试玩反馈来判断“更多回查 / 新问询入口”是否足够显眼。
- 没有继续增加新的入口或视觉提示，避免在没有真人反馈时继续堆叠备忘录页；改为加固外层回归：`tools/run_playtest.ps1` 现在会从 `guided-playtest-report` 中强制检查 5 个备忘录/问询回查关键检查点。
- 新增外层检查点要求覆盖：阶段提示问询入口回查、备忘录问询入口回查、备忘录回查批次更新、备忘录回查折叠、问询入口检索回显；后续如果这些检查点被误删或内置试玩覆盖变窄，`npm.cmd run playtest` 会直接失败。
- 修改文件：`tools/run_playtest.ps1`、`docs/status.md`、`docs/test_report.md`；`npm.cmd run playtest` 重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`，`npm.cmd run smoke` 重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证通过：`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：必须做一轮真人试玩备忘录页，重点观察“新问询入口 / 首次展开 / 1 项待回查”是否会被自然注意到；只有确认仍漏看后，再做视觉权重微调。

## 2026-05-18 19:26 Asia/Shanghai 自动化监督复核
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档和回归报告；发现自动化记忆停在 2026-05-17 13:49，但工作区和文档已推进到 2026-05-18 18:25 的“回查类型提示”，本轮未覆盖这些既有未提交成果。
- 当前代码已覆盖走访问询入口、资料直达、备忘录回查降噪、更多回查折叠、批次记忆和具体“问询入口”提示；未发现构建失败、测试失败或资料/内容包漂移。
- 本轮没有继续增加入口或视觉提示，避免在缺少真人试玩反馈时把备忘录页堆得更重；只做回归复核并重新生成普通试玩与烟测产物。
- 修改文件：`docs/status.md`、`docs/test_report.md`；`npm.cmd run playtest` 和 `npm.cmd run smoke` 重新生成 `docs/playtest-dom.html`、`docs/playtest-guided.png`、`docs/smoke-dom.html`、`docs/smoke-autotest.png`。
- 验证通过：`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：必须做一轮真人试玩备忘录页，重点观察“新问询入口 / 首次展开 / 1 项待回查”是否会被自然注意到；只有确认仍漏看后，再做视觉权重微调。

## 2026-05-18 18:25 Asia/Shanghai 回查类型提示
- 本轮先读取自动化记忆、检查工作区、最近修改、状态文档和回归报告，确认 15:30 已有“回查批次上下文”成果，未覆盖这些既有改动。
- 针对上一轮“新回查批次可能仍不够显眼”的风险继续推进：调查备忘录“更多回查”首次展开时，现在会把现场问询回查明确标成“新问询入口”，而不是泛化的“有新入口”。
- 新增 `taskReviewContextLabel()` 和 `data-task-review-context`，未确认批次显示具体类型，确认后恢复普通“有新入口”状态，避免长期高亮干扰核心教学任务。
- 样式上强化未确认批次的状态徽标，但不新增入口、不改变任务排序，也不抢占“收藏第一份证据”等主教学高亮。
- 普通试玩新增断言：首个问询回查和第二个问询回查都必须暴露 `data-task-review-context="问询入口"` 并显示“新问询入口”。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证通过：`node --check game\app.js`、`node --check tools\validate_search_paths.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：真人试玩备忘录页，重点观察“新问询入口 / 首次展开 / 1 项待回查”是否足够被注意；如果仍漏看，再做视觉权重微调，不再增加入口。

## 2026-05-18 15:30 Asia/Shanghai 回查批次上下文
- 本轮先读取自动化记忆、检查工作区、最近修改和回归文档，确认 14:36 已有“更多回查首次提示”成果，未覆盖这些既有改动。
- 发现一个实际状态缺口：`reviewSeenKey` 之前只按任务 id 记住“更多回查”批次，玩家确认过一个现场问询回查后，后续新的地点/问询可能被误判为同一批次，不再触发首次展开提示。
- 已给动态问询回查任务新增 `reviewKey`，把地点、问询项和先看材料纳入 `data-task-review-key`；`renderNotebookTasks()` 现在用 `taskReviewKey()` 生成待回查批次。
- 普通试玩新增断言：确认第一个问询回查被点击记为已看后，再记录第二个问询时，“更多回查”必须生成不同 key、重新标记未看、自动展开并显示“首次展开”。
- 修改文件：`game/app.js`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证通过：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：真人试玩备忘录页时重点连续问两个不同问题，观察第二个回查是否确实被注意到；若还漏看，再调整视觉权重，不再增加入口。


## 2026-05-18 14:36 Asia/Shanghai 更多回查首次提示
- 本轮先读取自动化记忆、检查工作区、最近修改和回归文档，确认 14:20 已有“更多回查一次展开”成果，未覆盖这些既有改动。
- 针对上一轮“首次自动展开仍可能不够明显”的风险继续推进：调查备忘录的“更多回查”首次自动展开时新增一次性“首次展开”状态徽标。
- 该徽标只在新的回查批次尚未确认时显示，并配合短暂轻动效；玩家点击折叠标题、手动整理按钮或其中的回查任务后，会随 `reviewSeenKey` 一起记为已看，后续不再反复出现。
- 普通试玩新增断言：首次问询回查批次必须显示“首次展开”；点击回查任务后，同一批次再次渲染时该提示必须消失，同时仍保持折叠、不抢占“收藏第一份证据”教学高亮。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证通过：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：真人试玩备忘录页，重点观察一次性“首次展开”提示是否足够明显；如果仍漏看，应优先调整视觉权重或动画时长，不再增加新的入口。

## 2026-05-18 14:20 Asia/Shanghai 更多回查一次展开
- 本轮先读取自动化记忆、检查工作区、最近修改和回归文档，确认 13:19 已有“更多回查状态提示”成果，未覆盖这些既有改动。
- 针对上一轮“有新入口 / 1 项待回查仍可能被漏看”的风险继续推进：调查备忘录现在会为新的回查批次生成 `data-task-review-key` 和 `data-task-review-unseen`。
- 新回查批次首次出现时，“更多回查”会默认展开并用轻提示底色标记；玩家点击折叠标题、手动整理按钮或其中的回查任务后，会把该批次记入存档，后续保持折叠，避免反复打扰。
- 普通试玩新增断言：首次问询回查批次必须自动展开并标记未看；点击回查任务后必须记住批次；读过第一份资料后同一回查任务仍保留，但不再自动展开，且不会抢占“收藏第一份证据”教学高亮。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证通过：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：真人试玩备忘录页，重点观察一次性展开是否足够让玩家注意到回查入口；如果仍漏看，再考虑短暂动效或“展开后记忆已读”提示，而不是增加新的入口。

## 2026-05-18 13:19 Asia/Shanghai 更多回查状态提示
- 本轮先读取自动化记忆并检查工作区，确认 12:17 已有“更多回查数量提示”成果，未覆盖这些既有改动。
- 针对上一轮“数量徽标仍可能被漏看”的风险继续推进：调查备忘录的“更多回查”折叠区新增 `data-task-review-status`，按待回查数量标记 `pending` / `clear`。
- 折叠标题新增“有新入口”短状态，与“1 项待回查”数量并列显示；样式只强化折叠标题，不新增入口，也不抢占“收藏第一份证据”等核心教学高亮。
- 普通试玩新增断言：问询回查任务折叠后必须暴露 `data-task-review-status="pending"`，折叠标题必须包含“有新入口”和“1 项待回查”。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证通过：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：真人试玩备忘录页，重点观察“有新入口 / 1 项待回查”是否足够被注意；如果仍漏看，再做短暂状态变化或展开后记忆，而不是继续增加新的入口。

## 2026-05-18 12:17 Asia/Shanghai 更多回查数量提示
- 本轮先读取自动化记忆并检查工作区，确认 10:28 已有“备忘录更多回查”成果，未覆盖这些既有改动。
- 针对上一轮“折叠后可能被玩家漏看”的风险继续推进：调查备忘录的“更多回查”折叠标题新增待回查数量徽标，文案从单纯数字改为“1 项待回查”。
- 折叠区现在写入 `data-task-review-count`，并用轻提示色强化数量提示；回查任务仍保持折叠、可点击和非当前高亮，不抢占“收藏第一份证据”等核心教学动作。
- 普通试玩新增断言：问询回查任务折叠后必须暴露 `data-task-review-count="1"`，折叠标题必须包含“1 项待回查”。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证通过：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：真人试玩备忘录页，重点观察“更多回查”的数量徽标是否足够被注意；如果仍漏看，再考虑在折叠标题上增加短暂状态变化，而不是继续增加新的入口。

## 2026-05-18 10:28 Asia/Shanghai 备忘录更多回查
- 本轮先读取自动化记忆并检查工作区，确认 10:10 已有“备忘录回查降噪”成果，未覆盖这些既有改动。
- 针对上一轮“如果玩家漏看，再把回查任务折叠到教学组底部的更多回查区域”的建议推进：备忘录渲染现在会把 `tutorial_visit_question_entry` 这类动态问询回查任务放入“更多回查”折叠区。
- 回查任务仍保留入口词、问询来源和可点击按钮，但不会进入主待办列表，也不会参与 `.is-current` 当前高亮竞争；主教学动作会继续优先提示“收藏第一份证据”等核心步骤。
- 游戏内更新日志同步新增“备忘录更多回查”；普通试玩断言确认回查按钮位于 `data-task-review-drawer` 内，并且读过第一份资料后当前教学任务仍是 `tutorial_collect`。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证通过：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：真人试玩备忘录页，重点观察“更多回查”是否既减少拥挤又不导致玩家完全漏看问询入口；如漏看，可在折叠标题旁增加未读提示色或数量脉冲。

## 2026-05-18 10:10 Asia/Shanghai 备忘录回查降噪
- 本轮先读取自动化记忆并检查工作区，确认 09:17 已有“先看材料提示收敛”成果，未覆盖这些既有改动。
- 针对上一轮“若仍拥挤，把备忘录中的动态回查任务降为非当前任务”的建议推进：新增备忘录任务高亮优先级判断，`tutorial_visit_question_entry` 仍可用，但不会优先抢占教学组当前任务。
- 玩家问询后如果已经读过任意资料但尚未收藏证据，备忘录会优先高亮“收藏第一份证据”，动态“回看问询入口”作为补充入口保留，减少走访页、侧栏和备忘录三处同时催同一动作的拥挤感。
- 普通试玩新增断言：问询回查任务必须继续存在并可点击；读过第一份资料后，该任务不能带 `.is-current`，`tutorial_collect` 必须成为当前教学任务。
- 修改文件：`game/app.js`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证通过：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 浏览器检查：in-app browser 拒绝 `file://` 本地页和 `127.0.0.1:8876` 本地服务访问，已停止临时服务；本轮以 Edge headless 回归和 DOM 断言兜底。
- 下一步建议：做真人试玩备忘录页，观察动态回查降噪后是否仍能被找到；如果玩家漏看，再把回查任务折叠到教学组底部的“更多回查”区域。

## 2026-05-18 09:17 Asia/Shanghai 先看材料提示收敛
- 本轮先读取自动化记忆并检查工作区，确认 08:00 已有走访页材料置顶提醒、侧栏阶段提示直达和备忘录回查等未提交成果，未覆盖这些既有改动。
- 针对上一轮“置顶提醒、侧栏阶段提示和备忘录回查三者是否重复”的风险继续推进：新增当前页面优先规则，侧栏阶段提示会识别当前页是否已经有同一条“先看材料”入口。
- 当玩家停留在对应走访页且顶部已有未读入口材料置顶时，侧栏不再重复渲染 `data-phase-open-doc` 直达按钮，只提示查看走访页置顶提醒；离开走访页后，侧栏仍恢复材料直达，避免断点丢失。
- 普通试玩新增断言：世昌集团取件后，走访页置顶提醒拥有 `doc_trust_clause` 的主动作，侧栏不会同时重复直达；切到资料库后，侧栏阶段提示恢复 `data-phase-open-doc="doc_trust_clause"` 并可直接打开。
- 修改文件：`game/app.js`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证通过：`node --check game\app.js`、`node --check tools\validate_search_paths.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：真人试玩走访页和备忘录页，观察“当前页优先”是否减少重复感；若仍拥挤，再把备忘录中的动态回查任务降为非当前任务或折叠到教学组底部。

## 2026-05-18 08:00 Asia/Shanghai 走访页材料置顶提醒
- 本轮先读取自动化记忆并检查工作区，确认 2026-05-17 13:49 之后已有多轮走访入口材料直达、问询回查、侧栏阶段提示直达和内容包同步等未提交成果，未覆盖这些既有改动。
- 针对上一轮“侧栏直达是否足够明显”的风险继续推进：地点已取件但入口材料尚未阅读时，走访详情顶部新增持久的“先看材料”提醒，不再只依赖刚办完取件时的结果区。
- 置顶提醒会直接打开第一份未读入口原件；对应材料被阅读后提醒自动消失，避免已完成事项继续占据走访页。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证通过：`node --check game\app.js`、`node --check tools\validate_search_paths.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`。
- 下一步建议：真人试玩走访页，观察置顶提醒、侧栏阶段提示和备忘录回查三者是否重复；如果显得拥挤，应合并文案优先级而不是继续增加入口。

## 2026-05-18 07:13 Asia/Shanghai 阶段提示材料直达
- 针对上一轮“阶段提示仍先回入口词检索，玩家还要再点一次打开先看材料”的摩擦，本轮把已入卷材料的侧栏路径改成直达原件。
- 阶段提示仍会保留 `data-phase-context-type="visit-question"`、地点、问询项和 `firstDoc`；当对应 `firstDoc` 已可读时，按钮额外写入 `data-phase-open-doc` 并直接打开该材料。
- 材料尚未办理取件时仍沿用入口词检索和问询来源回显，不会跳到不可读资料。
- 普通试玩新增断言：世昌集团取件后，侧栏阶段提示必须出现 `data-phase-open-doc="doc_trust_clause"`，点击后选中信托原件并标记已读。
- 修改文件：`game/app.js`、`docs/status.md`、`docs/test_report.md`；试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。
- 下一步建议：真人试玩走访页、侧栏和备忘录联动，观察侧栏直达是否足够明显；如果仍停顿，再考虑把“先看材料”做成走访页办理结果之外的持久置顶提醒。

## 2026-05-18 05:31 Asia/Shanghai 阶段提示问询回查
- 针对上一轮“回看问询入口”如果只在备忘录出现，玩家可能看不到的问题，本轮把同一回查路径接入侧栏阶段提示。
- 新增 `pendingVisitQuestionPhaseGoal()`；当玩家已经现场问询但尚未阅读对应先看材料时，阶段提示会临时显示“回看问询入口”，按钮直接用入口词回到资料库。
- 阶段按钮会写入 `data-phase-context-type="visit-question"` 并保留地点、问询项和 `firstDoc`，点击后继续显示问询来源回显和先看材料入口。
- 普通试玩新增断言，确认世昌集团问询后侧栏阶段提示会出现问询入口回查动作，点击后不会丢失 `searchContext`。
- 修改文件：`game/app.js`、`docs/status.md`、`docs/test_report.md`；试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`node --check tools\validate_search_paths.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。
- 下一步建议：真人试玩走访页、侧栏和备忘录联动，观察阶段提示是否比备忘录更容易被注意到；如果仍停顿，再把“打开先看材料”提升为侧栏主按钮后的默认下一跳。

## 2026-05-18 04:28 Asia/Shanghai 备忘录问询入口回查
- 针对上一轮“问询入口检索回显若只在资料库出现，玩家离开后仍可能丢失上下文”的风险，本轮把该回查路径接入调查备忘录。
- 新增 `pendingVisitQuestionContext()`、动态待办“回看问询入口”和任务级 `searchContext`；当玩家已经现场问询但尚未阅读对应先看材料时，备忘录会出现回查任务。
- 点击该任务会用问询入口词进入资料库，并保留 `data-search-origin="visit-question"`、来源地点、问询事项和对应 `firstDoc`，继续显示“打开先看材料 / 办理取件后入卷”的回显。
- 普通试玩新增断言，确认世昌集团问询后备忘录出现 `tutorial_visit_question_entry`，点击后不会丢失问询来源上下文。
- 修改文件：`game/app.js`、`docs/status.md`、`docs/test_report.md`；试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`node --check tools\validate_search_paths.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。
- 下一步建议：真人试玩走访页和备忘录页，观察“回看问询入口”是否减少离开走访页后的断点；如果仍停顿，再把同类回查入口接入侧边栏阶段提示。

## 2026-05-18 03:36 Asia/Shanghai 问询入口检索回显
- 针对上一轮“入口词按钮旁的先看材料视觉层级仍可能不够”的风险，本轮让问询入口检索在资料库结果页保留来源上下文。
- 新增 `searchContext` 状态、`normalizeSearchContext()` 和 `renderSearchContextCallout()`；从现场问询点击“用入口词检索”后，结果页顶部会显示“问询入口检索”、来源地点/经手人、对应 `firstDoc` 和“打开先看材料”按钮。
- 问询搜索按钮新增 location/question/firstDoc 数据字段；普通试玩新增断言，确认世昌集团问询检索后能看到 `data-search-origin="visit-question"`，并能从结果页直达 `doc_trust_clause`。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`node --check tools\validate_search_paths.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。
- 下一步建议：真人试玩走访页，重点观察“问询入口检索”回显是否能让玩家明确先读哪份材料；如果仍卡顿，再考虑把入口检索回显接入备忘录任务。

## 2026-05-18 03:07 Asia/Shanghai 问询入口词标识
- 针对上一轮“问询入口词变窄后，玩家可能误以为这是完整主线搜索词”的风险，本轮把现场问询按钮文案改为“用入口词检索”。
- 新增 `renderVisitQuestionSearchAction()`，现场问询回答区和“今日调查日程”的问询记录回看共用同一套入口词搜索按钮。
- 问询搜索按钮新增 `data-visit-search-context="first-doc"`，普通试玩新增断言，确认当前问询回答和日程回看都保留该语义标记。
- 修改文件：`game/app.js`、`docs/status.md`、`docs/test_report.md`；试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`node tools\validate_search_paths.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。
- 下一步建议：真人试玩走访页，重点观察“用入口词检索”是否足够清楚；如果仍停顿，再把入口词按钮旁的“先看材料”视觉层级提高。

## 2026-05-18 02:08 Asia/Shanghai 现场问询搜索收敛
- 针对上一轮留下的“现场问询搜索是否也会带出过多锁定资料”风险，本轮把该观察点落成自动化回归，并收敛过宽问询词。
- `visitInterviews` 中 6 条宽泛搜索词改为更贴近入口原件：照片背注、亲缘比对、学生信息、个体工商、经营场所、香港家族信托和旧客运线等入口词会优先命中本地 firstDoc。
- `tools/validate_search_paths.mjs` 现在对每条现场问询也设置锁定命中上限，要求问询搜索不仅能露出本地点资料和 firstDoc，还不能让锁定资料明显淹没可见结果。
- `npm.cmd run sync:bundle` 已把新的问询搜索词同步进 `game/data/case_bundle.json`，`docs/search_route_review.md` 已重新生成，现场问询表现在能直接看到每条问询的可见/锁定命中。
- 修改文件：`game/app.js`、`game/data/case_bundle.json`、`tools/validate_search_paths.mjs`、`docs/search_route_review.md`、`README.md`、`docs/status.md`、`docs/test_report.md`；试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`node --check tools\validate_search_paths.mjs`、`node tools\validate_search_paths.mjs`、`npm.cmd run sync:bundle`、`node tools\validate_search_paths.mjs --write`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。
- 下一步建议：做一轮真人试玩式走访页复盘，重点观察“问询入口词变窄后，玩家是否仍能理解它们只是先看材料，而不是完整主线搜索词”。

## 2026-05-18 01:05 Asia/Shanghai 入口原件后续搜索矩阵
- 针对上一轮“入口材料读完后的下一步搜索是否会带出过多锁定资料”的风险，本轮把该观察点落成自动化回归。
- `tools/validate_search_paths.mjs` 现在会读取 `visitFollowUps`，对 6 个走访地点逐一模拟“成功取件 -> 入口原件已读 -> 点击阅读后下一步搜索”。
- 新断言要求后续搜索必须露出本地点资料、至少保留一份入口原件可见，并限制锁定命中数量不能明显压过可见命中，避免玩家读完入口材料后被大量未入卷结果淹没。
- `docs/search_route_review.md` 新增“入口原件后续”表，列出每个地点的下一步搜索词、本地资料命中、可见资料数和锁定资料数。
- 修改文件：`tools/validate_search_paths.mjs`、`docs/search_route_review.md`、`docs/status.md`、`docs/test_report.md`。
- 验证：`node --check tools\validate_search_paths.mjs`、`node tools\validate_search_paths.mjs --write`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。
- 下一步建议：继续把真人试玩观察点自动化，优先检查现场问询搜索是否也需要类似“锁定结果不过载”的上限。

更新时间：2026-05-17 23:03 Asia/Shanghai

## 2026-05-17 23:03 Asia/Shanghai 走访矩阵内容包同步

- 针对走访玩法关键数据此前主要留在 `game/app.js`、内容包只同步现场问询的风险，本轮把 6 个走访地点矩阵写入 `game/data/case_bundle.json`。
- `npm.cmd run sync:bundle` 现在会同步地点标题、搜索词、坐标、办理窗口、办理耗时、经手人 ID、完整地点资料、入口材料和阅读后 `followUp`。
- `case_bundle.json` 新增 `documentContactPeople`，保存每份地点资料对应的经手人，避免后续资料/人物调整时只改运行时代码。
- `tools/validate_content_bundle.mjs` 和 `tools/validate_content_sync.mjs` 已加固：校验走访地点字段完整、入口材料属于地点资料、问询 `firstDoc` 属于入口材料、资料经手人存在，并与 `game/app.js` 双向一致。
- 修改文件：`game/app.js`、`game/data/case_bundle.json`、`tools/sync_case_bundle_from_app.mjs`、`tools/validate_content_bundle.mjs`、`tools/validate_content_sync.mjs`、`README.md`、`docs/unlock_self_check.md`、`docs/status.md`、`docs/test_report.md`；试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`node --check tools\sync_case_bundle_from_app.mjs`、`node --check tools\validate_content_bundle.mjs`、`node --check tools\validate_content_sync.mjs`、`npm.cmd run sync:bundle`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。
- 下一步建议：继续把真人试玩观察点落成自动化复盘，优先检查“入口材料读完后的下一步搜索”是否会把玩家带到过多锁定资料。

## 2026-05-17 22:00 Asia/Shanghai 入口原件下一步矩阵

- 针对“阅读后下一步”此前只单点覆盖世昌集团信托原件的风险，普通试玩矩阵现在扩展到 6 个走访地点的全部入口原件。
- 每个地点成功取件后，试玩会逐份打开入口材料，确认资料阅读页存在对应地点的 `data-doc-next-step`、下一步搜索按钮和返回走访按钮。
- 点击下一步搜索后必须回到资料库，并露出本地点相关材料，避免玩家从入口原件读完后进入断链搜索。
- 修改文件：`game/app.js`、`docs/status.md`、`docs/test_report.md`；普通试玩产物已重新生成。
- 验证：`node --check game\app.js` 和 `npm.cmd run playtest` 已先行通过；完整回归见测试报告。

## 2026-05-17 20:59 Asia/Shanghai 原件阅读下一步查证

- 针对“从走访结果打开入口原件后，玩家仍可能不知道在阅读页之后该搜什么”的摩擦，资料阅读页底部新增“阅读后下一步”行动区。
- 行动区复用对应走访地点的下一步建议，提供直接搜索关键词和回到走访地点两个动作；例如信托入口原件会提示继续搜索“信托”并可回到世昌集团。
- 普通试玩新增断言：点击世昌集团主材料按钮打开 `doc_trust_clause` 后，原件页必须出现 `data-doc-next-step="group"` 和 `data-doc-next-search="信托"`，点击后能回到资料库搜索并露出信托材料。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。

## 2026-05-17 19:58 Asia/Shanghai 主材料按钮矩阵回归

- 针对上一轮只显式断言世昌集团主材料按钮的测试缺口，普通试玩里的 6 个走访地点入口材料矩阵现在会逐地点检查首份入口材料主按钮。
- 新断言要求每个地点成功取件后都存在 `data-visit-primary-doc`，且点击后能切到资料库、选中对应原件并标记已读；原有结果区和今日日程入口材料按钮断言继续保留。
- 这次不改玩家流程、资料正文或解锁规则，只补齐自动化覆盖，避免后续 UI 调整让非世昌集团地点的主按钮失效。
- 修改文件：`game/app.js`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。

## 2026-05-17 18:57 Asia/Shanghai 走访结果主材料按钮

- 针对“取件成功后仍要在多个入口材料按钮里判断第一步”的摩擦，走访结果区新增首份入口材料主按钮，文案为“打开首份入口材料：……”，并保留原有入口材料清单。
- 新增 `renderVisitPrimaryDocumentAction()`，只在对应材料已入卷且可解锁阅读时渲染主按钮；按钮复用现有 `data-visit-open-doc` 行为，会切到资料库、选中原件并标记已读。
- 普通试玩回归新增主按钮断言，世昌集团取件后必须出现 `data-visit-primary-doc="doc_trust_clause"`，点击后必须打开信托材料并标记已读。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`npm.cmd run playtest`、`npm.cmd run validate`、`npm.cmd run smoke` 均通过。

## 2026-05-17 17:55 Asia/Shanghai 走访入口材料直达矩阵

- 在普通试玩回归里新增 6 个走访地点的入口材料直达矩阵：县档案馆、县医院、县一中、唱响 KTV、世昌集团、云山至黔中旧线成功取件后，走访结果区和“今日调查日程”里的入口材料按钮都必须存在。
- 矩阵会逐个点击每份入口材料按钮，确认它能切到资料库、选中对应原件并标记已读；当前覆盖 6 个地点、10 份入口材料。
- 这次没有改动玩家流程、资料正文或解锁规则，只把此前世昌集团单点断言扩展为全地点回归，防止后续 UI 调整让部分地点的直达按钮失效。
- 修改文件：`game/app.js`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`npm.cmd run playtest`、`npm.cmd run validate`、`npm.cmd run smoke` 均通过。

## 2026-05-17 16:54 Asia/Shanghai 日程材料直达回归加固

- 在普通试玩回归里补充“今日日程”里的入卷材料直达断言：世昌集团成功取件后，日程记录中的 `doc_trust_clause` 按钮必须存在、可打开资料库并标记已读。
- 这次没有改动玩家流程或资料内容，只把 14:51 已完成的“走访结果 / 日程材料直达”补上更细的自动化覆盖，避免后续 UI 调整只保留标题而丢失按钮。
- 修改文件：`game/app.js`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。

## 2026-05-17 14:51 Asia/Shanghai 走访结果材料直达

- 针对“成功取件后仍要去问询区或资料库找入口材料”的摩擦，走访结果区新增“先看入口材料”按钮，已入卷资料可直接打开并标记已读。
- “今日调查日程”的已取件记录同步新增“打开入卷材料”按钮，玩家回看走访路线时也能从日程直接进入对应原件。
- 普通试玩新增断言：世昌集团取件后，走访结果里的 `doc_trust_clause` 入口按钮会选中该资料并标记为已读；原有问询“先看材料”直达断言继续保留。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；普通试玩与烟测产物已重新生成。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。

## 2026-05-17 13:49 Asia/Shanghai 问询材料直达

- 针对“先看材料”仍需要玩家自己搜索的问题，走访问询回答和“今日调查日程”的问询记录新增“打开材料”按钮；对应入口资料已入卷时会直接切到资料库并打开原件。
- 如果玩家尚未办理取件，“先看材料”区显示“办理取件后入卷”，避免在材料未取得时误导玩家以为可以直接阅读。
- 普通试玩新增直达断言：世昌集团问询取件后，点击 `doc_trust_clause` 的先看材料按钮会选中该资料并标记为已读。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；普通试玩与烟测产物已重新生成。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。

## 2026-05-17 12:50 Asia/Shanghai 问询先看材料提示

- 针对“真人试玩可能仍停在问询回答后不知道先看哪份材料”的风险，给 6 个走访地点 12 条现场问询全部新增 `firstDoc`，把回答落到本地点成功办理后立即取得的入口材料。
- 走访详情和“今日调查日程”的问询记录现在会显示“先看材料：……”，玩家离开地点后回看记录也能看到下一步应先读哪份资料。
- 档案馆“照片背注该怎么查？”的搜索词从“罗建宁”调整为“建宁”，确保点击搜索时优先露出 `doc_photo_back` 与 `doc_luo_birth`，不再只落到旧户籍。
- 加强 `tools/validate_unlock_matrix.mjs`、`tools/validate_search_paths.mjs`、`tools/validate_content_bundle.mjs` 和 `tools/sync_case_bundle_from_app.mjs`：问询必须携带 `firstDoc`，且 `firstDoc` 必须是对应地点入口材料并能被问询搜索命中。
- 同步更新 `README.md`、`docs/unlock_self_check.md` 和 `docs/search_route_review.md`；`game/data/case_bundle.json` 已重新同步。
- 验证：`node --check game\app.js`、`node --check tools\validate_search_paths.mjs`、`node --check tools\validate_unlock_matrix.mjs`、`node --check tools\sync_case_bundle_from_app.mjs`、`node --check tools\validate_content_bundle.mjs`、`npm.cmd run sync:bundle`、`node tools\validate_search_paths.mjs --write`、`node tools\validate_unlock_matrix.mjs`、`node tools\validate_content_bundle.mjs game\data\case_bundle.json`、`node tools\validate_content_sync.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过；首次 `smoke` 仍遇到一次 Edge 截图文件占用，清理 `.tmp-edge-profile` 后单独重跑通过。

## 2026-05-17 11:47 Asia/Shanghai 问询落脚资料加固

- 针对上一轮搜索路线复盘发现的两个空转点，调整现场问询搜索入口：县医院“出生登记要和谁对上？”改为回到已取得的“血样”材料，云山至黔中旧线“司机传闻怎么处理？”改为检索“钱树林”。
- 同步改写两条经手人口吻回答，继续保持非剧透：先固定已取得材料，再提示后续需要用正式档案或强证据交叉验证。
- `tools/validate_search_paths.mjs` 收紧现场问询断言：每条问询不再只允许导向锁定提示，必须至少命中一份本地点已取得资料，避免玩家点“搜索”后只看到空白或纯锁定结果。
- `npm.cmd run sync:bundle` 已把问询变更同步到 `game/data/case_bundle.json`；`docs/search_route_review.md` 已重新生成，12 条现场问询的本地资料命中均大于 0。
- 修改文件：`game/app.js`、`game/data/case_bundle.json`、`tools/validate_search_paths.mjs`、`docs/search_route_review.md`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`node --check tools\validate_search_paths.mjs`、`npm.cmd run sync:bundle`、`node tools\validate_search_paths.mjs --write`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。

## 2026-05-17 10:46 Asia/Shanghai 问询搜索路径复盘

- 扩展 `tools/validate_search_paths.mjs`，读取 `visitInterviews` 后逐条校验六个地点 12 个现场问询的“搜索”关键词，确认每条问询至少能导向可见资料或锁定资料提示。
- `docs/search_route_review.md` 新增“现场问询入口”表，列出每条问询的经手人、搜索词、本地资料命中、可见资料和锁定资料，便于真人试玩前检查问询是否空转。
- 本轮发现两条问询目前主要导向锁定资料而不是立刻可见资料：县医院“出生”与旧线“传闻”；它们仍会触发资料库锁定提示，但真人试玩时应重点观察是否让玩家困惑。
- 修改文件：`tools/validate_search_paths.mjs`、`docs/search_route_review.md`、`docs/status.md`、`docs/test_report.md`。
- 验证：`node --check tools\validate_search_paths.mjs`、`node tools\validate_search_paths.mjs`、`node tools\validate_search_paths.mjs --write` 已通过；完整回归见测试报告。

## 2026-05-17 09:45 Asia/Shanghai 问询内容包同步

- 将走访页新增的 `visitInterviews` 纳入 `game/data/case_bundle.json`，内容包现在记录六个走访地点共 12 条现场问询，避免问询只存在于运行时代码。
- 改造 `tools/sync_case_bundle_from_app.mjs` 的常量提取逻辑，改为按表达式括号深度截取，后续在 `app.js` 中调整常量顺序时不容易误截取。
- 加强 `tools/validate_content_bundle.mjs`：要求内容包必须包含 `visitInterviews`，并校验每个地点至少 2 条问询、问询 ID 不重复、`prompt/person/answer/query` 字段完整。
- 加强 `tools/validate_content_sync.mjs`：同步比对运行时代码与内容包中的 `visitInterviews`，并在输出中报告问询总数。
- 修改文件：`game/data/case_bundle.json`、`tools/sync_case_bundle_from_app.mjs`、`tools/validate_content_bundle.mjs`、`tools/validate_content_sync.mjs`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证：`node --check tools\sync_case_bundle_from_app.mjs`、`node --check tools\validate_content_bundle.mjs`、`node --check tools\validate_content_sync.mjs`、`npm.cmd run sync:bundle`、`node tools\validate_content_bundle.mjs game\data\case_bundle.json`、`node tools\validate_content_sync.mjs`、`node tools\validate_unlock_matrix.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。

## 2026-05-17 08:43 Asia/Shanghai 走访问询矩阵自检

- 补充 `docs/unlock_self_check.md` 的“现场问询与记录回看”规则，明确问询只提供查证方向，不推进时间、不直接取得资料、不替代正式证据。
- 加强 `tools/validate_unlock_matrix.mjs`：现在会校验 `visitInterviews` 覆盖六个走访地点、每地至少 2 条问询、问询 ID 不重复，且问询人必须属于该地点 `locationContacts` 登记的经手人。
- 解锁矩阵输出新增 `visitInterviews` 统计，本轮为 12 条现场问询。
- 修改文件：`tools/validate_unlock_matrix.mjs`、`docs/unlock_self_check.md`、`docs/status.md`、`docs/test_report.md`。
- 验证：`node --check game\app.js`、`node --check tools\validate_unlock_matrix.mjs`、`node tools\validate_unlock_matrix.mjs` 已通过；完整回归见测试报告。

## 2026-05-17 07:42 Asia/Shanghai 走访问询记录回看

- 在“今日调查日程”中新增“现场问询记录”汇总，已追问过的经手人回答会按地点集中显示，玩家离开当前地点后仍能回看。
- 问询记录保留地点、经手人、回答和对应“搜索”按钮；该系统继续只提供查证方向，不推进时间、不直接解锁资料。
- 普通试玩新增断言：记录世昌集团“信托材料能查到哪一步？”后，日程回看区必须出现 `data-visit-question-log="group:trust_scope"`。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`node --check tools\validate_unlock_matrix.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。

## 2026-05-17 06:43 Asia/Shanghai 走访现场问询

- 在走访详情中新增“现场问询”，六个走访地点各有 2 条可追问事项，覆盖旧户籍、血样、学籍、KTV、信托、旧客运线等入口材料的查证边界。
- 问询回答会写入 `visitQuestionLog` 本地存档；已问事项会展开为经手人口吻的记录，并提供对应资料库搜索按钮，但不会推进时间或直接解锁资料。
- 普通试玩新增断言：走访页必须渲染世昌集团问询按钮，记录“信托材料能查到哪一步？”后必须显示问询回答；解锁矩阵校验新增 `visitInterviews` 覆盖检查。
- 修改文件：`game/app.js`、`game/styles.css`、`tools/validate_unlock_matrix.mjs`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`node --check tools\validate_unlock_matrix.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。

## 2026-05-17 05:40 Asia/Shanghai 县域走访路线图

- 在走访详情顶部新增“县域路线图”，复用已有地点坐标，把公证处、六个走访地点、当前所在位置和目标路线放进同一张可交互地图。
- 地图地点可点击切换走访目标，并按待走访、已取件、已错过三种状态改变标记；办理地点后当前位置会随 `currentLocationId` 移动。
- 普通试玩新增断言：走访页必须渲染路线图、开局从公证处指向世昌集团、办理后当前位置移动到世昌集团且地图标记为已取件。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；普通试玩、烟测产物和走访地图预览截图已重新生成。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。

## 2026-05-17 03:39 Asia/Shanghai 走访调查日程

- 在走访详情下方新增“今日调查日程”，按办理结束时间记录已取件和已错过的地点，让时间推进、当前位置和办理结果有可回看的案内记录。
- 每条日程显示出发/抵达/结束时间、地点、经手人、入卷材料和下一步搜索按钮；错过窗口的记录会明确提示未取得材料，避免玩家误以为已经解锁。
- 走访办理结果现在保存 `depart`、`arrive`、`serviceStart`、`finish`、`travel` 和 `wait` 字段，旧存档缺少这些字段时仍用原有记录时间兜底展示。
- 普通试玩新增断言：世昌集团成功取件后必须出现在日程中且列出信托入口材料；县一中错过窗口后必须出现在日程中。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。

## 2026-05-17 02:39 Asia/Shanghai 走访结果引导与补救

- 延续走访时间系统，本轮补上办理后的非剧透反馈：每个地点成功取件后都会显示“下一步建议”、建议搜索词和可追问对象，避免玩家拿到入口材料后不知道回资料库查什么。
- 错过办事窗口时，走访结果会显示“补救路线”，提供仍可办理的备选地点入口、建议关键词和“次日补办”按钮；次日补办会把时间重排到 09:00 并重新计算路程与窗口。
- 调查备忘录新增“补办错过窗口”任务，只在有地点处于 `missed` 状态时出现，直到玩家重新排期或消除错过状态。
- `tools/validate_unlock_matrix.mjs` 新增 `visitFollowUps` 覆盖检查，要求六个走访地点都有成功反馈、错过反馈、建议关键词和可追问对象；`docs/unlock_self_check.md` 同步记录该规则。
- 修改文件：`game/app.js`、`game/styles.css`、`tools/validate_unlock_matrix.mjs`、`docs/unlock_self_check.md`、`docs/status.md`、`docs/test_report.md`；普通试玩和烟测产物已重新生成。
- 验证：`node --check game\app.js`、`node --check tools\validate_unlock_matrix.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。应用内浏览器直接打开 `file://` 和 `http://127.0.0.1:8765` 均被安全策略拒绝，本轮以 headless 回归和 DOM 断言兜底。

## 2026-05-17 00:39 Asia/Shanghai 走访时间与角色交互

- 按反馈把地点状态从单一“已走访”扩展为当前位置、坐标、办事窗口、路程时间、办理耗时、交互人物和取件结果。
- 走访页新增地点详情面板：显示当前时间、当前位置、目的地坐标、预计抵达/办理/结束时间、交互对象、入口材料和进度条。
- 点击地点现在只选中地点；必须点击“递交委托函并办理”才会推进时钟、记录当前位置并尝试取件。错过窗口会记录“已错过”，不会取得材料。
- 资料解锁从“走访地点整包解锁”改为 `obtainedDocuments`：成功交互只取得入口材料，入口材料被阅读后才推进后续资料链。
- 为地点和资料补齐经手人物，优先复用已有角色：何国生、周美英、黄雅玲、马丽华、魏雪琴、方仁杰、钱树林；暂未新增角色。
- 修改文件：`game/app.js`、`game/index.html`、`game/styles.css`、`tools/validate_search_paths.mjs`、`tools/validate_unlock_matrix.mjs`、`docs/unlock_self_check.md`、`docs/status.md`、`docs/test_report.md`；回归重新生成试玩与烟测产物。
- 验证：`node --check game\app.js`、`node --check tools\validate_search_paths.mjs`、`node --check tools\validate_unlock_matrix.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过；浏览器普通入口确认走访页有 6 个地点、办理按钮、进度条、联系人和时间/坐标信息，办理世昌集团后只显示信托入口，不显示鼎辉尽调等后续资料。

## 2026-05-17 00:35 Asia/Shanghai 解锁回归校验修复

- 先读取自动化记忆并检查工作区，发现已有 23:40/23:53 的开局防剧透收缩和界面回归未提交成果，未覆盖这些既有改动。
- 当前 `npm.cmd run validate` 失败点在两个回归脚本的常量解析：`app.js` 在 `locationEntryDocumentIds` 与 `locationLabels` 之间新增了调查日程常量，旧脚本按“下一个 const 名称”截取导致解析范围误入中间配置。
- 修复 `tools/validate_unlock_matrix.mjs` 和 `tools/validate_search_paths.mjs` 的常量提取逻辑，改为扫描字符串与括号深度直到顶层分号，后续新增中间常量不会误伤校验。
- 同步收紧搜索路线模型：`validate_search_paths.mjs` 现在按当前游戏规则模拟“走访取得入口资料，再由入口资料推进后续链条”，不再把走访地点直接当整包链条解锁。
- 重新生成 `docs/search_route_review.md`；集团走访取得信托入口后只推进继承规则小链，家族会议、股权底稿、尽调函等后续集团资料仍保持锁定。
- 修改文件：`game/app.js`、`tools/validate_unlock_matrix.mjs`、`tools/validate_search_paths.mjs`、`docs/search_route_review.md`、`docs/status.md`、`docs/test_report.md`。
- 验证：`node --check tools\validate_unlock_matrix.mjs`、`node tools\validate_unlock_matrix.mjs`、`node --check tools\validate_search_paths.mjs`、`node tools\validate_search_paths.mjs`、`npm.cmd run validate`、`npm.cmd run review:search`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。
- 注意：`playtest` 后立刻串行运行 `smoke` 时 Edge 截图阶段遇到一次文件占用；单独重跑 `npm.cmd run smoke` 后通过，延续此前不要把两个浏览器回归贴得太近的经验。
- 下一步建议：安排真人试玩观察“走访取得入口资料，再由入口资料推进链条”是否会让玩家觉得信息过少；如果卡顿明显，再给走访结果面板增加更明确的“下一份该搜什么”提示。

## 2026-05-16 23:53 Asia/Shanghai 开局剧透界面收紧

- 根据连续反馈，继续从“资料库”举一反三检查家谱、人物档案、侧栏目标、线索板、计数器、走访入口和最终提交页。
- 家谱隐藏支线开局不再显示四个未核验人物占位；无旁支入卷时只显示“旁支线索未入卷”的封存提示。
- 关系核验导航改为只显示当前已开放关系；开局只开放公开家庭校验，不再直接展示 6 条关系题标题。
- 人物档案按已发现人物过滤；开局只显示 8 名公开宗家人物，空分组筛选不会提前露出隐藏/旁支分类。
- 侧栏“当前目标”“阶段提示”“线索板”和进度计数改为阶段化文案，不再开局显示资料总数 50、关系总数 6 或最终真相措辞。
- 走访入口默认关键词和说明改为地点/材料类型导向，避免首屏直接出现后段人物姓名；提交页下拉也只列出已发现人物。
- 修改文件：`game/app.js`、`game/index.html`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；回归重新生成 `docs/playtest-dom.html`、`docs/playtest-guided.png`、`docs/smoke-dom.html`、`docs/smoke-autotest.png`。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过；应用内浏览器经本地 HTTP 普通入口检查确认开局资料卡 0、人物卡 8、关系题 1、隐藏姓名节点 0，侧栏目标/线索无后段姓名和“第七支”泄露。

## 2026-05-16 23:40 Asia/Shanghai 资料库开局暴露修复

- 根据反馈“资料库还是一开始就什么都有”，检查后确认空搜索会直接列出所有已解锁公开资料，且开局公开集合里包含陈静、陈嘉东、DNA 相关传闻/网帖，造成后段线索提前暴露。
- `renderResults()` 现在在没有关键词时不渲染任何资料卡，只显示检索起点；玩家需要输入关键词、点击待办/阶段提示或走访地点后才会看到资料。
- 收紧 `publicDocumentIds`：开局公开资料从 11 份降到 6 份，仅保留公开家庭、集团历程、县情、办事须知、匿名信和字辈观察。
- 将陈静/陈嘉东/DNA 相关网帖和传闻改为走访或链条解锁：县一中家长会帖进入陈嘉东后段链，陈静短视频和身世帖进入 KTV 线，李天赐/DNA 传闻与宗明军绯闻进入集团线。
- 普通试玩新增“开局空检索不能出现资料卡”断言；解锁矩阵和搜索路线报告同步更新，后段受控资料从 26 份变为 27 份。
- 修改文件：`game/app.js`、`game/styles.css`、`tools/validate_search_paths.mjs`、`tools/validate_unlock_matrix.mjs`、`docs/unlock_self_check.md`、`docs/search_route_review.md`、`docs/status.md`、`docs/test_report.md`；新增开局检查产物 `docs/archive-start-dom.html` 和 `docs/archive-start.png`。
- 验证：`node --check game\app.js`、`node --check tools\validate_search_paths.mjs`、`node --check tools\validate_unlock_matrix.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke`、`npm.cmd run review:search` 均通过；Edge headless 普通入口检查确认 `data-doc-id` 数量为 0，且显示“输入关键词后调阅资料”。

## 2026-05-16 23:31 Asia/Shanghai 未来美术审计报告修复

- 检查当前工作区和最近修改后，确认今晚已有内容包结构化同步、搜索路线复盘和视觉资产审计等未提交成果，本轮未覆盖这些既有改动。
- 发现 `tools/audit_future_asset_usage.mjs` 的 Markdown 模板本身含有乱码，导致 `docs/future_asset_usage.md` 重新生成后不可读。
- 重写资产审计报告模板为正常中文，保留原有分类阈值：背景 7/8、资料模板 8/8、旧照片 5/5、人物头像 8/10、网页界面 4/4、UI 图标 5/5、家谱节点 5/5；宣传图和 UI 参考图仍要求不接入运行时。
- 重新生成 `docs/future_asset_usage.md`，报告现在可读，并继续明确旧电脑室背景、年轻宗世昌头像、匿名人剪影、宣传图和参考图暂不强行接入当前主线。
- 修改文件：`tools/audit_future_asset_usage.mjs`、`docs/future_asset_usage.md`、`docs/status.md`、`docs/test_report.md`。
- 验证：`node --check tools\audit_future_asset_usage.mjs`、`npm.cmd run audit:assets`、`npm.cmd run validate` 均通过。

## 2026-05-16 22:31 Asia/Shanghai 内容包结构化同步

- 针对“后续从 `case_bundle.json` 生成游戏内数据前，内容包字段仍少于运行时数据”的风险，本轮新增 `tools/sync_case_bundle_from_app.mjs`。
- 新增 `npm.cmd run sync:bundle`，可把 `game/app.js` 中的人物别名、生卒年、角色说明、资料年份、来源、可信度、关键词、摘要、图片和关系谜题字段同步回 `game/data/case_bundle.json`。
- `game/data/case_bundle.json` 现在结构化覆盖 24 名人物、50 份资料和 6 条关系谜题；不再只保存人物姓名/代际和资料正文。
- 加严 `tools/validate_content_bundle.mjs` 与 `tools/validate_content_sync.mjs`：校验内容包资料字段、人物字段、关系谜题引用，并比对运行时与内容包的关键结构字段，避免后续双写漂移。
- 修改文件：`tools/sync_case_bundle_from_app.mjs`、`tools/validate_content_bundle.mjs`、`tools/validate_content_sync.mjs`、`game/data/case_bundle.json`、`package.json`、`README.md`、`docs/status.md`、`docs/test_report.md`。
- 验证：`node --check tools\sync_case_bundle_from_app.mjs`、`node --check tools\validate_content_bundle.mjs`、`node --check tools\validate_content_sync.mjs`、`npm.cmd run sync:bundle`、`node tools\validate_content_bundle.mjs game\data\case_bundle.json`、`node tools\validate_content_sync.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。
- 注意：首次并行执行 `playtest` 与 `smoke` 时，烟测 Edge 截图阶段遇到文件占用；单独重跑 `npm.cmd run smoke` 后通过。

## 2026-05-16 21:28 Asia/Shanghai 搜索路线试玩复盘

- 针对“尚未进行真人试玩，无法判断搜索关键词和线索密度是否舒适”的风险，先把人工试玩式搜索路径复盘固化成可读报告。
- 扩展 `tools/validate_search_paths.mjs`：默认仍作为 `npm.cmd run validate` 中的无副作用断言；新增 `--write` 时生成 `docs/search_route_review.md`。
- 新增 `npm.cmd run review:search`，报告覆盖开局公开入口、信托/罗月珍锁定提示、公开家庭 -> 罗月珍 -> 罗建宁 -> 陈静 -> 陈嘉东 -> DNA 的主线搜索链，以及 6 个走访入口默认关键词。
- 本轮报告结论：10 个主线路线检查点、6 个走访入口检查点、0 个错误；自动脚本仍标注不能替代真人试玩。
- 修改文件：`tools/validate_search_paths.mjs`、`package.json`、`README.md`、`docs/search_route_review.md`、`docs/status.md`、`docs/test_report.md`；回归重新生成 `docs/playtest-dom.html`、`docs/playtest-guided.png`、`docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证：`node --check tools\validate_search_paths.mjs`、`npm.cmd run review:search`、`npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过。

## 2026-05-16 20:24 Asia/Shanghai 未来美术接入审计

- 针对“哪些未来美术素材已经进入当前可玩版本、哪些仍只是候选资产”缺少正式台账的问题，新增 `tools/audit_future_asset_usage.mjs`。
- 新增 `npm.cmd run audit:assets`，会比对 `game/assets/images/future-assets/asset-manifest.json` 与 `game/index.html`、`game/app.js`、`game/styles.css` 的运行时引用，并生成 `docs/future_asset_usage.md`。
- 审计结论：50 个未来美术素材中，生产级 UI 图标 5/5、家谱节点 5/5、资料模板 8/8、旧照片 5/5、网页界面 4/4、人物头像 8/10、背景 7/8 已进入当前玩法；宣传图 0/3 和 UI 参考图 0/2 按计划不接入运行时。
- 未接入清单明确保留为后续用途：旧电脑室背景、年轻宗世昌头像、匿名人剪影、3 张宣传图和 2 张参考图；当前不为了“用完素材”强行塞入主线。
- 修改文件：`tools/audit_future_asset_usage.mjs`、`package.json`、`README.md`、`docs/future_asset_usage.md`、`docs/status.md`、`docs/test_report.md`。
- 验证：`node --check tools\audit_future_asset_usage.mjs`、`npm.cmd run audit:assets`、`npm.cmd run validate`、`npm.cmd run visual:assets`、`npm.cmd run smoke` 通过。

## 2026-05-16 18:43 Asia/Shanghai 侧栏 UI 图标资产接入
- 针对 `future-assets/ui-icons/` 已生成但仍未进入玩家首屏的问题，将侧栏 8 个主导航项从纯 CSS 像素图标改为真实 PNG 美术图标。
- 走访、资料库、家谱、证据箱和提交页分别覆盖 5 个拆分 UI 图标资产；备忘录、更新日志和设置复用相近语义图标，保证当前首屏导航不再只依赖 CSS 绘制。
- `game/index.html?visualtest=1` 的视觉审计新增导航图标断言，要求 8 个导航图标和 5 个拆分 UI 图标源都实际渲染；`tools/run_visual_assets.ps1` 同步解析这些指标。
- 修改文件：`game/index.html`、`game/styles.css`、`game/app.js`、`tools/run_visual_assets.ps1`、`docs/status.md`、`docs/test_report.md`；回归重新生成 `docs/visual-assets-dom.html`、`docs/visual-assets.png`、`docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run visual:assets`、`npm.cmd run smoke` 通过；视觉报告确认 `navIcons: 8`、`navIconAssets: 5`，运行时资产引用数增至 60。

## 2026-05-16 18:25 Asia/Shanghai 资料页美术映射校验

- 针对资料页补充美术只靠浏览器视觉审计间接发现问题的缺口，新增 `tools/validate_document_visuals.mjs`，并接入 `npm.cmd run validate`。
- 校验会确认补充美术绑定到真实资料 ID、图片路径存在且非空、路径不越出 `game/`，并要求文档模板、旧照片和网页界面三类素材都进入资料阅读页。
- 补接两张已生成但未入页的素材：`doc_naming_rule` 使用家谱纸页模板，`doc_equity_draft_2005` 使用公司股权图表模板。
- 修改文件：`game/app.js`、`tools/validate_document_visuals.mjs`、`package.json`、`README.md`、`docs/status.md`、`docs/test_report.md`；回归重新生成 `docs/visual-assets-dom.html`、`docs/visual-assets.png`、`docs/document-layout-*`、`docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证：`node --check game\app.js`、`node --check tools\validate_document_visuals.mjs`、`node tools\validate_document_visuals.mjs`、`npm.cmd run validate`、`npm.cmd run visual:assets`、`npm.cmd run layout:documents`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 通过；资料页补充美术覆盖 15 份资料、17 张图片，其中 8 张文档模板、5 张旧照片、4 张网页界面。

## 2026-05-16 17:21 Asia/Shanghai 资料页旧照片素材接入

- 针对“未来美术素材已生成，但旧照片类素材仍多停留在文件夹和清单里”的缺口，把世昌综合商店旧照、1969 春节合影、集团挂牌仪式、陈静 KTV 开业照和县一中奖学金公示照片接入对应资料阅读页。
- `game/index.html?visualtest=1` 现在会切到资料库并逐份打开带补充美术的资料，确认资料页图片真实渲染、使用本地 `assets/images/` 路径且具备可见尺寸。
- `tools/run_visual_assets.ps1` 的断言从只看头像/家谱图标扩展为至少 15 张资料页补充美术、40 个总图片节点；README 同步说明视觉审计覆盖资料页补充美术。
- 修改文件：`game/app.js`、`tools/run_visual_assets.ps1`、`README.md`、`docs/status.md`、`docs/test_report.md`；回归重新生成 `docs/visual-assets-dom.html`、`docs/visual-assets.png`、资料版式审计产物、试玩和烟测产物。
- 验证：`node --check game\app.js`、`npm.cmd run visual:assets`、`npm.cmd run validate`、`npm.cmd run layout:documents`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 通过；视觉报告显示 8 张人物头像、17 个家谱节点/图例图标、15 张资料页补充美术、40 个图片节点已检查。

## 2026-05-16 16:21 Asia/Shanghai 人物与家谱视觉资产回归

- 针对“已有未来美术素材但运行界面缺少专门视觉断言”的缺口，新增隐藏 `game/index.html?visualtest=1` 视觉资产审计入口。
- 人物档案补接李桂兰头像；当前可发现人物中 8 张人像会进入人物卡，家谱节点和图例继续使用拆分后的节点状态图标。
- 新增 `tools/run_visual_assets.ps1` 和 `npm.cmd run visual:assets`，用 Edge headless 生成 `docs/visual-assets-dom.html` 与 `docs/visual-assets.png`，并校验头像、家谱节点图标、图例图标均有本地图片路径和可见尺寸。
- 修改文件：`game/app.js`、`tools/run_visual_assets.ps1`、`package.json`、`README.md`、`docs/status.md`、`docs/test_report.md`；新增视觉审计产物 `docs/visual-assets-dom.html` 和 `docs/visual-assets.png`。
- 验证：`node --check game\app.js`、`npm.cmd run visual:assets`、`npm.cmd run validate`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 通过；视觉报告显示 8 张人物头像、17 个家谱节点/图例图标、25 个图片节点已检查。

## 2026-05-16 15:21 Asia/Shanghai 内容包全量同步

- 针对“运行时资料已到 50 份，但 `case_bundle.json` 只有 34 份正文资料”的结构性缺口，把运行时 50 份资料全量同步进内容包。
- 同步补齐 5 名集团旁支人物：宗明辉、宗明军、李强、李敏、李天赐；内容包人物数现在与运行时同为 24 名。
- `tools/validate_content_sync.mjs` 改为双向覆盖检查：以后只要 `game/app.js` 新增人物或资料但未同步到内容包，`npm.cmd run validate` 会失败。
- 重新生成 `docs/original_material_audit.md`，当前运行时资料 50/50、内容包正文 50/50 均“基本像原件”，需改写 0 份。
- 修改文件：`game/data/case_bundle.json`、`tools/validate_content_sync.mjs`、`README.md`、`docs/status.md`、`docs/test_report.md`、`docs/original_material_audit.md`。
- 验证：`node --check tools\validate_content_sync.mjs`、`node tools\validate_content_sync.mjs`、`npm.cmd run audit:originals`、`npm.cmd run validate`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 13:35 Asia/Shanghai 试玩引导断言加固

- 针对“自动试玩能通关但未证明玩家看得到下一步提示”的风险，普通路径试玩新增锁定资料引导断言。
- `game/index.html?playtest=1` 现在会在开局搜索“信托”和“罗月珍”时检查 `.unlock-callout` 是否渲染、是否提供“查看全部走访地点”兜底入口，并确认“罗月珍”锁定提示包含县档案馆建议。
- `tools/run_playtest.ps1` 会解析 `guided-playtest-report` 中的 `Guidance:*` 检查点，若少于 2 个引导检查、缺少走访兜底或未建议县档案馆，会直接失败。
- 修改文件：`game/app.js`、`tools/run_playtest.ps1`、`README.md`、`docs/status.md`、`docs/test_report.md`；试玩回归重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。
- 验证：`node --check game\app.js`、`npm.cmd run playtest`、`npm.cmd run validate`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 13:20 Asia/Shanghai 资料阅读版式回归

- 针对原件化正文后的长字段、条款、论坛楼层和网页快照，补强资料阅读页换行与移动端约束，避免内容撑破阅读面板。
- 移动端档案字段表改为单列展示；原件页标题、报头、字段值、便签说明、条款正文和浏览器地址栏都加入最小宽度与断行保护。
- 新增隐藏 `?layouttest=1` 版式审计入口和 `tools/run_document_layout.ps1`，批量打开 50 份资料并在桌面 1365x900、手机 390x900 两个视口检查横向溢出。
- 新增 `npm.cmd run layout:documents`，输出 `docs/document-layout-desktop.html`、`docs/document-layout-mobile.html`、两张截图和 `docs/document-layout-report.json`。
- 验证：`node --check game\app.js`、`npm.cmd run layout:documents`、`npm.cmd run validate`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 12:15 Asia/Shanghai 内容包原件感审计覆盖

- 扩展 `tools/audit_original_documents.mjs`：除 `game/app.js` 的 50 份运行时资料外，现在也会检查 `game/data/case_bundle.json` 中已有正文的 34 份结构化资料。
- 内容包资料若缺少 `source` 字段，审计会按资料 ID 继承运行时资料来源，避免把字段型档案误判为报刊短文；真正发现需改写条目时命令会返回失败码。
- 重新生成 `docs/original_material_audit.md`，当前结果为运行时资料 50/50、内容包正文 34/34 均“基本像原件”，需改写 0 份。
- 更新 `README.md` 的原件感审计说明，明确该命令现在覆盖内容包正文并会在回退时失败。
- 验证：`node --check tools\audit_original_documents.mjs`、`npm.cmd run audit:originals`、`npm.cmd run validate`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 11:58 Asia/Shanghai 资料正文原件化改写

- 按 `docs/original_material_audit.md` 的结果，批量改写 32 份不合格资料正文，去掉“不能证明 / 可说明 / 适合搜索 / 文章没有提及”等调查员总结口吻。
- 开局资料已改为更像原件的内容：`doc_official_family` 变为报刊随访原文，`doc_group_history` 变为官网缓存栏目，县情、公告和客运线路改为条目/字段资料。
- 主线资料同步改写为字段、登记、访谈、论坛楼层、信件残文、会议摘录、检查表等原始形态。
- 新增 `tools/rewrite_original_bodies.mjs` 作为本轮批量改写脚本；`npm.cmd run audit:originals` 重新生成审计报告，当前 50 份资料全部判定为“基本像原件”，需改写 0 份。
- 同步更新 `game/data/case_bundle.json` 中已有的 34 份结构化资料正文，避免内容包继续保留旧摘要。
- 验证：`node --check game\app.js`、`node --check tools\rewrite_original_bodies.mjs`、`npm.cmd run audit:originals`、`npm.cmd run validate`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 11:46 Asia/Shanghai 资料原件感审计

- 新增 `tools/audit_original_documents.mjs`，逐条检查 50 份资料是否像原始材料，而不是调查员知识提炼。
- 审计规则会按来源类型检查字段、条款、论坛/网页痕迹、原话/纪要形态，并标记“不能证明、可说明、适合搜索、文章没有提及”等总结口吻。
- 生成 `docs/original_material_audit.md`：当前 50 份资料中 18 份基本像原件，32 份需改写；截图反馈的《云山商界》专访已被审计脚本判定为需改写。
- `package.json` 新增 `npm.cmd run audit:originals`，README 增加审计命令说明。
- 验证：`node --check tools\audit_original_documents.mjs`、`npm.cmd run audit:originals` 均通过；完整回归见测试报告。

## 2026-05-16 11:35 Asia/Shanghai 资料原件视图

- 针对“资料不像原本样子，只像知识提炼”的问题，资料阅读页改为按来源渲染原件式版面。
- 新增报刊、档案表格、信托/DNA 条款、网页快照、私藏材料等不同阅读模板；《云山商界》专访现在会显示刊头、版面信息、记者/索引行和分栏正文。
- 本轮不改真相、证据答案和资料正文，只先把阅读层从摘要卡拉回“查看原件”的感觉；后续可以继续逐份扩写为更完整的原文。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；回归重新生成 `docs/playtest-dom.html`、`docs/playtest-guided.png`、`docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 11:15 Asia/Shanghai 锁定资料走访建议

- 资料库搜索命中未入卷资料时，锁定提示现在会从资料所属地点反推可执行走访入口，最多显示 3 个“走访某地”按钮。
- 点击建议按钮会登记该地点为已走访，使用该地点默认关键词继续检索，减少玩家搜索方向正确但不知道该去哪补材料的卡点。
- `tools/validate_search_paths.mjs` 新增锁定提示断言：开局搜索“信托”必须建议世昌集团，搜索“罗月珍”必须能建议县档案馆等走访入口。
- 修改文件：`game/app.js`、`game/styles.css`、`tools/validate_search_paths.mjs`、`README.md`、`docs/status.md`、`docs/test_report.md`；回归重新生成 `docs/playtest-dom.html`、`docs/playtest-guided.png`、`docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证：`node --check game\app.js`、`node --check tools\validate_search_paths.mjs`、`node tools\validate_search_paths.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 10:15 Asia/Shanghai 渐进解锁矩阵自检

- 新增 `docs/unlock_self_check.md`，把隐藏血脉显名、后段资料分组、走访地点直接入卷和关系图确认状态整理成正式版自检清单。
- 新增 `tools/validate_unlock_matrix.mjs`，校验自检报告、`chainUnlockState`、`isPersonDiscovered`、资料 ID、人物 ID 和走访地点没有漂移；同时确认后段资料组没有误加入公开资料集合。
- `npm.cmd run validate` 已接入该校验，目前覆盖 4 个隐藏血脉节点、5 个后段资料组、26 份受控资料和 6 个走访地点。
- 修改文件：`tools/validate_unlock_matrix.mjs`、`docs/unlock_self_check.md`、`package.json`、`README.md`、`game/app.js`、`docs/status.md`、`docs/test_report.md`；回归重新生成 `docs/playtest-dom.html`、`docs/playtest-guided.png`、`docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证：`node --check tools\validate_unlock_matrix.mjs`、`node --check game\app.js`、`node tools\validate_unlock_matrix.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 09:13 Asia/Shanghai 家谱节点状态图接入

- 血脉关系图节点接入 `future-assets/genealogy-nodes/` 中的拆分图标，公开家庭、隐藏血脉、已故人物和未核验占位都有明确视觉状态。
- 家谱右侧档案卡新增“未核验 / 待证实 / 血亲确认 / 公开法定 / 已故”图例，帮助玩家理解节点图标含义。
- 隐藏血脉节点在关系闭环未完成前显示“待证实”图标，完成三段隐藏血脉关系后切换为“血亲确认”；该改动不改变人物显名、关系答案或最终提交逻辑。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；回归重新生成 `docs/playtest-dom.html`、`docs/playtest-guided.png`、`docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证：`node --check game\app.js`、`node tools\validate_runtime_assets.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过；DOM 检查确认 `family-node-legend`、`data-node-state` 和 5 个家谱节点图标存在。

## 2026-05-16 08:04 Asia/Shanghai 内容包线索来源校验
- `game/data/case_bundle.json` 中 28 条线索新增 `documentIds`，把真相表线索直接绑定到对应来源资料，避免后续扩写时只补结论不补可追溯资料。
- 补入 `doc_supply_roster` 到结构化内容包，使“县供销系统仓储点临时工花名册”不再只存在于游戏运行数据中。
- `tools/validate_content_bundle.mjs` 现在校验线索来源资料存在性、重复引用、必需真相是否至少由两份来源资料支撑；`npm.cmd run validate` 已覆盖该检查。
- 修改文件：`game/data/case_bundle.json`、`tools/validate_content_bundle.mjs`、`game/app.js`、`README.md`、`docs/status.md`、`docs/test_report.md`；回归重新生成 `docs/playtest-dom.html`、`docs/playtest-guided.png`、`docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证：`node --check tools\validate_content_bundle.mjs`、`node --check game\app.js`、`node tools\validate_content_bundle.mjs game\data\case_bundle.json`、`npm.cmd run validate`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 07:09 Asia/Shanghai 运行时资产引用校验

- 新增 `tools/validate_runtime_assets.mjs`，扫描 `game/index.html`、`game/app.js` 和 `game/styles.css` 中实际引用的 `assets/images/` 与 `assets/audio/` 路径。
- 校验会确认运行时引用的 PNG/JPG/WAV/MP3 文件存在、路径未越出 `game/` 目录且文件非空；当前覆盖 42 个运行时资产引用。
- `npm.cmd run validate` 已接入该脚本；游戏内更新日志和 README 同步记录本轮资产断链防护。
- 修改文件：`tools/validate_runtime_assets.mjs`、`package.json`、`README.md`、`game/app.js`、`docs/status.md`、`docs/test_report.md`；回归重新生成 `docs/playtest-dom.html`、`docs/playtest-guided.png`、`docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证：`node --check tools\validate_runtime_assets.mjs`、`node --check game\app.js`、`node tools\validate_runtime_assets.mjs`、`npm.cmd run validate`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 06:09 Asia/Shanghai 回归脚本断言加固

- `tools/run_playtest.ps1` 现在会检查 `docs/playtest-guided.png` 存在且非空，并解析 `guided-playtest-report` JSON，确认状态为 pass、错误数组为空、关键节点不少于 18 个。
- `tools/run_smoke.ps1` 现在会检查 `docs/smoke-autotest.png` 存在且非空，避免 Edge 截图阶段失败但 DOM 阶段通过时误判。
- 游戏内更新日志和 README 同步记录本轮回归判定增强；玩法数据、关系答案和最终提交逻辑未改动。
- 验证：`npm.cmd run validate`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 05:10 Asia/Shanghai 内容包同步校验

- 补齐 `game/data/case_bundle.json` 中关系核验已使用但未结构化入包的内容：新增“宗建芳误认澄清”真相、3 条线索、3 份资料，以及宗家公开六名子女的人物条目。
- 新增 `tools/validate_content_sync.mjs`，校验内容包人物/资料必须存在于 `game/app.js`，并校验六条关系核验引用的人物和必要证据都已进入内容包。
- `npm.cmd run validate` 已接入同步校验，当前内容包为 33 份资料、19 名人物；关系核验覆盖 7 名人物引用和 10 份证据资料引用。
- 修改文件：`game/data/case_bundle.json`、`tools/validate_content_sync.mjs`、`package.json`、`README.md`、`docs/status.md`、`docs/test_report.md`；回归重新生成 `docs/playtest-dom.html`、`docs/playtest-guided.png`、`docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证：`node --check tools\validate_content_sync.mjs`、`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 04:08 Asia/Shanghai 普通路径试玩回归

- 新增隐藏 `?playtest=1` 回归入口，按普通玩家最小路径逐步执行：开局搜索公开家庭资料、确认信托暂锁、阅读公开家庭、解锁并收藏信托、追查罗月珍、罗建宁、陈静、陈嘉东和 DNA。
- 该路径只收藏关系核验必要资料，不再像 `autotest=1` 一次性读取全部资料；随后自动填入六条关系核验和最终报告，验证渐进解锁、证据绑定和最终提交能形成可玩闭环。
- 新增 `tools/run_playtest.ps1` 并接入 `npm.cmd run playtest`，输出 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`，DOM 中包含 `data-playtest="pass"` 和 `guided-playtest-report`。
- 修改文件：`game/app.js`、`tools/run_playtest.ps1`、`package.json`、`README.md`、`docs/status.md`、`docs/test_report.md`；试玩回归新增截图 `docs/playtest-guided.png`。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`npm.cmd run playtest`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 03:06 Asia/Shanghai 搜索路径自检

- 新增 `tools/validate_search_paths.mjs`，按玩家调查节奏模拟开局搜索、阅读公开家庭资料、继续追查罗月珍、罗建宁、陈静、陈嘉东和 DNA 强证据，验证渐进解锁没有把主线搜索链锁死。
- 脚本同时检查六个走访入口：县档案馆、县医院、县一中、唱响 KTV、世昌集团、云山至黔中旧线，确认走访后使用地点默认关键词至少能显示一份本地取得资料。
- 已接入 `npm run validate`，以后内容或解锁规则变更会同时回归内容包、提交答案、未来资产、基础游戏数据和搜索路径。
- 修改文件：`tools/validate_search_paths.mjs`、`package.json`、`README.md`、`docs/status.md`、`docs/test_report.md`；烟测重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证：`node tools\validate_search_paths.mjs`、`npm.cmd run validate`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 02:19 Asia/Shanghai 集团与公证设定补强

- 新增 `casebook/group_history.md`，明确世昌集团是县域龙头民营集团：约 42 亿营收、约 4200 名员工、未上市，压迫感来自就业、物流、公益和熟人网络，而不是全国级资本财阀或涉黑控制。
- 补强公证事项入口：香港家族信托受托方要求补充死亡事实、亲属关系和受益人材料，宗家公开六名子女提交预审材料后因匿名信和“罗姓女知青 / 建宁”关键词触发资料核验。
- 同步更新游戏资料、内容包、案卷设定库、正式版计划、项目文档和美术音频提示中的集团规模、信托用途、云山县人口、宗世昌供销系统出身与政商灰色边界。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 02:08 Asia/Shanghai 备忘录手动整理

- 调查备忘录每条待办新增“锁定 / 忽略”手动状态，支持试玩时把主线证据链固定住，或暂时降低误导支线优先级。
- 手动状态写入本地存档和导出存档；自动完成判定仍只看真实阅读、证据收藏、关系绑定和最终提交，避免手动标记绕过玩法校验。
- 被忽略的未完成待办不会抢占当前任务高亮；设置页新增“备忘整理”统计，显示已锁定和已忽略数量。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；烟测重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过；DOM 检查确认 `data-task-state` 按钮和 `data-autotest="pass"` 存在。
- 注意：应用内浏览器连接本轮仍超时，已用 Edge headless 烟测和 DOM 检查兜底。

## 2026-05-16 01:22 Asia/Shanghai 资料与家谱渐进解锁

- 按正式版计划先接入一层可验证的渐进解锁：资料库新增 public / location / chain 可见性规则，未解锁资料不会直接进入搜索结果。
- 走访地点现在写入本地存档，县档案馆、县医院、县一中、唱响 KTV、世昌集团和云山至黔中旧线分别解锁对应资料。
- 家谱隐藏血脉节点与人物档案按已读资料、已收藏证据和已走访地点逐步显名；开局保留“未核验”占位，避免一开始暴露完整真相链。
- 关系核验下拉同步收紧：人物只显示已显名人物，资料只显示已读或已收藏资料，避免开局从选项里提前剧透隐藏人物和后段证据标题。
- 修改文件：`game/app.js`、`game/styles.css`、`docs/status.md`、`docs/test_report.md`；新增开局检查产物 `docs/progressive-unlock-dom.html` 和 `docs/progressive-unlock.png`。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过；普通入口 DOM 检查确认有公开资料标记、地点走访标识、隐藏家谱占位，且默认关系卡不提前显示罗月珍、陈静或陈嘉东。

## 2026-05-16 01:07 Asia/Shanghai 集团换届时间线拟真化

- 修正世昌集团历程中过于整齐的董事长更替节奏，不再写成 2005、2015、2020 的五年/十年表格感。
- 保留 2005 改制节点；将宗明辉接班改为 2016 年春外部融资尽调触发的治理调整；将宗明军改为 2020 年 9 月宗世昌病危后的代理董事长。
- 同步更新游戏资料、内容包、案卷人物生平、人物深档、关系冲突表和 README 中的相关说法。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-16 00:52 Asia/Shanghai 拟物像素图标

- 将侧栏导航的单字章替换为 8 个 CSS 像素图标：走访、资料库、家谱、证据箱、备忘录、更新日志、设置、提交。
- 图标用 3px 像素块拼出拟物小物件，保留真实文本标签和按钮语义，不引入烘字 PNG。
- 当前项继续使用卷宗索引条、红色签条和“当前”淡章，像素图标会跟随当前状态变亮。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过，并人工查看 `docs/smoke-autotest.png`。

## 2026-05-16 00:19 Asia/Shanghai 正式版计划页

- 新增 `yunshan_formal_version_plan.html`，把 Demo 到正式版的产品愿景、首次游玩历程、渐进解锁、正式版家谱、数据结构和制作阶段整理成可浏览页面。
- 计划页明确下一步优先做“家谱页 + 资料库”的渐进解锁系统：开局只显示公开宗家和公开资料，隐藏血脉、陈嘉东后段资料随搜索、走访和证据链逐步显名。
- 该文档不改变当前 Demo 运行代码，但为后续从全量资料展示转向正式版调查状态机提供执行依据。
- 验证：检查页面标题与 12 个主要章节均存在；`node --check game\app.js`、`npm.cmd run validate` 通过。

## 2026-05-16 00:01 Asia/Shanghai 关系证据解释

- 六条关键关系新增“为什么这些证据成立”展开说明，放在当前关系核验卡底部。
- 每条说明明确区分定案证据、辅助入口和误导材料，避免玩家误以为系统只是在判下拉框答案。
- 该改动不改变人物、资料、关系答案或最终提交校验，只补强家谱证据绑定的理解路径。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-15 23:08 Asia/Shanghai 拟真侧栏导航

- 将侧栏主导航从完整边框按钮改成卷宗索引条风格：纸纹底、浅压痕、小印章图标和当前项红色签条。
- 当前导航项增加淡红“当前”章，强化所在栏目，但保留真文字和现有按钮语义，不使用整张 PNG 烘字。
- 移动端导航项增加最小宽度，避免拟真图标和栏目名互相挤压。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-15 23:06 Asia/Shanghai 关系证据卡片化

- 将关系核验里的证据绑定区从长复选框清单改成证据卡片。
- 证据现在按“已绑定、必要证据、强证据、辅助材料、传闻误导”分组显示，弱来源会有轻微警示底色。
- 文档类下拉使用短标题，避免长资料名撑开控件；关系确认后显示一句证据链小结。
- 新增预览截图 `docs/relation-evidence-cards.png`，对应“误认关系澄清”的完成状态。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-15 23:00 Asia/Shanghai 人物档案筛选

- 家谱页“人物档案”新增分组筛选：全部、公开宗家、隐藏血脉、集团旁支与传闻人物、证人与经手人。
- 筛选状态写入本地存档，玩家离开家谱页再回来时会保留当前人物视角。
- 该改动只压缩阅读路径，不改变人物、资料、关系谜题或最终提交答案。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过；`docs/smoke-dom.html` 包含 `people-filters`、`data-people-filter="hidden"` 和 `data-autotest="pass"`。

## 2026-05-15 22:53 Asia/Shanghai 家谱界面改造

- 家谱页新增“血脉关系图”，把公开宗家、公开婚姻、六名公开子女与隐藏血脉链条放到同一视野中。
- 关键关系推理从一屏多张表单改为“当前关系核验”聚焦卡，并用步骤按钮切换六条关系。
- 关系图节点可点击回资料库搜索对应人物；关系卡在缺证据时提供线索搜索入口。
- 生成最终预览截图 `docs/tree-review-v3.png`，用于对照本轮视觉结果。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-15 22:00 Asia/Shanghai 自动化推进

- 按上一轮“补 2 条低风险资料到约 50 条”的计划继续推进内容扩充。
- 新增 `doc_archive_request_log`：云山县档案馆 2020 年调档登记簿，补强宗建芳、宗建丽沿供销系统、知青名册、照片背注和旧信回查罗月珍/建宁线的搜索路径。
- 新增 `doc_scholarship_notice`：县一中 2020 年秋奖学金公示撤稿截图，作为陈嘉东、陈小东、陈静的低可信网页搜索入口，并明确不能替代强证据。
- 同步扩充 `game/data/case_bundle.json`，内容包从 28 份资料、23 条线索扩到 30 份资料、25 条线索；游戏内资料库从 48 条扩到 50 条。
- 更新游戏内“更新日志”、`README.md` 和测试报告；最终答案和六条关系谜题未改动。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。

## 2026-05-15 21:05 Asia/Shanghai 自动化推进

- 已将“笔记”页升级为“调查备忘录”，接入主线核验、支线排除、调查教学三组待办。
- 待办状态会根据资料阅读、证据收藏、关系绑定和最终提交状态自动刷新；待办按钮可跳转走访、资料库、家谱或提交页。
- 新增 `reportSubmitted` 存档字段，确保“最终提交”必须实际提交成功后才算阶段完成。
- 更新游戏内开发日志，记录本轮备忘录系统变更。
- 验证：`node --check game\app.js`、`npm.cmd run validate`、`powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1` 均通过。
- 备注：尝试使用 in-app browser 做视觉确认时连接超时；已用 Edge headless 烟测和 DOM 检查确认备忘录节点、任务按钮与自动通关状态存在。

## 当前目标

在 2026-05-16 09:30 Asia/Shanghai 前尽可能完成一个可玩的《云山宗氏案》Web 版本。

## 已完成

- 已创建 HTML 版立项文档、开发计划、美术与音频提示词清单。
- 已初始化 Git 仓库。
- 已建立 `game/` 可运行 Web 游戏骨架。
- 已接入生成的美术风格样张。
- 已在 `game/app.js` 写入人物、资料、关系谜题和提交逻辑。
- 已增加 `tools/validate_game.js` 数据自检脚本。
- 已增加 `tools/generate_audio.ps1` 音频生成脚本。
- 已扩写到 24 名人物、50 条资料、6 条关键关系谜题。
- 已增加线索板、录音播放、隐藏自动通关测试模式。
- 已增加 `tools/run_smoke.ps1`，可用 Edge headless 验证完整提交路径。
- 已增加来源差异化文档皮肤、移动端布局修复、环境音开关。
- 已增加结局报告“证据链回顾”模块。
- 已外置并校验 `game/data/case_bundle.json` 内容包。
- 已增加免费 Edge TTS 语音生成流程。
- 已补充证据图片：照片背注、信托文件、DNA 记录、户籍迁入登记。
- 已增加游戏内“更新日志”页，记录自动开发变更与验证结果。
- 已加固烟测脚本和内容包校验，避免空 DOM 或提交答案漂移被误判通过。
- 已增加侧边栏动态阶段提示，按当前进度推荐下一步搜索、家谱绑定或最终提交。
- 已增加家谱关系冲突提示：错误人物、弱证据和缺失强证据会直接显示纠偏信息和建议搜索词。
- 已增加“设置”页，集中管理声音、环境音、进度保存、JSON 导出和输入确认式重置。
- 已完成内容扩充第一轮：新增供销社会计、卫生院助产员、黔中司机、县一中班主任 4 名支线人物。
- 已新增 8 份可读资料：接生登记、借支单、汇款回执、李桂兰信稿、罗建宁访谈、家访记录、钱树林误导帖、继承咨询摘记。
- 已同步扩充 `game/data/case_bundle.json`，内容包从 7 份资料扩到 15 份资料、从 8 条线索扩到 13 条线索。
- 已启动内容扩充第二轮：新增改制会计、集团法务、老街社区主任 3 名支线人物。
- 已新增 6 份可读资料：2005 股权改制底稿、2016 春治理调整备忘、宗建芳便条、KTV 租赁备案、鼎辉尽调函、社区走访记录。
- 已同步扩充 `game/data/case_bundle.json`，内容包扩到 21 份资料、19 条线索、13 名人物；游戏内资料库扩到 41 份资料。
- 已明确云山县设定：虚构江南省西南部、靠近黔中山区的南方山地县城，主线时间为 2020 年秋。
- 已新增 3 份县域背景资料：云山县情概览、2020 年秋公共场所办事须知、云山至黔中旧客运线路备案。
- 已同步扩充 `game/data/case_bundle.json`，内容包扩到 24 份资料；游戏内资料库扩到 44 份资料。
- 已新增 4 份宗家冲突和地方关系资料：宗家六子女临时会谈纪要、世昌集团舆情应对草案、唱响 KTV 2020 年复工检查表、宗建丽整理父亲旧信清单。
- 已同步扩充 `game/data/case_bundle.json`，内容包扩到 28 份资料、23 条线索；游戏内资料库扩到 48 条资料。
- 已完成搜索链补强小步扩充：新增档案馆调档登记簿和县一中奖学金公示撤稿截图，内容包扩到 30 份资料、25 条线索；游戏内资料库扩到 50 条资料。
- 已调整 GitHub Pages 工作流，仅发布可玩版本所需文件、地点背景图和实际引用的未来素材，排除未引用生成源图。

## 下一步

1. 做一轮人工试玩式搜索路径复盘，检查新增资料是否形成自然搜索链。
2. 将更多内容包字段结构化，便于后续从 `case_bundle.json` 生成游戏内数据。
3. 评估未接入的未来美术素材，决定哪些要压缩后接入正式玩法。
4. 增加备忘录中“已忽略/已锁定”手动状态，支持试玩后整理误导线。
