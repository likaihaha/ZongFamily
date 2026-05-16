# 渐进解锁自检报告

更新时间：2026-05-17 00:39 Asia/Shanghai

本报告把正式版渐进解锁规则整理成可审查清单。它不改变真相答案，只说明隐藏血脉、后段资料和走访地点何时进入玩家当前案卷。

## 隐藏血脉显名条件

| 节点 | 显名触发 | 说明 |
| --- | --- | --- |
| `luo_yuezhen` | 走访 `archives`，或读/收 `doc_educated_youth`、`doc_photo_back`、`doc_supply_roster`、`doc_midwife_register` | 先让玩家确认“罗月珍”不是论坛传闻，而是可追溯到知青、照片或接生档案的人。 |
| `luo_jianning` | 读/收 `doc_photo_back`、`doc_luo_birth`、`doc_midwife_register`、`doc_classmate_luo`，或完成 `rel_zong_luo` | 显名前应至少接触罗月珍与孩子之间的档案链。 |
| `chen_jing` | 走访 `ktv`，或读/收 `doc_chen_birth`、`doc_blog_chenjing`、`doc_women_fed`、`doc_dna_record` | 让陈静先作为返乡经营者或档案对象出现，再进入家谱推理。 |
| `chen_jiadong` | 走访 `school`，或读/收 `doc_jiadong_school`、`doc_teacher_visit`、`doc_scholarship_notice`、`doc_tiktok_chenjing` | 陈嘉东涉及未成年人资料，开局只保留占位，后段资料入卷后再显名。 |

关系图状态另受 `rel_zong_luo`、`rel_luo_chen`、`rel_chen_child` 控制：三段隐藏血脉关系全部核验前，节点保持“待证实”；三段完成后切换为“血亲确认”。

## 后段资料解锁组

| 组 ID | 资料 | 触发 |
| --- | --- | --- |
| `inheritance_rules` | `doc_trust_clause`、`doc_notary_meeting`、`doc_estate_law_note` | 阅读 `doc_official_family`，或先在 `group` 通过交互取得并阅读 `doc_trust_clause`。 |
| `luo_yuezhen_line` | `doc_educated_youth`、`doc_photo_back`、`doc_supply_roster`、`doc_supply_advance`、`doc_midwife_register` | 阅读 `doc_official_family`，或先在 `archives` 通过交互取得并阅读入口旧档。 |
| `luo_jianning_line` | `doc_luo_birth`、`doc_old_postcard`、`doc_remittance_stub`、`doc_li_guilan_letter`、`doc_classmate_luo` | 读/收 `doc_photo_back`、`doc_educated_youth`、`doc_midwife_register`、`doc_yunqian_bus_line`、`doc_old_postcard` 之一。 |
| `chen_jing_line` | `doc_chen_birth`、`doc_blog_chenjing`、`doc_women_fed`、`doc_ktv_license`、`doc_talent_window`、`doc_ktv_lease_archive`、`doc_neighborhood_visit`、`doc_ktv_reopen_check` | 读/收 `doc_luo_birth`、`doc_classmate_luo`、`doc_ktv_license`、`doc_women_fed` 之一。 |
| `chen_jiadong_late_line` | `doc_school_forum`、`doc_jiadong_school`、`doc_teacher_visit`、`doc_scholarship_notice`、`doc_dna_record`、`doc_hospital_blood` | 读/收 `doc_chen_birth`、`doc_blog_chenjing`、`doc_women_fed`、`doc_school_forum`、`doc_jiadong_school`、`doc_hospital_blood` 之一。 |

这些资料不应同时出现在 `publicDocumentIds` 中，否则开局搜索会提前暴露主线后段。

## 走访地点入口材料

地点走访不再直接解锁整包资料。玩家需要移动到地点、在办事窗口内与对应人物交互；交互成功后只把入口材料加入当前卷宗。入口材料被阅读后，才继续展开同组后续资料。

| 地点 | 交互人物 | 坐标 | 入口材料 |
| --- | --- | --- | --- |
| `archives` | 何国生 | 2.2, 1.9 | `doc_educated_youth`、`doc_photo_back`、`doc_luo_birth` |
| `hospital` | 周美英 | 3.7, 1.3 | `doc_hospital_blood` |
| `school` | 黄雅玲 | 5.1, 2.6 | `doc_school_forum`、`doc_jiadong_school` |
| `ktv` | 马丽华 | 2.9, 3.5 | `doc_ktv_license`、`doc_women_fed` |
| `group` | 魏雪琴、方仁杰 | 1.4, 0.8 | `doc_trust_clause` |
| `yunqian` | 钱树林 | 6.3, 4.2 | `doc_yunqian_bus_line`、`doc_old_postcard` |

## 走访后引导与补救

每个走访地点都必须提供两类非剧透反馈：

- 成功取件后：给出下一步建议关键词和可追问对象，例如世昌集团成功后提示先读信托条款并搜索“信托”，但不直接开放集团后续整包资料。
- 错过窗口后：给出补救路线、仍可办理的备选地点入口和“次日补办”按钮；调查备忘录会出现“补办错过窗口”任务，直到没有地点处于 `missed` 状态。

`visitFollowUps` 必须覆盖 `archives`、`hospital`、`school`、`ktv`、`group`、`yunqian` 六个地点，并为每个地点提供 `obtained`、`missed`、`query` 和 `ask` 字段。

## 自动校验

运行：

```powershell
node tools/validate_unlock_matrix.mjs
```

脚本会检查：

- 本报告是否列出所有隐藏血脉节点、后段资料组和走访地点。
- 每个触发资料、地点和人物 ID 是否存在于 `game/app.js`。
- `chainUnlockState` 和 `isPersonDiscovered` 是否仍包含本报告列出的触发条件。
- 后段资料组是否误加入公开资料集合。

该脚本已经接入 `npm.cmd run validate`，和普通路径试玩回归、自动通关烟测一起作为渐进解锁防回退检查。
