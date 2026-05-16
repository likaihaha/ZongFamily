# 未来美术资产接入审计

更新时间：2026-05-17 00:23 Asia/Shanghai

该报告由 `npm.cmd run audit:assets` 生成，用于确认 `asset-manifest.json` 中的未来美术素材哪些已经进入当前可玩版本，哪些仍应保留为候选、宣传或参考资产。

## 分类统计

| 分类 | 已接入 | 总数 | 状态 |
| --- | ---: | ---: | --- |
| background | 7 | 8 | 达到当前玩法阈值 |
| document-template | 8 | 8 | 达到当前玩法阈值 |
| genealogy-node | 5 | 5 | 达到当前玩法阈值 |
| old-photo | 5 | 5 | 达到当前玩法阈值 |
| portrait | 8 | 10 | 达到当前玩法阈值 |
| promo | 0 | 3 | 按计划未接入 |
| ui-icon | 5 | 5 | 达到当前玩法阈值 |
| ui-reference | 0 | 2 | 按计划未接入 |
| web-ui | 4 | 4 | 达到当前玩法阈值 |

## 未接入清单

- `background-old-computer-room`（background）：future old-internet clue browsing background
- `portrait-anonymous-silhouette`（portrait）：future hidden-character dossier state
- `portrait-zong-shichang-young`（portrait）：future 1960s flashback/profile clue
- `promo-demo-cover`（promo）：future demo cover, needs final title overlay
- `promo-steam-key-art`（promo）：future store key visual, needs final title overlay
- `promo-store-capsule`（promo）：future store capsule, needs final title overlay
- `ui-genealogy-node-reference-sheet`（ui-reference）：source reference sheet for split genealogy node assets
- `ui-icon-reference-sheet`（ui-reference）：source reference sheet for split UI icon assets

## 判断

- 当前生产级 UI 图标、家谱节点、资料模板、旧照片和网页界面素材均已接入运行时。
- 仍未进入运行时的素材主要是宣传图、参考图、年轻宗世昌头像、匿名人剪影和旧电脑室背景；这些不应为了“用完素材”而强塞进当前主线。
- 后续若新增开场封面、人物回忆段、匿名信来源界面或旧互联网检索房间，可优先从未接入清单中挑选素材。