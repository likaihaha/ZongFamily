# 《云山宗氏案》案卷设定库

本目录是项目的 canon bible / 文案库，用来记录正式版制作中不可混淆的事实、资料、证据、人物、地点和叙事规则。

## HTML 总入口

优先打开 `index.html` 查看可跳转版案卷库。各 `.md` 文件保留为可编辑源稿和细分记录。

## 使用原则

- `casebook/` 记录“故事事实”和“设计约束”，不等同于玩家开局可见信息。
- 正式版的资料库、家谱、证据箱和最终提交应从这里反向整理结构化数据。
- 修改真相链、关键证据、死亡路径、信托规则前，先更新这里，再同步到游戏数据。
- 误导材料也要记录，但必须注明如何被排除。

## 文件说明

- `canon_facts.md`：不可随意改的核心事实。
- `timeline.md`：1968-2020 历史时间线和 2020 调查日程。
- `people.md`：人物设定、真实身份、玩家发现阶段。
- `people_biographies.md`：所有当前人物的生平小传和案件功能。
- `people_dossiers.md`：正式版人物深档，含第二代配偶、第三代、外貌、性格、成长经历和利害位置。
- `relationship_conflicts.md`：人物关系网、姻亲/公司/旧事知情关系和可转化为玩法的冲突。
- `player_motivation.md`：玩家开局调查动机、调查中动力变化和结尾责任感。
- `player_role_legal_basis.md`：玩家职业设定的现实语境、权限边界和文案建议。
- `documents.md`：资料文案库索引、可见性、解锁条件。
- `evidence.md`：证据证明力、用途和限制。
- `locations.md`：云山县与外部地点、可走访资料。
- `relationship_truth_table.md`：关系谜题真相表和必要证据。
- `red_herrings.md`：误导线、合理性、排除方式。
- `narrative_rules.md`：叙事手法与互动转译规则。

## 当前状态

创建日期：2026-05-16 Asia/Shanghai

当前内容基于现有 MVP、`game/data/case_bundle.json`、`game/app.js`、`yunshan_project_docs.html` 和正式版计划整理。后续应逐步把资料正文从代码迁移到结构化内容包。
