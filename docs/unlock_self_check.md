# 渐进解锁自检报告

更新时间：2026-05-16 10:20 Asia/Shanghai

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
| `inheritance_rules` | `doc_trust_clause`、`doc_notary_meeting`、`doc_estate_law_note` | 阅读 `doc_official_family`，或走访 `group`。 |
| `luo_yuezhen_line` | `doc_educated_youth`、`doc_photo_back`、`doc_supply_roster`、`doc_supply_advance`、`doc_midwife_register` | 阅读 `doc_official_family`，或走访 `archives`。 |
| `luo_jianning_line` | `doc_luo_birth`、`doc_old_postcard`、`doc_remittance_stub`、`doc_li_guilan_letter`、`doc_classmate_luo` | 读/收 `doc_photo_back`、`doc_educated_youth`、`doc_midwife_register` 之一，或走访 `yunqian`。 |
| `chen_jing_line` | `doc_chen_birth`、`doc_blog_chenjing`、`doc_women_fed`、`doc_ktv_license`、`doc_talent_window`、`doc_ktv_lease_archive`、`doc_neighborhood_visit`、`doc_ktv_reopen_check` | 读/收 `doc_luo_birth`、`doc_classmate_luo` 之一，或走访 `ktv`。 |
| `chen_jiadong_late_line` | `doc_school_forum`、`doc_jiadong_school`、`doc_teacher_visit`、`doc_scholarship_notice`、`doc_dna_record`、`doc_hospital_blood` | 读/收 `doc_chen_birth`、`doc_blog_chenjing`、`doc_women_fed` 之一，或走访 `school`、`hospital`。 |

这些资料不应同时出现在 `publicDocumentIds` 中，否则开局搜索会提前暴露主线后段。

## 走访地点直接入卷

| 地点 | 直接解锁资料 |
| --- | --- |
| `archives` | `doc_educated_youth`、`doc_photo_back`、`doc_luo_birth`、`doc_supply_roster`、`doc_midwife_register`、`doc_supply_advance`、`doc_archive_request_log` |
| `hospital` | `doc_dna_record`、`doc_hospital_blood`、`doc_chen_birth`、`doc_midwife_register` |
| `school` | `doc_jiadong_school`、`doc_teacher_visit`、`doc_scholarship_notice`、`doc_school_forum` |
| `ktv` | `doc_women_fed`、`doc_blog_chenjing`、`doc_ktv_license`、`doc_talent_window`、`doc_ktv_lease_archive`、`doc_neighborhood_visit`、`doc_ktv_reopen_check` |
| `group` | `doc_trust_clause`、`doc_notary_meeting`、`doc_estate_law_note`、`doc_equity_draft_2005`、`doc_board_handover_2015`、`doc_dinghui_due_diligence`、`doc_sibling_meeting_2020`、`doc_jianhong_pr_plan`、`doc_family_meeting` |
| `yunqian` | `doc_yunqian_bus_line`、`doc_old_postcard`、`doc_classmate_luo`、`doc_false_qian`、`doc_false_peng`、`doc_li_guilan_letter`、`doc_jianli_old_letters`、`doc_remittance_stub` |

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
