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
  { id: "zong_minghui", name: "宗明辉", aliases: [], birth: 1984, role: "世昌集团第三任董事长", note: "宗建民之子，曾参与集团换届。" },
  { id: "zong_mingjun", name: "宗明军", aliases: [], birth: 1990, role: "世昌集团第四任董事长", note: "宗建民之子，2020 年接任集团董事长。" },
  { id: "li_qiang", name: "李强", aliases: [], birth: 1986, role: "鼎辉基金合伙人", note: "宗建红之子，参与鼎辉尽调往来。" },
  { id: "li_min", name: "李敏", aliases: [], birth: 1989, role: "世昌集团客服主管", note: "宗建红之女，李天赐之母。" },
  { id: "li_tianci", name: "李天赐", aliases: [], birth: 2020, role: "李敏之子", note: "八卦中被怀疑与信托有关，但证据不足。" },
  { id: "he_guosheng", name: "何国生", aliases: ["何会计"], birth: 1944, role: "供销社老会计", note: "1969 年经手仓储点临时借支和汇款登记。" },
  { id: "zhou_meiying", name: "周美英", aliases: ["周助产"], birth: 1939, role: "云山卫生院助产员", note: "曾在接生登记里留下罗月珍相关备注。" },
  { id: "qian_shulin", name: "钱树林", aliases: ["黔中钱师傅"], birth: 1947, role: "黔中汽车队司机", note: "被地方传闻误写成罗建宁父亲。" },
  { id: "huang_yaling", name: "黄雅玲", aliases: ["黄老师"], birth: 1978, role: "县一中班主任", note: "陈嘉东高二班主任，留下家访记录。" },
  { id: "fang_renjie", name: "方仁杰", aliases: ["方会计"], birth: 1966, role: "世昌集团改制会计", note: "保管过 2005 年集团股权改制底稿。" },
  { id: "wei_xueqin", name: "魏雪琴", aliases: ["魏法务"], birth: 1974, role: "世昌集团法务经理", note: "2015 年换届前参与信托和受益人尽调。" },
  { id: "ma_lihua", name: "马丽华", aliases: ["马主任"], birth: 1969, role: "云山老街社区主任", note: "陈静返乡后负责社区走访和租赁备案协调。" }
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
    id: "doc_yunshan_county_profile",
    title: "《云山县情概览》2020 年修订页",
    year: 2020,
    source: "县情资料",
    trust: 4,
    keywords: ["云山县", "江南省", "黔中", "山地县城", "世昌集团", "县域概况"],
    summary: "确立云山县的地理位置、交通和产业背景。",
    body: "云山县隶属江南省西南部，县城云山镇位于河谷盆地，西南方向经旧国道可达黔中山区。县域人口以本地商贸、外出务工、学校和机关事业单位为主要生活网络。\n\n1980 年代以前，县供销系统和仓储转运承担了大部分县城物资流通；1990 年代以后，世昌集团逐渐成为本地商贸和就业的核心企业。\n\n该页是调查员进入云山县前的基础背景，不直接证明宗氏血缘，但解释了供销社、黔中线路和世昌集团为什么都在同一张地方关系网里。"
  },
  {
    id: "doc_2020_county_notice",
    title: "云山县 2020 年秋公共场所办事须知",
    year: 2020,
    source: "公告",
    trust: 4,
    keywords: ["2020", "健康码", "登记", "预约", "档案馆", "医院", "KTV"],
    summary: "说明 2020 年秋走访调查的现实阻力。",
    body: "县政务服务大厅、档案馆、医院、学校等公共场所继续执行预约、测温、扫码和来访登记制度。涉及病历、学籍、户籍、档案原件的事项，需出示单位介绍信或委托材料。\n\n娱乐场所复工后需补齐消防和公共卫生检查记录，社区负责核验租住人口和经营场所登记。\n\n这份公告不涉及宗家事实，但可说明公证处委托函、经营场所复工检查记录和社区租住人口登记在 2020 年秋具备制度背景。"
  },
  {
    id: "doc_yunqian_bus_line",
    title: "云山至黔中旧客运线路备案",
    year: 1987,
    source: "交通档案",
    trust: 3,
    keywords: ["云山", "黔中", "客运", "邮电所", "罗月珍", "钱树林"],
    summary: "补充云山和黔中之间长期往来的交通背景。",
    body: "交通局旧档记载，云山至黔中方向的省际客运线路在 1980 年代已经固定，每周两班，途经红石公社、云山邮电所和县供销社仓储点附近。\n\n备注页提到，早年线路常由黔中汽车队承接临时加班车，因此当地论坛后来把钱树林这类司机和罗建宁身世联系起来。\n\n该档案只能证明两地交通往来便利，不能证明亲缘关系；黔中汇款、明信片和钱树林传闻仍需分别核对原始来源。"
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
    summary: "传闻称李天赐与信托有关。",
    body: "李敏带儿子李天赐出入鉴定机构，引起外界猜测。有人认为这个孩子的父亲与宗家信托有关。\n\n但周刊没有提供任何正式报告，通篇仅引用匿名爆料。"
  },
  {
    id: "doc_gossip_mingjun",
    title: "地方论坛《云山商界八卦》：宗明军绯闻",
    year: 2020,
    source: "论坛",
    trust: 1,
    keywords: ["宗明军", "表妹", "绯闻", "宗嘉瑞", "世昌集团"],
    summary: "低可信传闻。",
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
  },
  {
    id: "doc_midwife_register",
    title: "云山卫生院 1969 年冬接生登记摘页",
    year: 1969,
    source: "医院",
    trust: 5,
    keywords: ["周美英", "罗月珍", "女婴", "建宁", "卫生院", "1969"],
    summary: "从医疗登记侧面补强罗建宁出生时间。",
    body: "1969 年 12 月 18 日夜，云山卫生院临时接生登记记载：产妇罗月珍，贵州籍知青，女婴一名，体重六斤二两。\n\n助产员周美英在页脚备注：“家属未到，供销社何会计代付押金。婴儿乳名建宁，产妇称不便登记父名。”\n\n该摘页没有父亲姓名，不能单独证明血缘，但与户籍迁入登记和照片背注的时间完全吻合。"
  },
  {
    id: "doc_supply_advance",
    title: "供销社仓储点临时借支单",
    year: 1969,
    source: "档案",
    trust: 5,
    keywords: ["何国生", "宗世昌", "罗月珍", "医药费", "借支", "建宁"],
    summary: "解释罗月珍分娩费用和宗世昌之间的账目交集。",
    body: "借支人：宗世昌。\n用途：仓储点夜班人员急用医药费。\n经手：何国生。\n金额：叁拾陆元整。\n\n何国生在背面铅笔备注：“月珍住院，世昌说先从夜班补贴垫，账上不要写太明。”\n\n这张借支单不能直接写出父女关系，但把宗世昌、罗月珍、医院费用和 1969 年 12 月放在同一条线索上。"
  },
  {
    id: "doc_remittance_stub",
    title: "黔中邮电所 1971 年汇款回执残联",
    year: 1971,
    source: "档案",
    trust: 4,
    keywords: ["贵州", "黔中", "汇款", "罗月珍", "建宁", "宗S"],
    summary: "罗月珍离开云山后仍收到来自云山的款项。",
    body: "收款人：罗月珍。\n收款地址：黔中地区红石公社。\n附言残存：“给建宁买奶粉，不必回信。”\n\n汇款人姓名只剩“宗 S”两个可辨字符，汇出地为云山县邮电所。金额不大，但连续三个月出现同样附言格式。\n\n该回执需要与明信片、户籍和供销社借支单互相印证，不能单独作为定案证据。"
  },
  {
    id: "doc_li_guilan_letter",
    title: "李桂兰未寄出信稿",
    year: 1970,
    source: "私人收藏",
    trust: 3,
    keywords: ["李桂兰", "罗月珍", "孩子", "建宁", "宗世昌", "未寄出"],
    summary: "李桂兰可能知道罗月珍和孩子的存在。",
    body: "信稿没有收件人，只在折痕处写着“月珍”二字。\n\n正文残句：“孩子既已生下，就不要再让她夹在两头受罪。世昌欠你的，我替他记着，但这个家也要活下去。”\n\n信稿没有邮戳，也没有完整落款。它更像情绪材料，能解释家族沉默，却不足以证明血缘。"
  },
  {
    id: "doc_classmate_luo",
    title: "黔中中专同学访谈：罗建宁",
    year: 2008,
    source: "访谈",
    trust: 3,
    keywords: ["罗建宁", "贵州", "母亲", "云山", "建宁", "宗家"],
    summary: "罗建宁成年后仍回避云山身世。",
    body: "受访同学回忆，罗建宁读书时很少谈父亲，只说“云山那边的人不要我妈回去”。\n\n她有一次酒后提到，自己的名字不是外婆取的，“是一个不能认的男人写在照片背后的”。\n\n访谈年代较晚，且属于转述，只能作为追踪“照片背注”和“建宁”关键词的辅助线索。"
  },
  {
    id: "doc_teacher_visit",
    title: "县一中高二三班家访记录",
    year: 2020,
    source: "学校",
    trust: 4,
    keywords: ["黄雅玲", "陈嘉东", "陈小东", "陈静", "KTV", "家访"],
    summary: "从学校侧确认陈嘉东与陈静的实际生活关系。",
    body: "班主任黄雅玲家访记录：学生陈嘉东，日常由母亲陈静照料。家庭住址为唱响 KTV 后巷二楼，学生常在晚自习后自行回家。\n\n陈静说明，女儿随自己姓陈，不愿卷入“宗家那些事”。\n\n该记录不能证明继承资格，但能排除陈嘉东只是网帖昵称或远房亲属的误读。"
  },
  {
    id: "doc_false_qian",
    title: "地方论坛《黔中旧事》：钱树林认父帖",
    year: 2020,
    source: "论坛",
    trust: 1,
    keywords: ["钱树林", "罗建宁", "罗月珍", "贵州司机", "误导", "父亲"],
    summary: "低可信误导：把黔中司机钱树林写成罗建宁父亲。",
    body: "帖子声称罗建宁父亲是黔中汽车队司机钱树林，理由是钱树林年轻时常跑云山线路。\n\n但帖内把罗建宁出生地写成贵州，又称罗月珍 1968 年从未离开黔中，与县志、户籍迁入登记和云山卫生院接生登记均冲突。\n\n该帖可信度较低，应与县志、户籍和接生登记等原始材料交叉核对。"
  },
  {
    id: "doc_estate_law_note",
    title: "云山县司法所继承咨询摘记",
    year: 2020,
    source: "司法所",
    trust: 4,
    keywords: ["继承", "非婚生", "信托", "DNA", "陈嘉东", "直系血亲"],
    summary: "说明陈嘉东线需要同时核验血缘与信托条款。",
    body: "咨询摘记：若仅按普通法定继承路径，非婚生子女和其后代仍需完成亲缘证明；若涉及境外家族信托，则以信托文本约定为优先审查材料之一。\n\n工作人员建议：先固定宗世昌留存血样来源，再核对陈静一支的母系出生记录。未成年人陈嘉东是否直接受益，还需看信托受益人层级是否覆盖直系后代。\n\n该摘记不是判决，但将 DNA、医院血样、出生记录和信托条款列为同组核验材料。"
  },
  {
    id: "doc_equity_draft_2005",
    title: "世昌集团 2005 年改制股权底稿",
    year: 2005,
    source: "财务档案",
    trust: 4,
    keywords: ["方仁杰", "股权", "改制", "宗建红", "宗建民", "六名子女"],
    summary: "公司股权只覆盖公开六子女，并不等同于信托受益范围。",
    body: "方仁杰保管的改制底稿显示，2005 年世昌集团内部股权按公开六名子女和管理层贡献重新登记。\n\n宗建红获得经营表决权，宗建民保留物资线旧资产收益，宗建芳只保留少量象征性股权。\n\n底稿没有罗建宁或陈静的名字，因此它能证明集团当时的公开口径，却不能否定 1998 年家族信托里的血缘条款。"
  },
  {
    id: "doc_board_handover_2015",
    title: "世昌集团 2015 年董事会换届备忘",
    year: 2015,
    source: "内部文件",
    trust: 3,
    keywords: ["魏雪琴", "宗明辉", "宗明军", "宗建红", "董事会", "换届"],
    summary: "宗家第二、三代围绕控制权已经出现裂痕。",
    body: "换届备忘记载，宗建红主张由宗明辉接任第三任董事长，宗建民一支则要求保留物流板块否决权。\n\n魏雪琴在法务意见中提醒：“集团股权安排不能替代家族信托受益人审查，尤其不能以董事会决议排除血缘后代。”\n\n这份备忘把公司控制权冲突和信托资格审查区分开来，可说明董事长席位不等同于继承资格。"
  },
  {
    id: "doc_jianfang_note",
    title: "宗建芳给妇联旧同事的便条",
    year: 2014,
    source: "私人收藏",
    trust: 3,
    keywords: ["宗建芳", "陈静", "妇联", "返乡", "不是我的孩子", "罗月珍"],
    summary: "宗建芳帮助陈静返乡，但明确否认母女关系。",
    body: "便条写给县妇联旧同事：“陈静不是我的孩子，只是她母亲那条线和家里旧事牵得太深。她要回云山开店，手续能帮就帮，不要让她被宗家几个孩子堵在门外。”\n\n便条没有正式落款，但纸张和笔迹与妇联登记表中的批注相近。\n\n它不能作为强证据，却能解释为什么陈静会被误认为宗建芳之女。"
  },
  {
    id: "doc_ktv_lease_archive",
    title: "唱响 KTV 房屋租赁备案",
    year: 2015,
    source: "工商",
    trust: 4,
    keywords: ["马丽华", "陈静", "唱响KTV", "租赁", "老街社区", "陈嘉东"],
    summary: "陈静返乡后的落脚点和经营关系更清晰。",
    body: "租赁备案显示，陈静以个人名义承租老电影院二楼和后巷两间附属房，用于经营唱响 KTV。\n\n社区主任马丽华备注：承租人携未成年子女居住，夜间经营需补齐消防通道和未成年人照护说明。\n\n这份备案与学生信息表、家访记录互相印证，说明陈嘉东并非临时出现的网络昵称。"
  },
  {
    id: "doc_dinghui_due_diligence",
    title: "鼎辉基金受益人尽调函",
    year: 2020,
    source: "金融文件",
    trust: 4,
    keywords: ["李强", "鼎辉基金", "尽调", "李天赐", "DNA", "信托"],
    summary: "说明李强和李天赐被卷入传闻的文件来源。",
    body: "鼎辉基金向世昌集团发出的尽调函要求核实李强、李敏和李天赐是否涉及境外信托受益安排。\n\n附件只要求确认公开亲属关系和反洗钱资料，没有 DNA 鉴定结论，也没有把李天赐列为新增受益人。\n\n该函只能说明八卦来源，不能支持李天赐继承资格。"
  },
  {
    id: "doc_neighborhood_visit",
    title: "老街社区 2016 年走访记录",
    year: 2016,
    source: "社区",
    trust: 4,
    keywords: ["马丽华", "陈静", "陈嘉东", "陈小东", "社区走访", "单亲"],
    summary: "社区记录补强陈静与陈嘉东的长期共同生活事实。",
    body: "老街社区走访记录写明：陈静，个体经营户，独自抚养女儿陈嘉东，小名小东，就读县一中初中部。\n\n马丽华备注：“孩子随母姓，不愿谈外祖家。陈静称以后若有人问起宗家，只说自己靠唱响 KTV 养孩子。”\n\n该记录不是血缘证据，但能补足陈嘉东作为陈静子女的生活连续性。"
  },
  {
    id: "doc_sibling_meeting_2020",
    title: "宗家六子女临时会谈纪要",
    year: 2020,
    source: "内部文件",
    trust: 3,
    keywords: ["宗建红", "宗建民", "宗建芳", "宗建丽", "六名子女", "第七支"],
    summary: "宗家六子女对第七支传闻的态度并不一致。",
    body: "宗世昌去世后，六名公开子女在世昌集团小会议室临时碰头。\n\n宗建红主张先压住“第七支”传闻，宗建民关心物流板块是否被重新估值，宗建芳则提醒“若真有孩子，至少不能让外人先找到”。宗建丽只要求保留父亲生前资料，不同意销毁旧信件。\n\n纪要没有新增血缘证据，但显示公开六子女内部并非铁板一块，宗建芳、宗建丽和旧信件仍有继续核查价值。"
  },
  {
    id: "doc_jianhong_pr_plan",
    title: "世昌集团舆情应对草案",
    year: 2020,
    source: "内部文件",
    trust: 2,
    keywords: ["宗建红", "匿名信", "第七个继承人", "舆情", "信托", "罗建宁"],
    summary: "宗建红试图把继承问题包装成网络谣言。",
    body: "草案建议统一口径：“集团未收到任何新增继承人正式主张，网络所谓第七个继承人系旧照片误读。”\n\n附件要求法务先排查罗建宁、陈静、陈嘉东三个名字是否出现在公开资料中，同时避免在媒体回应里提到家族信托。\n\n该草案可信度低于正式法律材料，但可说明宗建红知道信托和罗建宁线索不能被简单否认。"
  },
  {
    id: "doc_ktv_reopen_check",
    title: "唱响 KTV 2020 年复工检查表",
    year: 2020,
    source: "社区",
    trust: 4,
    keywords: ["陈静", "陈嘉东", "唱响KTV", "复工检查", "健康码", "马丽华"],
    summary: "陈静返乡后的经营和居住状态在 2020 年仍可核验。",
    body: "复工检查表记载，唱响 KTV 经营人陈静，场所位于老电影院二楼，后巷附属房用于临时住宿。\n\n马丽华在检查意见中写明：经营人需补登记未成年同住人员陈嘉东，晚间营业期间由母亲负责照看，不得让学生进入包厢区。\n\n这份材料把 2020 年秋的办事须知、KTV 租赁备案、社区走访和学校家访连接起来，适合搜索“复工检查”或“健康码”后继续追踪陈静。"
  },
  {
    id: "doc_jianli_old_letters",
    title: "宗建丽整理父亲旧信清单",
    year: 2020,
    source: "私人收藏",
    trust: 3,
    keywords: ["宗建丽", "宗世昌", "旧信", "李桂兰", "罗月珍", "建宁"],
    summary: "宗建丽保留旧信，为李桂兰信稿和照片背注提供搜索入口。",
    body: "宗建丽在父亲遗物清单中单独列出“桂兰未寄信、贵州来信、背面写建宁的旧照片”三项，并注明暂不交给集团办公室。\n\n她给宗建芳的短信写道：“大姐，爸年轻时的事我们不一定能替他遮住。至少先弄清楚罗月珍和建宁到底是不是同一个线。”\n\n清单本身不是强证据，但能把李桂兰未寄信、照片背注、罗月珍和罗建宁名字串成自然搜索链。"
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
    title: "调查备忘录系统",
    changes: [
      "笔记页升级为调查备忘录，新增主线核验、支线排除和调查教学三组待办",
      "待办状态会根据阅读、收藏、关系绑定和最终提交自动更新",
      "待办按钮可直接跳转到资料库、走访、家谱或提交页，并保留非剧透搜索提示"
    ],
    checks: [
      "node --check game/app.js passed",
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-15",
    title: "宗家冲突内容扩充",
    changes: [
      "新增 4 份资料，补强宗家六子女内部冲突与陈静返乡后的地方关系网",
      "新增资料覆盖六子女会谈、集团舆情草案、KTV 复工检查和宗建丽旧信清单",
      "资料库从 44 条扩到 48 条，并同步写入内容包摘要和线索索引"
    ],
    checks: [
      "node --check game/app.js passed",
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-15",
    title: "云山县设定补充",
    changes: [
      "明确云山县为虚构江南省西南部、靠近黔中山区的南方山地县城",
      "新增 3 份背景资料：县情概览、2020 年秋公共场所办事须知、云山至黔中旧客运线路备案",
      "将 2020 年秋的登记、预约、健康码和复工检查作为走访阻力，不让疫情成为主线"
    ],
    checks: [
      "node --check game/app.js passed",
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-15",
    title: "内容扩充第二轮起步",
    changes: [
      "新增 3 名地方与集团支线人物：改制会计、集团法务和老街社区主任",
      "新增 6 份资料，覆盖 2005 股权改制、2015 董事会换届、宗建芳便条、KTV 租赁、鼎辉尽调和社区走访",
      "新增资料把公司股权、信托资格和陈静返乡后的生活网络拆开，便于区分股权控制与继承资格"
    ],
    checks: [
      "node --check game/app.js passed",
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-15",
    title: "内容扩充第一轮",
    changes: [
      "新增 4 名支线人物：供销社会计、卫生院助产员、黔中司机和县一中班主任",
      "新增 8 份资料，覆盖接生登记、借支单、汇款回执、未寄出信稿、访谈、家访记录和两则传闻材料",
      "新增材料围绕罗月珍离县、罗建宁出生、陈静返乡和陈嘉东身份形成更多搜索路径"
    ],
    checks: [
      "node --check game/app.js passed",
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-15",
    title: "设置与存档菜单",
    changes: [
      "新增“设置”标签页，集中管理音效、环境音、保存、导出和重置",
      "本地进度可导出为 JSON，方便试玩后回收调查路径",
      "重置进度增加输入确认，降低误清空风险"
    ],
    checks: [
      "node --check game/app.js passed",
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-15",
    title: "关系冲突提示",
    changes: [
      "关键关系卡新增冲突提示，区分人物不吻合、强证据缺失和弱证据干扰",
      "提示会给出下一步可搜索关键词，减少关系核验时的反复试错",
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
      "阶段按钮可直接进入资料库、家谱或最终提交"
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
  reportSubmitted: false,
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
    done: () => state.reportSubmitted
  }
];

const notebookTaskGroups = [
  {
    title: "主线核验",
    items: [
      {
        title: "建立公开家庭版本",
        detail: "先读公开报道，确认宗世昌被公开承认的家庭结构。",
        actionLabel: "查宗世昌",
        view: "search",
        query: "宗世昌",
        done: () => state.readDocs.has("doc_official_family")
      },
      {
        title: "固定继承规则",
        detail: "把信托条款加入证据箱，再判断姓氏是否决定资格。",
        actionLabel: "查信托",
        view: "search",
        query: "信托",
        done: () => state.collected.has("doc_trust_clause")
      },
      {
        title: "补齐隐藏血脉链条",
        detail: "围绕罗月珍、陈静和陈嘉东收集强证据。",
        actionLabel: "查罗月珍",
        view: "search",
        query: "罗月珍",
        done: () => ["doc_photo_back", "doc_luo_birth", "doc_chen_birth", "doc_jiadong_school", "doc_dna_record"].every((id) => state.collected.has(id))
      },
      {
        title: "完成家谱绑定",
        detail: "给关键关系选择人物，并绑定已收藏的强证据。",
        actionLabel: "打开家谱",
        view: "tree",
        done: () => relationPrompts.every(isRelationCorrect)
      },
      {
        title: "提交最终报告",
        detail: "提交第七支血脉和现居云山后代的判断。",
        actionLabel: "打开提交",
        view: "report",
        done: () => state.reportSubmitted
      }
    ]
  },
  {
    title: "支线排除",
    items: [
      {
        title: "排除宗建芳误传",
        detail: "核对帮扶、档案挂靠和母女关系之间的差别。",
        actionLabel: "查宗建芳",
        view: "search",
        query: "宗建芳",
        done: () => state.readDocs.has("doc_women_fed") && state.readDocs.has("doc_talent_window")
      },
      {
        title: "核实司机传闻",
        detail: "把交通背景和亲缘证据分开，不让低可信网帖带偏。",
        actionLabel: "查钱树林",
        view: "search",
        query: "钱树林",
        done: () => state.readDocs.has("doc_false_qian") && state.readDocs.has("doc_yunqian_bus_line")
      },
      {
        title: "区分股权与信托",
        detail: "确认公司控制权文件不能直接替代受益人审查。",
        actionLabel: "查股权",
        view: "search",
        query: "股权",
        done: () => state.readDocs.has("doc_equity_draft_2005") && state.readDocs.has("doc_board_handover_2015")
      }
    ]
  },
  {
    title: "调查教学",
    items: [
      {
        title: "从走访进入资料库",
        detail: "任意选择一个走访地点或搜索关键词，打开第一份资料。",
        actionLabel: "去走访",
        view: "visit",
        done: () => state.readDocs.size > 0
      },
      {
        title: "收藏第一份证据",
        detail: "打开资料后点击“加入证据箱”，让它可用于家谱绑定。",
        actionLabel: "去资料库",
        view: "search",
        done: () => state.collected.size > 0
      },
      {
        title: "完成一条关系推理",
        detail: "在家谱页选人并绑定证据，观察冲突提示。",
        actionLabel: "打开家谱",
        view: "tree",
        done: () => relationPrompts.some(isRelationCorrect)
      },
      {
        title: "用关键词回查",
        detail: "阅读资料后，在关键词区点击词条继续搜索。",
        actionLabel: "看关键词",
        view: "notes",
        done: () => discoveredKeywords().length > 0 && state.query.trim().length > 0
      }
    ]
  }
];

const visitLocations = [
  {
    id: "archives",
    title: "县档案馆",
    image: "assets/images/photo-backgrounds/archive-room.png",
    query: "罗月珍",
    meta: "户籍 · 知青 · 旧报刊",
    text: "调阅迁入登记、知青名册和早年公开报道，核对罗月珍与宗世昌在云山的交集。"
  },
  {
    id: "hospital",
    title: "县医院",
    image: "assets/images/photo-backgrounds/county-hospital-corridor.png",
    query: "DNA",
    meta: "血样 · 出生 · 病历",
    text: "复核出生记录、留存血样和亲缘比对来源，确认陈静一支是否具备强证据。"
  },
  {
    id: "school",
    title: "县一中",
    image: "assets/images/photo-backgrounds/county-school-gate.png",
    query: "陈嘉东",
    meta: "学籍 · 家访 · 未成年人",
    text: "查验陈嘉东学籍、班主任家访和监护人信息，补齐现居云山的后代链条。"
  },
  {
    id: "ktv",
    title: "唱响 KTV 后巷",
    image: "assets/images/photo-backgrounds/county-ktv-room.png",
    query: "陈静",
    meta: "租赁 · 社区 · 复工检查",
    text: "核对陈静返乡后的经营登记、租住人口记录和社区走访材料。"
  },
  {
    id: "group",
    title: "世昌集团",
    image: "assets/images/photo-backgrounds/shichang-group-building.png",
    query: "信托",
    meta: "股权 · 董事会 · 信托",
    text: "区分公司控制权、公开子女口径和家族信托受益人审查。"
  },
  {
    id: "yunqian",
    title: "云山至黔中旧线",
    image: "assets/images/photo-backgrounds/yunshan-street.png",
    query: "黔中",
    meta: "客运 · 邮电 · 传闻",
    text: "核对两地长期往来的交通背景，排除司机认父等低可信传闻。"
  }
];

const personGroups = [
  {
    title: "公开宗家",
    hint: "公开资料承认的宗世昌家庭。",
    tone: "official",
    ids: ["zong_shichang", "li_guilan", "zong_jianguo", "zong_jianfang", "zong_jianmin", "zong_jianhong", "zong_jianping", "zong_jianli"]
  },
  {
    title: "隐藏血脉",
    hint: "需要用强证据串联的第七支。",
    tone: "hidden",
    ids: ["luo_yuezhen", "luo_jianning", "chen_jing", "chen_jiadong"]
  },
  {
    title: "集团旁支与传闻人物",
    hint: "与股权、尽调或坊间传闻有关，继承资格需另行核验。",
    tone: "related",
    ids: ["zong_minghui", "zong_mingjun", "li_qiang", "li_min", "li_tianci", "qian_shulin"]
  },
  {
    title: "证人与经手人",
    hint: "提供档案、访谈或手续来源的人。",
    tone: "witness",
    ids: ["he_guosheng", "zhou_meiying", "huang_yaling", "fang_renjie", "wei_xueqin", "ma_lihua"]
  }
];

const personPortraits = {
  zong_shichang: "assets/images/future-assets/portraits/zong-shichang-old-portrait.png",
  zong_jianfang: "assets/images/future-assets/portraits/zong-jianfang-portrait.png",
  zong_jianhong: "assets/images/future-assets/portraits/zong-jianhong-portrait.png",
  luo_yuezhen: "assets/images/future-assets/portraits/luo-yuezhen-youth-photo.png",
  luo_jianning: "assets/images/future-assets/portraits/luo-jianning-file-photo.png",
  chen_jing: "assets/images/future-assets/portraits/chen-jing-portrait.png",
  chen_jiadong: "assets/images/future-assets/portraits/chen-jiadong-student-photo.png"
};

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

function serializeState() {
  return {
    query: state.query,
    source: state.source,
    selectedDoc: state.selectedDoc,
    readDocs: [...state.readDocs],
    collected: [...state.collected],
    relationAnswers: state.relationAnswers,
    report: state.report,
    reportSubmitted: state.reportSubmitted,
    sound: state.sound,
    ambient: state.ambient,
    notes: state.notes
  };
}

function saveState() {
  const serializable = serializeState();
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
    state.reportSubmitted = parsed.reportSubmitted === true;
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

function renderVisitLocations() {
  if (!els.locationList) return;
  els.locationList.innerHTML = visitLocations.map((location) => `
    <button class="location-card" data-location-query="${location.query}" aria-label="前往${location.title}">
      <img src="${location.image}" alt="" loading="lazy">
      <span class="location-shade"></span>
      <span class="location-copy">
        <span class="location-meta">${location.meta}</span>
        <strong>${location.title}</strong>
        <span>${location.text}</span>
      </span>
    </button>
  `).join("");
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
      <div class="doc-text">${doc.body}</div>
    </div>
    <div class="doc-actions">
      <button id="collect-doc" class="${state.collected.has(doc.id) ? "is-collected" : ""}">
        ${state.collected.has(doc.id) ? "已加入证据箱" : "加入证据箱"}
      </button>
      <button id="copy-keywords">查看关键词：${doc.keywords.slice(0, 5).join(" / ")}</button>
    </div>
  `;
}

function renderAvatar(person) {
  const portrait = personPortraits[person.id];
  if (portrait) return `<img class="avatar avatar-img" src="${portrait}" alt="${person.name}头像" loading="lazy">`;
  return `<div class="avatar">${person.name.slice(0, 1)}</div>`;
}

function renderPeople() {
  const byId = new Map(people.map((person) => [person.id, person]));
  els.peopleList.innerHTML = personGroups.map((group) => `
    <section class="person-group person-group-${group.tone}">
      <header>
        <h4>${group.title}</h4>
        <p>${group.hint}</p>
      </header>
      <div class="person-group-list">
        ${group.ids.map((id) => byId.get(id)).filter(Boolean).map((person) => `
          <article class="person-card">
            <div class="person-head">
              ${renderAvatar(person)}
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
        `).join("")}
      </div>
    </section>
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

function renderNotebookTasks() {
  if (!els.taskList) return;
  els.taskList.innerHTML = notebookTaskGroups.map((group) => {
    const completed = group.items.filter((item) => item.done()).length;
    const firstOpen = group.items.find((item) => !item.done());
    return `
      <article class="task-group">
        <header>
          <h4>${group.title}</h4>
          <span>${completed} / ${group.items.length}</span>
        </header>
        <div class="task-items">
          ${group.items.map((item) => {
            const done = item.done();
            const current = !done && item === firstOpen;
            const queryAttr = item.query ? ` data-task-query="${item.query}"` : "";
            return `
              <section class="task-item ${done ? "is-done" : ""} ${current ? "is-current" : ""}">
                <div>
                  <strong>${item.title}</strong>
                  <p>${item.detail}</p>
                </div>
                <button data-task-view="${item.view}"${queryAttr}>${done ? "复查" : item.actionLabel}</button>
              </section>
            `;
          }).join("")}
        </div>
      </article>
    `;
  }).join("");
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

function renderSettings() {
  if (!els.saveSummary) return;
  const correctCount = relationPrompts.filter(isRelationCorrect).length;
  const notesChars = state.notes.trim().length;
  els.soundToggle.checked = state.sound;
  els.ambientToggle.checked = state.sound && state.ambient;
  els.ambientToggle.disabled = !state.sound;
  els.saveSummary.innerHTML = `
    <dt>资料阅读</dt><dd>${state.readDocs.size} / ${documents.length}</dd>
    <dt>证据收藏</dt><dd>${state.collected.size}</dd>
    <dt>关系完成</dt><dd>${correctCount} / ${relationPrompts.length}</dd>
    <dt>调查笔记</dt><dd>${notesChars} 字</dd>
  `;
  els.settingsReset.disabled = els.resetConfirmInput.value.trim() !== "清空";
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
  renderVisitLocations();
  els.query.value = state.query;
  renderFilters();
  renderResults();
  renderDocument();
  renderPeople();
  renderRelations();
  renderEvidence();
  renderReportOptions();
  renderNotes();
  renderNotebookTasks();
  renderUpdates();
  renderSettings();
  renderCounters();
  renderPhaseGoal();
  renderLeads();
  saveState();
}

function switchView(viewName) {
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === viewName));
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
  $(`${viewName}-view`).classList.add("is-active");
  $("view-title").textContent = { visit: "走访调查", search: "\u8d44\u6599\u5e93", tree: "\u5bb6\u8c31", evidence: "\u8bc1\u636e\u7bb1", notes: "\u8c03\u67e5\u5907\u5fd8\u5f55", updates: "\u66f4\u65b0\u65e5\u5fd7", settings: "\u8bbe\u7f6e", report: "\u63d0\u4ea4" }[viewName];
}

function toggleSound(enabled) {
  state.sound = enabled;
  if (!state.sound) {
    state.ambient = false;
    audio.ambient.pause();
    if (activeVoiceClip) {
      activeVoiceClip.pause();
      activeVoiceClip.currentTime = 0;
    }
  }
}

function toggleAmbient(enabled) {
  if (!state.sound) return;
  state.ambient = enabled;
  if (state.ambient) {
    audio.ambient.currentTime = 0;
    audio.ambient.play().catch(() => {
      state.ambient = false;
      renderAll();
    });
  } else {
    audio.ambient.pause();
  }
}

function exportSave() {
  saveState();
  const payload = {
    exportedAt: new Date().toISOString(),
    version: "mvp-0.1",
    progress: serializeState()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `yunshan-save-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function submitReport() {
  const relationOk = relationPrompts.every(isRelationCorrect);
  const heirOk = state.report.heir === "luo_jianning";
  const descendantOk = state.report.descendant === "chen_jiadong";
  const result = $("report-result");

  if (relationOk && heirOk && descendantOk) {
    state.reportSubmitted = true;
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
    state.reportSubmitted = false;
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
  saveState();
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
  renderPhaseGoal();
  renderNotebookTasks();
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
  els.locationList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-location-query]");
    if (!card) return;
    state.query = card.dataset.locationQuery;
    state.source = "全部";
    switchView("search");
    playSound("search");
    renderAll();
  });
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
    state.reportSubmitted = false;
    const rel = relationPrompts.find((item) => item.id === relId);
    playSound(rel && isRelationCorrect(rel) ? "ok" : rel && hasRelationConflict(rel) ? "conflict" : "click");
    renderAll();
  });
  els.heirSelect.addEventListener("change", () => {
    state.report.heir = els.heirSelect.value;
    state.reportSubmitted = false;
    saveState();
  });
  els.descendantSelect.addEventListener("change", () => {
    state.report.descendant = els.descendantSelect.value;
    state.reportSubmitted = false;
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
  els.taskList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-task-view]");
    if (!button) return;
    if (button.dataset.taskQuery) {
      state.query = button.dataset.taskQuery;
      state.source = "全部";
      switchView("search");
      playSound("search");
    } else {
      switchView(button.dataset.taskView);
      playSound("click");
    }
    renderAll();
  });
  $("submit-report").addEventListener("click", () => {
    submitReport();
    playSound($("report-result").classList.contains("success") ? "ok" : "conflict");
    renderPhaseGoal();
    renderNotebookTasks();
  });
  $("sound-btn").addEventListener("click", () => {
    toggleSound(!state.sound);
    playSound("click");
    renderAll();
  });
  $("ambient-btn").addEventListener("click", () => {
    toggleAmbient(!state.ambient);
    renderAll();
  });
  els.soundToggle.addEventListener("change", () => {
    toggleSound(els.soundToggle.checked);
    playSound("click");
    renderAll();
  });
  els.ambientToggle.addEventListener("change", () => {
    toggleAmbient(els.ambientToggle.checked);
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
  els.settingsSave.addEventListener("click", () => {
    saveState();
    playSound("click");
    alert("进度已保存。");
    renderAll();
  });
  els.exportSave.addEventListener("click", () => {
    exportSave();
    playSound("click");
  });
  els.resetConfirmInput.addEventListener("input", renderSettings);
  els.settingsReset.addEventListener("click", () => {
    if (els.resetConfirmInput.value.trim() !== "清空") return;
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
    locationList: $("location-list"),
    documentEmpty: $("document-empty"),
    documentView: $("document-view"),
    peopleList: $("people-list"),
    relationList: $("relation-list"),
    evidenceList: $("evidence-list"),
    taskList: $("task-list"),
    notesInput: $("notes-input"),
    keywordList: $("keyword-list"),
    updateLogList: $("update-log-list"),
    soundToggle: $("sound-toggle"),
    ambientToggle: $("ambient-toggle"),
    saveSummary: $("save-summary"),
    settingsSave: $("settings-save"),
    exportSave: $("export-save"),
    resetConfirmInput: $("reset-confirm-input"),
    settingsReset: $("settings-reset"),
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
