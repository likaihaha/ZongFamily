# 搜索路线试玩复盘

更新时间：2026-05-17 00:23 Asia/Shanghai

该报告由 `node tools/validate_search_paths.mjs --write` 生成，用来把渐进解锁后的主线搜索链转成可读台账。它不能替代真人试玩，但可以确认公开入口、锁定提示、阅读解锁和走访兜底没有断链。

## 结论

- 状态：通过
- 主线路线检查点：10
- 走访入口检查点：6
- 错误数量：0

## 主线搜索链

| 步骤 | 搜索词 | 应出现/应锁定 | 可见资料数 | 锁定资料数 | 备注 |
| --- | --- | --- | ---: | ---: | --- |
| 开局公开宗家入口 | 宗世昌 | 应出现：《云山商界》1996 年宗世昌专访（doc_official_family） | 2 | 15 | 锁定命中：香港家族信托文件节选（doc_trust_clause）、云山县档案馆：1969 年春节合影背注（doc_photo_back）、云山县疾控中心亲缘比对记录（doc_dna_record）、《云山八卦周刊》：李天赐疑云（doc_gossip_li_tianci）、宗世昌临终录音整理（doc_zong_deathbed）、云山县人民医院住院样本留存单（doc_hospital_blood）、云山县公证处接待笔录（doc_notary_meeting）、县供销系统仓储点临时工花名册（doc_supply_roster）、旧明信片残片（doc_old_postcard）、供销社仓储点临时借支单（doc_supply_advance）、李桂兰未寄出信稿（doc_li_guilan_letter）、云山县司法所继承咨询摘记（doc_estate_law_note）、世昌集团 2016 年春治理调整备忘（doc_board_handover_2015）、宗家六子女临时会谈纪要（doc_sibling_meeting_2020）、宗建丽整理父亲旧信清单（doc_jianli_old_letters） |
| 开局信托原文未提前暴露 | 信托 | 应锁定：香港家族信托文件节选（doc_trust_clause） | 2 | 9 | 锁定命中：香港家族信托文件节选（doc_trust_clause）、《云山八卦周刊》：李天赐疑云（doc_gossip_li_tianci）、云山县公证处接待笔录（doc_notary_meeting）、世昌集团家族会议纪要节选（doc_family_meeting）、云山县司法所继承咨询摘记（doc_estate_law_note）、世昌集团 2005 年改制股权底稿（doc_equity_draft_2005）、世昌集团 2016 年春治理调整备忘（doc_board_handover_2015）、鼎辉基金受益人尽调函（doc_dinghui_due_diligence）、世昌集团舆情应对草案（doc_jianhong_pr_plan） |
| 开局罗月珍强证据未提前暴露 | 罗月珍 | 应锁定：《云山县志》1995 年卷：知青名册节选（doc_educated_youth）、云山县档案馆：1969 年春节合影背注（doc_photo_back） | 0 | 14 | 锁定命中：云山至黔中旧客运线路备案（doc_yunqian_bus_line）、《云山县志》1995 年卷：知青名册节选（doc_educated_youth）、云山县档案馆：1969 年春节合影背注（doc_photo_back）、黔中地区旧户籍迁入登记（doc_luo_birth）、县供销系统仓储点临时工花名册（doc_supply_roster）、世昌集团家族会议纪要节选（doc_family_meeting）、云山卫生院 1969 年冬接生登记摘页（doc_midwife_register）、供销社仓储点临时借支单（doc_supply_advance）、黔中邮电所 1971 年汇款回执残联（doc_remittance_stub）、李桂兰未寄出信稿（doc_li_guilan_letter）、地方论坛《黔中旧事》：钱树林认父帖（doc_false_qian）、宗建芳给妇联旧同事的便条（doc_jianfang_note）、宗建丽整理父亲旧信清单（doc_jianli_old_letters）、云山县档案馆 2020 年调档登记簿（doc_archive_request_log） |
| 开局信托锁定提示 | 信托 | 建议走访：世昌集团 |  |  | 锁定命中：香港家族信托文件节选（doc_trust_clause）、《云山八卦周刊》：李天赐疑云（doc_gossip_li_tianci）、云山县公证处接待笔录（doc_notary_meeting）、世昌集团家族会议纪要节选（doc_family_meeting）、云山县司法所继承咨询摘记（doc_estate_law_note）、世昌集团 2005 年改制股权底稿（doc_equity_draft_2005）、世昌集团 2016 年春治理调整备忘（doc_board_handover_2015）、鼎辉基金受益人尽调函（doc_dinghui_due_diligence）、世昌集团舆情应对草案（doc_jianhong_pr_plan） |
| 开局罗月珍锁定提示 | 罗月珍 | 建议走访：云山至黔中旧线、县档案馆、世昌集团 |  |  | 锁定命中：云山至黔中旧客运线路备案（doc_yunqian_bus_line）、《云山县志》1995 年卷：知青名册节选（doc_educated_youth）、云山县档案馆：1969 年春节合影背注（doc_photo_back）、黔中地区旧户籍迁入登记（doc_luo_birth）、县供销系统仓储点临时工花名册（doc_supply_roster）、世昌集团家族会议纪要节选（doc_family_meeting）、云山卫生院 1969 年冬接生登记摘页（doc_midwife_register）、供销社仓储点临时借支单（doc_supply_advance）、黔中邮电所 1971 年汇款回执残联（doc_remittance_stub）、李桂兰未寄出信稿（doc_li_guilan_letter）、地方论坛《黔中旧事》：钱树林认父帖（doc_false_qian）、宗建芳给妇联旧同事的便条（doc_jianfang_note）、宗建丽整理父亲旧信清单（doc_jianli_old_letters）、云山县档案馆 2020 年调档登记簿（doc_archive_request_log） |
| 公开家庭后进入罗月珍线 | 罗月珍 | 应出现：《云山县志》1995 年卷：知青名册节选（doc_educated_youth）、云山县档案馆：1969 年春节合影背注（doc_photo_back）、县供销系统仓储点临时工花名册（doc_supply_roster） | 5 | 9 | 锁定命中：云山至黔中旧客运线路备案（doc_yunqian_bus_line）、黔中地区旧户籍迁入登记（doc_luo_birth）、世昌集团家族会议纪要节选（doc_family_meeting）、黔中邮电所 1971 年汇款回执残联（doc_remittance_stub）、李桂兰未寄出信稿（doc_li_guilan_letter）、地方论坛《黔中旧事》：钱树林认父帖（doc_false_qian）、宗建芳给妇联旧同事的便条（doc_jianfang_note）、宗建丽整理父亲旧信清单（doc_jianli_old_letters）、云山县档案馆 2020 年调档登记簿（doc_archive_request_log） |
| 照片背注后进入罗建宁线 | 罗建宁 | 应出现：黔中地区旧户籍迁入登记（doc_luo_birth）、黔中中专同学访谈：罗建宁（doc_classmate_luo） | 4 | 5 | 锁定命中：云山县疾控中心亲缘比对记录（doc_dna_record）、陈静出生医学记录复印件（doc_chen_birth）、地方论坛《黔中旧事》：钱树林认父帖（doc_false_qian）、世昌集团舆情应对草案（doc_jianhong_pr_plan）、宗建丽整理父亲旧信清单（doc_jianli_old_letters） |
| 罗建宁后进入陈静线 | 陈静 | 应出现：陈静出生医学记录复印件（doc_chen_birth）、云山县妇联创业帮扶登记表（doc_women_fed） | 9 | 10 | 锁定命中：云山家长汇论坛：县一中家长会（doc_school_forum）、陈静短视频《我的乖女儿》转写（doc_tiktok_chenjing）、云山县疾控中心亲缘比对记录（doc_dna_record）、云山县第一中学学生信息表（doc_jiadong_school）、地方论坛《云山茶馆》：陈静身世帖（doc_gossip_wrong_mother）、地方论坛《云山茶馆》：贵州男友误认帖（doc_false_peng）、县一中高二三班家访记录（doc_teacher_visit）、宗建芳给妇联旧同事的便条（doc_jianfang_note）、世昌集团舆情应对草案（doc_jianhong_pr_plan）、县一中 2020 年秋奖学金公示撤稿截图（doc_scholarship_notice） |
| 陈静后进入陈嘉东线 | 陈嘉东 | 应出现：云山县第一中学学生信息表（doc_jiadong_school）、县一中 2020 年秋奖学金公示撤稿截图（doc_scholarship_notice） | 8 | 2 | 锁定命中：陈静短视频《我的乖女儿》转写（doc_tiktok_chenjing）、世昌集团舆情应对草案（doc_jianhong_pr_plan） |
| 后段强证据可搜索 | DNA | 应出现：云山县疾控中心亲缘比对记录（doc_dna_record）、云山县人民医院住院样本留存单（doc_hospital_blood）、香港家族信托文件节选（doc_trust_clause） | 4 | 2 | 锁定命中：《云山八卦周刊》：李天赐疑云（doc_gossip_li_tianci）、鼎辉基金受益人尽调函（doc_dinghui_due_diligence） |

## 走访兜底

| 入口 | 默认搜索词 | 本地资料命中 | 可见资料 |
| --- | --- | ---: | --- |
| 县档案馆 | 旧户籍 | 1 | 黔中地区旧户籍迁入登记（doc_luo_birth） |
| 县医院 | 血样 | 2 | 云山县疾控中心亲缘比对记录（doc_dna_record）、云山县人民医院住院样本留存单（doc_hospital_blood） |
| 县一中 | 县一中 | 4 | 云山家长汇论坛：县一中家长会（doc_school_forum）、云山县第一中学学生信息表（doc_jiadong_school）、县一中高二三班家访记录（doc_teacher_visit）、县一中 2020 年秋奖学金公示撤稿截图（doc_scholarship_notice） |
| 唱响 KTV 后巷 | KTV | 7 | 云山县妇联创业帮扶登记表（doc_women_fed）、陈静短视频《我的乖女儿》转写（doc_tiktok_chenjing）、地方论坛《云山茶馆》：陈静身世帖（doc_gossip_wrong_mother）、唱响 KTV 个体工商登记（doc_ktv_license）、唱响 KTV 房屋租赁备案（doc_ktv_lease_archive）、老街社区 2016 年走访记录（doc_neighborhood_visit）、唱响 KTV 2020 年复工检查表（doc_ktv_reopen_check） |
| 世昌集团 | 信托 | 9 | 香港家族信托文件节选（doc_trust_clause）、《云山八卦周刊》：李天赐疑云（doc_gossip_li_tianci）、云山县公证处接待笔录（doc_notary_meeting）、世昌集团家族会议纪要节选（doc_family_meeting）、云山县司法所继承咨询摘记（doc_estate_law_note）、世昌集团 2005 年改制股权底稿（doc_equity_draft_2005）、世昌集团 2016 年春治理调整备忘（doc_board_handover_2015）、鼎辉基金受益人尽调函（doc_dinghui_due_diligence）、世昌集团舆情应对草案（doc_jianhong_pr_plan） |
| 云山至黔中旧线 | 黔中 | 6 | 云山至黔中旧客运线路备案（doc_yunqian_bus_line）、旧明信片残片（doc_old_postcard）、地方论坛《云山茶馆》：贵州男友误认帖（doc_false_peng）、黔中邮电所 1971 年汇款回执残联（doc_remittance_stub）、黔中中专同学访谈：罗建宁（doc_classmate_luo）、地方论坛《黔中旧事》：钱树林认父帖（doc_false_qian） |

## 剩余风险

- 自动脚本只能确认“能搜到”和“不会提前剧透”，不能判断玩家是否会自然想到这些关键词。
- 若后续新增资料或改写正文，应继续让报告覆盖新增关键词，并安排真人试玩观察停顿点。
