const people = [
  { id: "zong_shichang", name: "宗世昌", aliases: ["宗老爷子"], birth: 1932, death: 2020, role: "世昌集团创始人", note: "公开资料称其与李桂兰育有六名子女。" },
  { id: "li_guilan", name: "李桂兰", aliases: [], birth: 1934, death: 2010, role: "宗世昌妻子", note: "世昌集团早期共同创业者。" },
  { id: "zong_jianguo", name: "宗建国", aliases: [], birth: 1956, role: "计划经济局干部", note: "宗世昌长子。" },
  { id: "zong_jianfang", name: "宗建芳", aliases: [], birth: 1958, role: "县妇联干部", note: "曾帮扶陈静创业，因此被外界误认为陈静母亲。" },
  { id: "zong_jianmin", name: "宗建民", aliases: [], birth: 1959, role: "物资局干部", note: "宗世昌次子。" },
  { id: "zong_jianhong", name: "宗建红", aliases: [], birth: 1962, role: "世昌集团第二代掌门", note: "主导集团扩张，反对第七支血脉传闻。" },
  { id: "zong_jianping", name: "宗建平", aliases: [], birth: 1963, role: "公安系统出身", note: "宗世昌三子。" },
  { id: "zong_jianli", name: "宗建丽", aliases: [], birth: 1975, role: "供销社干部", note: "宗世昌幼女。" },
  { id: "luo_yuezhen", name: "罗月珍", aliases: ["贵州女知青", "月珍"], birth: 1949, role: "贵州籍女知青", note: "1968 年到云山县，1970 年离开。" },
  { id: "luo_jianning", name: "罗建宁", aliases: ["建宁"], birth: 1969, role: "罗月珍之女", note: "名字中的“建”暗合宗家第二代字辈。" },
  { id: "chen_jing", name: "陈静", aliases: ["陈明静", "唱响KTV老板娘"], birth: 1988, role: "KTV经营者", note: "罗建宁之女，2014 年返乡创业。" },
  { id: "chen_jiadong", name: "陈嘉东", aliases: ["陈小东", "小东"], birth: 2004, role: "县一中学生", note: "陈静之女，正式名中的“嘉”对应宗家第四代字辈。" },
  { id: "zong_minghui", name: "宗明辉", aliases: [], birth: 1984, role: "世昌集团第三任董事长", note: "宗建民之子，干扰线。" },
  { id: "zong_mingjun", name: "宗明军", aliases: [], birth: 1990, role: "世昌集团第四任董事长", note: "宗建民之子，干扰线。" },
  { id: "li_qiang", name: "李强", aliases: [], birth: 1986, role: "鼎辉基金合伙人", note: "宗建红之子，干扰线。" },
  { id: "li_min", name: "李敏", aliases: [], birth: 1989, role: "世昌集团客服主管", note: "宗建红之女，李天赐之母，干扰线。" },
  { id: "li_tianci", name: "李天赐", aliases: [], birth: 2020, role: "李敏之子", note: "八卦中被怀疑与信托有关，但证据不足。" }
];

const documents = [
  {
    id: "doc_official_family",
    title: "《云山商界》1996 年宗世昌专访",
    year: 1996,
    source: "报刊",
    trust: 4,
    keywords: ["宗世昌", "李桂兰", "六个子女", "宗建国", "宗建芳", "宗建民", "宗建红", "宗建平", "宗建丽"],
    summary: "建立宗世昌公开家庭版本。",
    body: "改革开放初期，宗世昌与妻子李桂兰创办世昌综合商店。公开资料称，夫妻二人育有六名子女：长子宗建国、长女宗建芳、次子宗建民、次女宗建红、三子宗建平、幼女宗建丽。\n\n采访中，宗世昌称“家里孩子多，桂兰吃了不少苦”。文章没有提及任何非婚生子女。"
  },
  {
    id: "doc_group_history",
    title: "世昌集团官网《集团历程》",
    year: 2020,
    source: "官网",
    trust: 4,
    keywords: ["世昌集团", "宗建红", "宗明辉", "宗明军", "董事长", "集团历程"],
    summary: "修正集团掌门时间线。",
    body: "1982 年：世昌综合商店成立。\n1985 年：世昌贸易公司成立。\n1995 年：世昌集团挂牌。\n2005 年：宗建红正式接任董事长。\n2015 年：宗明辉接任第三任董事长。\n2020 年：宗明军接任第四任董事长。\n\n官网措辞谨慎，没有提及家族信托纠纷。"
  },
  {
    id: "doc_trust_clause",
    title: "香港家族信托文件节选",
    year: 1998,
    source: "信托",
    trust: 5,
    keywords: ["香港信托", "血缘", "DNA", "受益人", "非婚生", "宗世昌"],
    summary: "说明不姓宗也可能成为受益人。",
    image: {
      src: "assets/images/evidence/trust-clause-1998.jpg",
      alt: "1998 年香港家族信托文件扫描图",
      caption: "扫描件节选：被遮盖的条款页、印章和签署区显示这是一份正式信托材料。"
    },
    body: "本人宗世昌确认，本信托项下的受益人包括：本人的直系血亲后代，以及能够通过 DNA 鉴定证明与本人存在血缘关系的其他个人。\n\n无论该等个人是否使用“宗”作为姓氏，无论其是否婚生或非婚生，无论其母亲或监护人的身份或婚姻状况如何，只要能够证明血缘关系，均有权享受本信托项下权益。"
  },
  {
    id: "doc_anonymous_letter",
    title: "世昌集团匿名信",
    year: 2020,
    source: "内部文件",
    trust: 3,
    keywords: ["匿名信", "第七个继承人", "后代", "回到云山", "信托"],
    summary: "提示第七支血脉的后代仍在云山。",
    body: "第七个继承人还活着没有不重要。\n\n她的后代已经回到云山。\n\n如果你们不妥善处理信托的事，我会把一切都公开。"
  },
  {
    id: "doc_educated_youth",
    title: "《云山县志》1995 年卷：知青名册节选",
    year: 1995,
    source: "县志",
    trust: 5,
    keywords: ["罗月珍", "贵州", "知青", "1968", "云山县", "女知青"],
    summary: "证明罗月珍曾在云山。",
    body: "1968 年，云山县接收外地知识青年二十七名。其中贵州籍女知青罗月珍，女，时年十九岁，分配至县供销系统下属仓储点劳动。\n\n1970 年春，罗月珍因“家庭原因”办理离县手续，去向登记为贵州省黔中地区。"
  },
  {
    id: "doc_photo_back",
    title: "云山县档案馆：1969 年春节合影背注",
    year: 1969,
    source: "档案",
    trust: 5,
    keywords: ["罗月珍", "宗世昌", "建宁", "满月", "照片背面", "1969"],
    summary: "照片背面出现“建宁”关键字。",
    image: {
      src: "assets/images/evidence/photo-back-1969.jpg",
      alt: "1969 年春节合影与照片背注扫描图",
      caption: "档案馆影像：合影与背注同档保存，提示宗世昌、罗月珍和“建宁”之间存在早期交集。"
    },
    body: "档案馆藏 1969 年春节联欢会合影。照片正面可见青年宗世昌与女知青罗月珍同框。\n\n照片背面有一行蓝黑钢笔字：“月珍，建宁满月后勿回。此事我会安排。”字迹旁另有模糊署名，只能辨出“世”字。"
  },
  {
    id: "doc_naming_rule",
    title: "《云山民俗》：宗氏家族字辈观察",
    year: 2015,
    source: "民俗",
    trust: 3,
    keywords: ["字辈", "建", "明", "嘉", "晓", "小", "宗家起名"],
    summary: "说明宗家字辈规律。",
    body: "宗家男性成员多遵循代际字辈：第二代多用“建”，第三代多用“明”，第四代多用“嘉”，第五代常见“晓”或“小”。\n\n也有少数随母姓者，会在名字中保留宗家字辈。这种情况往往意味着复杂的血缘、监护或身份安排。"
  },
  {
    id: "doc_women_fed",
    title: "云山县妇联创业帮扶登记表",
    year: 2014,
    source: "档案",
    trust: 5,
    keywords: ["陈静", "宗建芳", "创业帮扶", "KTV", "贵州知青", "外婆"],
    summary: "解释陈静与宗建芳的关系不是母女。",
    body: "申请人：陈静，曾用名陈明静。返乡创业项目：唱响 KTV。\n\n帮扶干部：宗建芳。备注：申请人母亲早逝，外婆曾为贵州返城知青。申请人非本干部亲属，因档案关系暂挂教育系统人才窗口。"
  },
  {
    id: "doc_blog_chenjing",
    title: "陈静博客：2014 年 3 月 15 日",
    year: 2014,
    source: "博客",
    trust: 3,
    keywords: ["陈静", "陈明静", "外婆", "外公", "云山", "回县城", "怀孕"],
    summary: "陈静私人日记暗示母系秘密。",
    body: "今天决定回云山县。\n\n我妈以前很少提外公，只说我姥姥年轻时在云山吃过很多苦。有些名字，记住了也不能叫出口。\n\n宗主任说可以先帮我把档案关系挂一下，让我把孩子生下来再考虑工作。我知道她不是我妈，但她确实帮了我。"
  },
  {
    id: "doc_school_forum",
    title: "云山家长汇论坛：县一中家长会",
    year: 2020,
    source: "论坛",
    trust: 2,
    keywords: ["陈小东", "陈嘉东", "县一中", "高二", "年级前十", "陈静"],
    summary: "确认陈小东正式名为陈嘉东。",
    body: "今天开家长会，老师特别表扬高二三班的陈小东。点名册上写的是“陈嘉东”，但她妈妈一直叫她小东。\n\n小东成绩稳定年级前十，性格也开朗。听说她妈妈以前在教育局挂过档案关系，现在开 KTV，一个人带孩子挺不容易。"
  },
  {
    id: "doc_tiktok_chenjing",
    title: "陈静短视频《我的乖女儿》转写",
    year: 2020,
    source: "短视频",
    trust: 2,
    keywords: ["陈静", "陈小东", "陈嘉东", "女儿", "高二", "KTV"],
    summary: "强化陈静与陈小东母女关系。",
    body: "陈静：这是我女儿小东，在县一中读高二，成绩年级前十。\n\n陈小东：妈，你别说了。\n\n陈静：一个人带孩子确实不容易。但小东特别懂事，学习从来不用我操心。"
  },
  {
    id: "doc_dna_record",
    title: "云山县疾控中心亲缘比对记录",
    year: 2019,
    source: "DNA",
    trust: 5,
    keywords: ["陈静", "宗世昌", "DNA", "亲缘", "直系血缘", "罗建宁"],
    summary: "最终确认陈静与宗世昌存在直系血缘。",
    image: {
      src: "assets/images/evidence/dna-record-2019.jpg",
      alt: "2019 年亲缘比对记录扫描图",
      caption: "检测材料影像：比对页、样本袋和实验室标记共同指向正式亲缘鉴定。"
    },
    body: "样本 A：陈明静，女，1988 年生。\n样本 B：宗世昌住院期间留存血样。\n\n鉴定意见：样本 A 与样本 B 符合祖孙辈直系亲缘关系，不排除样本 A 之母为样本 B 亲生子女的可能性。"
  },
  {
    id: "doc_luo_birth",
    title: "黔中地区旧户籍迁入登记",
    year: 1970,
    source: "户籍",
    trust: 5,
    keywords: ["罗建宁", "罗月珍", "建宁", "贵州", "迁入", "1970"],
    summary: "证明罗月珍带着罗建宁回贵州。",
    image: {
      src: "assets/images/evidence/hukou-1970.jpg",
      alt: "1970 年旧户籍迁入登记扫描图",
      caption: "户籍册影像：随迁婴儿登记和空缺父亲栏，是罗建宁身世链条的关键物证。"
    },
    body: "迁入人：罗月珍，女，二十一岁。\n随迁幼女：罗建宁，女，出生年月登记为 1969 年 12 月。\n\n父亲栏：未填。备注：原籍人员返乡，携未满周岁女婴一名。"
  },
  {
    id: "doc_chen_birth",
    title: "陈静出生医学记录复印件",
    year: 1988,
    source: "档案",
    trust: 5,
    keywords: ["陈静", "陈明静", "罗建宁", "母亲", "出生记录"],
    summary: "确认陈静是罗建宁之女。",
    body: "新生儿姓名：陈明静。\n出生日期：1988 年 8 月 19 日。\n母亲姓名：罗建宁。\n父亲姓名：陈某某。\n\n备注：母亲户籍曾在贵州，后迁居江南省。"
  },
  {
    id: "doc_jiadong_school",
    title: "云山县第一中学学生信息表",
    year: 2020,
    source: "学校",
    trust: 4,
    keywords: ["陈嘉东", "陈小东", "陈静", "母亲", "县一中", "2004"],
    summary: "确认陈嘉东是陈静之女。",
    body: "学生姓名：陈嘉东。\n曾用名/小名：陈小东。\n出生日期：2004 年 5 月 3 日。\n监护人：陈静，母亲。\n\n班主任评语：该生学习自律，家庭情况特殊，由母亲独自抚养。"
  },
  {
    id: "doc_gossip_wrong_mother",
    title: "地方论坛《云山茶馆》：陈静身世帖",
    year: 2020,
    source: "论坛",
    trust: 1,
    keywords: ["陈静", "宗建芳", "母女", "教育局", "KTV"],
    summary: "低可信误导：把宗建芳写成陈静母亲。",
    body: "有人说唱响 KTV 的陈静是宗建芳主任的女儿，所以当年才那么容易挂档案、开店。\n\n不过也有人回帖说这只是帮扶关系，陈静亲妈早就不在了。帖子后来被管理员锁定。"
  },
  {
    id: "doc_gossip_li_tianci",
    title: "《云山八卦周刊》：李天赐疑云",
    year: 2020,
    source: "八卦周刊",
    trust: 1,
    keywords: ["李敏", "李天赐", "宗世昌", "信托", "DNA"],
    summary: "干扰线：李天赐被怀疑与信托有关。",
    body: "李敏带儿子李天赐出入鉴定机构，引起外界猜测。有人认为这个孩子的父亲与宗家信托有关。\n\n但周刊没有提供任何正式报告，通篇仅引用匿名爆料。"
  },
  {
    id: "doc_gossip_mingjun",
    title: "地方论坛《云山商界八卦》：宗明军绯闻",
    year: 2020,
    source: "论坛",
    trust: 1,
    keywords: ["宗明军", "表妹", "绯闻", "宗嘉瑞", "世昌集团"],
    summary: "低可信干扰线。",
    body: "网帖称宗明军与表妹关系不清，还牵出某个未婚生子传闻。\n\n帖子内人物称谓多处错误，把宗明欣写成男性，又把不同支系混为一谈，可信度很低。"
  },
  {
    id: "doc_zong_deathbed",
    title: "宗世昌临终录音整理",
    year: 2020,
    source: "录音整理",
    trust: 3,
    keywords: ["宗世昌", "临终", "外面还有一个孩子", "李桂兰", "私生子"],
    summary: "宗世昌临终提到外面的孩子，但没有说完。",
    body: "宗世昌：我这一辈子，最对不起的人是你们的母亲。她跟着我从一无所有开始，吃了太多苦。\n\n宗世昌：还有一件事，我一直没说。其实，我在外面还有一个孩子……\n\n录音到此后出现病房杂音，七天后宗世昌去世。"
  },
  {
    id: "doc_hospital_blood",
    title: "云山县人民医院住院样本留存单",
    year: 2020,
    source: "医院",
    trust: 5,
    keywords: ["宗世昌", "住院", "血样", "样本B", "疾控中心", "DNA"],
    summary: "解释 DNA 记录中的宗世昌血样来源。",
    body: "患者姓名：宗世昌。\n住院号：YS2020-0317。\n样本类型：外周血。\n\n备注：患者家属申请保留样本用于后续继承相关司法鉴定。样本编号与疾控中心亲缘比对记录中的样本 B 一致。"
  },
  {
    id: "doc_notary_meeting",
    title: "云山县公证处接待笔录",
    year: 2020,
    source: "公证",
    trust: 4,
    keywords: ["公证处", "匿名信", "宗建红", "信托", "第七支", "罗建宁"],
    summary: "家族成员第一次正式面对第七支血脉。",
    body: "2020 年 9 月，世昌集团方面就家族信托受益人范围向本处咨询。宗建红称匿名信内容“荒唐”，但同时要求查询 1968 至 1970 年间县供销系统知青档案。\n\n接待人员备注：来访人尤其关注“罗姓女知青”和“建宁”两个关键词。"
  },
  {
    id: "doc_supply_roster",
    title: "县供销系统仓储点临时工花名册",
    year: 1969,
    source: "档案",
    trust: 5,
    keywords: ["供销系统", "仓储点", "宗世昌", "罗月珍", "临时工", "1969"],
    summary: "证明宗世昌与罗月珍曾在同一系统工作。",
    body: "1969 年仓储点临时用工登记显示：宗世昌负责夜间值守与货物调拨，罗月珍负责出入库抄录。\n\n两人姓名在 1969 年 2 月至 8 月期间多次出现在同一值班表上。"
  },
  {
    id: "doc_old_postcard",
    title: "旧明信片残片",
    year: 1971,
    source: "私人收藏",
    trust: 3,
    keywords: ["月珍", "建宁", "贵州", "明信片", "宗世昌"],
    summary: "私人收藏，不能单独定案，但与强证据互相印证。",
    body: "明信片寄出地为贵州，收件人为云山县供销社宿舍“宗 S”。\n\n残存文字：“建宁会走路了。你不用再寄钱，我也不会回去。月珍。”\n\n明信片没有完整收件人姓名，因此只能作为辅助证据。"
  },
  {
    id: "doc_ktv_license",
    title: "唱响 KTV 个体工商登记",
    year: 2015,
    source: "工商",
    trust: 5,
    keywords: ["陈静", "唱响KTV", "工商登记", "陈明静", "2015"],
    summary: "确认陈静曾用名与创业时间。",
    body: "经营者：陈静。\n曾用名：陈明静。\n经营场所：云山县云山镇老电影院二楼。\n成立日期：2015 年 5 月 12 日。\n\n登记材料中附有县妇联创业帮扶证明复印件。"
  },
  {
    id: "doc_talent_window",
    title: "云山县教育局人才窗口档案挂靠说明",
    year: 2014,
    source: "教育局",
    trust: 4,
    keywords: ["陈静", "档案挂靠", "教育局", "宗建芳", "误传"],
    summary: "解释为什么外界误以为陈静在教育局上班。",
    body: "陈静档案关系于 2014 年短期挂靠教育局人才服务窗口。该挂靠不构成劳动关系，也非正式入职。\n\n经办意见：由县妇联宗建芳转介，属返乡女性创业扶持配套手续。"
  },
  {
    id: "doc_family_meeting",
    title: "世昌集团家族会议纪要节选",
    year: 2020,
    source: "内部文件",
    trust: 3,
    keywords: ["家族会议", "宗建红", "宗建芳", "罗月珍", "第七支", "信托"],
    summary: "家族内部有人知道罗月珍的名字。",
    body: "宗建红：我父亲只有六个公开子女。\n宗建民：公开的不代表全部。\n宗建芳：如果你们真要查，就去查供销社旧档，不要只盯着现在这些孩子。\n\n会议末尾有人提到“罗月珍”三个字，但录音不清，纪要员未做正式记录。"
  },
  {
    id: "doc_false_peng",
    title: "地方论坛《云山茶馆》：贵州男友误认帖",
    year: 2020,
    source: "论坛",
    trust: 1,
    keywords: ["陈静", "贵州男友", "彭宗日", "误认", "陈小东"],
    summary: "解释陈静线的一个错误方向。",
    body: "有网友把陈静早年男友与电竞选手彭宗日联系起来，称“照片像”。\n\n但彭宗日 2000 年生，2008 年仅 8 岁，不可能是陈静早年恋人。该帖后续被多人指出年龄不符。"
  }
];

const relationPrompts = [
  {
    id: "rel_public_family",
    title: "公开家庭核验",
    prompt: "公开资料中，宗世昌的妻子是谁？",
    slots: ["丈夫", "妻子", "证据"],
    correct: ["zong_shichang", "li_guilan", "doc_official_family"],
    requiredEvidence: ["doc_official_family"]
  },
  {
    id: "rel_chen_jianfang",
    title: "误认关系澄清",
    prompt: "陈静为什么会被误认为宗建芳的女儿？",
    slots: ["帮扶干部", "挂靠说明", "帮扶档案"],
    correct: ["zong_jianfang", "doc_talent_window", "doc_women_fed"],
    requiredEvidence: ["doc_talent_window", "doc_women_fed"]
  },
  {
    id: "rel_zong_luo",
    title: "隐藏血脉第一代",
    prompt: "谁是宗世昌的非婚生女？",
    slots: ["父亲", "母亲", "子女"],
    correct: ["zong_shichang", "luo_yuezhen", "luo_jianning"],
    requiredEvidence: ["doc_photo_back", "doc_luo_birth"]
  },
  {
    id: "rel_luo_chen",
    title: "第二代承接",
    prompt: "陈静的母亲是谁？",
    slots: ["母亲", "子女", "辅助证据"],
    correct: ["luo_jianning", "chen_jing", "doc_chen_birth"],
    requiredEvidence: ["doc_chen_birth", "doc_dna_record"]
  },
  {
    id: "rel_chen_child",
    title: "云山现居后代",
    prompt: "陈小东的正式身份是什么？",
    slots: ["母亲", "子女", "辅助证据"],
    correct: ["chen_jing", "chen_jiadong", "doc_jiadong_school"],
    requiredEvidence: ["doc_school_forum", "doc_jiadong_school"]
  },
  {
    id: "rel_trust",
    title: "继承资格",
    prompt: "哪份文件证明不姓宗也可继承？",
    slots: ["信托文件", "血缘证明", "现居后代"],
    correct: ["doc_trust_clause", "doc_dna_record", "chen_jiadong"],
    requiredEvidence: ["doc_trust_clause"]
  }
];

const sourceLabels = ["全部", ...Array.from(new Set(documents.map((doc) => doc.source)))];

const updateLogs = [
  {
    date: "2026-05-15",
    title: "关系冲突提示",
    changes: [
      "关键关系卡新增冲突提示，区分人物不吻合、强证据缺失和弱证据干扰",
      "提示会给出下一步可搜索关键词，减少玩家在家谱页反复试错",
      "错误关系选择会播放冲突音效，正确闭环仍播放确认音效"
    ],
    checks: [
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-15",
    title: "阶段提示接入",
    changes: [
      "侧边栏新增动态阶段提示卡",
      "阶段提示会根据阅读、证据收藏和关系完成度推荐下一步搜索或跳转",
      "玩家可直接点击阶段按钮进入资料库、家谱或最终提交"
    ],
    checks: [
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-15",
    title: "关键证据图接入",
    changes: [
      "为照片背注、信托文件、DNA 记录、户籍迁入登记补充证据图片",
      "资料库结果、资料详情和证据箱都会显示已绑定的证据图",
      "项目内引用版已压缩为 JPG，降低静态页面加载体积"
    ],
    checks: [
      "npm run validate passed",
      "npm run smoke passed"
    ],
  },
  {
    date: "2026-05-15",
    title: "烟测与内容校验加固",
    changes: [
      "run_smoke.ps1 会检查 Edge 退出码、DOM 文件存在性和非空内容",
      "烟测保留 autotest pass 与提交成功断言，避免空 DOM 误判通过",
      "validate 增加内容包提交答案与 app.js 提交逻辑一致性检查"
    ],
    checks: [
      "npm run validate passed",
      "npm run smoke passed"
    ]
  },
  {
    date: "2026-05-15",
    title: "游戏内更新日志",
    changes: [
      "新增侧边栏“更新日志”标签页",
      "新增更新日志视图容器与列表节点",
      "renderUpdates() 已接入 renderAll()，用于记录稳定变更和验证结果"
    ],
    checks: [
      "npm run validate passed",
      "npm run smoke passed"
    ]
  },
  {
    date: "2026-05-15",
    title: "未来美术清单校验",
    changes: [
      "新增 future-assets 清单校验脚本，检查资产字段、重复 ID、重复路径和 PNG 文件存在性",
      "校验覆盖背景、人物、旧照片、文档模板、网页界面、宣传图和 UI 参考图的最低数量",
      "package.json validate 链已接入该脚本，防止后续移动或删图造成静默断链"
    ],
    checks: [
      "node tools/validate_future_assets.mjs passed",
      "tools/run_smoke.ps1 passed"
    ]
  }
];

const state = {
  query: "",
  source: "全部",
  selectedDoc: null,
  readDocs: new Set(),
  collected: new Set(),
  relationAnswers: {},
  report: { heir: "", descendant: "" },
  sound: true,
  ambient: false,
  notes: ""
};

const phaseGoals = [
  {
    title: "建立公开版本",
    prompt: "先读公开家庭资料，确认宗世昌与李桂兰的六名公开子女。",
    actionLabel: "搜索宗世昌",
    query: "宗世昌",
    view: "search",
    done: () => state.readDocs.has("doc_official_family")
  },
  {
    title: "确认继承规则",
    prompt: "找到信托条款，并把它加入证据箱，确认不姓宗也可能继承。",
    actionLabel: "搜索信托",
    query: "信托",
    view: "search",
    done: () => state.collected.has("doc_trust_clause")
  },
  {
    title: "追踪罗月珍线",
    prompt: "用知青、照片背注和户籍资料锁定罗月珍与罗建宁。",
    actionLabel: "搜索罗月珍",
    query: "罗月珍",
    view: "search",
    done: () => state.collected.has("doc_photo_back") && state.collected.has("doc_luo_birth")
  },
  {
    title: "串起陈静母系",
    prompt: "收集陈静出生记录、陈嘉东学籍和 DNA 记录，补齐现居后代链条。",
    actionLabel: "搜索陈静",
    query: "陈静",
    view: "search",
    done: () => state.collected.has("doc_chen_birth") && state.collected.has("doc_jiadong_school") && state.collected.has("doc_dna_record")
  },
  {
    title: "绑定关键关系",
    prompt: "回到家谱页，为六条关键关系选择人物并绑定强证据。",
    actionLabel: "打开家谱",
    view: "tree",
    done: () => relationPrompts.every(isRelationCorrect)
  },
  {
    title: "提交最终报告",
    prompt: "选择罗建宁与陈嘉东，提交第七支血脉和继承资格判断。",
    actionLabel: "打开提交",
    view: "report",
    done: () => relationPrompts.every(isRelationCorrect) && state.report.heir === "luo_jianning" && state.report.descendant === "chen_jiadong"
  }
];

const els = {};
const audio = {
  click: new Audio("assets/audio/sfx/ui-click.wav"),
  search: new Audio("assets/audio/sfx/search-start.wav"),
  paper: new Audio("assets/audio/sfx/paper-open.wav"),
  evidence: new Audio("assets/audio/sfx/evidence-added.wav"),
  ok: new Audio("assets/audio/sfx/relation-ok.wav"),
  conflict: new Audio("assets/audio/sfx/relation-conflict.wav"),
  ambient: new Audio("assets/audio/bgm/archive-room-bed.wav")
};

const voiceAssets = {
  chen: {
    preferred: "assets/audio/voice/chen-jing-blog-edge.mp3",
    fallback: "assets/audio/voice/chen-jing-blog.wav"
  },
  anonymous: {
    preferred: "assets/audio/voice/anonymous-call-edge.mp3",
    fallback: "assets/audio/voice/anonymous-call.wav"
  },
  deathbed: {
    preferred: "assets/audio/voice/zong-deathbed-edge.mp3",
    fallback: "assets/audio/voice/zong-deathbed.wav"
  }
};

let activeVoiceClip = null;

audio.ambient.loop = true;
audio.ambient.volume = 0.35;

function $(id) {
  return document.getElementById(id);
}

function saveState() {
  const serializable = {
    query: state.query,
    source: state.source,
    selectedDoc: state.selectedDoc,
    readDocs: [...state.readDocs],
    collected: [...state.collected],
    relationAnswers: state.relationAnswers,
    report: state.report,
    sound: state.sound,
    ambient: state.ambient,
    notes: state.notes
  };
  localStorage.setItem("yunshan-save", JSON.stringify(serializable));
}

function loadState() {
  const raw = localStorage.getItem("yunshan-save");
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    state.query = parsed.query || "";
    state.source = parsed.source || "全部";
    state.selectedDoc = parsed.selectedDoc || null;
    state.readDocs = new Set(parsed.readDocs || []);
    state.collected = new Set(parsed.collected || []);
    state.relationAnswers = parsed.relationAnswers || {};
    state.report = parsed.report || { heir: "", descendant: "" };
    state.sound = parsed.sound !== false;
    state.ambient = parsed.ambient === true;
    state.notes = parsed.notes || "";
  } catch {
    localStorage.removeItem("yunshan-save");
  }
}

function playSound(name) {
  if (!state.sound || !audio[name]) return;
  const clip = audio[name];
  clip.currentTime = 0;
  clip.play().catch(() => {});
}

function playVoice(key) {
  if (!state.sound || !voiceAssets[key]) return;
  if (activeVoiceClip) {
    activeVoiceClip.pause();
    activeVoiceClip.currentTime = 0;
  }

  const asset = voiceAssets[key];
  const clip = new Audio(asset.preferred);
  activeVoiceClip = clip;
  clip.addEventListener("error", () => {
    if (activeVoiceClip !== clip) return;
    const fallback = new Audio(asset.fallback);
    activeVoiceClip = fallback;
    fallback.play().catch(() => {});
  }, { once: true });
  clip.play().catch(() => {
    const fallback = new Audio(asset.fallback);
    activeVoiceClip = fallback;
    fallback.play().catch(() => {});
  });
}

function trustBadge(doc) {
  if (doc.trust >= 5) return `<span class="badge high">可信度高</span>`;
  if (doc.trust >= 3) return `<span class="badge warn">需交叉验证</span>`;
  return `<span class="badge low">低可信</span>`;
}

function sourceKind(source) {
  if (["档案", "户籍", "公证", "工商", "教育局", "学校", "医院"].includes(source)) return "archive";
  if (["信托", "DNA"].includes(source)) return "legal";
  if (["论坛", "短视频", "博客", "八卦周刊"].includes(source)) return "web";
  if (["内部文件", "录音整理", "私人收藏"].includes(source)) return "private";
  return "press";
}

function getDocImage(doc) {
  return doc.image || null;
}

const documentDetailImages = {
  doc_trust_clause: [
    {
      src: "assets/images/future-assets/documents/trust-agreement-cover.png",
      alt: "\u4fe1\u6258\u534f\u8bae\u9996\u9875\u6a21\u677f",
      caption: "\u8865\u5145\u7f8e\u672f\uff1a\u4fe1\u6258\u534f\u8bae\u9996\u9875\u5e95\u56fe\uff0c\u7528\u4e8e\u540e\u7eed\u7cbe\u4fee\u7248\u8bc1\u636e\u5c55\u793a\u3002"
    }
  ],
  doc_photo_back: [
    {
      src: "assets/images/future-assets/documents/old-photo-back-template.png",
      alt: "\u65e7\u7167\u7247\u80cc\u9762\u6a21\u677f",
      caption: "\u8865\u5145\u7f8e\u672f\uff1a\u65e7\u7167\u7247\u80cc\u9762\u5e95\u56fe\uff0c\u4fdd\u7559\u7ed9\u7ebf\u7d22\u6279\u6ce8\u53e0\u52a0\u4f7f\u7528\u3002"
    }
  ],
  doc_dna_record: [
    {
      src: "assets/images/future-assets/documents/dna-report-template.png",
      alt: "DNA\u62a5\u544a\u6a21\u677f",
      caption: "\u8865\u5145\u7f8e\u672f\uff1a2019 \u5e74 DNA \u62a5\u544a\u5e95\u56fe\uff0c\u540e\u7eed\u53ef\u53e0\u52a0\u7cbe\u786e\u6587\u5b57\u548c\u6807\u6ce8\u3002"
    }
  ],
  doc_luo_birth: [
    {
      src: "assets/images/future-assets/documents/hukou-transfer-page.png",
      alt: "\u6237\u53e3\u8fc1\u79fb\u9875\u6a21\u677f",
      caption: "\u8865\u5145\u7f8e\u672f\uff1a\u6237\u53e3\u8fc1\u79fb\u9875\u5e95\u56fe\uff0c\u7528\u4e8e\u5f3a\u5316\u7f57\u5efa\u5b81\u8eab\u4e16\u94fe\u6761\u3002"
    }
  ],
  doc_chen_birth: [
    {
      src: "assets/images/future-assets/documents/birth-registration-form.png",
      alt: "\u51fa\u751f\u767b\u8bb0\u8868\u6a21\u677f",
      caption: "\u8865\u5145\u7f8e\u672f\uff1a\u51fa\u751f\u767b\u8bb0\u8868\u5e95\u56fe\uff0c\u9002\u5408\u540e\u7eed\u53e0\u52a0\u9648\u9759\u6863\u6848\u4fe1\u606f\u3002"
    }
  ],
  doc_women_fed: [
    {
      src: "assets/images/future-assets/documents/medical-record-cover.png",
      alt: "\u6863\u6848\u8868\u5355\u6a21\u677f",
      caption: "\u8865\u5145\u7f8e\u672f\uff1a\u6863\u6848\u8868\u5355\u5e95\u56fe\uff0c\u4e34\u65f6\u4f5c\u4e3a\u5987\u8054\u6276\u6301\u767b\u8bb0\u7c7b\u8d44\u6599\u7684\u89c6\u89c9\u53c2\u8003\u3002"
    }
  ],
  doc_group_history: [
    {
      src: "assets/images/future-assets/web-ui/corporate-leadership-page.png",
      alt: "\u4f01\u4e1a\u5b98\u7f51\u9886\u5bfc\u9875\u622a\u56fe",
      caption: "\u8865\u5145\u7f8e\u672f\uff1a\u4f01\u4e1a\u5b98\u7f51\u9875\u9762\u53c2\u8003\uff0c\u7528\u4e8e\u540e\u7eed\u96c6\u56e2\u7ebf\u7d22\u89c6\u89c9\u5316\u3002"
    }
  ],
  doc_school_forum: [
    {
      src: "assets/images/future-assets/web-ui/local-forum-2008.png",
      alt: "\u5730\u65b9\u8bba\u575b\u622a\u56fe\u53c2\u8003",
      caption: "\u8865\u5145\u7f8e\u672f\uff1a\u5730\u65b9\u8bba\u575b\u622a\u56fe\u53c2\u8003\uff0c\u4e0d\u4f5c\u4e3a\u6b63\u5f0f\u8bc1\u636e\u6587\u5b57\u6765\u6e90\u3002"
    }
  ],
  doc_blog_chenjing: [
    {
      src: "assets/images/future-assets/web-ui/personal-blog-2014.png",
      alt: "\u4e2a\u4eba\u535a\u5ba2\u622a\u56fe\u53c2\u8003",
      caption: "\u8865\u5145\u7f8e\u672f\uff1a2014 \u5e74\u4e2a\u4eba\u535a\u5ba2\u622a\u56fe\u53c2\u8003\uff0c\u540e\u7eed\u53ef\u63a5\u6210\u4e92\u8054\u7f51\u7ebf\u7d22\u754c\u9762\u3002"
    }
  ],
  doc_tiktok_chenjing: [
    {
      src: "assets/images/future-assets/web-ui/short-video-comments-2020.png",
      alt: "\u77ed\u89c6\u9891\u8bc4\u8bba\u622a\u56fe\u53c2\u8003",
      caption: "\u8865\u5145\u7f8e\u672f\uff1a\u77ed\u89c6\u9891\u8bc4\u8bba\u622a\u56fe\u53c2\u8003\uff0c\u540e\u7eed\u53ef\u7528\u4e8e\u793e\u4ea4\u5a92\u4f53\u7ebf\u7d22\u5c42\u3002"
    }
  ]
};

function docDetailImageFigures(doc) {
  const images = documentDetailImages[doc.id] || [];
  if (!images.length) return "";
  return `
    <section class="doc-detail-gallery" aria-label="\u8865\u5145\u7f8e\u672f\u8d44\u6e90">
      <h4>\u8865\u5145\u7f8e\u672f\u8d44\u6e90</h4>
      <div class="doc-detail-grid">
        ${images.map((image) => `
          <figure class="doc-image doc-image-detail">
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <figcaption>${image.caption}</figcaption>
          </figure>
        `).join("")}
      </div>
    </section>
  `;
}

function docImageFigure(doc, size = "full") {
  const image = getDocImage(doc);
  if (!image) return "";
  return `
    <figure class="doc-image doc-image-${size}">
      <img src="${image.src}" alt="${image.alt}" loading="lazy">
      <figcaption>${image.caption}</figcaption>
    </figure>
  `;
}

function docMatches(doc) {
  const query = state.query.trim().toLowerCase();
  const sourceOk = state.source === "全部" || doc.source === state.source;
  if (!sourceOk) return false;
  if (!query) return true;
  const haystack = [doc.title, doc.summary, doc.body, doc.source, String(doc.year), ...doc.keywords]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function renderFilters() {
  els.sourceFilters.innerHTML = sourceLabels.map((source) => {
    const active = source === state.source ? "is-active" : "";
    return `<button class="${active}" data-source="${source}">${source}</button>`;
  }).join("");
}

function renderResults() {
  const hasQuery = Boolean(state.query.trim());
  const results = documents
    .map((doc, index) => ({ doc, index }))
    .filter(({ doc }) => docMatches(doc))
    .sort((a, b) => {
      if (!hasQuery && state.source === "全部") return a.index - b.index;
      return b.doc.trust - a.doc.trust || b.doc.year - a.doc.year || a.index - b.index;
    })
    .map(({ doc }) => doc);
  els.resultList.innerHTML = results.map((doc) => {
    const read = state.readDocs.has(doc.id) ? "is-read" : "";
    const imageData = getDocImage(doc);
    const image = imageData ? `<img class="result-thumb" src="${imageData.src}" alt="" loading="lazy">` : "";
    return `
      <button class="result-card ${read} ${imageData ? "has-image" : ""}" data-doc-id="${doc.id}">
        ${image}
        <div>
          <h4>${doc.title}</h4>
          <div class="meta-line">
            <span class="badge">${doc.year}</span>
            <span class="badge">${doc.source}</span>
            ${trustBadge(doc)}
            ${state.collected.has(doc.id) ? '<span class="badge high">已收藏</span>' : ""}
          </div>
          <p>${doc.summary}</p>
        </div>
      </button>
    `;
  }).join("") || `<div class="empty-state"><h3>没有找到资料</h3><p>换一个人物名、年份或来源试试。</p></div>`;
}

function renderDocument() {
  if (!state.selectedDoc) {
    els.documentEmpty.hidden = false;
    els.documentView.hidden = true;
    return;
  }
  const doc = documents.find((item) => item.id === state.selectedDoc);
  if (!doc) return;
  state.readDocs.add(doc.id);
  els.documentEmpty.hidden = true;
  els.documentView.hidden = false;
  els.documentView.innerHTML = `
    <header>
      <h3>${doc.title}</h3>
      <div class="meta-line">
        <span class="badge">${doc.year}</span>
        <span class="badge">${doc.source}</span>
        ${trustBadge(doc)}
      </div>
    </header>
    ${docImageFigure(doc)}
    ${docDetailImageFigures(doc)}
    <div class="document-body doc-kind-${sourceKind(doc.source)}">
      <span class="doc-watermark">${doc.source}</span>
      ${doc.body}
    </div>
    <div class="doc-actions">
      <button id="collect-doc" class="${state.collected.has(doc.id) ? "is-collected" : ""}">
        ${state.collected.has(doc.id) ? "已加入证据箱" : "加入证据箱"}
      </button>
      <button id="copy-keywords">查看关键词：${doc.keywords.slice(0, 5).join(" / ")}</button>
    </div>
  `;
}

function renderPeople() {
  els.peopleList.innerHTML = people.map((person) => `
    <article class="person-card">
      <div class="person-head">
        <div class="avatar">${person.name.slice(0, 1)}</div>
        <div>
          <h4>${person.name}</h4>
          <div class="person-meta">
            <span class="badge">${person.birth}${person.death ? `-${person.death}` : ""}</span>
            <span class="badge">${person.role}</span>
          </div>
        </div>
      </div>
      <p>${person.note}</p>
    </article>
  `).join("");
}

function selectOptions(kind) {
  const personOptions = people.map((p) => `<option value="${p.id}">${p.name}（${p.birth}）</option>`).join("");
  const docOptions = documents.map((d) => `<option value="${d.id}">${d.title}</option>`).join("");
  if (kind.includes("文件") || kind.includes("证明") || kind.includes("证据") || kind.includes("档案") || kind.includes("说明")) return docOptions;
  return personOptions;
}

function itemLabel(id) {
  return people.find((person) => person.id === id)?.name
    || documents.find((doc) => doc.id === id)?.title
    || id;
}

function relationSearchHint(rel) {
  return rel.requiredEvidence
    .map((docId) => documents.find((doc) => doc.id === docId)?.keywords?.[0])
    .filter(Boolean)
    .join("、");
}

function hasRelationInput(answer) {
  return Boolean(answer?.slots?.some(Boolean) || answer?.evidence?.length);
}

function relationFeedback(rel, answer) {
  if (!hasRelationInput(answer)) {
    return [];
  }

  const feedback = [];
  rel.correct.forEach((value, index) => {
    const selected = answer.slots?.[index];
    if (selected && selected !== value) {
      feedback.push(`${rel.slots[index]}“${itemLabel(selected)}”与强证据不吻合。`);
    }
  });

  const selectedDocs = new Set([...(answer.slots || []), ...(answer.evidence || [])]);
  const missingEvidence = rel.requiredEvidence.filter((docId) => !selectedDocs.has(docId));
  if (missingEvidence.length > 0) {
    feedback.push(`缺少强证据：${missingEvidence.map(itemLabel).join("、")}。`);
  }

  const weakEvidence = (answer.evidence || [])
    .map((docId) => documents.find((doc) => doc.id === docId))
    .filter((doc) => doc && doc.trust < 3 && !rel.requiredEvidence.includes(doc.id));
  if (weakEvidence.length > 0) {
    feedback.push(`已绑定弱来源：${weakEvidence.map((doc) => doc.title).join("、")}，它们只能辅助排除传闻。`);
  }

  if (feedback.length === 0 && !isRelationCorrect(rel)) {
    feedback.push("人物选择接近，但证据链还没有闭合。");
  }

  const searchHint = relationSearchHint(rel);
  if (searchHint && !isRelationCorrect(rel)) {
    feedback.push(`建议回资料库搜索：${searchHint}。`);
  }

  return feedback;
}

function hasRelationConflict(rel) {
  const answer = state.relationAnswers[rel.id];
  return hasRelationInput(answer) && !isRelationCorrect(rel);
}

function renderRelations() {
  els.relationList.innerHTML = relationPrompts.map((rel) => {
    const answer = state.relationAnswers[rel.id] || { slots: ["", "", ""], evidence: [] };
    const complete = isRelationCorrect(rel);
    const feedback = relationFeedback(rel, answer);
    const status = complete
      ? `<div class="relation-status ok">已确认：关系和证据均吻合</div>`
      : `<div class="relation-status bad">待确认：请补充正确人物和必要证据</div>`;
    const feedbackHtml = complete || feedback.length === 0
      ? ""
      : `<ul class="relation-feedback">${feedback.map((item) => `<li>${item}</li>`).join("")}</ul>`;

    return `
      <article class="relation-card" data-relation-id="${rel.id}">
        <div>
          <h4>${rel.title}</h4>
          <p>${rel.prompt}</p>
        </div>
        <div class="relation-grid">
          ${rel.slots.map((slot, index) => `
            <label>
              <span class="field-label">${slot}</span>
              <select data-slot-index="${index}">
                <option value="">未选择</option>
                ${selectOptions(slot)}
              </select>
            </label>
          `).join("")}
        </div>
        <div>
          <strong>绑定证据</strong>
          <div class="evidence-options">
            ${[...state.collected].map((docId) => {
              const doc = documents.find((item) => item.id === docId);
              const checked = answer.evidence?.includes(docId) ? "checked" : "";
              return `<label><input type="checkbox" value="${docId}" ${checked}>${doc?.title || docId}</label>`;
            }).join("") || '<p class="hint">证据箱为空。先去资料库收藏资料。</p>'}
          </div>
        </div>
        ${status}
        ${feedbackHtml}
      </article>
    `;
  }).join("");

  relationPrompts.forEach((rel) => {
    const card = els.relationList.querySelector(`[data-relation-id="${rel.id}"]`);
    const answer = state.relationAnswers[rel.id] || { slots: ["", "", ""], evidence: [] };
    card.querySelectorAll("select").forEach((select, index) => {
      select.value = answer.slots?.[index] || "";
    });
  });
}

function isRelationCorrect(rel) {
  const answer = state.relationAnswers[rel.id];
  if (!answer) return false;
  const slotsOk = rel.correct.every((value, index) => answer.slots?.[index] === value);
  const selectedDocs = new Set([...(answer.slots || []), ...(answer.evidence || [])]);
  const evidenceOk = rel.requiredEvidence.every((id) => selectedDocs.has(id));
  return slotsOk && evidenceOk;
}

function renderEvidence() {
  const ids = [...state.collected];
  els.evidenceList.innerHTML = ids.map((docId) => {
    const doc = documents.find((item) => item.id === docId);
    return `
      <article class="evidence-card">
        ${docImageFigure(doc, "card")}
        <h4>${doc.title}</h4>
        <div class="meta-line">
          <span class="badge">${doc.year}</span>
          <span class="badge">${doc.source}</span>
          ${trustBadge(doc)}
        </div>
        <p>${doc.summary}</p>
      </article>
    `;
  }).join("") || `<div class="empty-state"><h3>证据箱为空</h3><p>打开资料后点击“加入证据箱”。</p></div>`;
}

function renderReportOptions() {
  const options = people.map((person) => `<option value="${person.id}">${person.name}（${person.role}）</option>`).join("");
  els.heirSelect.innerHTML = `<option value="">未选择</option>${options}`;
  els.descendantSelect.innerHTML = `<option value="">未选择</option>${options}`;
  els.heirSelect.value = state.report.heir || "";
  els.descendantSelect.value = state.report.descendant || "";
}

function discoveredKeywords() {
  const counts = new Map();
  for (const docId of state.readDocs) {
    const doc = documents.find((item) => item.id === docId);
    if (!doc) continue;
    for (const keyword of doc.keywords) {
      counts.set(keyword, (counts.get(keyword) || 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-CN"))
    .slice(0, 36)
    .map(([keyword]) => keyword);
}

function renderNotes() {
  if (els.notesInput && els.notesInput.value !== state.notes) {
    els.notesInput.value = state.notes;
  }
  const keywords = discoveredKeywords();
  els.keywordList.innerHTML = keywords.map((keyword) => `<button data-keyword="${keyword}">${keyword}</button>`).join("")
    || `<p class="hint">阅读资料后会出现关键词。</p>`;
}

function renderUpdates() {
  if (!els.updateLogList) return;
  els.updateLogList.innerHTML = updateLogs.map((log) => `
    <article class="update-log-item">
      <header class="update-log-head">
        <strong>${log.date}</strong>
        <span>${log.title}</span>
      </header>
      <div class="update-log-body">
        <h4>\u53d8\u66f4\u5185\u5bb9</h4>
        <ul>${log.changes.map((item) => `<li>${item}</li>`).join("")}</ul>
        <h4>\u9a8c\u8bc1\u7ed3\u679c</h4>
        <ul>${log.checks.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");
}

function renderCounters() {
  $("read-count").textContent = `${state.readDocs.size} / ${documents.length}`;
  $("evidence-count").textContent = `${state.collected.size}`;
  const correctCount = relationPrompts.filter(isRelationCorrect).length;
  $("relation-count").textContent = `${correctCount} / ${relationPrompts.length}`;
  $("sound-btn").textContent = `声音：${state.sound ? "开" : "关"}`;
  $("ambient-btn").textContent = `环境音：${state.ambient ? "开" : "关"}`;
}

function renderPhaseGoal() {
  if (!els.phaseGoalBody) return;
  const completed = phaseGoals.filter((goal) => goal.done()).length;
  const current = phaseGoals.find((goal) => !goal.done()) || phaseGoals[phaseGoals.length - 1];
  const progress = Math.round((completed / phaseGoals.length) * 100);
  const queryAttr = current.query ? ` data-phase-query="${current.query}"` : "";
  els.phaseGoalBody.innerHTML = `
    <div class="phase-step">
      <div class="phase-progress" aria-label="阶段进度 ${completed}/${phaseGoals.length}">
        <span style="width: ${progress}%"></span>
      </div>
      <h3>${current.title}</h3>
      <p>${current.prompt}</p>
      <button class="phase-action" data-phase-view="${current.view}"${queryAttr}>${current.actionLabel}</button>
    </div>
  `;
}

function renderLeads() {
  const leads = [
    {
      done: state.readDocs.has("doc_official_family"),
      text: "先确认公开六子女，不要急着相信论坛。"
    },
    {
      done: state.readDocs.has("doc_trust_clause"),
      text: "找到信托条款，确认“不姓宗也可能继承”。"
    },
    {
      done: state.readDocs.has("doc_educated_youth") && state.readDocs.has("doc_photo_back"),
      text: "追踪贵州女知青罗月珍和“建宁”两个关键词。"
    },
    {
      done: state.readDocs.has("doc_chen_birth") && state.readDocs.has("doc_jiadong_school"),
      text: "确认陈静、陈嘉东之间的母女关系。"
    },
    {
      done: relationPrompts.every(isRelationCorrect),
      text: "把所有关键关系全部绑定强证据。"
    }
  ];
  $("lead-list").innerHTML = leads.map((lead) => `
    <div class="lead-item ${lead.done ? "done" : ""}">
      <span>${lead.done ? "✓" : "□"}</span>
      <span>${lead.text}</span>
    </div>
  `).join("");
}

function renderAll() {
  els.query.value = state.query;
  renderFilters();
  renderResults();
  renderDocument();
  renderPeople();
  renderRelations();
  renderEvidence();
  renderReportOptions();
  renderNotes();
  renderUpdates();
  renderCounters();
  renderPhaseGoal();
  renderLeads();
  saveState();
}

function switchView(viewName) {
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === viewName));
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
  $(`${viewName}-view`).classList.add("is-active");
  $("view-title").textContent = { search: "\u8d44\u6599\u5e93", tree: "\u5bb6\u8c31", evidence: "\u8bc1\u636e\u7bb1", notes: "\u7b14\u8bb0", updates: "\u66f4\u65b0\u65e5\u5fd7", report: "\u63d0\u4ea4" }[viewName];
}

function submitReport() {
  const relationOk = relationPrompts.every(isRelationCorrect);
  const heirOk = state.report.heir === "luo_jianning";
  const descendantOk = state.report.descendant === "chen_jiadong";
  const result = $("report-result");

  if (relationOk && heirOk && descendantOk) {
    result.className = "report-result success";
    result.innerHTML = `
      <strong>提交成功。</strong>
      <p>结论：罗建宁是宗世昌与罗月珍的非婚生女，属于家族信托所称直系血亲后代。陈静为罗建宁之女，按 1998 年香港家族信托条款同样具备继承资格；陈嘉东为陈静之女，虽不姓宗，仍是 2020 年现居云山且具继承资格的后代。</p>
      <div class="chain-review">
        <h4>证据链回顾</h4>
        <ol>
          <li>公开版本只承认宗世昌与李桂兰的六名子女。</li>
          <li>知青名册和供销系统花名册证明罗月珍曾与宗世昌在云山有交集。</li>
          <li>1969 年照片背注和旧户籍共同指向罗建宁。</li>
          <li>陈静出生记录确认其母为罗建宁。</li>
          <li>陈嘉东学籍确认其为陈静之女。</li>
          <li>DNA 亲缘比对和信托条款共同确认陈静一支的继承资格。</li>
        </ol>
      </div>
    `;
  } else {
    const missing = [];
    if (!relationOk) missing.push("关键关系或绑定证据仍有错误");
    if (!heirOk) missing.push("隐藏血脉第一代后代判断不正确");
    if (!descendantOk) missing.push("2020 年现居云山且具资格的后代判断不正确");
    result.className = "report-result fail";
    result.innerHTML = `
      <strong>提交失败。</strong>
      <ul>${missing.map((item) => `<li>${item}</li>`).join("")}</ul>
      <p>提示：不要只看论坛传闻。信托条款、照片背注、户籍和 DNA 记录才是强证据。</p>
    `;
  }
}

function runAutotest() {
  state.readDocs = new Set(documents.map((doc) => doc.id));
  state.collected = new Set([
    "doc_photo_back",
    "doc_luo_birth",
    "doc_chen_birth",
    "doc_dna_record",
    "doc_school_forum",
    "doc_jiadong_school",
    "doc_trust_clause",
    "doc_official_family",
    "doc_talent_window",
    "doc_women_fed"
  ]);
  state.relationAnswers = {};
  for (const rel of relationPrompts) {
    state.relationAnswers[rel.id] = {
      slots: [...rel.correct],
      evidence: [...rel.requiredEvidence]
    };
  }
  state.report = { heir: "luo_jianning", descendant: "chen_jiadong" };
  switchView("report");
  renderAll();
  submitReport();
  document.body.dataset.autotest = $("report-result").classList.contains("success") ? "pass" : "fail";
}

function maybeRunAutotest() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("autotest") === "1") {
    runAutotest();
  }
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => switchView(tab.dataset.view)));
  els.phaseGoalBody.addEventListener("click", (event) => {
    const button = event.target.closest("[data-phase-view]");
    if (!button) return;
    if (button.dataset.phaseQuery) {
      state.query = button.dataset.phaseQuery;
      state.source = "全部";
      switchView("search");
      playSound("search");
    } else {
      switchView(button.dataset.phaseView);
      playSound("click");
    }
    renderAll();
  });
  els.searchBtn.addEventListener("click", () => {
    state.query = els.query.value;
    playSound("search");
    renderAll();
  });
  els.query.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      state.query = els.query.value;
      playSound("search");
      renderAll();
    }
  });
  els.sourceFilters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-source]");
    if (!button) return;
    state.source = button.dataset.source;
    playSound("click");
    renderAll();
  });
  els.resultList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-doc-id]");
    if (!card) return;
    state.selectedDoc = card.dataset.docId;
    playSound("paper");
    renderAll();
  });
  els.documentView.addEventListener("click", (event) => {
    if (event.target.id === "collect-doc" && state.selectedDoc) {
      if (state.collected.has(state.selectedDoc)) state.collected.delete(state.selectedDoc);
      else state.collected.add(state.selectedDoc);
      playSound("evidence");
      renderAll();
    }
  });
  els.relationList.addEventListener("change", (event) => {
    const card = event.target.closest("[data-relation-id]");
    if (!card) return;
    const relId = card.dataset.relationId;
    const current = state.relationAnswers[relId] || { slots: ["", "", ""], evidence: [] };
    if (event.target.matches("select")) {
      const index = Number(event.target.dataset.slotIndex);
      current.slots[index] = event.target.value;
    }
    if (event.target.matches('input[type="checkbox"]')) {
      const values = [...card.querySelectorAll('input[type="checkbox"]:checked')].map((input) => input.value);
      current.evidence = values;
    }
    state.relationAnswers[relId] = current;
    const rel = relationPrompts.find((item) => item.id === relId);
    playSound(rel && isRelationCorrect(rel) ? "ok" : rel && hasRelationConflict(rel) ? "conflict" : "click");
    renderAll();
  });
  els.heirSelect.addEventListener("change", () => {
    state.report.heir = els.heirSelect.value;
    saveState();
  });
  els.descendantSelect.addEventListener("change", () => {
    state.report.descendant = els.descendantSelect.value;
    saveState();
  });
  els.notesInput.addEventListener("input", () => {
    state.notes = els.notesInput.value;
    saveState();
  });
  els.keywordList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-keyword]");
    if (!button) return;
    state.query = button.dataset.keyword;
    switchView("search");
    playSound("search");
    renderAll();
  });
  $("submit-report").addEventListener("click", () => {
    submitReport();
    playSound($("report-result").classList.contains("success") ? "ok" : "conflict");
  });
  $("sound-btn").addEventListener("click", () => {
    state.sound = !state.sound;
    if (!state.sound) {
      state.ambient = false;
      audio.ambient.pause();
    }
    playSound("click");
    renderAll();
  });
  $("ambient-btn").addEventListener("click", () => {
    if (!state.sound) return;
    state.ambient = !state.ambient;
    if (state.ambient) {
      audio.ambient.currentTime = 0;
      audio.ambient.play().catch(() => {
        state.ambient = false;
        renderAll();
      });
    } else {
      audio.ambient.pause();
    }
    renderAll();
  });
  document.querySelector(".voice-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-voice]");
    if (!button) return;
    playVoice(button.dataset.voice);
  });
  $("save-btn").addEventListener("click", () => {
    saveState();
    alert("进度已保存。");
  });
  $("reset-btn").addEventListener("click", () => {
    if (!confirm("确定要清空本地进度吗？")) return;
    localStorage.removeItem("yunshan-save");
    location.reload();
  });
}

function init() {
  Object.assign(els, {
    query: $("query"),
    searchBtn: $("search-btn"),
    sourceFilters: $("source-filters"),
    resultList: $("result-list"),
    documentEmpty: $("document-empty"),
    documentView: $("document-view"),
    peopleList: $("people-list"),
    relationList: $("relation-list"),
    evidenceList: $("evidence-list"),
    notesInput: $("notes-input"),
    keywordList: $("keyword-list"),
    updateLogList: $("update-log-list"),
    phaseGoalBody: $("phase-goal-body"),
    heirSelect: $("heir-select"),
    descendantSelect: $("descendant-select")
  });
  loadState();
  bindEvents();
  renderAll();
  maybeRunAutotest();
}

init();
