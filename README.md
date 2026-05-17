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

当前资料库已扩到 50 份资料。除主线强证据外，新增了一批围绕接生登记、供销社借支、黔中汇款、李桂兰信稿、罗建宁访谈和学校家访的交叉线索；第二轮内容补入了公司股权、治理调整、KTV 租赁、鼎辉尽调、社区走访、宗家六子女会谈、集团舆情草案、KTV 复工检查、宗建丽旧信清单、档案馆调档登记和县一中奖学金撤稿，也补充了云山县县情、2020 年秋办事须知和云山至黔中旧客运线路。

## 当前真相核心

宗世昌与罗月珍有一名非婚生女罗建宁。罗建宁之女为陈静，陈静之女为陈嘉东。根据 1998 年香港家族信托条款，陈嘉东虽不姓宗，仍具有继承资格。

## 验证

运行数据自检：

```powershell
npm.cmd run validate
```

该命令会检查内容包结构、线索来源资料映射、最终提交答案一致性、内容包与游戏内人物/资料/关系谜题的双向同步、未来资产清单、运行时图片/音频引用、资料页补充美术映射、基础游戏数据、关键搜索路径、锁定资料的走访建议和现场问询搜索入口。内容包校验要求每条线索绑定至少一份来源资料，并要求每条必需真相至少有两份来源资料覆盖；现场问询还要求提供 `firstDoc`，让回答明确落到一份本地点入口材料。当前 `case_bundle.json` 已覆盖运行时 24 名人物、50 份资料、6 条关系谜题和 12 条现场问询；后续若只改 `game/app.js` 而漏同步内容包，校验会失败。

从运行时数据同步内容包结构字段：

```powershell
npm.cmd run sync:bundle
```

该命令会把 `game/app.js` 中的人物别名、生卒年、角色说明、资料年份、来源、可信度、关键词、摘要、图片、关系谜题和现场问询字段写回 `game/data/case_bundle.json`。同步后仍需运行 `npm.cmd run validate`。

单独检查资料页补充美术映射可运行：

```powershell
node tools/validate_document_visuals.mjs
```

该脚本会确认补充美术只绑定到真实资料 ID、图片存在且非空、路径没有越出 `game/`，并要求文档模板、旧照片和网页界面三类素材都进入资料阅读页。单独检查渐进解锁后的搜索链可运行：

```powershell
node tools/validate_search_paths.mjs
```

生成可读的搜索路线试玩复盘：

```powershell
npm.cmd run review:search
```

该命令会生成 `docs/search_route_review.md`，把开局公开入口、锁定提示、阅读解锁、后段强证据、6 个走访入口和 12 条现场问询入口整理成表格，并列出每条问询建议先看的入口材料，便于人工试玩前先确认主线搜索链没有断点。

单独检查渐进解锁矩阵与自检报告：

```powershell
node tools/validate_unlock_matrix.mjs
```

审计资料是否像原始材料而不是知识提炼：

```powershell
npm.cmd run audit:originals
```

该命令会生成 `docs/original_material_audit.md`，逐条标记游戏内 50 份资料和 `case_bundle.json` 中 50 份结构化资料是否混入调查员结论口吻、是否缺少档案字段、条款、论坛楼层或原话痕迹；若有条目需改写，命令会返回失败。

检查原件式资料页是否在桌面和手机宽度下横向溢出：

```powershell
npm.cmd run layout:documents
```

该命令会用 Edge headless 批量打开 50 份资料，生成 `docs/document-layout-desktop.html`、`docs/document-layout-mobile.html`、对应截图和 `docs/document-layout-report.json`。若长字段、条款、论坛楼层或网页快照撑破阅读面板，命令会返回失败。

检查人物头像和家谱节点图标是否实际渲染：

```powershell
npm.cmd run visual:assets
```

该命令会用 Edge headless 打开 `game/index.html?visualtest=1`，确认侧栏导航 UI 图标、人物档案画像、家谱节点图标、图例图标和资料页补充美术进入 DOM 并具备可见尺寸，生成 `docs/visual-assets-dom.html` 和 `docs/visual-assets.png`。

审计未来美术素材的当前接入状态：

```powershell
npm.cmd run audit:assets
```

该命令会生成 `docs/future_asset_usage.md`，把 `asset-manifest.json` 的 50 个素材与当前运行时引用做交叉检查。生产级 UI 图标、家谱节点、资料模板、旧照片和网页界面素材若低于当前玩法阈值会失败；宣传图和参考图则应保持未接入，避免污染可玩版本。

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

运行普通路径试玩回归：

```powershell
npm.cmd run playtest
```

该脚本用 Edge headless 打开 `game/index.html?playtest=1`，按最小主线调查路径逐步搜索、阅读、收藏、核验关系并提交报告，生成 `docs/playtest-dom.html` 和 `docs/playtest-guided.png`。脚本会解析页面内 JSON 报告、确认截图非空，并检查锁定资料是否显示非剧透走访引导，避免只凭 DOM 标记误判通过。

用 Edge 打开游戏：

```powershell
powershell -ExecutionPolicy Bypass -File tools/launch_game.ps1
```

## 版本控制约定

- `mvp/playable-shell`：可打开、可搜索、可提交的最小闭环。
- `mvp/audio-assets`：程序合成音效和 Windows TTS 占位语音。
- `mvp/content-pass`：扩写资料、人物和误导线。
- `mvp/test-pass`：自检报告、浏览器测试和修复。
