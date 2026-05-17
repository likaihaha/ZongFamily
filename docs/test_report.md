# 测试报告

更新时间：2026-05-17 18:57 Asia/Shanghai

## 2026-05-17 18:57 Asia/Shanghai 走访结果主材料按钮回归

命令：
```powershell
node --check game\app.js
npm.cmd run playtest
npm.cmd run validate
npm.cmd run smoke
```

结果：
- `game/app.js` 语法检查通过。
- `npm.cmd run playtest` 通过并重新生成 `docs/playtest-dom.html` 与 `docs/playtest-guided.png`；新增断言确认世昌集团取件后，走访结果区存在 `data-visit-primary-doc="doc_trust_clause"` 主按钮，点击后能打开信托材料并标记已读。
- `npm.cmd run validate` 通过，内容包、提交答案、内容同步、未来资产、运行时资产、资料视觉映射、解锁矩阵、基础数据和搜索路径均无错误。
- `npm.cmd run smoke` 通过并重新生成 `docs/smoke-dom.html` 与 `docs/smoke-autotest.png`。

## 2026-05-17 17:55 Asia/Shanghai 走访入口材料直达矩阵回归

命令：
```powershell
node --check game\app.js
npm.cmd run playtest
npm.cmd run validate
npm.cmd run smoke
```

结果：
- `game/app.js` 语法检查通过。
- `npm.cmd run playtest` 通过并重新生成 `docs/playtest-dom.html` 与 `docs/playtest-guided.png`。
- 新增断言确认 6 个走访地点成功取件后，走访结果区和“今日调查日程”都能打开对应入口材料并标记已读，当前覆盖 10 份入口材料。
- `npm.cmd run validate` 通过，内容包、提交答案、内容同步、运行时资产、资料视觉映射、解锁矩阵、基础数据和搜索路径均无错误。
- `npm.cmd run smoke` 通过并重新生成 `docs/smoke-dom.html` 与 `docs/smoke-autotest.png`。

## 2026-05-17 16:54 Asia/Shanghai 日程材料直达回归

命令：
```powershell
node --check game\app.js
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：
- `game/app.js` 语法检查通过。
- `npm.cmd run validate` 通过，内容包、提交答案、内容同步、运行时资产、资料视觉映射、解锁矩阵、基础数据和搜索路径均无错误。
- `npm.cmd run playtest` 通过并重新生成 `docs/playtest-dom.html` 与 `docs/playtest-guided.png`；新增断言确认世昌集团成功取件后，今日日程里的 `doc_trust_clause` 入卷材料按钮可直达资料库并标记已读。
- `npm.cmd run smoke` 通过并重新生成 `docs/smoke-dom.html` 与 `docs/smoke-autotest.png`。

## 2026-05-17 14:51 Asia/Shanghai 走访结果材料直达回归

命令：

```powershell
node --check game\app.js
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：

- `game/app.js` 语法检查通过。
- `npm.cmd run validate` 通过，内容包、提交答案、内容同步、运行时资产、资料视觉映射、解锁矩阵、基础数据和搜索路径均无错误。
- `npm.cmd run playtest` 通过并重新生成 `docs/playtest-dom.html` 与 `docs/playtest-guided.png`；新增断言确认成功取件结果区的入口材料按钮可直达 `doc_trust_clause` 并标记已读，原问询直达断言仍通过。
- `npm.cmd run smoke` 通过并重新生成 `docs/smoke-dom.html` 与 `docs/smoke-autotest.png`。

## 2026-05-17 13:49 Asia/Shanghai 问询材料直达回归

命令：

```powershell
node --check game\app.js
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：

- `game/app.js` 语法检查通过。
- `npm.cmd run validate` 通过，内容包、提交答案、内容同步、运行时资产、资料视觉映射、解锁矩阵、基础数据和搜索路径均无错误。
- `npm.cmd run playtest` 通过并重新生成 `docs/playtest-dom.html` 与 `docs/playtest-guided.png`；新增断言确认问询“先看材料”按钮可直达 `doc_trust_clause` 并标记已读。
- `npm.cmd run smoke` 通过并重新生成 `docs/smoke-dom.html` 与 `docs/smoke-autotest.png`。

## 2026-05-17 12:50 Asia/Shanghai 问询先看材料回归

命令：

```powershell
node --check game\app.js
node --check tools\validate_search_paths.mjs
node --check tools\validate_unlock_matrix.mjs
node --check tools\sync_case_bundle_from_app.mjs
node --check tools\validate_content_bundle.mjs
npm.cmd run sync:bundle
node tools\validate_unlock_matrix.mjs
node tools\validate_search_paths.mjs --write
node tools\validate_content_bundle.mjs game\data\case_bundle.json
node tools\validate_content_sync.mjs
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：

- 语法检查全部通过，内容包同步继续输出 24 名人物、50 份资料、6 条关系题和 12 条现场问询。
- 解锁矩阵通过：12 条问询都包含 `firstDoc`，且 `firstDoc` 属于对应走访地点入口材料。
- 搜索路线复盘通过并重新生成 `docs/search_route_review.md`；12 条问询都能命中对应“先看材料”。档案馆照片背注问询现在搜索“建宁”，可见 `doc_photo_back` 与 `doc_luo_birth`。
- `npm.cmd run validate` 和 `npm.cmd run playtest` 通过；`npm.cmd run smoke` 第一次遇到 Edge 截图文件占用，清理 `.tmp-edge-profile` 后单独重跑通过并重新生成 `docs/smoke-dom.html` 与 `docs/smoke-autotest.png`。

## 2026-05-17 11:47 Asia/Shanghai 问询落脚资料回归

命令：

```powershell
node --check game\app.js
node --check tools\validate_search_paths.mjs
npm.cmd run sync:bundle
node tools\validate_search_paths.mjs --write
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：

- `game\app.js` 和 `tools\validate_search_paths.mjs` 语法检查通过。
- 内容包同步通过，继续输出 24 名人物、50 份资料、6 条关系题和 12 条现场问询。
- 搜索路线复盘通过并重新生成 `docs/search_route_review.md`；12 条现场问询现在都至少命中 1 份本地点已取得资料。
- 县医院“出生登记要和谁对上？”现在搜索“血样”，可见 `doc_hospital_blood`；旧线“司机传闻怎么处理？”现在搜索“钱树林”，可见 `doc_yunqian_bus_line` 并锁定 `doc_false_qian` 作为后续排除线。
- `npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过；普通试玩与自动通关产物已重新生成。

## 2026-05-17 10:46 Asia/Shanghai 问询搜索路径回归

命令：

```powershell
node --check tools\validate_search_paths.mjs
node tools\validate_search_paths.mjs
node tools\validate_search_paths.mjs --write
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：

- `tools\validate_search_paths.mjs` 语法检查通过。
- 搜索路径独立执行通过；现在覆盖 12 个主线路线检查点、6 个走访入口检查点和 12 个现场问询检查点。
- `docs/search_route_review.md` 已重新生成，新增“现场问询入口”表。
- `npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过；普通试玩与自动通关产物已重新生成。
- 观察点：县医院“出生”和旧线“传闻”问询当前主要给出锁定资料提示，真人试玩时应确认玩家是否理解这是下一步查证方向。

## 2026-05-17 09:45 Asia/Shanghai 问询内容包同步回归

命令：

```powershell
node --check tools\sync_case_bundle_from_app.mjs
node --check tools\validate_content_bundle.mjs
node --check tools\validate_content_sync.mjs
npm.cmd run sync:bundle
node tools\validate_content_bundle.mjs game\data\case_bundle.json
node tools\validate_content_sync.mjs
node tools\validate_unlock_matrix.mjs
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：

- 三个内容包相关脚本语法检查通过。
- `npm.cmd run sync:bundle` 通过，输出 24 名人物、50 份资料、6 条关系题和 12 条现场问询。
- 内容包结构校验通过，`visitInterviews` 已成为必需根字段，并校验问询字段完整性与重复 ID。
- 内容同步校验通过，确认 `game/app.js` 与 `game/data/case_bundle.json` 中的 `visitInterviews` 一致，输出 `visitInterviews: 12`。
- 解锁矩阵独立校验通过，继续确认六个走访地点的问询覆盖和经手人来源。
- `npm.cmd run validate`、`npm.cmd run playtest`、`npm.cmd run smoke` 均通过；普通试玩和自动通关烟测产物已重新生成。

## 2026-05-17 08:43 Asia/Shanghai 走访问询矩阵自检回归

命令：

```powershell
node --check game\app.js
node --check tools\validate_unlock_matrix.mjs
node tools\validate_unlock_matrix.mjs
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：

- `game\app.js` 与 `tools\validate_unlock_matrix.mjs` 语法检查通过。
- 解锁矩阵独立执行通过；输出 `visitLocations=6`、`visitInterviews=12`，并确认问询人来自对应地点经手人。
- `npm.cmd run validate` 通过；新增问询矩阵自检已进入总校验链。
- `npm.cmd run playtest` 通过；普通路径试玩仍能覆盖走访问询记录回看和错过窗口补救。
- `npm.cmd run smoke` 通过；自动通关路径仍可完成最终提交。

## 2026-05-17 07:42 Asia/Shanghai 走访问询记录回看回归

命令：

```powershell
node --check game\app.js
node --check tools\validate_unlock_matrix.mjs
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：

- `game/app.js` 与 `tools\validate_unlock_matrix.mjs` 语法检查通过。
- `npm.cmd run validate` 通过；内容包、提交答案、资产、资料视觉、解锁矩阵、游戏数据和搜索路径校验均无错误。
- `npm.cmd run playtest` 通过；普通试玩确认世昌集团问询回答不仅在当前地点显示，也进入“今日调查日程”的现场问询记录回看区。
- `npm.cmd run smoke` 通过；自动通关路径仍能完成最终提交，并重新生成 `docs\smoke-dom.html` 与 `docs\smoke-autotest.png`。

## 2026-05-17 06:43 Asia/Shanghai 走访现场问询回归

命令：

```powershell
node --check game\app.js
node --check tools\validate_unlock_matrix.mjs
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：

- `game/app.js` 与 `tools\validate_unlock_matrix.mjs` 语法检查通过。
- `npm.cmd run validate` 通过；解锁矩阵新增 `visitInterviews` 校验，确认六个走访地点均至少有 2 条现场问询，且问询包含题目、经手人、回答和搜索词。
- `npm.cmd run playtest` 通过；普通试玩确认世昌集团问询按钮可渲染，记录“信托材料能查到哪一步？”后能展开回答，并且走访取件、日程、错过窗口补救仍正常。
- `npm.cmd run smoke` 通过；自动通关路径仍能完成最终提交，并重新生成 `docs\smoke-dom.html` 与 `docs\smoke-autotest.png`。

## 2026-05-17 05:40 Asia/Shanghai 县域路线图回归

命令：

```powershell
node --check game\app.js
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：

- `game/app.js` 语法检查通过。
- `npm.cmd run validate` 通过；内容包、提交答案一致性、资产、资料视觉、解锁矩阵、游戏数据和搜索路径校验均无错误。
- `npm.cmd run playtest` 通过；普通试玩新增断言确认走访页渲染县域路线图、当前路线、激活地点和办理后的当前位置/已取件地图状态。
- `npm.cmd run smoke` 通过；自动通关路径仍能完成最终提交，并重新生成 `docs\smoke-dom.html` 与 `docs\smoke-autotest.png`。
- Edge headless 普通入口截图生成 `docs\visit-map-preview.png`，确认走访页首屏能看到地点卡和县域路线图入口。

## 2026-05-17 03:39 Asia/Shanghai 走访调查日程回归

命令：

```powershell
node --check game\app.js
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：

- `game/app.js` 语法检查通过。
- `npm.cmd run validate` 通过；内容包、提交答案一致性、资产、资料视觉、解锁矩阵、游戏数据和搜索路径校验均无错误。
- `npm.cmd run playtest` 通过；普通试玩新增断言确认世昌集团成功取件后出现在“今日调查日程”并列出《香港家族信托文件节选》，县一中错过窗口后也进入日程。
- `npm.cmd run smoke` 通过；自动通关路径仍能完成最终提交，并重新生成 `docs\smoke-dom.html` 与 `docs\smoke-autotest.png`。

## 2026-05-17 02:39 Asia/Shanghai 走访结果引导回归

命令：

```powershell
node --check game\app.js
node --check tools\validate_unlock_matrix.mjs
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：

- 语法检查通过。
- `npm.cmd run validate` 通过；解锁矩阵校验新增 `visitFollowUps` 覆盖断言，确认六个走访地点都有成功反馈、错过反馈、建议关键词和可追问对象。
- `npm.cmd run playtest` 通过；普通试玩新增断言确认世昌集团取件后出现“下一步建议”和“搜索信托”，县一中错过窗口后出现“次日补办”，备忘录出现“补办错过窗口”任务。
- `npm.cmd run smoke` 通过；自动通关路径仍能完成最终提交。
- 应用内浏览器视觉抽查受限：直接打开 `file://` 被浏览器策略拒绝；改用 `http://127.0.0.1:8765` 也被策略拒绝。本轮未继续绕过，使用 Edge headless 产物和 DOM 断言作为验证依据。

## 2026-05-17 00:39 Asia/Shanghai 走访时间与角色交互回归

命令：
```powershell
node --check game\app.js
node --check tools\validate_search_paths.mjs
node --check tools\validate_unlock_matrix.mjs
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：
- 语法检查通过。
- `npm.cmd run validate` 通过；解锁矩阵新增地点坐标、地点联系人、资料经手人校验。
- `npm.cmd run playtest` 通过；普通路径仍可完成开局防剧透、渐进搜索、关系核验和最终提交。
- `npm.cmd run smoke` 通过；自动通关仍成功。
- 浏览器普通入口检查通过：走访页渲染 6 个地点、1 个办理按钮、进度条、联系人和时间/坐标信息；办理世昌集团后搜索“信托”只显示入口信托和公开资料，不显示鼎辉尽调等后续集团资料。

## 2026-05-17 00:35 Asia/Shanghai 解锁校验脚本回归

命令：
```powershell
node --check tools\validate_unlock_matrix.mjs
node tools\validate_unlock_matrix.mjs
node --check tools\validate_search_paths.mjs
node tools\validate_search_paths.mjs
npm.cmd run validate
npm.cmd run review:search
npm.cmd run playtest
npm.cmd run smoke
```

结果：
- `validate_unlock_matrix.mjs` 语法检查与独立执行通过，输出 hiddenPeople=4、chainGroups=5、gatedDocuments=27、visitLocations=6。
- `validate_search_paths.mjs` 语法检查与独立执行通过，搜索路线模型已与当前“走访取得入口资料，再由入口资料推进后续链条”的规则一致。
- 首次 `npm.cmd run validate` 失败于旧常量截取逻辑；修复两个脚本后重新运行通过。
- `npm.cmd run review:search` 通过并重写 `docs/search_route_review.md`；集团走访取得 `doc_trust_clause` 后只推进继承规则小链，家族会议、股权底稿、尽调函等后续集团资料仍保持锁定。
- `npm.cmd run playtest` 通过并重写 `docs/playtest-dom.html` 与 `docs/playtest-guided.png`。
- `playtest` 后立刻串行运行 `smoke` 时 Edge 截图阶段遇到一次文件占用；单独重跑 `npm.cmd run smoke` 后通过并重写 `docs/smoke-dom.html` 与 `docs/smoke-autotest.png`。

## 2026-05-16 23:53 Asia/Shanghai 开局剧透界面回归

命令：
```powershell
node --check game\app.js
node --check tools\validate_search_paths.mjs
node --check tools\validate_unlock_matrix.mjs
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：
- 语法检查通过。
- `npm.cmd run validate` 通过；内容包、提交答案一致性、资产、资料视觉、解锁矩阵、游戏数据和搜索路径校验均无错误。
- `npm.cmd run playtest` 通过；普通试玩新增断言确认开局资料库空检索、人物档案、家谱关系、右侧目标和线索板都不提前泄露后段姓名或最终真相措辞。
- `npm.cmd run smoke` 通过；自动通关路径仍可提交成功。
- 应用内浏览器普通入口检查通过：`resultCards=0`、`peopleCards=8`、`relationButtons=1`、`readCounter="0 已读"`、`relationCounter="0 / 1 已开放"`、`hiddenMapNames=0`、`leadLeaks=false`、`goalLeaks=false`。

## 2026-05-16 23:40 Asia/Shanghai 资料库开局暴露回归

命令：
```powershell
node --check game\app.js
node --check tools\validate_search_paths.mjs
node --check tools\validate_unlock_matrix.mjs
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
npm.cmd run review:search
```

结果：
- `game\app.js`、`tools\validate_search_paths.mjs`、`tools\validate_unlock_matrix.mjs` 语法检查通过。
- `npm.cmd run validate` 通过；解锁矩阵显示隐藏人物 4 个、后段资料组 5 个、受控资料 27 份、走访地点 6 个。
- `npm.cmd run playtest` 通过；普通试玩新增断言确认开局空检索不渲染资料卡。
- `npm.cmd run smoke` 通过；自动通关路径仍成功。
- `npm.cmd run review:search` 通过并重写 `docs/search_route_review.md`；开局搜索 `陈嘉东`、`陈静`、`罗月珍`、`DNA` 不再由公开资料直接暴露结果。
- Edge headless 普通入口检查生成 `docs/archive-start-dom.html` 和 `docs/archive-start.png`，确认开局 `data-doc-id` 数量为 0，并显示“输入关键词后调阅资料”。

## 2026-05-16 23:31 Asia/Shanghai 未来美术审计报告修复回归

命令：
```powershell
node --check tools\audit_future_asset_usage.mjs
npm.cmd run audit:assets
npm.cmd run validate
```

结果：
- `tools\audit_future_asset_usage.mjs` 语法检查通过。
- `npm.cmd run audit:assets` 通过，重新生成 `docs/future_asset_usage.md`；报告正文恢复为可读中文。
- 资产审计结果保持不变：50 个未来美术素材中，人物头像 8/10、背景 7/8、资料模板 8/8、旧照片 5/5、网页界面 4/4、UI 图标 5/5、家谱节点 5/5 已满足当前玩法阈值；宣传图 0/3 和 UI 参考图 0/2 仍保持未接入。
- `npm.cmd run validate` 通过，完整数据、资产、解锁矩阵和搜索路径校验链无错误。

## 2026-05-16 22:31 Asia/Shanghai 内容包结构化同步回归

命令：
```powershell
node --check tools\sync_case_bundle_from_app.mjs
node --check tools\validate_content_bundle.mjs
node --check tools\validate_content_sync.mjs
npm.cmd run sync:bundle
node tools\validate_content_bundle.mjs game\data\case_bundle.json
node tools\validate_content_sync.mjs
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：
- `tools\sync_case_bundle_from_app.mjs`、`tools\validate_content_bundle.mjs`、`tools\validate_content_sync.mjs` 语法检查通过。
- `npm.cmd run sync:bundle` 通过，输出 24 名人物、50 份资料、6 条关系谜题已同步。
- 内容包结构校验通过；资料字段现在要求年份、来源、可信度、关键词、摘要和正文，人物字段要求别名数组、角色与说明，关系谜题要求答案和强证据引用真实人物/资料。
- 内容同步校验通过；运行时与内容包的人物、资料和关系谜题关键字段一致。
- `npm.cmd run validate` 通过，完整数据、资产、解锁矩阵和搜索路径校验链无错误。
- `npm.cmd run playtest` 通过，重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。
- 首次并行执行 `playtest` 与 `smoke` 时，烟测 Edge 截图阶段因文件占用失败；单独重跑 `npm.cmd run smoke` 后通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。

## 2026-05-16 21:28 Asia/Shanghai 搜索路线试玩复盘回归

命令：
```powershell
node --check tools\validate_search_paths.mjs
npm.cmd run review:search
npm.cmd run validate
npm.cmd run playtest
npm.cmd run smoke
```

结果：
- `tools\validate_search_paths.mjs` 语法检查通过。
- `npm.cmd run review:search` 通过，生成 `docs/search_route_review.md`。
- 搜索路线复盘报告显示 10 个主线路线检查点、6 个走访入口检查点、0 个错误；覆盖开局公开入口、信托/罗月珍锁定提示、罗月珍到陈嘉东的阅读解锁链和 DNA 后段强证据。
- `npm.cmd run validate` 通过：内容包、提交答案一致性、内容同步、未来资产、运行时资产、资料页补充美术、解锁矩阵、基础游戏数据和搜索路径均无错误。
- `npm.cmd run playtest` 和 `npm.cmd run smoke` 均通过，重新生成普通路径试玩和自动通关烟测产物。

## 2026-05-16 20:24 Asia/Shanghai 未来美术接入审计回归

命令：
```powershell
node --check tools\audit_future_asset_usage.mjs
npm.cmd run audit:assets
npm.cmd run validate
npm.cmd run visual:assets
npm.cmd run smoke
```

结果：
- `tools\audit_future_asset_usage.mjs` 语法检查通过。
- `npm.cmd run audit:assets` 通过，生成 `docs/future_asset_usage.md`。
- 审计覆盖 `asset-manifest.json` 的 50 个未来美术素材，并与当前运行时引用交叉比对。
- 当前生产级素材接入状态：UI 图标 5/5、家谱节点 5/5、资料模板 8/8、旧照片 5/5、网页界面 4/4、人物头像 8/10、背景 7/8；宣传图和 UI 参考图保持未接入。
- `npm.cmd run validate`、`npm.cmd run visual:assets`、`npm.cmd run smoke` 均通过，说明新增审计没有影响数据、视觉资产和自动通关路径。

## 2026-05-16 18:43 Asia/Shanghai 侧栏 UI 图标资产回归

命令：
```powershell
node --check game\app.js
npm.cmd run validate
npm.cmd run visual:assets
npm.cmd run smoke
Select-String -Path docs\visual-assets-dom.html -Pattern '"navIcons"|"navIconAssets"|data-visualtest="pass"' -Context 0,2
```

结果：
- `game/app.js` 语法检查通过。
- `npm.cmd run validate` 通过，运行时资产引用数从 55 增至 60，说明新接入的 5 个 UI 图标路径已被资产校验覆盖。
- `npm.cmd run visual:assets` 通过，重新生成 `docs/visual-assets-dom.html` 和 `docs/visual-assets.png`。
- 视觉报告确认 `data-visualtest="pass"`、`navIcons: 8`、`navIconAssets: 5`，首屏侧栏导航图标已真实渲染。
- `npm.cmd run smoke` 通过，自动通关与最终提交路径未受导航图标变更影响。

## 2026-05-16 18:25 Asia/Shanghai 资料页美术映射校验回归

命令：
```powershell
node --check game\app.js
node --check tools\validate_document_visuals.mjs
node tools\validate_document_visuals.mjs
npm.cmd run validate
npm.cmd run visual:assets
npm.cmd run layout:documents
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `game/app.js` 和 `tools\validate_document_visuals.mjs` 语法检查通过。
- `node tools\validate_document_visuals.mjs` 通过：运行时 50 份资料、4 份直接证据图资料、15 份补充美术资料、17 张补充美术图片均通过校验；分类覆盖为 8 张文档模板、5 张旧照片、4 张网页界面。
- `npm.cmd run validate` 通过，已包含资料页补充美术映射校验；运行时资产引用数更新为 55。
- `npm.cmd run visual:assets` 通过，重新生成 `docs/visual-assets-dom.html` 和 `docs/visual-assets.png`。
- `npm.cmd run layout:documents` 通过，补接两张资料图后桌面与手机视口仍无横向溢出。
- `tools\run_smoke.ps1` 通过，自动通关路径不受资料页补充美术变更影响。

## 2026-05-16 17:21 Asia/Shanghai 资料页旧照片素材回归

命令：
```powershell
node --check game\app.js
npm.cmd run visual:assets
npm.cmd run validate
npm.cmd run layout:documents
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `game/app.js` 语法检查通过。
- `npm.cmd run visual:assets` 通过，重新生成 `docs/visual-assets-dom.html` 和 `docs/visual-assets.png`。
- 页面内 `visual-assets-report` 为 `pass`：检查到 8 张人物头像、17 个家谱节点/图例图标、15 张资料页补充美术、40 个图片节点；所有被检查图片均使用本地 `assets/images/` 路径且具有可见尺寸。
- `npm.cmd run validate` 通过：内容包、提交答案一致性、内容同步、未来资产、运行时资产、解锁矩阵、基础游戏数据和搜索路径均通过；运行时资产引用数为 53。
- `npm.cmd run layout:documents` 通过，桌面与手机视口下 50 份资料阅读页仍无横向溢出。
- `npm.cmd run playtest` 通过，重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。
- `tools\run_smoke.ps1` 通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。

## 2026-05-16 16:21 Asia/Shanghai 人物与家谱视觉资产回归

命令：
```powershell
node --check game\app.js
npm.cmd run visual:assets
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `game/app.js` 语法检查通过。
- `npm.cmd run visual:assets` 通过，重新生成 `docs/visual-assets-dom.html` 和 `docs/visual-assets.png`。
- 页面内 `visual-assets-report` 为 `pass`：检查到 8 张人物头像、17 个家谱节点/图例图标、25 个图片节点；所有被检查图片均使用本地 `assets/images/` 路径且具有可见尺寸。
- `npm.cmd run validate` 通过：内容包、提交答案一致性、内容同步、未来资产、运行时资产、解锁矩阵、基础游戏数据和搜索路径均通过。
- `npm.cmd run playtest` 通过，重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。
- `tools\run_smoke.ps1` 通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。

## 2026-05-16 15:21 Asia/Shanghai 内容包全量同步回归

命令：
```powershell
node --check tools\validate_content_sync.mjs
node tools\validate_content_sync.mjs
npm.cmd run audit:originals
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `tools/validate_content_sync.mjs` 语法检查通过。
- 内容同步校验通过：内容包与运行时同为 24 名人物、50 份资料；关系核验仍覆盖 7 名人物引用和 10 份证据资料引用。
- 原件感审计通过，重新生成 `docs/original_material_audit.md`；运行时资料 50/50、内容包正文 50/50 均判定为基本像原件，需改写 0 份。
- `npm.cmd run validate` 通过：内容包、提交答案一致性、双向内容同步、未来资产、运行时资产、解锁矩阵、基础游戏数据和搜索路径均通过。
- `npm.cmd run playtest` 通过，重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。
- `tools\run_smoke.ps1` 通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。

## 2026-05-16 13:35 Asia/Shanghai 试玩引导断言加固回归

命令：
```powershell
node --check game\app.js
npm.cmd run playtest
npm.cmd run validate
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `game/app.js` 语法检查通过。
- `npm.cmd run playtest` 通过，重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。
- 普通试玩报告新增 2 个 `Guidance:*` 检查点：开局搜索“信托”建议 `group`，开局搜索“罗月珍”建议 `yunqian`、`archives`、`group`，且两个提示都包含走访地点兜底入口。
- `tools/run_playtest.ps1` 已强制校验引导检查点数量、走访兜底和县档案馆建议；后续若锁定提示断链，试玩回归会失败。
- `npm.cmd run validate` 通过：内容包、提交答案一致性、内容同步、未来资产、运行时资产、解锁矩阵、基础游戏数据和搜索路径均通过。
- `tools\run_smoke.ps1` 通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。

## 2026-05-16 13:20 Asia/Shanghai 资料阅读版式回归

命令：
```powershell
node --check game\app.js
npm.cmd run layout:documents
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `game/app.js` 语法检查通过。
- `npm.cmd run layout:documents` 通过，桌面 1365x900 与手机 390x900 两个视口均检查 50 份资料，未发现资料阅读面板横向溢出。
- 版式审计重新生成 `docs/document-layout-desktop.html`、`docs/document-layout-mobile.html`、`docs/document-layout-desktop.png`、`docs/document-layout-mobile.png` 和 `docs/document-layout-report.json`。
- `npm.cmd run validate` 通过：内容包、提交答案、内容同步、未来资产、运行时资产、解锁矩阵、基础数据和搜索路径均通过。
- `npm.cmd run playtest` 通过，重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。
- `tools\run_smoke.ps1` 通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。

## 2026-05-16 12:15 Asia/Shanghai 内容包原件感审计覆盖回归

命令：
```powershell
node --check tools\audit_original_documents.mjs
npm.cmd run audit:originals
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `tools/audit_original_documents.mjs` 语法检查通过。
- `npm.cmd run audit:originals` 通过，重新生成 `docs/original_material_audit.md`。
- 审计结果：游戏内资料 50/50 基本像原件，内容包已有正文资料 34/34 基本像原件，需改写 0 份。
- 内容包资料缺少 `source` 字段时会按资料 ID 继承运行时资料来源，避免误判字段型档案。
- `npm.cmd run validate` 通过：内容包 34 份资料、19 名人物；运行时资产 47 个引用；搜索路径与锁定资料走访建议均通过。
- `npm.cmd run playtest` 通过，重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。
- `tools\run_smoke.ps1` 通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。

## 2026-05-16 11:58 Asia/Shanghai 资料正文原件化改写回归

命令：
```powershell
node --check game\app.js
node --check tools\rewrite_original_bodies.mjs
npm.cmd run audit:originals
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `game/app.js` 与批量改写脚本语法检查通过。
- `npm.cmd run audit:originals` 通过并更新 `docs/original_material_audit.md`：50 份资料中 50 份基本像原件，0 份需改写。
- 已同步 `game/data/case_bundle.json` 中同 ID 资料正文，`npm.cmd run validate` 确认内容包仍通过。
- `npm.cmd run validate` 通过，内容包、提交答案、内容同步、未来资产、运行时资产、解锁矩阵、基础数据和搜索路径均无错误。
- 普通路径试玩回归通过，重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。
- 自动通关烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。

## 2026-05-16 11:46 Asia/Shanghai 资料原件感审计

命令：
```powershell
node --check tools\audit_original_documents.mjs
npm.cmd run audit:originals
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- 审计脚本语法检查通过。
- `npm.cmd run audit:originals` 通过并生成 `docs/original_material_audit.md`。
- 审计结果：50 份资料中 18 份基本像原件，32 份需改写；《云山商界》1996 年宗世昌专访因“公开资料称 / 文章没有提及”这类转述口吻被列入需改写。
- `npm.cmd run validate`、普通路径试玩回归和自动通关烟测均通过。

## 2026-05-16 11:35 Asia/Shanghai 资料原件视图回归

命令：
```powershell
node --check game\app.js
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `game/app.js` 语法检查通过。
- `npm.cmd run validate` 通过，资料阅读模板未改变内容包、提交答案、解锁矩阵、运行时资产或搜索路径。
- 普通路径试玩回归通过，重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。
- 自动通关烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。
- 本轮改动只影响资料阅读页的呈现层：报刊、档案、法律/信托、网页和私藏材料会使用不同原件式版面。

## 2026-05-16 11:15 Asia/Shanghai 锁定资料走访建议回归

命令：
```powershell
node --check game\app.js
node --check tools\validate_search_paths.mjs
node tools\validate_search_paths.mjs
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `game/app.js` 和 `tools\validate_search_paths.mjs` 语法检查通过。
- 搜索路径自检新增锁定提示检查并通过：开局搜索“信托”建议世昌集团，开局搜索“罗月珍”建议云山至黔中旧线、县档案馆和世昌集团，其中县档案馆满足主线推进要求。
- `npm.cmd run validate` 通过，继续覆盖内容包、提交答案一致性、内容同步、未来资产、运行时资产、解锁矩阵、基础游戏数据、搜索路径和锁定资料走访建议。
- 普通路径试玩回归通过，重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。
- 自动通关烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。

## 2026-05-16 10:15 Asia/Shanghai 渐进解锁矩阵自检回归

命令：
```powershell
node --check tools\validate_unlock_matrix.mjs
node --check game\app.js
node tools\validate_unlock_matrix.mjs
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- 新增解锁矩阵校验脚本语法检查通过，`game/app.js` 语法检查通过。
- `node tools\validate_unlock_matrix.mjs` 通过：覆盖 4 个隐藏血脉节点、5 个后段资料组、26 份受控资料和 6 个走访地点。
- `npm.cmd run validate` 通过：内容包、提交答案一致性、内容同步、未来资产、运行时资产、解锁矩阵、基础游戏数据和搜索路径全部无错误。
- 普通路径试玩回归通过，重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。
- 自动通关烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。

## 2026-05-16 09:13 Asia/Shanghai 家谱节点状态图回归

命令：
```powershell
node --check game\app.js
node tools\validate_runtime_assets.mjs
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
Select-String -Path docs\smoke-dom.html -Pattern 'family-node-legend|data-node-state="confirmed"|data-node-state="deceased"|genealogy-nodes|data-autotest="pass"' -Encoding UTF8
```

结果：
- `game/app.js` 语法检查通过。
- 运行时资产校验通过，实际引用资产从 42 个增至 47 个，新增 5 个家谱节点 PNG 图标均存在且非空。
- `npm.cmd run validate` 通过，覆盖内容包、提交答案一致性、内容同步、未来资产、运行时资产、基础游戏数据和搜索路径。
- 普通路径试玩回归通过，重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。
- 自动通关烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`；DOM 检查确认家谱图例、节点状态属性和 `data-autotest="pass"` 均存在。

## 2026-05-16 08:04 Asia/Shanghai 内容包线索来源校验
命令：
```powershell
node --check tools\validate_content_bundle.mjs
node --check game\app.js
node tools\validate_content_bundle.mjs game\data\case_bundle.json
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- 内容包结构校验通过：28 条线索均绑定 `documentIds`，34 份结构化资料均可被引用。
- 新增校验确认每条线索来源资料存在且不重复；6 条必需真相均至少由两份来源资料支撑。
- `npm.cmd run validate` 通过，覆盖内容包、提交答案一致性、内容同步、未来资产、运行时资产、基础游戏数据和搜索路径。
- 普通路径试玩回归和自动通关烟测均通过，并重新生成 `docs/playtest-dom.html`、`docs/playtest-guided.png`、`docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。

## 2026-05-16 07:09 Asia/Shanghai 运行时资产引用校验

命令：
```powershell
node --check tools\validate_runtime_assets.mjs
node --check game\app.js
node tools\validate_runtime_assets.mjs
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- 新增运行时资产校验通过：扫描 `game/index.html`、`game/app.js` 和 `game/styles.css`，确认 42 个实际引用的图片/音频资产存在且非空。
- `npm.cmd run validate` 通过，已覆盖内容包、提交答案、内容同步、未来资产清单、运行时资产、基础游戏数据和关键搜索路径。
- 普通路径试玩回归通过，重新生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。
- 自动通关烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。

## 2026-05-16 06:09 Asia/Shanghai 回归脚本断言加固

命令：
```powershell
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `npm.cmd run validate` 通过，内容包、提交答案、内容同步、未来资产、基础游戏数据和搜索路径均无错误。
- 普通路径试玩回归通过；脚本确认 `data-playtest="pass"`、解析 `guided-playtest-report` JSON 成功、错误数组为空、关键节点数量满足下限，并确认截图非空。
- 自动通关烟测通过；脚本确认 `data-autotest="pass"`、最终报告成功状态存在，并确认截图非空。
- 重新生成 `docs/playtest-dom.html`、`docs/playtest-guided.png`、`docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。

## 2026-05-16 05:10 Asia/Shanghai 内容包同步校验

命令：
```powershell
node --check tools\validate_content_sync.mjs
node --check game\app.js
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- 新增内容包同步校验通过：`case_bundle.json` 中 19 名人物和 33 份资料均能在 `game/app.js` 中找到对应条目，标题/姓名一致。
- 六条关系核验引用的 7 名人物和 10 份证据资料均已纳入内容包，避免关系卡证据只存在于游戏内硬编码。
- `npm.cmd run validate` 通过：内容包结构、提交答案一致性、内容包同步、未来资产清单、基础游戏数据和搜索路径均无错误。
- 普通路径试玩回归和自动通关烟测均通过，并重新生成 `docs/playtest-dom.html`、`docs/playtest-guided.png`、`docs/smoke-dom.html` 和 `docs/smoke-autotest.png`。

## 2026-05-16 04:08 Asia/Shanghai 普通路径试玩回归

命令：
```powershell
node --check game\app.js
npm.cmd run validate
npm.cmd run playtest
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- `game/app.js` 语法检查通过。
- `npm.cmd run validate` 通过：内容包结构、提交答案一致性、未来资产清单、基础游戏数据和搜索路径均无错误。
- 普通路径试玩回归通过：Edge headless 打开 `game/index.html?playtest=1`，按最小主线搜索、阅读、收藏、关系核验和最终提交路径执行，生成 `docs/playtest-dom.html` 与 `docs/playtest-guided.png`。
- DOM 检查确认 `data-playtest="pass"` 和 `guided-playtest-report` 存在，说明渐进解锁没有阻断普通主线闭环。
- 自动通关烟测仍通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`，页面输出 `data-autotest="pass"`。

## 2026-05-16 03:06 Asia/Shanghai 搜索路径自检回归

命令：
```powershell
node tools\validate_search_paths.mjs
npm.cmd run validate
powershell -ExecutionPolicy Bypass -File tools\run_smoke.ps1
```

结果：
- 新增搜索路径自检通过，共覆盖 14 个检查点：开局公开入口、信托原文锁定、罗月珍强证据锁定、公开家庭后的罗月珍线、照片背注后的罗建宁线、罗建宁后的陈静线、陈静后的陈嘉东线、DNA 强证据，以及 6 个走访入口默认关键词。
- `npm.cmd run validate` 通过：内容包、提交答案一致性、未来资产清单、基础游戏数据和搜索路径均无错误。
- Edge headless 自动通关烟测通过，重新生成 `docs/smoke-dom.html` 和 `docs/smoke-autotest.png`，页面仍输出 `data-autotest="pass"`。

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
