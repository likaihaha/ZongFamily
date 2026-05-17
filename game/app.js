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
  { id: "zong_minghui", name: "宗明辉", aliases: [], birth: 1984, role: "世昌集团第三任董事长", note: "宗建民之子，2016 年在融资压力下接班。" },
  { id: "zong_mingjun", name: "宗明军", aliases: [], birth: 1990, role: "世昌集团代理董事长", note: "宗建民之子，宗世昌病危后临时接手集团口径。" },
  { id: "li_qiang", name: "李强", aliases: [], birth: 1986, role: "鼎辉基金合伙人", note: "宗建红之子，参与鼎辉尽调往来。" },
  { id: "li_min", name: "李敏", aliases: [], birth: 1989, role: "世昌集团客服主管", note: "宗建红之女，李天赐之母。" },
  { id: "li_tianci", name: "李天赐", aliases: [], birth: 2020, role: "李敏之子", note: "八卦中被怀疑与信托有关，但证据不足。" },
  { id: "he_guosheng", name: "何国生", aliases: ["何会计"], birth: 1944, role: "供销社老会计", note: "1969 年经手仓储点临时借支和汇款登记。" },
  { id: "zhou_meiying", name: "周美英", aliases: ["周助产"], birth: 1939, role: "云山卫生院助产员", note: "曾在接生登记里留下罗月珍相关备注。" },
  { id: "qian_shulin", name: "钱树林", aliases: ["黔中钱师傅"], birth: 1947, role: "黔中汽车队司机", note: "被地方传闻误写成罗建宁父亲。" },
  { id: "huang_yaling", name: "黄雅玲", aliases: ["黄老师"], birth: 1978, role: "县一中班主任", note: "陈嘉东高二班主任，留下家访记录。" },
  { id: "fang_renjie", name: "方仁杰", aliases: ["方会计"], birth: 1966, role: "世昌集团改制会计", note: "保管过 2005 年集团股权改制底稿。" },
  { id: "wei_xueqin", name: "魏雪琴", aliases: ["魏法务"], birth: 1974, role: "世昌集团法务经理", note: "2016 年治理调整前参与信托和受益人尽调。" },
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
  body: "本刊讯  云山县世昌综合商店自一九八二年开业以来，由日用百货、烟酒副食柜台扩至县城批发门市。创办人宗世昌、李桂兰夫妇近年常被本地商户称作“老宗家两口子”。\n\n记者问及家事，宗世昌笑称：“家里孩子多，桂兰吃了不少苦。老大建国稳，建芳能张罗，建民爱跑货，建红算盘打得细，建平性子直，小丽还小些。”\n\n随访资料列宗世昌、李桂兰夫妇子女六人：长子宗建国、长女宗建芳、次子宗建民、次女宗建红、三子宗建平、幼女宗建丽。"
},
{
  id: "doc_group_history",
  title: "世昌集团官网《集团历程》",
  year: 2020,
  source: "官网",
  trust: 4,
  keywords: ["世昌集团", "宗建红", "宗明辉", "宗明军", "董事长", "集团历程"],
  summary: "列出世昌集团几次关键治理调整。",
  body: "页面栏目：集团历程。\n页面版本：2020 年 9 月缓存。\n页面路径：www.shichang-group.example/about/history。\n\n1982 年：世昌综合商店在云山镇西街开业，主营日用百货、烟酒副食、小件批发。\n1986 年：世昌贸易公司成立，承接县供销系统外溢仓储和批发业务。\n1992 年：公司租用旧仓库，进入建材市场、货运中转和乡镇配送。\n1997 年：世昌集团完成集团化工商登记并挂牌成立。\n1998 年：创始人宗世昌设立香港家族信托，用于境外账户、香港投资权益、保单权益和家族保障资产管理。\n2005 年：集团改制，宗建红以经营负责人身份接班，宗世昌退出日常经营。\n2016 年春：治理结构调整，宗明辉出任董事长。\n2020 年：集团年营业收入约 42 亿元，员工约 4200 人。\n2020 年 9 月：宗明军以代理董事长身份主持集团对外事务。"
},
{
  id: "doc_yunshan_county_profile",
  title: "《云山县情概览》2020 年修订页",
  year: 2020,
  source: "县情资料",
  trust: 4,
  keywords: ["云山县", "江南省", "黔中", "山地县城", "世昌集团", "县域概况"],
  summary: "确立云山县的地理位置、交通和产业背景。",
  body: "行政区划：江南省西南部云山县。\n县城驻地：云山镇，河谷盆地地形。\n交通方向：西南经旧国道可达黔中山区。\n户籍人口：约 62 万。\n常住人口：约 48 万。\n县城建成区常住人口：约 18 万。\n主要生活网络：本地商贸、外出务工、学校、机关事业单位、物流就业。\n\n县域沿革摘录：1980 年代以前，县供销系统和仓储转运承担县城主要物资流通。1990 年代以后，世昌集团逐渐成为本地商贸和就业企业。2000 年后，外出务工增加，户籍人口与常住人口分离。2010 年后，县城陪读、返乡创业和物流就业持续增长。"
},
{
  id: "doc_2020_county_notice",
  title: "云山县 2020 年秋公共场所办事须知",
  year: 2020,
  source: "公告",
  trust: 4,
  keywords: ["2020", "健康码", "登记", "预约", "档案馆", "医院", "KTV"],
  summary: "说明 2020 年秋走访调查的现实阻力。",
  body: "一、县政务服务大厅、档案馆、医院、学校等公共场所继续执行预约、测温、扫码和来访登记制度。\n\n二、办理病历、学籍、户籍、档案原件调阅事项，来访人须出示单位介绍信、委托材料或其他合法身份证明。\n\n三、娱乐场所复工后应补齐消防检查记录、公共卫生检查记录、从业人员健康登记和租住人口备案。\n\n四、社区负责核验经营场所实际使用情况、临时住宿情况和未成年人照护说明。\n\n五、本须知自 2020 年 9 月 1 日起执行，由县政务服务大厅咨询窗口负责解释。"
},
{
  id: "doc_yunqian_bus_line",
  title: "云山至黔中旧客运线路备案",
  year: 1987,
  source: "交通档案",
  trust: 3,
  keywords: ["云山", "黔中", "客运", "邮电所", "罗月珍", "钱树林"],
  summary: "补充云山和黔中之间长期往来的交通背景。",
  body: "档号：交运旧线备 1984-07。\n线路名称：云山至黔中方向省际客运线。\n始发站：云山汽车站。\n途经点：红石公社、云山邮电所、县供销社仓储点附近。\n班次：每周二、周五各一班。\n承运单位：云山汽车站、黔中汽车队临时加班车。\n备注：遇集市、探亲返乡和物资调拨高峰，黔中汽车队可申请临时加班。"
},
{
  id: "doc_trust_clause",
  title: "香港家族信托文件节选",
  year: 1998,
  source: "信托",
  trust: 5,
  keywords: ["香港信托", "港安信托", "Harbour Reliance", "血缘", "DNA", "受益人", "非婚生", "宗世昌"],
  summary: "说明不姓宗也可能成为受益人。",
  image: {
  src: "assets/images/evidence/trust-clause-1998.jpg",
  alt: "1998 年香港家族信托文件扫描图",
  caption: "扫描件节选：港安信托服务有限公司抬头、被遮盖的条款页、印章和签署区显示这是一份正式信托材料。"
},
  body: "受托方：港安信托服务有限公司（Harbour Reliance Trust Services Limited）。\n\n设立背景摘要：委托人宗世昌拟将部分境外账户、香港投资权益、保单权益及以后可转入的家族保障资产交由受托方管理。该安排不等同于宗世昌全部遗产分配，也不直接处理世昌集团股权。\n\n本人宗世昌确认，本信托项下的受益人包括：本人的直系血亲后代，以及能够通过 DNA 鉴定证明与本人存在血缘关系的其他个人。\n\n无论该等个人是否使用“宗”作为姓氏，无论其是否婚生或非婚生，无论其母亲或监护人的身份或婚姻状况如何，只要能够证明血缘关系，均有权享受本信托项下权益。"
},
{
  id: "doc_anonymous_letter",
  title: "世昌集团匿名信",
  year: 2020,
  source: "内部文件",
  trust: 3,
  keywords: ["匿名信", "第七个继承人", "后代", "回到云山", "信托"],
  summary: "提示第七支血脉的后代仍在云山。",
  body: "收件处：世昌集团总办。\n投递方式：门卫室夜间信箱。\n纸张：普通信笺一页，无署名。\n\n第七个继承人还活着没有不重要。\n\n她的后代已经回到云山。\n\n如果你们不妥善处理信托的事，我会把一切都公开。"
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
  body: "档号：YS-ARCH-PHOTO-1969-春节-03。\n藏品名称：县供销系统春节联欢会合影。\n拍摄时间：1969 年春节前后。\n画面人物：青年宗世昌、女知青罗月珍等。\n保存状态：黑白合影一张，背面蓝黑钢笔字迹一行。\n背面文字：月珍，建宁满月后勿回。此事我会安排。\n署名残迹：右下角仅余“世”字半边。"
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
  summary: "网帖把宗建芳写成陈静母亲，但缺少原始材料。",
  body: "楼主  茶馆旧人  2008-06-14 21:08\n唱响 KTV 那个陈静，听说是宗建芳主任的女儿。要不然当年挂档案、开店哪有那么顺。\n\n2 楼  西街路过  2008-06-14 21:22\n别乱说。她亲妈早就不在了，宗主任只是妇联帮扶那条线。\n\n3 楼  云山小报童  2008-06-14 22:01\n我也听过这个说法，没见过户口本。\n\n管理员  2008-06-15 09:17\n涉及个人隐私，本帖锁定。"
},
{
  id: "doc_gossip_li_tianci",
  title: "《云山八卦周刊》：李天赐疑云",
  year: 2020,
  source: "八卦周刊",
  trust: 1,
  keywords: ["李敏", "李天赐", "宗世昌", "信托", "DNA"],
  summary: "传闻称李天赐与信托有关。",
  body: "《云山八卦周刊》第 37 期边栏\n标题：李敏母子现身鉴定机构，宗家信托再起猜测\n\n本刊接读者爆料，李敏近日带幼子李天赐出入县城某鉴定机构。现场人员称同行者曾提到“香港信托”“孩子身份”等字样。\n\n匿名知情人称，李强一支近期频繁接触集团法务。另有读者称李天赐出生时间与宗家风波接近。\n\n本刊电话询问世昌集团办公室，截至发稿未获回复。"
},
{
  id: "doc_gossip_mingjun",
  title: "地方论坛《云山商界八卦》：宗明军绯闻",
  year: 2020,
  source: "论坛",
  trust: 1,
  keywords: ["宗明军", "表妹", "绯闻", "宗嘉瑞", "世昌集团"],
  summary: "网帖牵扯宗明军绯闻，但人物称谓多处错乱。",
  body: "楼主  商界茶水间  2020-09-29 00:18\n宗明军和他表妹的事，你们真没人听过？听说还有个孩子。\n\n5 楼  西城货站  2020-09-29 00:34\n宗明欣是女的，你先把人名捋清楚吧。\n\n9 楼  小城看客  2020-09-29 01:02\n宗家旁支多，建字辈、明字辈别混在一块。\n\n管理员  2020-09-29 08:20\n本帖多处人名无法核实，暂不推荐。"
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
  body: "接待日期：2020 年 9 月 23 日。\n接待地点：云山县公证处二号咨询室。\n来访人：宗建红、魏雪琴。\n来访事项：香港家族信托受益人范围材料预审。\n提交材料：宗世昌死亡事实材料、公开亲属关系说明、公开六名子女候选范围表。\n\n来访陈述：宗建红称匿名信内容“荒唐”，要求先核验 1968 至 1970 年县供销系统知青档案。\n接待备注：来访人反复提及“罗姓女知青”“建宁”两个关键词。现有亲属材料仅列公开六名子女，后续需补充档案查询结果。"
},
{
  id: "doc_supply_roster",
  title: "县供销系统仓储点临时工花名册",
  year: 1969,
  source: "档案",
  trust: 5,
  keywords: ["供销系统", "仓储点", "宗世昌", "罗月珍", "临时工", "1969"],
  summary: "证明宗世昌与罗月珍曾在同一系统工作。",
  body: "档号：供仓临工 1969-02 至 1969-08。\n单位：云山县供销系统仓储点。\n登记页：夜班值守与出入库抄录人员表。\n\n姓名：宗世昌。\n出生年份：1932。\n岗位：夜间值守、货物调拨。\n备注：已婚，家住云山镇西街。\n\n姓名：罗月珍。\n出生年份：1949。\n籍贯：贵州。\n岗位：出入库抄录。\n备注：外地知青，宿舍在仓储点东侧。"
},
{
  id: "doc_old_postcard",
  title: "旧明信片残片",
  year: 1971,
  source: "私人收藏",
  trust: 3,
  keywords: ["月珍", "建宁", "贵州", "明信片", "宗世昌"],
  summary: "私人收藏，不能单独定案，但与强证据互相印证。",
  body: "藏品编号：私人来信残片 1971-QZ-02。\n寄出地：贵州黔中。\n收件处：云山县供销社宿舍。\n收件人残字：宗 S。\n邮戳：1971 年春，部分缺损。\n\n残存文字：建宁会走路了。你不用再寄钱，我也不会回去。月珍。"
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
  body: "档案号：教人窗挂 2014-0315。\n申请人：陈静，曾用名陈明静。\n挂靠类型：返乡创业人员临时档案关系挂靠。\n挂靠期限：2014 年 3 月至 2015 年 6 月。\n经办窗口：云山县教育局人才服务窗口。\n转介单位：县妇联。\n帮扶干部：宗建芳。\n经办意见：按返乡女性创业扶持配套手续办理；不建立劳动关系；不列入正式在编人员。"
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
  summary: "网帖把陈静早年男友牵到无关人物。",
  body: "楼主  老街照相馆  2008-08-03 19:40\n陈静早年那个贵州男友，是不是后来打电竞的彭宗日？照片真的像。\n\n4 楼  数学老师不上网  2008-08-03 20:02\n彭宗日 2000 年生，2008 年才 8 岁。你这时间线离谱。\n\n8 楼  路过黔中  2008-08-03 21:15\n陈静那条线是她母亲和外婆的事，别硬塞男友。\n\n管理员  2008-08-04 09:30\n年龄信息冲突，帖子降权。"
},
{
  id: "doc_midwife_register",
  title: "云山卫生院 1969 年冬接生登记摘页",
  year: 1969,
  source: "医院",
  trust: 5,
  keywords: ["周美英", "罗月珍", "女婴", "建宁", "卫生院", "1969"],
  summary: "从医疗登记侧面补强罗建宁出生时间。",
  body: "登记日期：1969 年 12 月 18 日夜。\n登记地点：云山卫生院临时接生室。\n产妇姓名：罗月珍。\n籍贯：贵州。\n身份：外地知青。\n分娩情况：女婴一名，体重六斤二两。\n父亲栏：空白。\n代付押金：供销社何会计。\n页脚备注：家属未到。婴儿乳名建宁。产妇称不便登记父名。"
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
  body: "单据类型：黔中邮电所汇款回执残联。\n日期：1971 年春，月份残缺。\n收款人：罗月珍。\n收款地址：黔中地区红石公社。\n汇出地：云山县邮电所。\n汇款人残字：宗 S。\n金额：字迹磨损，仅余“伍”字。\n附言：给建宁买奶粉，不必回信。\n备注：同格式回执另见两张，月份连续。"
},
{
  id: "doc_li_guilan_letter",
  title: "李桂兰未寄出信稿",
  year: 1970,
  source: "私人收藏",
  trust: 3,
  keywords: ["李桂兰", "罗月珍", "孩子", "建宁", "宗世昌", "未寄出"],
  summary: "说明李桂兰在 1970 年前后至少确认孩子存在。",
  body: "夹藏位置：1970 年春旧账本内页。\n纸张状态：横格信纸一页，折痕处写“月珍”。\n收件人：未写明。\n落款：缺。\n\n残句一：孩子既已生下，就不要再让她夹在两头受罪。\n\n残句二：世昌欠你的，我替他记着。\n\n残句三：这个家也要活下去。"
},
{
  id: "doc_classmate_luo",
  title: "黔中中专同学访谈：罗建宁",
  year: 2008,
  source: "访谈",
  trust: 3,
  keywords: ["罗建宁", "贵州", "母亲", "云山", "建宁", "宗家"],
  summary: "罗建宁成年后仍回避云山身世。",
  body: "访谈编号：QZ-2019-LJN-04。\n受访人：黔中中专同学，姓名隐去。\n访谈地点：黔中老校区门口茶铺。\n记录人：调查协作员。\n\n问：罗建宁读书时提过父亲吗？\n答：很少。她只说云山那边的人不要她妈回去。\n\n问：建宁这个名字是谁取的？\n答：她有次喝了酒，说不是外婆取的，是一个不能认的男人写在照片背后的。"
},
{
  id: "doc_teacher_visit",
  title: "县一中高二三班家访记录",
  year: 2020,
  source: "学校",
  trust: 4,
  keywords: ["黄雅玲", "陈嘉东", "陈小东", "陈静", "KTV", "家访"],
  summary: "从学校侧确认陈嘉东与陈静的实际生活关系。",
  body: "记录编号：县一中家访 2020-高二三班-17。\n学生姓名：陈嘉东。\n小名：陈小东。\n班级：高二三班。\n班主任：黄雅玲。\n家庭住址：唱响 KTV 后巷二楼。\n监护人：陈静，母亲。\n\n家访记录：学生日常由母亲陈静照料，晚自习后自行回家。陈静称女儿随自己姓陈，不愿卷入“宗家那些事”。"
},
{
  id: "doc_false_qian",
  title: "地方论坛《黔中旧事》：钱树林认父帖",
  year: 2020,
  source: "论坛",
  trust: 1,
  keywords: ["钱树林", "罗建宁", "罗月珍", "贵州司机", "误导", "父亲"],
  summary: "网帖把黔中司机钱树林写成罗建宁父亲。",
  body: "楼主  黔中旧车票  2012-04-18 17:12\n罗建宁父亲应该是黔中汽车队的钱树林。钱师傅年轻时常跑云山线。\n\n3 楼  红石人  2012-04-18 17:46\n罗建宁不是出生在贵州吧？我听老人说她妈是在云山生的。\n\n7 楼  旧档案迷  2012-04-18 18:20\n楼主又说罗月珍 1968 年没离开黔中，又说钱树林在云山认识她，前后对不上。\n\n11 楼  楼主  2012-04-18 19:03\n我也是听车队老人讲的，没见过档案。"
},
{
  id: "doc_estate_law_note",
  title: "云山县司法所继承咨询摘记",
  year: 2020,
  source: "司法所",
  trust: 4,
  keywords: ["继承", "非婚生", "信托", "DNA", "陈嘉东", "直系血亲"],
  summary: "说明陈嘉东线需要同时核验血缘与信托条款。",
  body: "咨询日期：2020 年 9 月 28 日。\n咨询地点：云山县司法所。\n咨询事项：遗产继承与境外家族信托受益资格。\n\n摘记一：普通遗产继承处理死亡时仍在被继承人名下的财产。\n\n摘记二：境外家族信托处理已进入信托或按条款可纳入的资产。\n\n摘记三：非婚生子女及其后代主张权利时，应提交亲缘证明材料。\n\n工作人员意见：先固定宗世昌留存血样来源，再核对陈静一支的母系出生记录；未成年人陈嘉东是否直接受益，需查看信托受益人层级。"
},
{
  id: "doc_equity_draft_2005",
  title: "世昌集团 2005 年改制股权底稿",
  year: 2005,
  source: "财务档案",
  trust: 4,
  keywords: ["方仁杰", "股权", "改制", "宗建红", "宗建民", "六名子女"],
  summary: "公司股权只覆盖公开六子女，并不等同于信托受益范围。",
  body: "文件名：世昌集团改制股权底稿。\n保管人：方仁杰。\n形成时间：2005 年。\n登记对象：公开六名子女、集团管理层代表。\n\n宗建红：经营表决权。\n宗建民：物流板块旧资产收益。\n宗建芳：象征性股权。\n宗建国：历史出资确认。\n宗建平：物业板块分红。\n宗建丽：家庭成员保留份额。\n\n页脚批注：本底稿仅作内部改制口径，不处理境外家族信托受益人范围。"
},
{
  id: "doc_board_handover_2015",
  title: "世昌集团 2016 年春治理调整备忘",
  year: 2016,
  source: "内部文件",
  trust: 3,
  keywords: ["魏雪琴", "宗明辉", "宗明军", "宗建红", "董事会", "换届"],
  summary: "宗家第二、三代围绕控制权已经出现裂痕。",
  body: "文件名：世昌集团治理调整备忘。\n形成时间：2016 年春。\n参会人员：宗建红、宗明辉、宗建民、魏雪琴、外部融资顾问。\n事项：董事会授权和家族成员任职边界。\n\n会议摘录：宗建红主张由宗明辉出任董事长，本人保留重大项目否决权。\n\n附件备注：宗世昌不再担任日常经营职务；重大资产处置、银行担保、核心人事和家族信托材料仍需征求创始人特别意见。\n\n法务意见：集团股权安排不得替代家族信托受益人审查；董事会决议不得排除血缘后代。"
},
{
  id: "doc_jianfang_note",
  title: "宗建芳给妇联旧同事的便条",
  year: 2014,
  source: "私人收藏",
  trust: 3,
  keywords: ["宗建芳", "陈静", "妇联", "返乡", "不是我的孩子", "罗月珍"],
  summary: "宗建芳帮助陈静返乡，但明确否认母女关系。",
  body: "收件人：县妇联旧同事，姓名缺。\n纸张：便签纸一页。\n笔迹：与妇联登记表批注相近。\n\n正文：陈静不是我的孩子，只是她母亲那条线和家里旧事牵得太深。她要回云山开店，手续能帮就帮，不要让她被宗家几个孩子堵在门外。\n\n落款：芳。"
},
{
  id: "doc_ktv_lease_archive",
  title: "唱响 KTV 房屋租赁备案",
  year: 2015,
  source: "工商",
  trust: 4,
  keywords: ["马丽华", "陈静", "唱响KTV", "租赁", "老街社区", "陈嘉东"],
  summary: "陈静返乡后的落脚点和经营关系更清晰。",
  body: "备案号：云山工商租备 2015-0512。\n承租人：陈静。\n经营字号：唱响 KTV。\n租赁位置：云山县云山镇老电影院二楼。\n附属空间：后巷二楼房间两间。\n用途：经营、临时住宿。\n社区备注：承租人携未成年子女居住，夜间经营需补齐消防通道说明和未成年人照护说明。\n经办人：马丽华。"
},
{
  id: "doc_dinghui_due_diligence",
  title: "鼎辉基金受益人尽调函",
  year: 2020,
  source: "金融文件",
  trust: 4,
  keywords: ["李强", "鼎辉基金", "尽调", "李天赐", "DNA", "信托"],
  summary: "说明李强和李天赐被卷入传闻的文件来源。",
  body: "发函单位：鼎辉基金项目尽调组。\n收函单位：世昌集团法务部。\n发函时间：2016 年 3 月。\n事项：公开亲属关系及境外信托受益安排核实。\n\n问题一：李强、李敏及李天赐是否列入境外信托受益安排。\n问题二：相关人员是否需补充反洗钱资料。\n问题三：公开亲属关系表是否已经覆盖全部候选对象。\n\n附件：公开亲属关系确认表；反洗钱资料清单。"
},
{
  id: "doc_neighborhood_visit",
  title: "老街社区 2016 年走访记录",
  year: 2016,
  source: "社区",
  trust: 4,
  keywords: ["马丽华", "陈静", "陈嘉东", "陈小东", "社区走访", "单亲"],
  summary: "社区记录补强陈静与陈嘉东的长期共同生活事实。",
  body: "记录编号：老街社区走访 2016-09。\n走访对象：陈静。\n职业：个体经营户。\n经营场所：唱响 KTV。\n同住人员：陈嘉东，小名小东，就读县一中初中部。\n走访人：马丽华。\n\n备注：孩子随母姓，不愿谈外祖家。陈静称以后若有人问起宗家，只说自己靠唱响 KTV 养孩子。"
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
  body: "文件名：世昌集团舆情应对草案。\n拟稿部门：集团办公室。\n审阅人：宗建红。\n时间：2020 年 9 月。\n\n建议口径：集团未收到任何新增继承人正式主张，网络所谓第七个继承人系旧照片误读。\n\n法务待查：罗建宁、陈静、陈嘉东三个名字是否出现在公开资料中。\n\n媒体回应限制：不得主动提及香港家族信托。"
},
{
  id: "doc_ktv_reopen_check",
  title: "唱响 KTV 2020 年复工检查表",
  year: 2020,
  source: "社区",
  trust: 4,
  keywords: ["陈静", "陈嘉东", "唱响KTV", "复工检查", "健康码", "马丽华"],
  summary: "陈静返乡后的经营和居住状态在 2020 年仍可核验。",
  body: "检查表编号：云山文旅复检 2020-KTV-17。\n场所名称：唱响 KTV。\n经营人：陈静。\n场所地址：老电影院二楼。\n附属空间：后巷二楼临时住宿房。\n检查事项：消防通道、健康码登记、从业人员体温记录、未成年人照护说明。\n\n检查意见：经营人需补登记未成年同住人员陈嘉东。晚间营业期间由母亲负责照看，不得让学生进入包厢区。"
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
},
{
  id: "doc_archive_request_log",
  title: "云山县档案馆 2020 年调档登记簿",
  year: 2020,
  source: "档案",
  trust: 4,
  keywords: ["调档登记", "档案馆", "宗建芳", "宗建丽", "供销系统", "知青名册", "照片背注", "罗月珍", "建宁"],
  summary: "宗家内部曾回查供销社旧档与照片背注。",
  body: "登记簿编号：云山县档案馆调档登记 2020-09。\n\n日期：2020 年 9 月 18 日。\n申请人：宗建芳。\n申请事由：妇联旧案复核。\n调阅范围：1968 至 1970 年供销系统知青名册。\n关键词：罗月珍、建宁。\n复制申请：无。\n\n日期：2020 年 9 月 21 日。\n申请人：宗建丽。\n申请事由：家属旧物核对。\n调阅范围：1969 春节合影背注、贵州来信残件。\n关键词：罗月珍、建宁。\n复制申请：无。"
},
{
  id: "doc_scholarship_notice",
  title: "县一中 2020 年秋奖学金公示撤稿截图",
  year: 2020,
  source: "网页存档",
  trust: 2,
  keywords: ["陈嘉东", "陈小东", "奖学金", "县一中", "陈静", "宗家", "撤稿"],
  summary: "撤稿截图出现陈嘉东姓名，也混入宗家传闻。",
  body: "页面标题：县一中 2020 年秋奖学金公示撤稿截图。\n网页路径：archive://yunshan-school/notice/2020-scholarship-draft。\n截取时间：2020 年 9 月。\n\n名单残行：高二三班  陈嘉东。\n手写标注：小东，唱响 KTV 陈静女儿。\n\n评论 17：是不是宗家照顾的那个孩子？\n评论 18：学校说涉及未成年人，名单撤了。\n页面状态：已撤稿。"
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

const purposeFilters = [
  {
    id: "all",
    label: "全部资料",
    hint: "不限制材料范围",
    match: () => true
  },
  {
    id: "strong",
    label: "找强证据",
    hint: "档案、户籍、医院、DNA、信托、公证",
    match: (doc) => doc.trust >= 5 || ["档案", "户籍", "医院", "DNA", "信托", "公证"].includes(doc.source)
  },
  {
    id: "relation",
    label: "查人物关系",
    hint: "学校、社区、工商、教育局、妇联、访谈",
    match: (doc) => ["学校", "社区", "工商", "教育局", "妇联", "访谈", "博客", "短视频", "私人收藏", "录音整理"].includes(doc.source)
  },
  {
    id: "public",
    label: "看公开说法",
    hint: "报刊、官网、公告、县情资料、民俗",
    match: (doc) => ["报刊", "官网", "公告", "县情资料", "民俗", "交通档案", "县志"].includes(doc.source)
  },
  {
    id: "rumor",
    label: "排除传闻",
    hint: "论坛、八卦周刊、网页存档和低可信材料",
    match: (doc) => doc.trust <= 2 || ["论坛", "八卦周刊", "网页存档"].includes(doc.source)
  },
  {
    id: "corporate",
    label: "查集团文件",
    hint: "内部文件、财务档案、金融文件",
    match: (doc) => ["内部文件", "财务档案", "金融文件"].includes(doc.source)
  }
];
const purposeFilterIds = new Set(purposeFilters.map((filter) => filter.id));

const publicDocumentIds = new Set([
  "doc_official_family",
  "doc_group_history",
  "doc_yunshan_county_profile",
  "doc_2020_county_notice",
  "doc_anonymous_letter",
  "doc_naming_rule"
]);

const locationDocumentIds = {
  archives: [
    "doc_educated_youth",
    "doc_photo_back",
    "doc_luo_birth",
    "doc_supply_roster",
    "doc_midwife_register",
    "doc_supply_advance",
    "doc_archive_request_log"
  ],
  hospital: [
    "doc_dna_record",
    "doc_hospital_blood",
    "doc_chen_birth",
    "doc_midwife_register"
  ],
  school: [
    "doc_jiadong_school",
    "doc_teacher_visit",
    "doc_scholarship_notice",
    "doc_school_forum"
  ],
  ktv: [
    "doc_women_fed",
    "doc_blog_chenjing",
    "doc_tiktok_chenjing",
    "doc_gossip_wrong_mother",
    "doc_ktv_license",
    "doc_talent_window",
    "doc_ktv_lease_archive",
    "doc_neighborhood_visit",
    "doc_ktv_reopen_check"
  ],
  group: [
    "doc_trust_clause",
    "doc_notary_meeting",
    "doc_estate_law_note",
    "doc_equity_draft_2005",
    "doc_board_handover_2015",
    "doc_dinghui_due_diligence",
    "doc_sibling_meeting_2020",
    "doc_jianhong_pr_plan",
    "doc_family_meeting",
    "doc_gossip_li_tianci",
    "doc_gossip_mingjun"
  ],
  yunqian: [
    "doc_yunqian_bus_line",
    "doc_old_postcard",
    "doc_classmate_luo",
    "doc_false_qian",
    "doc_false_peng",
    "doc_li_guilan_letter",
    "doc_jianli_old_letters",
    "doc_remittance_stub"
  ]
};

const locationEntryDocumentIds = {
  archives: ["doc_educated_youth", "doc_photo_back", "doc_luo_birth"],
  hospital: ["doc_hospital_blood"],
  school: ["doc_school_forum", "doc_jiadong_school"],
  ktv: ["doc_ktv_license", "doc_women_fed"],
  group: ["doc_trust_clause"],
  yunqian: ["doc_yunqian_bus_line", "doc_old_postcard"]
};

const locationCoordinates = {
  office: { x: 0, y: 0, label: "公证处临时办公室" },
  group: { x: 1.4, y: 0.8, label: "世昌集团" },
  archives: { x: 2.2, y: 1.9, label: "县档案馆" },
  hospital: { x: 3.7, y: 1.3, label: "县医院" },
  school: { x: 5.1, y: 2.6, label: "县一中" },
  ktv: { x: 2.9, y: 3.5, label: "唱响 KTV" },
  yunqian: { x: 6.3, y: 4.2, label: "云山至黔中旧线" }
};

const visitMapBounds = { maxX: 6.8, maxY: 4.6 };

const locationContacts = {
  archives: ["he_guosheng"],
  hospital: ["zhou_meiying"],
  school: ["huang_yaling"],
  ktv: ["ma_lihua"],
  group: ["wei_xueqin", "fang_renjie"],
  yunqian: ["qian_shulin"]
};

const documentContactPeople = {
  doc_trust_clause: ["wei_xueqin"],
  doc_notary_meeting: ["wei_xueqin"],
  doc_estate_law_note: ["wei_xueqin"],
  doc_equity_draft_2005: ["fang_renjie"],
  doc_board_handover_2015: ["fang_renjie"],
  doc_dinghui_due_diligence: ["fang_renjie"],
  doc_sibling_meeting_2020: ["wei_xueqin"],
  doc_jianhong_pr_plan: ["wei_xueqin"],
  doc_family_meeting: ["wei_xueqin"],
  doc_gossip_li_tianci: ["wei_xueqin"],
  doc_gossip_mingjun: ["wei_xueqin"],
  doc_educated_youth: ["he_guosheng"],
  doc_photo_back: ["he_guosheng"],
  doc_luo_birth: ["he_guosheng"],
  doc_supply_roster: ["he_guosheng"],
  doc_midwife_register: ["zhou_meiying"],
  doc_supply_advance: ["he_guosheng"],
  doc_archive_request_log: ["he_guosheng"],
  doc_dna_record: ["zhou_meiying"],
  doc_hospital_blood: ["zhou_meiying"],
  doc_chen_birth: ["zhou_meiying"],
  doc_jiadong_school: ["huang_yaling"],
  doc_teacher_visit: ["huang_yaling"],
  doc_scholarship_notice: ["huang_yaling"],
  doc_school_forum: ["huang_yaling"],
  doc_women_fed: ["ma_lihua"],
  doc_blog_chenjing: ["ma_lihua"],
  doc_tiktok_chenjing: ["ma_lihua"],
  doc_gossip_wrong_mother: ["ma_lihua"],
  doc_ktv_license: ["ma_lihua"],
  doc_talent_window: ["ma_lihua"],
  doc_ktv_lease_archive: ["ma_lihua"],
  doc_neighborhood_visit: ["ma_lihua"],
  doc_ktv_reopen_check: ["ma_lihua"],
  doc_yunqian_bus_line: ["qian_shulin"],
  doc_old_postcard: ["qian_shulin"],
  doc_classmate_luo: ["qian_shulin"],
  doc_false_qian: ["qian_shulin"],
  doc_false_peng: ["qian_shulin"],
  doc_li_guilan_letter: ["qian_shulin"],
  doc_jianli_old_letters: ["qian_shulin"],
  doc_remittance_stub: ["qian_shulin"]
};

const investigationDay = "2020-09-28";
const dayStartMinutes = 9 * 60;
const dayEndMinutes = 18 * 60;

const locationLabels = {
  archives: "县档案馆",
  hospital: "县医院",
  school: "县一中",
  ktv: "唱响 KTV",
  group: "世昌集团",
  yunqian: "云山至黔中旧线"
};

const updateLogs = [
  {
    date: "2026-05-17",
    title: "问询材料一键打开",
    changes: [
      "现场问询的“先看材料”改为可操作材料区，已入卷时可直接打开原件",
      "材料尚未办理取件时显示“办理取件后入卷”，避免误以为未取得材料也能阅读",
      "普通试玩新增直达断言，确认问询回看按钮会打开并标记阅读对应入口材料"
    ],
    checks: [
      "node --check game\\app.js passed",
      "npm.cmd run validate passed",
      "npm.cmd run playtest passed",
      "npm.cmd run smoke passed"
    ]
  },
  {
    date: "2026-05-17",
    title: "问询先看材料提示",
    changes: [
      "现场问询新增“先看材料”提示，回答后直接指出应先核对的本地点入口资料",
      "档案馆照片背注问询搜索词改为“建宁”，优先露出照片背注和旧户籍两份入口材料",
      "内容包同步和搜索路线复盘新增 firstDoc 校验，防止问询只给关键词却不落到可读材料"
    ],
    checks: [
      "npm.cmd run validate passed",
      "npm.cmd run playtest passed",
      "npm.cmd run smoke passed"
    ]
  },
  {
    date: "2026-05-17",
    title: "走访问询记录回看",
    changes: [
      "今日调查日程新增现场问询记录汇总，玩家离开地点后仍能回看已追问回答",
      "问询记录保留经手人、地点和对应搜索按钮，继续不推进时间或直接解锁资料",
      "普通试玩新增问询回看断言，防止问询只在当前地点临时显示"
    ],
    checks: [
      "node --check game\\app.js passed",
      "npm.cmd run validate passed",
      "npm.cmd run playtest passed",
      "npm.cmd run smoke passed"
    ]
  },
  {
    date: "2026-05-17",
    title: "走访现场问询",
    changes: [
      "六个走访地点新增现场问询，每处至少两条可追问事项，补足联系人交互感",
      "问询回答写入本地存档，已问事项会展开经手人口吻记录并提供资料库搜索按钮",
      "解锁矩阵和普通试玩新增问询覆盖断言，确保问询不会直接解锁资料或破坏取件流程"
    ],
    checks: [
      "node --check game\\app.js passed",
      "node --check tools\\validate_unlock_matrix.mjs passed",
      "npm.cmd run validate passed",
      "npm.cmd run playtest passed",
      "npm.cmd run smoke passed"
    ]
  },
  {
    date: "2026-05-17",
    title: "县域走访路线图",
    changes: [
      "走访详情顶部新增县域路线图，用已有坐标标出公证处、六个走访地点、当前所在位置和目标路线",
      "地图地点支持点击切换，已取件、已错过和待走访状态用不同标记显示",
      "普通试玩新增路线图断言，确认开局从公证处出发，办理后当前位置移动到世昌集团"
    ],
    checks: [
      "node --check game\\app.js passed",
      "npm.cmd run validate passed",
      "npm.cmd run playtest passed",
      "npm.cmd run smoke passed"
    ]
  },
  {
    date: "2026-05-17",
    title: "走访调查日程",
    changes: [
      "走访详情下方新增今日调查日程，按办理结束时间列出已取件和已错过状态",
      "每条日程记录显示抵达/结束时间、经手人、取得资料和下一步关键词",
      "普通试玩新增走访日程断言，避免时间系统只推进数值但缺少可读记录"
    ],
    checks: [
      "node --check game\\app.js passed",
      "npm.cmd run validate passed",
      "npm.cmd run playtest passed",
      "npm.cmd run smoke passed"
    ]
  },
  {
    date: "2026-05-17",
    title: "走访结果引导与补救",
    changes: [
      "每个走访地点补充成功取件后的下一步建议、建议搜索词和可追问对象",
      "错过窗口后显示补救路线、可转去地点和次日补办按钮",
      "调查备忘录新增只在错过窗口时出现的补办任务，避免取件失败后无处整理"
    ],
    checks: [
      "node --check game\\app.js passed",
      "npm.cmd run validate passed",
      "npm.cmd run playtest passed",
      "npm.cmd run smoke passed"
    ]
  },
  {
    date: "2026-05-17",
    title: "\u89e3\u9501\u56de\u5f52\u6821\u9a8c\u4fee\u590d",
    changes: [
      "\u4fee\u590d validate_unlock_matrix \u548c validate_search_paths \u7684\u5e38\u91cf\u89e3\u6790\uff0c\u907f\u514d\u65b0\u589e\u914d\u7f6e\u5e38\u91cf\u540e\u8bef\u5224\u5931\u8d25",
      "\u641c\u7d22\u8def\u5f84\u6821\u9a8c\u540c\u6b65\u5f53\u524d\u5206\u5c42\u8d70\u8bbf\u89c4\u5219\uff1a\u8d70\u8bbf\u53d6\u5f97\u5165\u53e3\u8d44\u6599\uff0c\u518d\u7531\u5165\u53e3\u8d44\u6599\u63a8\u8fdb\u540e\u7eed\u94fe\u6761",
      "\u91cd\u65b0\u751f\u6210\u641c\u7d22\u8def\u7ebf\u590d\u76d8\uff0c\u96c6\u56e2\u8d70\u8bbf\u7b49\u5165\u53e3\u73b0\u5728\u6309\u771f\u5b9e\u53ef\u89c1\u8d44\u6599\u8ba1\u6570"
    ],
    checks: [
      "node --check tools\\validate_unlock_matrix.mjs passed",
      "node --check tools\\validate_search_paths.mjs passed",
      "npm.cmd run validate passed",
      "npm.cmd run review:search passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "侧栏 UI 图标资产接入",
    changes: [
      "侧栏 8 个主导航项改为使用已拆分的 PNG UI 图标资产",
      "视觉资产回归新增导航图标断言，检查 8 个图标和 5 个拆分图标源是否实际渲染",
      "该改动只接入首屏导航美术，不改变搜索、解锁、关系答案或提交校验"
    ],
    checks: [
      "node --check game\\app.js passed",
      "npm.cmd run validate passed",
      "npm.cmd run visual:assets passed",
      "npm.cmd run smoke passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "资料页旧照片素材接入",
    changes: [
      "把旧商店、春节合影、奖学金公示、KTV 开业和集团挂牌素材接入对应资料阅读页",
      "视觉资产回归现在会打开资料页，检查补充美术图片是否实际渲染",
      "该改动只增加资料页视觉参照，不改变搜索、解锁、关系答案或提交校验"
    ],
    checks: [
      "node --check game\\app.js passed",
      "npm.cmd run visual:assets passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "人物与家谱视觉资产回归",
    changes: [
      "人物档案补接李桂兰头像，公开宗家与隐藏血脉的已生成人像现在有 8 张进入人物卡",
      "新增隐藏 visualtest 模式，检查人物头像、家谱节点图标和图例图标是否实际渲染",
      "新增视觉资产回归脚本，生成 DOM 报告和截图，避免未来资产断链但普通数据校验仍通过"
    ],
    checks: [
      "node --check game\\app.js passed",
      "npm.cmd run visual:assets passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "试玩引导断言加固",
    changes: [
      "普通路径试玩现在会检查锁定资料是否显示非剧透引导卡",
      "回归会确认锁定提示提供走访入口和具体地点建议，避免玩家搜对关键词却不知道下一步",
      "本轮只加固试玩判定，不改变资料、答案或渐进解锁规则"
    ],
    checks: [
      "node --check game\\app.js passed",
      "npm.cmd run playtest passed",
      "npm.cmd run validate passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "资料阅读版式回归",
    changes: [
      "原件式资料页增加长字段、网页楼层和条款文本的换行保护",
      "移动端档案字段表改为单列，避免原件化长正文撑破阅读面板",
      "新增隐藏版式审计入口，可批量检查 50 份资料在桌面和手机宽度下是否横向溢出"
    ],
    checks: [
      "node --check game\\app.js passed",
      "npm.cmd run layout:documents passed",
      "npm.cmd run validate passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "资料正文原件化改写",
    changes: [
      "按原件感审计结果改写 32 份资料正文，去掉调查员总结口吻",
      "报刊、官网、县情、公告、档案、论坛、信件、访谈和表格资料改成各自原始形态",
      "审计报告现在 50 份资料全部通过原件感检查"
    ],
    checks: [
      "npm.cmd run audit:originals passed",
      "node --check game\\app.js passed",
      "npm.cmd run validate passed",
      "npm.cmd run playtest passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "资料原件视图",
    changes: [
      "资料阅读页从摘要卡改为按来源渲染原件式版面",
      "报刊、档案表格、信托条款、网页快照和私藏材料会使用不同版式",
      "正文信息不改动，先通过排版让玩家感觉是在查原始材料而不是读知识提炼"
    ],
    checks: [
      "node --check game\\app.js passed",
      "npm.cmd run validate passed",
      "npm.cmd run playtest passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "锁定资料走访建议",
    changes: [
      "资料库搜索命中未入卷资料时，会从锁定资料反推建议走访地点",
      "锁定提示新增最多三个地点按钮，点击后登记走访并用该地点默认关键词继续检索",
      "搜索路径校验新增锁定提示断言，确认开局信托与罗月珍线能给出可执行走访入口"
    ],
    checks: [
      "node --check game\\app.js passed",
      "node --check tools\\validate_search_paths.mjs passed",
      "npm.cmd run validate passed",
      "npm.cmd run playtest passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "渐进解锁矩阵自检",
    changes: [
      "新增隐藏血脉、后段资料和走访地点的解锁自检报告",
      "新增 validate_unlock_matrix 脚本，校验自检报告、代码触发条件和资料 ID 没有漂移",
      "该校验已接入 npm.cmd run validate，避免正式版渐进解锁规则回退"
    ],
    checks: [
      "node tools/validate_unlock_matrix.mjs passed",
      "npm.cmd run validate passed",
      "npm.cmd run playtest passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "家谱节点状态图接入",
    changes: [
      "血脉关系图节点接入拆分后的 genealogy-node 图标",
      "未核验、待证实、血亲确认、公开法定和已故状态在家谱右侧增加图例",
      "该改动只影响家谱视觉扫读，不改变人物显名、关系答案或提交校验"
    ],
    checks: [
      "node --check game\\app.js passed",
      "npm.cmd run validate passed",
      "npm.cmd run playtest passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "内容包线索来源校验",
    changes: [
      "内容包每条线索新增来源资料 ID，避免真相表只记录结论而缺少可追溯资料入口",
      "补入供销系统临时工花名册到结构化内容包，使罗月珍早期线索与资料库来源一致",
      "内容包校验会检查线索资料存在性、重复引用和每条必需真相至少两份来源资料覆盖"
    ],
    checks: [
      "node tools/validate_content_bundle.mjs game/data/case_bundle.json passed",
      "npm.cmd run validate passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "运行时资产校验",
    changes: [
      "新增运行时资产引用校验，扫描游戏入口、脚本和样式中的图片与音频路径",
      "校验会确认实际引用的 PNG/JPG/WAV/MP3 文件存在、未越出 game 目录且非空",
      "npm.cmd run validate 已接入该检查，避免断图或静音资源在回归中漏过"
    ],
    checks: [
      "node --check tools/validate_runtime_assets.mjs passed",
      "npm.cmd run validate passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "试玩与烟测断言加固",
    changes: [
      "普通路径试玩脚本会解析页面内 JSON 报告，确认状态、错误数组和关键节点数量",
      "试玩与自动通关烟测都会检查截图文件存在且非空，避免截图失败被 DOM 结果掩盖",
      "回归说明同步更新，便于后续自动化继续沿用同一套判定"
    ],
    checks: [
      "npm.cmd run playtest passed",
      "powershell -ExecutionPolicy Bypass -File tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "普通路径试玩回归",
    changes: [
      "新增隐藏 playtest 模式，按玩家最小调查路径逐步搜索、阅读、收藏和提交",
      "回归路径不再一次性解锁全部资料，专门检查渐进解锁和关系绑定是否阻断主线",
      "新增 Edge headless 脚本生成试玩 DOM 与截图，方便每轮自动化复查"
    ],
    checks: [
      "node --check game/app.js passed",
      "npm.cmd run playtest passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "备忘录手动整理",
    changes: [
      "调查备忘录待办新增“锁定”和“忽略”手动状态，用于试玩时整理主线与误导线",
      "手动状态写入本地存档和导出存档，自动完成判定仍以真实阅读、收藏、关系绑定和提交为准",
      "被忽略的未完成待办不会抢占当前任务高亮，减少支线排除项干扰主线推进"
    ],
    checks: [
      "node --check game/app.js passed",
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "资料与家谱渐进解锁",
    changes: [
      "资料库新增 public/location/chain 可见性规则，未解锁资料不会直接出现在搜索结果里",
      "走访地点会写入本地进度，并解锁对应地点可取得的档案、访谈、工商、学校和集团资料",
      "家谱隐藏血脉节点和人物档案会按已读资料逐步显名，开局保留未核验分支占位"
    ],
    checks: [
      "node --check game/app.js passed",
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-16",
    title: "关系证据解释",
    changes: [
      "六条关键关系新增“为什么这些证据成立”展开说明",
      "每条说明区分定案证据、辅助入口和不能单独排除的材料",
      "保持原有关系答案和最终提交校验不变，只补强玩家理解路径"
    ],
    checks: [
      "node --check game/app.js passed",
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-15",
    title: "关系证据卡片化",
    changes: [
      "关系核验的证据绑定从长复选框清单改为证据卡片",
      "证据按已绑定、必要证据、强证据、辅助材料和传闻误导分组",
      "文档类下拉使用短标题，确认后补充一句证据链小结"
    ],
    checks: [
      "node --check game/app.js passed",
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-15",
    title: "人物档案筛选",
    changes: [
      "家谱页人物档案新增分组筛选，可只看公开宗家、隐藏血脉、旁支或证人",
      "筛选状态写入本地存档，返回家谱页时保留当前人物视角",
      "减少关系图下方长名单滚动，方便围绕当前关系核验查人"
    ],
    checks: [
      "node --check game/app.js passed",
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-15",
    title: "家谱界面可视化改造",
    changes: [
      "家谱页新增血脉关系图，将公开宗家和隐藏血脉链条并排呈现",
      "关键关系推理改为单条聚焦卡，通过步骤导航切换六条关系",
      "关系图和推理卡新增线索搜索入口，减少一屏多表单造成的压力"
    ],
    checks: [
      "node --check game/app.js passed",
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
  {
    date: "2026-05-15",
    title: "搜索链补强",
    changes: [
      "新增 2 份资料：档案馆调档登记簿和县一中奖学金公示撤稿截图",
      "资料库从 48 条扩到 50 条，补强宗建芳/宗建丽回查旧档与陈嘉东姓名搜索入口",
      "新增内容只作为搜索路径和误导材料，不改变最终提交答案"
    ],
    checks: [
      "node --check game/app.js passed",
      "npm.cmd run validate passed",
      "tools/run_smoke.ps1 passed"
    ]
  },
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
      "新增 6 份资料，覆盖 2005 股权改制、2016 治理调整、宗建芳便条、KTV 租赁、鼎辉尽调和社区走访",
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
  filter: "all",
  selectedDoc: null,
  readDocs: new Set(),
  collected: new Set(),
  obtainedDocuments: new Set(),
  relationAnswers: {},
  activeRelationId: "rel_public_family",
  personFilter: "all",
  visitedLocations: new Set(),
  locationVisits: {},
  activeVisitId: "group",
  lastVisitResult: null,
  currentLocationId: "office",
  clockMinutes: 9 * 60,
  visitQuestionLog: {},
  report: { heir: "", descendant: "" },
  reportSubmitted: false,
  sound: true,
  ambient: false,
  notes: "",
  taskStates: {}
};

const phaseGoals = [
  {
    title: "建立公开版本",
    prompt: "先读公开家庭资料，只确认已经进入卷宗的家庭结构。",
    actionLabel: "搜索宗世昌",
    query: "宗世昌",
    view: "search",
    done: () => state.readDocs.has("doc_official_family")
  },
  {
    title: "确认审查规则",
    prompt: "找到并收藏继承规则材料，再判断哪些事实会影响资格。",
    actionLabel: "搜索信托",
    query: "信托",
    view: "search",
    done: () => state.collected.has("doc_trust_clause")
  },
  {
    title: "回查旧档线索",
    prompt: "根据已读材料里的陌生姓名、地点和年份，逐步扩展旁支卷宗。",
    actionLabel: "去走访",
    view: "visit",
    done: () => isPersonDiscovered("luo_jianning")
  },
  {
    title: "补齐后段身份",
    prompt: "继续用出生、学籍、亲缘等强材料核实已经显名的人物。",
    actionLabel: "打开家谱",
    view: "tree",
    done: () => isPersonDiscovered("chen_jiadong") && state.collected.has("doc_dna_record")
  },
  {
    title: "绑定已开放关系",
    prompt: "只处理当前已开放的关系题，给每条关系绑定已收藏证据。",
    actionLabel: "打开家谱",
    view: "tree",
    done: () => availableRelationPrompts().length === relationPrompts.length && relationPrompts.every(isRelationCorrect)
  },
  {
    title: "提交最终报告",
    prompt: "当关键关系全部核验后，再提交继承资格判断。",
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
        id: "main_public_family",
        title: "建立公开家庭版本",
        detail: "先读公开报道，确认宗世昌被公开承认的家庭结构。",
        actionLabel: "查宗世昌",
        view: "search",
        query: "宗世昌",
        done: () => state.readDocs.has("doc_official_family")
      },
      {
        id: "main_trust_rule",
        title: "固定继承规则",
        detail: "把信托条款加入证据箱，再判断姓氏是否决定资格。",
        actionLabel: "查信托",
        view: "search",
        query: "信托",
        done: () => state.collected.has("doc_trust_clause")
      },
      {
        id: "main_hidden_chain",
        title: "补齐旁支身份链条",
        detail: "围绕已经显名的人物继续找强证据，不提前假定结论。",
        actionLabel: "回查旧档",
        view: "search",
        query: "旧档",
        done: () => ["doc_photo_back", "doc_luo_birth", "doc_chen_birth", "doc_jiadong_school", "doc_dna_record"].every((id) => state.collected.has(id))
      },
      {
        id: "main_relations",
        title: "完成家谱绑定",
        detail: "给关键关系选择人物，并绑定已收藏的强证据。",
        actionLabel: "打开家谱",
        view: "tree",
        done: () => relationPrompts.every(isRelationCorrect)
      },
      {
        id: "main_report",
        title: "提交最终报告",
        detail: "在关键关系全部核验后提交继承资格判断。",
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
        id: "side_zong_jianfang",
        title: "排除宗建芳误传",
        detail: "核对帮扶、档案挂靠和母女关系之间的差别。",
        actionLabel: "查宗建芳",
        view: "search",
        query: "宗建芳",
        done: () => state.readDocs.has("doc_women_fed") && state.readDocs.has("doc_talent_window")
      },
      {
        id: "side_qian_rumor",
        title: "核实司机传闻",
        detail: "把交通背景和亲缘证据分开，不让低可信网帖带偏。",
        actionLabel: "查钱树林",
        view: "search",
        query: "钱树林",
        done: () => state.readDocs.has("doc_false_qian") && state.readDocs.has("doc_yunqian_bus_line")
      },
      {
        id: "side_equity_trust",
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
        id: "tutorial_visit",
        title: "从走访进入资料库",
        detail: "任意选择一个走访地点或搜索关键词，打开第一份资料。",
        actionLabel: "去走访",
        view: "visit",
        done: () => state.readDocs.size > 0
      },
      {
        id: "visit_missed_recovery",
        title: "补办错过窗口",
        detail: "有走访地点因抵达过晚未取到材料，回走访页重新排期或转去仍可办理的地点。",
        actionLabel: "看补救",
        view: "visit",
        done: () => missedVisitLocations().length === 0
      },
      {
        id: "tutorial_collect",
        title: "收藏第一份证据",
        detail: "打开资料后点击“加入证据箱”，让它可用于家谱绑定。",
        actionLabel: "去资料库",
        view: "search",
        done: () => state.collected.size > 0
      },
      {
        id: "tutorial_relation",
        title: "完成一条关系推理",
        detail: "在家谱页选人并绑定证据，观察冲突提示。",
        actionLabel: "打开家谱",
        view: "tree",
        done: () => relationPrompts.some(isRelationCorrect)
      },
      {
        id: "tutorial_keyword",
        title: "用关键词回查",
        detail: "阅读资料后，在关键词区点击词条继续搜索。",
        actionLabel: "看关键词",
        view: "notes",
        done: () => discoveredKeywords().length > 0 && state.query.trim().length > 0
      }
    ]
  }
];

const notebookTaskIds = new Set(notebookTaskGroups.flatMap((group) => group.items.map((item) => item.id)));

const visitLocations = [
  {
    id: "archives",
    title: "县档案馆",
    image: "assets/images/photo-backgrounds/archive-room.png",
    query: "旧户籍",
    meta: "户籍 · 知青 · 旧报刊",
    text: "调阅迁入登记、知青名册和早年公开报道，核对旧年往来与身份登记。",
    contact: "何国生",
    interaction: "递交公证处委托函，说明需要查迁入登记和旧照片索引。",
    windowStart: 9 * 60,
    windowEnd: 16 * 60 + 30,
    entryCutoff: 15 * 60,
    duration: 90
  },
  {
    id: "hospital",
    title: "县医院",
    image: "assets/images/photo-backgrounds/county-hospital-corridor.png",
    query: "血样",
    meta: "血样 · 出生 · 病历",
    text: "复核出生记录、留存血样和亲缘比对来源，确认材料来源是否可靠。",
    contact: "周美英",
    interaction: "请退休助产员核对登记簿影印件，再到病案窗口补登记。",
    windowStart: 9 * 60,
    windowEnd: 16 * 60,
    entryCutoff: 14 * 60 + 30,
    duration: 80
  },
  {
    id: "school",
    title: "县一中",
    image: "assets/images/photo-backgrounds/county-school-gate.png",
    query: "县一中",
    meta: "学籍 · 家访 · 未成年人",
    text: "查验学籍、班主任家访和监护人信息，核实未成年人身份材料。",
    contact: "黄雅玲",
    interaction: "等班主任课间空档，出示委托函后核对学生信息表。",
    windowStart: 14 * 60,
    windowEnd: 17 * 60,
    entryCutoff: 16 * 60,
    duration: 70
  },
  {
    id: "ktv",
    title: "唱响 KTV 后巷",
    image: "assets/images/photo-backgrounds/county-ktv-room.png",
    query: "KTV",
    meta: "租赁 · 社区 · 复工检查",
    text: "核对返乡经营登记、租住人口记录和社区走访材料。",
    contact: "马丽华",
    interaction: "通过社区主任核对租住人口和复工检查留痕。",
    windowStart: 11 * 60,
    windowEnd: 22 * 60,
    entryCutoff: 21 * 60,
    duration: 60
  },
  {
    id: "group",
    title: "世昌集团",
    image: "assets/images/photo-backgrounds/shichang-group-building.png",
    query: "信托",
    meta: "股权 · 董事会 · 信托",
    text: "区分公司控制权、公开子女口径和家族信托受益人审查。",
    contact: "魏雪琴 / 方仁杰",
    interaction: "先约集团法务魏雪琴，必要时再向改制会计方仁杰追问旧股权材料。",
    windowStart: 9 * 60 + 30,
    windowEnd: 17 * 60,
    entryCutoff: 15 * 60 + 30,
    duration: 75
  },
  {
    id: "yunqian",
    title: "云山至黔中旧线",
    image: "assets/images/photo-backgrounds/yunshan-street.png",
    query: "黔中",
    meta: "客运 · 邮电 · 传闻",
    text: "核对两地长期往来的交通背景，排除司机认父等低可信传闻。",
    contact: "钱树林",
    interaction: "在旧线客运点核对车队口述和线路备案，不把传闻当强证据。",
    windowStart: 10 * 60,
    windowEnd: 17 * 60 + 30,
    entryCutoff: 16 * 60,
    duration: 95
  }
];

const visitFollowUps = {
  archives: {
    obtained: "先读照片背注和旧户籍，再回资料库搜“罗建宁”，把罗月珍与孩子的档案链连起来。",
    missed: "档案馆闭窗后不要空等，先转去云山至黔中旧线核对交通与邮电材料，次日再补办旧户籍。",
    query: "罗建宁",
    ask: "何国生"
  },
  hospital: {
    obtained: "先读血样留存单，再搜“DNA”，把亲缘比对记录和医院样本来源并排核对。",
    missed: "医院病案窗口错过后，先去县一中或唱响 KTV 取得陈嘉东与陈静的身份入口，再次日补血样。",
    query: "DNA",
    ask: "周美英"
  },
  school: {
    obtained: "先读学生信息表和家访记录，再搜“陈嘉东”，确认监护人与学籍材料是否一致。",
    missed: "县一中放学后窗口收档，先转去唱响 KTV 查陈静经营线，次日午后再回学校补学籍。",
    query: "陈嘉东",
    ask: "黄雅玲"
  },
  ktv: {
    obtained: "先读妇联帮扶和 KTV 登记，再搜“陈静”，把返乡经营、档案挂靠和母女线索分开。",
    missed: "KTV 夜间仍可办理，若错过就先回资料库整理陈静相关材料，次日上午补社区记录。",
    query: "陈静",
    ask: "马丽华"
  },
  group: {
    obtained: "先读信托条款，再搜“信托”，只沿继承规则小链查公证与司法材料，不把集团资料整包展开。",
    missed: "集团法务窗口过点后，先查公开宗家和县档案馆旧档，次日上午再补信托入口材料。",
    query: "信托",
    ask: "魏雪琴 / 方仁杰"
  },
  yunqian: {
    obtained: "先读旧线备案和明信片残片，再搜“黔中”，区分交通背景与钱树林传闻。",
    missed: "旧线客运点收摊后，先回档案馆或资料库核对罗月珍，次日再补邮电与车队口述。",
    query: "黔中",
    ask: "钱树林"
  }
};

const visitInterviews = {
  archives: [
    {
      id: "hukou_scope",
      prompt: "旧户籍能证明到哪一步？",
      person: "何国生",
      answer: "只能证明迁入登记和同册关系，不能直接证明血缘；要和照片背注、知青名册并看。",
      query: "旧户籍",
      firstDoc: "doc_luo_birth"
    },
    {
      id: "photo_index",
      prompt: "照片背注该怎么查？",
      person: "何国生",
      answer: "先按罗月珍和建宁两个名字查索引，再看背注时间是否早于宗家公开资料口径。",
      query: "建宁",
      firstDoc: "doc_photo_back"
    }
  ],
  hospital: [
    {
      id: "sample_chain",
      prompt: "血样来源可靠吗？",
      person: "周美英",
      answer: "医院只保留采样登记和封存编号，亲缘结论必须回到 DNA 报告本身核对。",
      query: "DNA",
      firstDoc: "doc_hospital_blood"
    },
    {
      id: "birth_register",
      prompt: "出生登记要和谁对上？",
      person: "周美英",
      answer: "先用住院血样固定宗世昌样本来源，再回头核对出生登记、接生员签名和后续学籍监护人。",
      query: "血样",
      firstDoc: "doc_hospital_blood"
    }
  ],
  school: [
    {
      id: "guardian_line",
      prompt: "学籍里最关键的字段？",
      person: "黄雅玲",
      answer: "监护人、住址和家访备注最关键；它们能把陈嘉东和陈静的生活关系串起来。",
      query: "陈嘉东",
      firstDoc: "doc_jiadong_school"
    },
    {
      id: "forum_noise",
      prompt: "论坛帖子能不能当证据？",
      person: "黄雅玲",
      answer: "论坛只能提示查找方向，不能替代学籍表、家访记录和正式登记。",
      query: "县一中",
      firstDoc: "doc_jiadong_school"
    }
  ],
  ktv: [
    {
      id: "tenant_record",
      prompt: "KTV 线索先查什么？",
      person: "马丽华",
      answer: "先查租赁和复工检查表，确认陈静返乡经营的时间，再回头看妇联帮扶材料。",
      query: "陈静",
      firstDoc: "doc_ktv_license"
    },
    {
      id: "neighborhood_weight",
      prompt: "邻里走访能定案吗？",
      person: "马丽华",
      answer: "邻里口述只能解释生活轨迹，定案仍要靠登记、病案和亲缘材料。",
      query: "KTV",
      firstDoc: "doc_ktv_license"
    }
  ],
  group: [
    {
      id: "trust_scope",
      prompt: "信托材料能查到哪一步？",
      person: "魏雪琴",
      answer: "信托入口只说明受益人审查范围，不会一次性开放集团股权、尽调和董事会旧档。",
      query: "信托",
      firstDoc: "doc_trust_clause"
    },
    {
      id: "equity_noise",
      prompt: "股权旧档和继承有什么关系？",
      person: "方仁杰",
      answer: "股权旧档能解释集团内部争议，但继承资格仍要回到血缘、收养和公证材料。",
      query: "股权",
      firstDoc: "doc_trust_clause"
    }
  ],
  yunqian: [
    {
      id: "route_context",
      prompt: "旧客运线为什么要查？",
      person: "钱树林",
      answer: "它只证明两地长期往来方便，能解释人际路径，但不能单独证明亲缘。",
      query: "黔中",
      firstDoc: "doc_yunqian_bus_line"
    },
    {
      id: "driver_rumor",
      prompt: "司机传闻怎么处理？",
      person: "钱树林",
      answer: "先按钱树林这个名字核对线路备案和口述来源；除非能接上正式档案，否则不能放进强证据链。",
      query: "钱树林",
      firstDoc: "doc_yunqian_bus_line"
    }
  ]
};

const personGroups = [
  {
    title: "公开宗家",
    hint: "公开资料承认的宗世昌家庭。",
    tone: "official",
    ids: ["zong_shichang", "li_guilan", "zong_jianguo", "zong_jianfang", "zong_jianmin", "zong_jianhong", "zong_jianping", "zong_jianli"]
  },
  {
    title: "待核旁支",
    hint: "需要用强证据逐步串联的人物。",
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
const personFilterIds = new Set(["all", ...personGroups.map((group) => group.tone)]);

const personPortraits = {
  zong_shichang: "assets/images/future-assets/portraits/zong-shichang-old-portrait.png",
  li_guilan: "assets/images/future-assets/portraits/li-guilan-portrait.png",
  zong_jianfang: "assets/images/future-assets/portraits/zong-jianfang-portrait.png",
  zong_jianhong: "assets/images/future-assets/portraits/zong-jianhong-portrait.png",
  luo_yuezhen: "assets/images/future-assets/portraits/luo-yuezhen-youth-photo.png",
  luo_jianning: "assets/images/future-assets/portraits/luo-jianning-file-photo.png",
  chen_jing: "assets/images/future-assets/portraits/chen-jing-portrait.png",
  chen_jiadong: "assets/images/future-assets/portraits/chen-jiadong-student-photo.png"
};

const genealogyNodeAssets = {
  unknown: "assets/images/future-assets/genealogy-nodes/unknown-person.png",
  confirmed: "assets/images/future-assets/genealogy-nodes/confirmed-blood-relative.png",
  legal: "assets/images/future-assets/genealogy-nodes/legal-adoptive-relation.png",
  disputed: "assets/images/future-assets/genealogy-nodes/disputed-relation.png",
  deceased: "assets/images/future-assets/genealogy-nodes/deceased-person.png"
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
    filter: state.filter,
    selectedDoc: state.selectedDoc,
    readDocs: [...state.readDocs],
    collected: [...state.collected],
    obtainedDocuments: [...state.obtainedDocuments],
    relationAnswers: state.relationAnswers,
    activeRelationId: state.activeRelationId,
    personFilter: state.personFilter,
    visitedLocations: [...state.visitedLocations],
    locationVisits: state.locationVisits,
    activeVisitId: state.activeVisitId,
    lastVisitResult: state.lastVisitResult,
    currentLocationId: state.currentLocationId,
    clockMinutes: state.clockMinutes,
    visitQuestionLog: state.visitQuestionLog,
    report: state.report,
    reportSubmitted: state.reportSubmitted,
    sound: state.sound,
    ambient: state.ambient,
    notes: state.notes,
    taskStates: state.taskStates
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
    state.filter = purposeFilterIds.has(parsed.filter) ? parsed.filter : "all";
    state.selectedDoc = parsed.selectedDoc || null;
    state.readDocs = new Set(parsed.readDocs || []);
    state.collected = new Set(parsed.collected || []);
    state.obtainedDocuments = new Set((parsed.obtainedDocuments || []).filter((id) => documents.some((doc) => doc.id === id)));
    state.relationAnswers = parsed.relationAnswers || {};
    state.activeRelationId = relationPrompts.some((rel) => rel.id === parsed.activeRelationId) ? parsed.activeRelationId : "rel_public_family";
    state.personFilter = personFilterIds.has(parsed.personFilter) ? parsed.personFilter : "all";
    state.visitedLocations = new Set((parsed.visitedLocations || []).filter((id) => locationLabels[id]));
    state.locationVisits = Object.fromEntries(
      Object.entries(parsed.locationVisits || {}).filter(([id]) => locationLabels[id])
    );
    state.activeVisitId = locationLabels[parsed.activeVisitId] ? parsed.activeVisitId : "group";
    state.lastVisitResult = parsed.lastVisitResult || null;
    state.currentLocationId = parsed.currentLocationId === "office" || locationLabels[parsed.currentLocationId] ? parsed.currentLocationId : "office";
    state.clockMinutes = Number.isFinite(parsed.clockMinutes) ? Math.max(dayStartMinutes, parsed.clockMinutes) : dayStartMinutes;
    state.visitQuestionLog = Object.fromEntries(
      Object.entries(parsed.visitQuestionLog || {})
        .filter(([id, values]) => locationLabels[id] && Array.isArray(values))
        .map(([id, values]) => [id, values.filter((value) => typeof value === "string")])
    );
    state.report = parsed.report || { heir: "", descendant: "" };
    state.reportSubmitted = parsed.reportSubmitted === true;
    state.sound = parsed.sound !== false;
    state.ambient = parsed.ambient === true;
    state.notes = parsed.notes || "";
    state.taskStates = Object.fromEntries(
      Object.entries(parsed.taskStates || {}).filter(([id, value]) => notebookTaskIds.has(id) && ["pinned", "ignored"].includes(value))
    );
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function docIssueLabel(doc) {
  if (doc.source === "报刊") return `第 ${doc.year} 年资料页 / 人物专访`;
  if (doc.source === "县志") return `${doc.year} 年卷 / 节选页`;
  if (doc.source === "官网") return `网页存档 / ${doc.year}`;
  if (doc.source === "论坛" || doc.source === "博客" || doc.source === "短视频") return `网页快照 / ${doc.year}`;
  if (doc.source === "信托") return `节选件 / 条款页`;
  if (doc.source === "DNA") return `鉴定记录 / 摘录页`;
  return `${doc.year} 年 / ${doc.source}`;
}

function renderParagraphs(text, className = "") {
  return text.split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p class="${className}">${escapeHtml(paragraph)}</p>`)
    .join("");
}

function renderFieldSheet(text) {
  const blocks = text.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  const rows = [];
  const notes = [];
  for (const block of blocks) {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    const fieldLines = lines.filter((line) => /[:：]/.test(line));
    if (fieldLines.length >= Math.max(1, Math.floor(lines.length * 0.6))) {
      for (const line of lines) {
        const [label, ...rest] = line.split(/[:：]/);
        if (!rest.length) {
          notes.push(line);
          continue;
        }
        rows.push({ label: label.trim(), value: rest.join("：").trim() });
      }
    } else {
      notes.push(block);
    }
  }
  const fieldHtml = rows.length ? `
    <dl class="original-fields">
      ${rows.map((row) => `
        <dt>${escapeHtml(row.label)}</dt>
        <dd>${escapeHtml(row.value)}</dd>
      `).join("")}
    </dl>
  ` : "";
  return `${fieldHtml}${notes.map((note) => `<p class="original-note">${escapeHtml(note)}</p>`).join("")}`;
}

function renderLegalClauses(text) {
  return text.split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph, index) => `
      <section class="original-clause">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <p>${escapeHtml(paragraph)}</p>
      </section>
    `).join("");
}

function renderOriginalDocument(doc) {
  const kind = sourceKind(doc.source);
  const title = escapeHtml(doc.title);
  const source = escapeHtml(doc.source);
  const issue = escapeHtml(docIssueLabel(doc));
  const keywords = doc.keywords.slice(0, 4).map(escapeHtml).join(" / ");
  if (kind === "press") {
    return `
      <article class="original-page original-press">
        <div class="original-masthead">
          <strong>${title.replace(/^《([^》]+)》.*/, "$1")}</strong>
          <span>${issue}</span>
        </div>
        <h4>${title}</h4>
        <div class="original-byline">本报记者整理 / 云山县地方资料索引 / 关键词：${keywords}</div>
        <div class="original-columns">${renderParagraphs(doc.body)}</div>
      </article>
    `;
  }
  if (kind === "archive") {
    return `
      <article class="original-page original-archive">
        <div class="original-stamp">${source}</div>
        <div class="original-sheet-head">
          <span>云山县材料摘录</span>
          <span>${issue}</span>
        </div>
        <h4>${title}</h4>
        ${renderFieldSheet(doc.body)}
      </article>
    `;
  }
  if (kind === "legal") {
    return `
      <article class="original-page original-legal">
        <div class="original-sheet-head">
          <span>${source}文件节选</span>
          <span>${issue}</span>
        </div>
        <h4>${title}</h4>
        ${renderLegalClauses(doc.body)}
      </article>
    `;
  }
  if (kind === "web") {
    return `
      <article class="original-page original-web">
        <div class="browser-bar">
          <span></span><span></span><span></span>
          <em>local-archive://yunshan/${escapeHtml(doc.id)}</em>
        </div>
        <h4>${title}</h4>
        <div class="web-meta">${source} / ${issue}</div>
        <div class="web-post">${renderParagraphs(doc.body)}</div>
      </article>
    `;
  }
  return `
    <article class="original-page original-private">
      <div class="original-sheet-head">
        <span>${source}</span>
        <span>${issue}</span>
      </div>
      <h4>${title}</h4>
      ${renderFieldSheet(doc.body)}
    </article>
  `;
}

function getDocImage(doc) {
  return doc.image || null;
}

const documentDetailImages = {
  doc_official_family: [
    {
      src: "assets/images/future-assets/old-photos/shichang-store-1980s.png",
      alt: "世昌综合商店旧照参考",
      caption: "补充美术：世昌综合商店旧照参考，用于强化宗世昌与李桂兰早期公开家庭报道的年代感。"
    }
  ],
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
    },
    {
      src: "assets/images/future-assets/old-photos/spring-festival-group-1969.png",
      alt: "1969 年供销系统春节合影参考",
      caption: "补充美术：1969 年春节合影参考图，对应档案馆合影与背注这条核心线索。"
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
  doc_naming_rule: [
    {
      src: "assets/images/future-assets/documents/genealogy-paper-page.png",
      alt: "\u5bb6\u8c31\u7eb8\u9875\u6a21\u677f",
      caption: "\u8865\u5145\u7f8e\u672f\uff1a\u5bb6\u8c31\u7eb8\u9875\u5e95\u56fe\uff0c\u7528\u4e8e\u5f3a\u5316\u5b97\u5bb6\u5b57\u8f88\u89c4\u5f8b\u8d44\u6599\u7684\u7eb8\u9762\u6765\u6e90\u611f\u3002"
    }
  ],
  doc_equity_draft_2005: [
    {
      src: "assets/images/future-assets/documents/company-equity-chart.png",
      alt: "\u516c\u53f8\u80a1\u6743\u56fe\u8868\u6a21\u677f",
      caption: "\u8865\u5145\u7f8e\u672f\uff1a\u516c\u53f8\u80a1\u6743\u56fe\u8868\u5e95\u56fe\uff0c\u7528\u4e8e\u533a\u5206\u96c6\u56e2\u80a1\u6743\u53e3\u5f84\u4e0e\u5bb6\u65cf\u4fe1\u6258\u53d7\u76ca\u4eba\u53e3\u5f84\u3002"
    }
  ],
  doc_group_history: [
    {
      src: "assets/images/future-assets/web-ui/corporate-leadership-page.png",
      alt: "\u4f01\u4e1a\u5b98\u7f51\u9886\u5bfc\u9875\u622a\u56fe",
      caption: "\u8865\u5145\u7f8e\u672f\uff1a\u4f01\u4e1a\u5b98\u7f51\u9875\u9762\u53c2\u8003\uff0c\u7528\u4e8e\u540e\u7eed\u96c6\u56e2\u7ebf\u7d22\u89c6\u89c9\u5316\u3002"
    },
    {
      src: "assets/images/future-assets/old-photos/plaque-ceremony-1995.png",
      alt: "世昌集团挂牌仪式旧照参考",
      caption: "补充美术：集团挂牌仪式旧照参考，补足官网历程资料中 1990 年代集团化节点的视觉依据。"
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
  ],
  doc_ktv_reopen_check: [
    {
      src: "assets/images/future-assets/old-photos/chen-jing-ktv-opening-2015.png",
      alt: "陈静 KTV 开业旧照参考",
      caption: "补充美术：唱响 KTV 开业旧照参考，用于连接陈静返乡经营与 2020 年复工检查资料。"
    }
  ],
  doc_scholarship_notice: [
    {
      src: "assets/images/future-assets/old-photos/county-school-award.png",
      alt: "县一中奖学金公示照片参考",
      caption: "补充美术：县一中公示栏照片参考，用于强化陈嘉东姓名在学校线索中出现的现场感。"
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

function hasReadOrCollected(ids) {
  return ids.some((id) => state.readDocs.has(id) || state.collected.has(id));
}

function hasObtainedOrRead(ids) {
  return ids.some((id) => state.obtainedDocuments.has(id) || state.readDocs.has(id) || state.collected.has(id));
}

function locationForDocument(docId) {
  return Object.entries(locationDocumentIds).find(([, ids]) => ids.includes(docId))?.[0] || null;
}

function isLocationEntryDocument(locationId, docId) {
  return Boolean(locationEntryDocumentIds[locationId]?.includes(docId));
}

function chainUnlockState(docId) {
  const groups = [
    {
      ids: ["doc_trust_clause", "doc_notary_meeting", "doc_estate_law_note"],
      label: "继承规则",
      unlocked: () => state.readDocs.has("doc_official_family") || hasReadOrCollected(["doc_trust_clause"]),
      hint: "先读公开家庭资料，或在世昌集团窗口取得信托入口材料。"
    },
    {
      ids: ["doc_educated_youth", "doc_photo_back", "doc_supply_roster", "doc_supply_advance", "doc_midwife_register"],
      label: "罗月珍线索",
      unlocked: () => state.readDocs.has("doc_official_family") || hasReadOrCollected(["doc_educated_youth", "doc_photo_back"]),
      hint: "先确认公开家庭版本，或在县档案馆窗口取得旧档入口。"
    },
    {
      ids: ["doc_luo_birth", "doc_old_postcard", "doc_remittance_stub", "doc_li_guilan_letter", "doc_classmate_luo"],
      label: "罗建宁线索",
      unlocked: () => hasReadOrCollected(["doc_photo_back", "doc_educated_youth", "doc_midwife_register", "doc_yunqian_bus_line", "doc_old_postcard"]),
      hint: "先核对罗月珍、照片背注或知青名册。"
    },
    {
      ids: ["doc_chen_birth", "doc_blog_chenjing", "doc_women_fed", "doc_ktv_license", "doc_talent_window", "doc_ktv_lease_archive", "doc_neighborhood_visit", "doc_ktv_reopen_check"],
      label: "陈静线索",
      unlocked: () => hasReadOrCollected(["doc_luo_birth", "doc_classmate_luo", "doc_ktv_license", "doc_women_fed"]),
      hint: "先固定罗建宁身份，或走访唱响 KTV。"
    },
    {
      ids: ["doc_school_forum", "doc_jiadong_school", "doc_teacher_visit", "doc_scholarship_notice", "doc_dna_record", "doc_hospital_blood"],
      label: "陈嘉东后段",
      unlocked: () => hasReadOrCollected(["doc_chen_birth", "doc_blog_chenjing", "doc_women_fed", "doc_school_forum", "doc_jiadong_school", "doc_hospital_blood"]),
      hint: "先串起陈静母系，再走访县一中或县医院。"
    }
  ];
  return groups.find((group) => group.ids.includes(docId)) || null;
}

function documentUnlockState(doc) {
  if (state.obtainedDocuments.has(doc.id) || state.readDocs.has(doc.id) || state.collected.has(doc.id)) {
    return { unlocked: true, label: "已入卷" };
  }
  if (publicDocumentIds.has(doc.id)) {
    return { unlocked: true, label: "公开资料" };
  }
  const locationId = locationForDocument(doc.id);
  const chain = chainUnlockState(doc.id);
  if (chain?.unlocked()) {
    return { unlocked: true, label: chain.label };
  }
  const locationHint = locationId ? `也可走访${locationLabels[locationId]}。` : "";
  return {
    unlocked: false,
    label: "未入卷",
    hint: chain?.hint || `这份资料还没有进入当前卷宗。${locationHint}`
  };
}

function isDocumentUnlocked(doc) {
  return documentUnlockState(doc).unlocked;
}

function suggestedLocationsForLockedDocs(docs) {
  const locations = [];
  const seen = new Set();
  for (const doc of docs) {
    const locationId = locationForDocument(doc.id);
    if (!locationId || state.locationVisits[locationId]?.status === "obtained" || seen.has(locationId)) continue;
    const location = visitLocations.find((item) => item.id === locationId);
    if (!location) continue;
    locations.push(location);
    seen.add(locationId);
  }
  return locations;
}

function docMatches(doc) {
  const query = state.query.trim().toLowerCase();
  const activeFilter = purposeFilters.find((filter) => filter.id === state.filter) || purposeFilters[0];
  if (!activeFilter.match(doc)) return false;
  if (!query) return true;
  const haystack = [doc.title, doc.summary, doc.body, doc.source, String(doc.year), ...doc.keywords]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function renderFilters() {
  els.sourceFilters.innerHTML = purposeFilters.map((filter) => {
    const active = filter.id === state.filter ? "is-active" : "";
    return `
      <button class="${active}" data-filter="${filter.id}" title="${filter.hint}">
        <strong>${filter.label}</strong>
        <span>${filter.hint}</span>
      </button>
    `;
  }).join("");
}

function formatClock(minutes) {
  const bounded = Math.max(0, Math.round(minutes));
  const hour = Math.floor(bounded / 60);
  const minute = bounded % 60;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function locationById(id) {
  return visitLocations.find((location) => location.id === id);
}

function personName(id) {
  return people.find((person) => person.id === id)?.name || id;
}

function contactNamesForLocation(locationId) {
  return (locationContacts[locationId] || []).map(personName).join(" / ");
}

function contactNamesForDocs(docIds) {
  const ids = [...new Set(docIds.flatMap((docId) => documentContactPeople[docId] || []))];
  return ids.map(personName).join(" / ");
}

function travelMinutes(fromId, toId) {
  const from = locationCoordinates[fromId] || locationCoordinates.office;
  const to = locationCoordinates[toId] || locationCoordinates.office;
  const distance = Math.hypot(to.x - from.x, to.y - from.y);
  return Math.max(10, Math.round(distance * 14));
}

function visitTiming(location) {
  const depart = state.clockMinutes;
  const travel = travelMinutes(state.currentLocationId, location.id);
  const arrive = depart + travel;
  const serviceStart = Math.max(arrive, location.windowStart);
  const finish = serviceStart + location.duration;
  const open = serviceStart <= location.entryCutoff && finish <= location.windowEnd;
  return { depart, travel, arrive, wait: Math.max(0, location.windowStart - arrive), serviceStart, finish, open };
}

function visitStatus(location) {
  const visit = state.locationVisits[location.id];
  if (visit?.status === "obtained") return "已取件";
  if (visit?.status === "missed") return "已错过";
  const timing = visitTiming(location);
  if (timing.arrive > location.entryCutoff) return "窗口将过";
  if (state.clockMinutes < location.windowStart) return "未开窗";
  if (state.clockMinutes > location.entryCutoff) return "赶不上";
  return "可办理";
}

function missedVisitLocations() {
  return visitLocations.filter((location) => state.locationVisits[location.id]?.status === "missed");
}

function availableVisitFallback(excludeId) {
  return visitLocations
    .filter((location) => location.id !== excludeId && state.locationVisits[location.id]?.status !== "obtained")
    .map((location) => ({ location, timing: visitTiming(location) }))
    .filter(({ timing }) => timing.open)
    .sort((left, right) => left.timing.finish - right.timing.finish)[0]?.location || null;
}

function visitFollowUp(location, status) {
  const rule = visitFollowUps[location.id] || {};
  if (status === "obtained") {
    return {
      title: "下一步建议",
      text: rule.obtained || `先阅读取得的入口材料，再用“${location.query}”回资料库复查。`,
      query: rule.query || location.query,
      ask: rule.ask || contactNamesForLocation(location.id) || location.contact
    };
  }
  const fallback = availableVisitFallback(location.id);
  return {
    title: "补救路线",
    text: rule.missed || `本地点窗口已过，先转去${fallback?.title || "仍可办理的地点"}，次日再补办${location.title}。`,
    query: fallback?.query || location.query,
    fallbackId: fallback?.id || "",
    fallbackLabel: fallback?.title || "",
    ask: rule.ask || contactNamesForLocation(location.id) || location.contact
  };
}

function askedVisitQuestions(locationId) {
  return new Set(state.visitQuestionLog[locationId] || []);
}

function recordVisitQuestion(locationId, questionId) {
  const questions = visitInterviews[locationId] || [];
  if (!questions.some((question) => question.id === questionId)) return;
  const asked = askedVisitQuestions(locationId);
  asked.add(questionId);
  state.visitQuestionLog[locationId] = [...asked];
}

function documentTitleById(docId) {
  return documents.find((doc) => doc.id === docId)?.title || docId;
}

function renderVisitQuestionFirstDoc(question) {
  if (!question.firstDoc) return "";
  const doc = documents.find((item) => item.id === question.firstDoc);
  const title = escapeHtml(doc?.title || question.firstDoc);
  const docId = escapeHtml(question.firstDoc);
  const isAvailable = doc ? isDocumentUnlocked(doc) : false;
  return `
    <div class="visit-first-doc" data-visit-first-doc="${docId}">
      <span>先看材料：</span>
      <strong>${title}</strong>
      ${isAvailable
        ? `<button type="button" data-visit-open-doc="${docId}">打开材料</button>`
        : `<small>办理取件后入卷</small>`}
    </div>
  `;
}

function renderVisitInterview(location) {
  const questions = visitInterviews[location.id] || [];
  if (!questions.length) return "";
  const asked = askedVisitQuestions(location.id);
  return `
    <div class="visit-interview" data-visit-interview="${location.id}">
      <strong>现场问询</strong>
      <div class="visit-question-list">
        ${questions.map((question) => {
          const isAsked = asked.has(question.id);
          return `
            <button
              type="button"
              class="${isAsked ? "is-asked" : ""}"
              data-visit-question-location="${location.id}"
              data-visit-question="${question.id}">
              <span>${question.prompt}</span>
              <small>${question.person}</small>
            </button>
          `;
        }).join("")}
      </div>
      ${questions.filter((question) => asked.has(question.id)).map((question) => `
        <blockquote data-visit-answer="${question.id}">
          <span>${question.person}</span>
          <p>${question.answer}</p>
          ${renderVisitQuestionFirstDoc(question)}
          <button type="button" class="ghost-btn" data-visit-search="${question.query}">搜索“${question.query}”</button>
        </blockquote>
      `).join("") || `<p class="visit-interview-empty">问询不推进时间。先选择要追问的事项，再决定是否回资料库检索。</p>`}
    </div>
  `;
}

function visitLogEntries() {
  return visitLocations
    .map((location) => {
      const visit = state.locationVisits[location.id];
      if (!visit) return null;
      const followUp = ["obtained", "missed"].includes(visit.status) ? visitFollowUp(location, visit.status) : null;
      return {
        location,
        visit,
        followUp,
        at: Number.isFinite(visit.at) ? visit.at : state.clockMinutes,
        depart: Number.isFinite(visit.depart) ? visit.depart : null,
        arrive: Number.isFinite(visit.arrive) ? visit.arrive : null,
        finish: Number.isFinite(visit.finish) ? visit.finish : Number.isFinite(visit.at) ? visit.at : null
      };
    })
    .filter(Boolean)
    .sort((left, right) => left.at - right.at);
}

function visitQuestionEntries() {
  return visitLocations.flatMap((location) => {
    const asked = askedVisitQuestions(location.id);
    return (visitInterviews[location.id] || [])
      .filter((question) => asked.has(question.id))
      .map((question) => ({ location, question }));
  });
}

function renderVisitQuestionArchive(entries) {
  if (!entries.length) return "";
  return `
    <section class="visit-question-archive" aria-label="现场问询记录">
      <strong>现场问询记录</strong>
      <div>
        ${entries.map(({ location, question }) => `
          <article data-visit-question-log="${location.id}:${question.id}">
            <span>${location.title} · ${question.person}</span>
            <p>${question.answer}</p>
            ${renderVisitQuestionFirstDoc(question)}
            <button type="button" class="ghost-btn" data-visit-search="${question.query}">搜索“${question.query}”</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderVisitLog() {
  const entries = visitLogEntries();
  const questionEntries = visitQuestionEntries();
  const questionArchive = renderVisitQuestionArchive(questionEntries);
  const currentLabel = locationCoordinates[state.currentLocationId]?.label || "公证处临时办公室";
  if (!entries.length) {
    return `
      <aside class="visit-log">
        <header>
          <div>
            <span>${investigationDay}</span>
            <h4>今日调查日程</h4>
          </div>
          <strong>${formatClock(state.clockMinutes)}</strong>
        </header>
        <p class="visit-log-empty">尚未形成走访记录。先选择一个地点并递交委托函。</p>
        ${questionArchive}
      </aside>
    `;
  }
  return `
    <aside class="visit-log">
      <header>
        <div>
          <span>${investigationDay} · 当前位置：${currentLabel}</span>
          <h4>今日调查日程</h4>
        </div>
        <strong>${formatClock(state.clockMinutes)}</strong>
      </header>
      <ol>
        ${entries.map(({ location, visit, followUp, depart, arrive, finish }) => {
          const docs = acquiredDocTitles(visit.documents || []);
          const statusLabel = visit.status === "obtained" ? "已取件" : visit.status === "missed" ? "已错过" : "已排期";
          const timeText = arrive !== null && finish !== null
            ? `${formatClock(arrive)} 抵达 · ${formatClock(finish)} 结束`
            : `${formatClock(visit.at)} 记录`;
          const departText = depart !== null ? `${formatClock(depart)} 出发 · ` : "";
          return `
            <li data-visit-log="${location.id}" data-visit-log-status="${visit.status}">
              <div class="visit-log-main">
                <span>${departText}${timeText}</span>
                <strong>${location.title}</strong>
                <p>${statusLabel} · 经手人：${contactNamesForLocation(location.id) || location.contact}</p>
                ${docs.length ? `<small>入卷：${docs.join("、")}</small>` : `<small>未取得材料，需补办或转向其他地点。</small>`}
              </div>
              ${followUp ? `
                <button type="button" class="ghost-btn" data-visit-search="${followUp.query}">
                  搜索“${followUp.query}”
                </button>
              ` : ""}
            </li>
          `;
        }).join("")}
      </ol>
      ${questionArchive}
    </aside>
  `;
}

function visitMapPoint(locationId) {
  const coord = locationCoordinates[locationId] || locationCoordinates.office;
  return {
    left: 8 + (coord.x / visitMapBounds.maxX) * 84,
    top: 12 + (coord.y / visitMapBounds.maxY) * 76
  };
}

function renderVisitMap(activeLocation) {
  const currentId = state.currentLocationId || "office";
  const activeId = activeLocation?.id || "archives";
  const current = visitMapPoint(currentId);
  const active = visitMapPoint(activeId);
  const currentLabel = locationCoordinates[currentId]?.label || "公证处临时办公室";
  const activeLabel = locationCoordinates[activeId]?.label || activeLocation?.title || "待选地点";
  const statusClass = (location) => {
    const status = state.locationVisits[location.id]?.status;
    if (status === "obtained") return "is-obtained";
    if (status === "missed") return "is-missed";
    return "is-pending";
  };
  return `
    <aside class="visit-map" data-visit-map data-current-location="${currentId}" data-active-location="${activeId}">
      <header>
        <div>
          <span>当前位置：${currentLabel}</span>
          <h4>县域路线图</h4>
        </div>
        <strong>${activeLabel}</strong>
      </header>
      <div class="visit-map-stage" aria-label="云山县走访路线图">
        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          <path d="M 8 16 C 26 14, 34 28, 43 39 S 61 48, 71 38 S 83 55, 88 77" class="visit-map-road"></path>
          <line x1="${current.left.toFixed(2)}" y1="${current.top.toFixed(2)}" x2="${active.left.toFixed(2)}" y2="${active.top.toFixed(2)}" class="visit-map-route"></line>
        </svg>
        <span class="visit-map-office" style="left: ${visitMapPoint("office").left}%; top: ${visitMapPoint("office").top}%;">公证处</span>
        ${visitLocations.map((location) => {
          const point = visitMapPoint(location.id);
          return `
            <button
              type="button"
              class="visit-map-pin ${activeId === location.id ? "is-active" : ""} ${statusClass(location)}"
              style="left: ${point.left}%; top: ${point.top}%;"
              data-map-pin="${location.id}"
              data-visit-focus="${location.id}"
              aria-label="查看${location.title}">
              <span></span>
              <strong>${location.title}</strong>
            </button>
          `;
        }).join("")}
      </div>
      <div class="visit-map-legend" aria-label="路线图图例">
        <span><i class="pending"></i>待走访</span>
        <span><i class="obtained"></i>已取件</span>
        <span><i class="missed"></i>已错过</span>
      </div>
    </aside>
  `;
}

function rescheduleMissedVisit(locationId) {
  const location = locationById(locationId);
  if (!location || state.locationVisits[location.id]?.status !== "missed") return;
  delete state.locationVisits[location.id];
  state.clockMinutes = 9 * 60;
  state.currentLocationId = "office";
  state.activeVisitId = location.id;
  state.lastVisitResult = {
    locationId: location.id,
    status: "rescheduled",
    title: `${location.title}已排到次日`,
    text: `已回到 09:00 从公证处出发，重新计算${location.title}窗口和路程。`,
    documents: []
  };
}

function acquiredDocTitles(ids) {
  return ids.map((id) => documents.find((doc) => doc.id === id)?.title || id);
}

function performLocationVisit(locationId) {
  const location = locationById(locationId);
  if (!location) return;
  const timing = visitTiming(location);
  state.visitedLocations.add(location.id);
  state.currentLocationId = location.id;
  state.clockMinutes = timing.finish;

  const entryDocs = locationEntryDocumentIds[location.id] || [];
  if (timing.open) {
    entryDocs.forEach((docId) => state.obtainedDocuments.add(docId));
    state.locationVisits[location.id] = {
      status: "obtained",
      at: state.clockMinutes,
      depart: timing.depart,
      arrive: timing.arrive,
      serviceStart: timing.serviceStart,
      finish: timing.finish,
      travel: timing.travel,
      wait: timing.wait,
      documents: entryDocs,
      contactIds: locationContacts[location.id] || []
    };
    state.lastVisitResult = {
      locationId: location.id,
      status: "obtained",
      title: `${location.title}取件完成`,
      text: `${contactNamesForLocation(location.id) || location.contact}核验委托函后，交出${entryDocs.length}份入口材料。`,
      documents: entryDocs
    };
  } else {
    state.locationVisits[location.id] = {
      status: "missed",
      at: state.clockMinutes,
      depart: timing.depart,
      arrive: timing.arrive,
      serviceStart: timing.serviceStart,
      finish: timing.finish,
      travel: timing.travel,
      wait: timing.wait,
      documents: [],
      contactIds: locationContacts[location.id] || []
    };
    state.lastVisitResult = {
      locationId: location.id,
      status: "missed",
      title: `${location.title}窗口已过`,
      text: `抵达时已错过可办理窗口，${contactNamesForLocation(location.id) || location.contact}无法当天调出材料。`,
      documents: []
    };
  }

  state.activeVisitId = location.id;
}

function renderVisitLocations() {
  if (!els.locationList) return;
  els.locationList.innerHTML = visitLocations.map((location) => `
    <button class="location-card ${state.activeVisitId === location.id ? "is-active" : ""} ${state.visitedLocations.has(location.id) ? "is-visited" : ""}" data-location-id="${location.id}" aria-label="查看${location.title}">
      <img src="${location.image}" alt="" loading="lazy">
      <span class="location-shade"></span>
      <span class="location-copy">
        <span class="location-meta">${location.meta} · ${formatClock(location.windowStart)}-${formatClock(location.windowEnd)}</span>
        <strong>${location.title}</strong>
        <span>${location.text}</span>
        <em>${visitStatus(location)}</em>
      </span>
    </button>
  `).join("");
  renderVisitDetail();
}

function renderVisitDetail() {
  if (!els.visitDetail) return;
  const location = locationById(state.activeVisitId) || visitLocations[0];
  const timing = visitTiming(location);
  const fromLabel = locationCoordinates[state.currentLocationId]?.label || "当前位置";
  const progress = state.locationVisits[location.id] ? 100 : 0;
  const entryDocs = locationEntryDocumentIds[location.id] || [];
  const result = state.lastVisitResult?.locationId === location.id ? state.lastVisitResult : null;
  const alreadyObtained = state.locationVisits[location.id]?.status === "obtained";
  const followUp = result && ["obtained", "missed"].includes(result.status) ? visitFollowUp(location, result.status) : null;
  els.visitDetail.innerHTML = `
    ${renderVisitMap(location)}
    <article class="visit-detail-card">
      <header>
        <div>
          <span>当前位置：${fromLabel} · 当前时间 ${formatClock(state.clockMinutes)}</span>
          <h4>${location.title}</h4>
        </div>
        <strong>${visitStatus(location)}</strong>
      </header>
      <div class="visit-metrics">
        <span>坐标 ${locationCoordinates[location.id].x.toFixed(1)}, ${locationCoordinates[location.id].y.toFixed(1)}</span>
        <span>路程 ${timing.travel} 分钟</span>
        <span>窗口 ${formatClock(location.windowStart)}-${formatClock(location.windowEnd)}</span>
        <span>办理 ${location.duration} 分钟</span>
      </div>
      <div class="visit-contact">
        <strong>交互对象</strong>
        <p>${contactNamesForLocation(location.id) || location.contact}</p>
        <span>${location.interaction}</span>
      </div>
      ${renderVisitInterview(location)}
      <div class="visit-progress" aria-label="走访进度 ${progress}%">
        <span style="width: ${progress}%"></span>
      </div>
      <p class="hint">预计 ${formatClock(timing.depart)} 出发，${formatClock(timing.arrive)} 抵达，${formatClock(timing.serviceStart)} 开始办理，${formatClock(timing.finish)} 结束。</p>
      <div class="visit-doc-preview">
        <strong>可争取入口材料</strong>
        <p>${acquiredDocTitles(entryDocs).join("、")}</p>
        <small>关联人员：${contactNamesForDocs(entryDocs) || contactNamesForLocation(location.id)}</small>
      </div>
      ${result ? `
        <div class="visit-result visit-result-${result.status}">
          <strong>${result.title}</strong>
          <p>${result.text}</p>
          ${result.documents.length ? `<small>已入卷：${acquiredDocTitles(result.documents).join("、")}</small>` : ""}
          ${followUp ? `
            <div class="visit-next-step">
              <span>${followUp.title}</span>
              <p>${followUp.text}</p>
              <small>可追问：${followUp.ask}</small>
              <div>
                <button type="button" class="ghost-btn" data-visit-search="${followUp.query}">搜索“${followUp.query}”</button>
                ${followUp.fallbackId ? `<button type="button" class="ghost-btn" data-visit-focus="${followUp.fallbackId}">转去${followUp.fallbackLabel}</button>` : ""}
                ${result.status === "missed" ? `<button type="button" class="ghost-btn" data-visit-reschedule="${location.id}">次日补办</button>` : ""}
              </div>
            </div>
          ` : ""}
        </div>
      ` : ""}
      <div class="visit-actions">
        <button type="button" class="primary-action" data-visit-action="${location.id}" ${alreadyObtained ? "disabled" : ""}>${alreadyObtained ? "入口材料已取得" : "递交委托函并办理"}</button>
        <button type="button" class="ghost-btn" data-visit-search="${location.query}">用地点关键词检索</button>
      </div>
    </article>
    ${renderVisitLog()}
  `;
}

function renderResults() {
  const hasQuery = Boolean(state.query.trim());
  if (!hasQuery) {
    els.resultList.innerHTML = `
      <div class="empty-state search-start-state">
        <div>
          <h3>输入关键词后调阅资料</h3>
          <p>资料库不会在开局直接摊开全部入卷材料。先从公开人物、地点或文件类型查起。</p>
          <div class="start-query-grid" aria-label="开局检索入口">
            <button type="button" data-start-query="宗世昌">宗世昌</button>
            <button type="button" data-start-query="世昌集团">世昌集团</button>
            <button type="button" data-start-query="云山县">云山县</button>
            <button type="button" data-start-query="匿名信">匿名信</button>
          </div>
        </div>
      </div>
    `;
    return;
  }
  const matched = documents
    .map((doc, index) => ({ doc, index }))
    .filter(({ doc }) => docMatches(doc));
  const lockedMatches = matched.filter(({ doc }) => !isDocumentUnlocked(doc)).map(({ doc }) => doc);
  const results = matched
    .filter(({ doc }) => isDocumentUnlocked(doc))
    .sort((a, b) => {
      if (!hasQuery && state.filter === "all") return a.index - b.index;
      return b.doc.trust - a.doc.trust || b.doc.year - a.doc.year || a.index - b.index;
    })
    .map(({ doc }) => doc);
  const suggestedLocations = suggestedLocationsForLockedDocs(lockedMatches);
  const suggestedLocationButtons = suggestedLocations.length ? `
    <div class="unlock-actions" aria-label="建议走访地点">
      ${suggestedLocations.slice(0, 3).map((location) => `
        <button type="button" class="unlock-location-btn" data-unlock-location="${location.id}" data-location-query="${location.query}">
          走访${location.title}
        </button>
      `).join("")}
    </div>
  ` : "";
  const lockedCallout = lockedMatches.length > 0 ? `
    <div class="unlock-callout">
      <strong>有 ${lockedMatches.length} 份相关资料尚未入卷</strong>
      <p>${[...new Set(lockedMatches.map((doc) => documentUnlockState(doc).hint))].slice(0, 2).join(" ")}</p>
      ${suggestedLocationButtons}
      <button type="button" data-unlock-view="visit">查看全部走访地点</button>
    </div>
  ` : "";
  els.resultList.innerHTML = results.map((doc) => {
    const read = state.readDocs.has(doc.id) ? "is-read" : "";
    const imageData = getDocImage(doc);
    const image = imageData ? `<img class="result-thumb" src="${imageData.src}" alt="" loading="lazy">` : "";
    const unlock = documentUnlockState(doc);
    return `
      <button class="result-card ${read} ${imageData ? "has-image" : ""}" data-doc-id="${doc.id}">
        ${image}
        <div class="result-copy">
          <h4>${doc.title}</h4>
          <div class="meta-line">
            <span class="badge">${doc.year}</span>
            <span class="badge">${doc.source}</span>
            <span class="badge unlock-badge">${unlock.label}</span>
            ${trustBadge(doc)}
            ${state.collected.has(doc.id) ? '<span class="badge high">已收藏</span>' : ""}
          </div>
          <p class="doc-summary">${doc.summary}</p>
        </div>
      </button>
    `;
  }).join("") + lockedCallout || `<div class="empty-state"><h3>没有找到资料</h3><p>换一个人物名、年份或调查目的试试。</p></div>`;
}

function renderDocument() {
  if (!state.selectedDoc) {
    els.documentEmpty.hidden = false;
    els.documentView.hidden = true;
    return;
  }
  const doc = documents.find((item) => item.id === state.selectedDoc);
  if (!doc) return;
  const unlock = documentUnlockState(doc);
  if (!unlock.unlocked) {
    els.documentEmpty.hidden = false;
    els.documentView.hidden = true;
    els.documentEmpty.innerHTML = `
      <h3>这份资料还没有进入当前卷宗</h3>
      <p>${unlock.hint}</p>
    `;
    return;
  }
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
      <div class="doc-text">${renderOriginalDocument(doc)}</div>
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
  const filters = [
    { id: "all", label: "全部", count: people.length },
    ...personGroups.map((group) => ({ id: group.tone, label: group.title, count: visiblePersonIds(group).length }))
      .filter((filter) => filter.count > 0)
  ];
  filters[0].count = personGroups.reduce((total, group) => total + visiblePersonIds(group).length, 0);
  els.peopleFilters.innerHTML = filters.map((filter) => `
    <button class="${state.personFilter === filter.id ? "is-active" : ""}" data-people-filter="${filter.id}" aria-pressed="${state.personFilter === filter.id}">
      <strong>${filter.label}</strong>
      <span>${filter.count}</span>
    </button>
  `).join("");
  const visibleGroups = state.personFilter === "all"
    ? personGroups.filter((group) => visiblePersonIds(group).length > 0)
    : personGroups.filter((group) => group.tone === state.personFilter);
  els.peopleList.innerHTML = visibleGroups.map((group) => `
    <section class="person-group person-group-${group.tone}">
      <header>
        <h4>${group.title}</h4>
        <p>${group.hint}</p>
      </header>
      <div class="person-group-list">
        ${visiblePersonIds(group).map((id) => byId.get(id)).filter(Boolean).map((person) => `
          <article class="person-card" data-person-id="${person.id}">
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
        `).join("") || `<div class="person-locked">${personLockedMessage(group)}</div>`}
      </div>
    </section>
  `).join("") || `<div class="person-locked">尚无可查看人物档案。先从公开宗家资料开始检索。</div>`;
}

function relationNodeClass(relId) {
  const rel = relationPrompts.find((item) => item.id === relId);
  if (!rel) return "";
  if (isRelationCorrect(rel)) return "is-confirmed";
  if (hasRelationConflict(rel)) return "is-conflict";
  return "";
}

function collectedBadge(docId) {
  return state.collected.has(docId) ? "is-found" : "";
}

function isPersonDiscovered(id) {
  if (personGroups.find((group) => group.tone === "official")?.ids.includes(id)) return true;
  if (Object.values(state.locationVisits).some((visit) => visit.contactIds?.includes(id))) return true;
  if (id === "luo_yuezhen") {
    return hasObtainedOrRead(["doc_educated_youth", "doc_photo_back"])
      || hasReadOrCollected(["doc_educated_youth", "doc_photo_back", "doc_supply_roster", "doc_midwife_register"]);
  }
  if (id === "luo_jianning") {
    return hasReadOrCollected(["doc_photo_back", "doc_luo_birth", "doc_midwife_register", "doc_classmate_luo"])
      || isRelationCorrect(relationPrompts.find((rel) => rel.id === "rel_zong_luo"));
  }
  if (id === "chen_jing") {
    return hasObtainedOrRead(["doc_ktv_license", "doc_women_fed"])
      || hasReadOrCollected(["doc_chen_birth", "doc_blog_chenjing", "doc_women_fed", "doc_dna_record"]);
  }
  if (id === "chen_jiadong") {
    return hasObtainedOrRead(["doc_school_forum", "doc_jiadong_school"])
      || hasReadOrCollected(["doc_jiadong_school", "doc_teacher_visit", "doc_scholarship_notice", "doc_tiktok_chenjing"]);
  }
  const rules = {
    zong_minghui: () => hasReadOrCollected(["doc_board_handover_2015", "doc_group_history"]),
    zong_mingjun: () => hasReadOrCollected(["doc_sibling_meeting_2020", "doc_gossip_mingjun"]),
    li_qiang: () => hasReadOrCollected(["doc_dinghui_due_diligence"]),
    li_min: () => hasReadOrCollected(["doc_gossip_li_tianci"]),
    li_tianci: () => hasReadOrCollected(["doc_gossip_li_tianci"]),
    qian_shulin: () => hasObtainedOrRead(["doc_yunqian_bus_line", "doc_old_postcard"]) || hasReadOrCollected(["doc_false_qian", "doc_yunqian_bus_line"]),
    he_guosheng: () => hasObtainedOrRead(["doc_educated_youth", "doc_photo_back"]) || hasReadOrCollected(["doc_supply_advance", "doc_supply_roster"]),
    zhou_meiying: () => hasObtainedOrRead(["doc_hospital_blood"]) || hasReadOrCollected(["doc_midwife_register", "doc_hospital_blood"]),
    huang_yaling: () => hasObtainedOrRead(["doc_school_forum", "doc_jiadong_school"]) || hasReadOrCollected(["doc_teacher_visit", "doc_jiadong_school"]),
    fang_renjie: () => hasReadOrCollected(["doc_equity_draft_2005"]),
    wei_xueqin: () => hasReadOrCollected(["doc_notary_meeting", "doc_family_meeting"]),
    ma_lihua: () => hasObtainedOrRead(["doc_ktv_license", "doc_women_fed"]) || hasReadOrCollected(["doc_neighborhood_visit", "doc_ktv_reopen_check"])
  };
  return Boolean(rules[id]?.());
}

function visiblePersonIds(group) {
  return group.ids.filter(isPersonDiscovered);
}

function personLockedMessage(group) {
  if (group.tone === "hidden") return "旁支血脉档案尚未入卷。先走访县档案馆或阅读公开家庭资料。";
  if (group.tone === "related") return "集团旁支与传闻人物尚未入卷。先走访世昌集团或检索相关资料。";
  if (group.tone === "witness") return "证人与经手人尚未入卷。先走访对应地点或阅读档案材料。";
  return "该分组暂无可查看人物。";
}

function hiddenBloodlineConfirmed() {
  return ["rel_zong_luo", "rel_luo_chen", "rel_chen_child"]
    .every((id) => isRelationCorrect(relationPrompts.find((rel) => rel.id === id)));
}

function discoveredHiddenBloodlineIds() {
  return ["luo_yuezhen", "luo_jianning", "chen_jing", "chen_jiadong"].filter(isPersonDiscovered);
}

function availableRelationPrompts() {
  return relationPrompts.filter((rel) => {
    if (rel.id === "rel_public_family") return true;
    if (rel.id === "rel_chen_jianfang") return isPersonDiscovered("chen_jing") || hasReadOrCollected(["doc_women_fed", "doc_talent_window"]);
    if (rel.id === "rel_zong_luo") return isPersonDiscovered("luo_yuezhen") && isPersonDiscovered("luo_jianning");
    if (rel.id === "rel_luo_chen") return isPersonDiscovered("chen_jing");
    if (rel.id === "rel_chen_child") return isPersonDiscovered("chen_jiadong");
    if (rel.id === "rel_trust") return isPersonDiscovered("chen_jiadong") && hasReadOrCollected(["doc_trust_clause", "doc_dna_record"]);
    return false;
  });
}

function familyNodeAssetKey(id, tone) {
  if (id === "zong_shichang") return "deceased";
  if (id === "li_guilan") return "legal";
  if (tone === "hidden" || tone === "current") return hiddenBloodlineConfirmed() ? "confirmed" : "disputed";
  return "confirmed";
}

function renderFamilyNodeIcon(key, label) {
  const src = genealogyNodeAssets[key];
  return src ? `<img class="family-node-icon" src="${src}" alt="" aria-hidden="true" loading="lazy"><span class="sr-only">${label}</span>` : "";
}

function renderFamilyNode(id, tone = "neutral", subtitle = "") {
  const person = people.find((item) => item.id === id);
  if (!person) return "";
  const assetKey = familyNodeAssetKey(id, tone);
  return `
    <button class="family-node family-node-${tone}" data-map-query="${person.name}" data-node-state="${assetKey}">
      ${renderFamilyNodeIcon(assetKey, "家谱节点状态")}
      <span class="family-node-copy">
        <strong>${person.name}</strong>
        <span>${subtitle || person.role}</span>
      </span>
    </button>
  `;
}

function renderDiscoveredFamilyNode(id, tone, subtitle, placeholder) {
  if (isPersonDiscovered(id)) return renderFamilyNode(id, tone, subtitle);
  return `
    <div class="family-node family-node-locked" data-node-state="unknown">
      ${renderFamilyNodeIcon("unknown", "未核验节点")}
      <span class="family-node-copy">
        <strong>${placeholder}</strong>
        <span>继续走访或阅读资料后显名</span>
      </span>
    </div>
  `;
}

function renderHiddenFamilyMap() {
  const discovered = discoveredHiddenBloodlineIds();
  if (discovered.length === 0) {
    return `
      <section class="family-map-branch family-map-hidden family-map-sealed">
        <div class="family-sealed">
          ${renderFamilyNodeIcon("unknown", "未核验支线")}
          <div>
            <strong>旁支线索未入卷</strong>
            <span>继续检索公开资料或走访地点后，血脉支线才会逐段显名。</span>
          </div>
        </div>
      </section>
    `;
  }

  const links = {
    luo_jianning: relationNodeClass("rel_zong_luo") ? "已核验" : "待证实",
    chen_jing: relationNodeClass("rel_luo_chen") ? "已核验" : "待证实",
    chen_jiadong: relationNodeClass("rel_chen_child") ? "已核验" : "待证实"
  };
  const subtitles = {
    luo_yuezhen: "已发现旧档人物",
    luo_jianning: "已发现旁支人物",
    chen_jing: "已发现后代线索",
    chen_jiadong: "已发现现居后代"
  };
  const tones = {
    luo_yuezhen: "hidden",
    luo_jianning: "hidden",
    chen_jing: "hidden",
    chen_jiadong: "current"
  };
  return `
    <section class="family-map-branch family-map-hidden ${relationNodeClass("rel_zong_luo")} ${relationNodeClass("rel_luo_chen")} ${relationNodeClass("rel_chen_child")}">
      <div class="family-chain">
        ${discovered.map((id, index) => `
          ${index > 0 ? `<span class="family-link ${links[id] === "待证实" ? "disputed" : ""}">${links[id]}</span>` : ""}
          ${renderFamilyNode(id, tones[id], subtitles[id])}
        `).join("")}
      </div>
    </section>
  `;
}

function renderFamilyNodeLegend() {
  const items = [
    ["unknown", "未核验"],
    ["disputed", "待证实"],
    ["confirmed", "血亲确认"],
    ["legal", "公开/法定"],
    ["deceased", "已故"]
  ];
  return `
    <div class="family-node-legend" aria-label="家谱节点图例">
      ${items.map(([key, label]) => `
        <span>
          ${renderFamilyNodeIcon(key, label)}
          <em>${label}</em>
        </span>
      `).join("")}
    </div>
  `;
}

function renderFamilyMap() {
  if (!els.familyMap) return;
  const openRelations = availableRelationPrompts();
  const correctCount = openRelations.filter(isRelationCorrect).length;
  els.familyMap.innerHTML = `
    <div class="family-map-main">
      <section class="family-map-branch family-map-public ${relationNodeClass("rel_public_family")}">
        <div class="family-pair">
          ${renderFamilyNode("zong_shichang", "anchor", "世昌集团创始人")}
          ${renderFamilyNode("li_guilan", "public", "公开妻子")}
        </div>
        <div class="family-line public-line">公开婚姻</div>
        <div class="family-children">
          ${["zong_jianguo", "zong_jianfang", "zong_jianmin", "zong_jianhong", "zong_jianping", "zong_jianli"].map((id) => renderFamilyNode(id, "public")).join("")}
        </div>
      </section>

      ${renderHiddenFamilyMap()}
    </div>

    <aside class="family-map-dossier">
      <div>
        <span>已开放关系</span>
        <strong>${correctCount} / ${openRelations.length}</strong>
      </div>
      <div class="family-evidence-strip">
        <span class="${collectedBadge("doc_official_family")}">公开家庭</span>
        <span class="${collectedBadge("doc_photo_back")}">照片背注</span>
        <span class="${collectedBadge("doc_luo_birth")}">户籍</span>
        <span class="${collectedBadge("doc_chen_birth")}">出生记录</span>
        <span class="${collectedBadge("doc_dna_record")}">DNA</span>
        <span class="${collectedBadge("doc_trust_clause")}">信托</span>
      </div>
      ${renderFamilyNodeLegend()}
    </aside>
  `;
}

function compactDocTitle(doc) {
  const aliases = {
    doc_official_family: "1996 宗世昌专访",
    doc_women_fed: "妇联创业帮扶记录",
    doc_trust_clause: "香港家族信托节选",
    doc_photo_back: "1969 春节合影背注",
    doc_luo_birth: "黔中旧户籍登记",
    doc_chen_birth: "陈静出生记录",
    doc_dna_record: "疾控亲缘比对",
    doc_jiadong_school: "县一中学生信息表",
    doc_school_forum: "县一中家长会帖",
    doc_talent_window: "人才窗口挂靠说明"
  };
  if (aliases[doc.id]) return aliases[doc.id];
  const cleaned = doc.title
    .replace(/[《》]/g, "")
    .replace(/^云山县/, "")
    .replace(/^云山/, "")
    .replace(/^世昌集团/, "集团")
    .replace(/^地方论坛/, "论坛");
  return cleaned.length > 18 ? `${cleaned.slice(0, 17)}...` : cleaned;
}

function selectOptions(kind, selectedValue = "") {
  const isDocSlot = kind.includes("文件") || kind.includes("证明") || kind.includes("证据") || kind.includes("档案") || kind.includes("说明");
  if (isDocSlot) {
    const docs = documents.filter((doc) => state.readDocs.has(doc.id) || state.collected.has(doc.id) || doc.id === selectedValue);
    return docs.map((doc) => `<option value="${doc.id}">${compactDocTitle(doc)}</option>`).join("");
  }

  const visiblePeople = people.filter((person) => isPersonDiscovered(person.id) || person.id === selectedValue);
  return visiblePeople.map((person) => `<option value="${person.id}">${person.name}（${person.birth}）</option>`).join("");
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

function relationConclusion(rel) {
  return {
    rel_public_family: "公开报道确认宗世昌与李桂兰的婚姻及六名公开子女。",
    rel_chen_jianfang: "宗建芳只是帮扶干部；人才窗口挂靠说明与妇联记录共同排除母女关系。",
    rel_zong_luo: "照片背注和旧户籍共同指向罗月珍、罗建宁与宗世昌的隐秘链条。",
    rel_luo_chen: "陈静出生记录固定母女关系，DNA 记录补上宗世昌一侧的血缘证明。",
    rel_chen_child: "学校信息表和家长会帖共同确认陈嘉东就是陈静之女陈小东。",
    rel_trust: "信托条款说明直系血亲后代不因姓氏或婚生状态被排除。"
  }[rel.id] || "";
}

function relationReasoning(rel) {
  return {
    rel_public_family: [
      "官网资料是公开家庭的基准来源，只能证明李桂兰与六名公开子女。",
      "它不能排除非公开血缘，因此后续仍要继续核验匿名信、旧档和走访材料中出现的旁支线索。"
    ],
    rel_chen_jianfang: [
      "人才窗口挂靠说明把陈静与教育系统的关系限定为短期档案挂靠。",
      "妇联创业扶持记录写明宗建芳是转介帮扶干部，正好解释了外界误认母女的来源。"
    ],
    rel_zong_luo: [
      "照片背注先给出“建宁”这个名字和罗月珍、宗世昌的早期交集。",
      "旧户籍迁入登记把罗月珍和罗建宁带回黔中，补上孩子身份与离开云山的时间线。"
    ],
    rel_luo_chen: [
      "出生记录直接固定罗建宁与陈静的母女关系。",
      "DNA 记录证明陈静与宗世昌符合祖孙辈直系亲缘，能把罗建宁线接回宗世昌。"
    ],
    rel_chen_child: [
      "学校信息表提供陈嘉东的正式姓名与监护人陈静。",
      "家长会帖只能作为入口，但能帮助玩家把陈小东这个小名与陈嘉东对应起来。"
    ],
    rel_trust: [
      "信托条款的关键点是不按姓氏、婚生状态或母亲身份排除血亲后代。",
      "DNA 与陈嘉东身份资料用于证明这一支确实能沿陈静继续下传到现居后代。"
    ]
  }[rel.id] || [];
}

function evidenceTier(doc, rel) {
  if (rel.requiredEvidence.includes(doc.id)) return "required";
  if (doc.trust >= 4) return "strong";
  if (doc.trust === 3) return "support";
  return "weak";
}

function evidenceChoice(doc, answer, rel) {
  const checked = answer.evidence?.includes(doc.id) ? "checked" : "";
  const tier = evidenceTier(doc, rel);
  return `
    <label class="evidence-choice evidence-choice-${tier} ${checked ? "is-checked" : ""}">
      <input type="checkbox" value="${doc.id}" ${checked}>
      <span>
        <strong>${compactDocTitle(doc)}</strong>
        <small>${doc.source} · 可信度 ${doc.trust}/5${tier === "required" ? " · 必要证据" : ""}</small>
      </span>
    </label>
  `;
}

function renderEvidenceOptions(rel, answer, searchHint) {
  const collectedDocs = [...state.collected]
    .map((docId) => documents.find((item) => item.id === docId))
    .filter(Boolean);

  if (collectedDocs.length === 0) {
    return `
      <div class="empty-evidence-callout">
        <p>证据箱为空。先去资料库收藏资料。</p>
        ${searchHint ? `<button type="button" data-relation-search="${searchHint}">搜索 ${searchHint}</button>` : ""}
      </div>
    `;
  }

  const selectedDocs = collectedDocs.filter((doc) => answer.evidence?.includes(doc.id));
  const groups = [
    { id: "required", title: "必要证据", docs: collectedDocs.filter((doc) => evidenceTier(doc, rel) === "required") },
    { id: "strong", title: "强证据", docs: collectedDocs.filter((doc) => evidenceTier(doc, rel) === "strong") },
    { id: "support", title: "辅助材料", docs: collectedDocs.filter((doc) => evidenceTier(doc, rel) === "support") },
    { id: "weak", title: "传闻误导", docs: collectedDocs.filter((doc) => evidenceTier(doc, rel) === "weak") }
  ].filter((group) => group.docs.length > 0);

  return `
    <section class="bound-evidence">
      <h5>已绑定</h5>
      <div class="bound-evidence-list">
        ${selectedDocs.map((doc) => `<span>${compactDocTitle(doc)}</span>`).join("") || "<p>还没有绑定证据。</p>"}
      </div>
    </section>
    <div class="evidence-group-list">
      ${groups.map((group) => `
        <section class="evidence-group evidence-group-${group.id}">
          <h5>${group.title}</h5>
          <div>${group.docs.map((doc) => evidenceChoice(doc, answer, rel)).join("")}</div>
        </section>
      `).join("")}
    </div>
  `;
}

function renderRelations() {
  const openRelations = availableRelationPrompts();
  const completed = openRelations.filter(isRelationCorrect).length;
  const active = openRelations.find((rel) => rel.id === state.activeRelationId)
    || openRelations.find((rel) => !isRelationCorrect(rel))
    || openRelations[0];

  if (!active) {
    els.relationList.innerHTML = `
      <div class="empty-state">
        <h3>关系题尚未开放</h3>
        <p>先阅读公开资料，新的核验关系会随卷宗进度出现。</p>
      </div>
    `;
    return;
  }

  state.activeRelationId = active.id;
  const answer = state.relationAnswers[active.id] || { slots: ["", "", ""], evidence: [] };
  const complete = isRelationCorrect(active);
  const feedback = relationFeedback(active, answer);
  const status = complete
    ? `<div class="relation-status ok"><strong>已确认：关系和证据均吻合</strong><p>${relationConclusion(active)}</p></div>`
    : `<div class="relation-status bad">待确认：请补充正确人物和必要证据</div>`;
  const feedbackHtml = complete || feedback.length === 0
    ? ""
    : `<ul class="relation-feedback">${feedback.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  const searchHint = relationSearchHint(active);
  const evidenceHtml = renderEvidenceOptions(active, answer, searchHint);
  const reasoning = relationReasoning(active);
  const reasoningHtml = reasoning.length > 0
    ? `
      <details class="relation-reasoning">
        <summary>为什么这些证据成立</summary>
        <ul>${reasoning.map((item) => `<li>${item}</li>`).join("")}</ul>
      </details>
    `
    : "";

  els.relationList.innerHTML = `
    <section class="relation-progress-card">
      <div>
        <span>当前关系核验</span>
        <strong>${completed} / ${openRelations.length}</strong>
      </div>
      <nav class="relation-step-nav" aria-label="关系核验步骤">
        ${openRelations.map((rel, index) => {
          const done = isRelationCorrect(rel);
          const conflict = hasRelationConflict(rel);
          return `
            <button class="${rel.id === active.id ? "is-active" : ""} ${done ? "is-done" : ""} ${conflict ? "has-conflict" : ""}" data-relation-focus="${rel.id}">
              <span>${index + 1}</span>${rel.title}
            </button>
          `;
        }).join("")}
      </nav>
    </section>

    <article class="relation-card relation-card-focused" data-relation-id="${active.id}">
      <header class="relation-card-head">
        <div>
          <h4>${active.title}</h4>
          <p>${active.prompt}</p>
        </div>
        ${searchHint ? `<button type="button" data-relation-search="${searchHint}">查线索</button>` : ""}
      </header>
      <div class="relation-grid">
        ${active.slots.map((slot, index) => `
          <label>
            <span class="field-label">${slot}</span>
            <select data-slot-index="${index}">
              <option value="">未选择</option>
              ${selectOptions(slot, answer.slots?.[index] || "")}
            </select>
          </label>
        `).join("")}
      </div>
      <div>
        <strong>绑定证据</strong>
        <div class="evidence-options">${evidenceHtml}</div>
      </div>
      ${status}
      ${feedbackHtml}
      ${reasoningHtml}
    </article>
  `;

  const card = els.relationList.querySelector(`[data-relation-id="${active.id}"]`);
  card.querySelectorAll("select").forEach((select, index) => {
    select.value = answer.slots?.[index] || "";
  });
}

function isRelationCorrect(rel) {
  if (!rel) return false;
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
        <p class="doc-summary">${doc.summary}</p>
      </article>
    `;
  }).join("") || `<div class="empty-state"><h3>证据箱为空</h3><p>打开资料后点击“加入证据箱”。</p></div>`;
}

function renderReportOptions() {
  const visiblePeople = people.filter((person) => (
    isPersonDiscovered(person.id)
    || person.id === state.report.heir
    || person.id === state.report.descendant
  ));
  const options = visiblePeople.map((person) => `<option value="${person.id}">${person.name}（${person.role}）</option>`).join("");
  const placeholder = visiblePeople.length ? "未选择" : "先调查资料后开放候选人";
  els.heirSelect.innerHTML = `<option value="">${placeholder}</option>${options}`;
  els.descendantSelect.innerHTML = `<option value="">${placeholder}</option>${options}`;
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

function taskManualState(taskId) {
  return state.taskStates[taskId] || "";
}

function taskStatusLabel(done, current, manualState) {
  if (done) return "已完成";
  if (manualState === "pinned") return "已锁定";
  if (manualState === "ignored") return "已忽略";
  return current ? "当前" : "待查";
}

function isNotebookTaskAvailable(item) {
  const rules = {
    main_trust_rule: () => state.readDocs.has("doc_official_family") || hasObtainedOrRead(["doc_trust_clause"]),
    main_hidden_chain: () => state.collected.has("doc_trust_clause") || isPersonDiscovered("luo_yuezhen"),
    main_relations: () => availableRelationPrompts().length > 0,
    main_report: () => availableRelationPrompts().length === relationPrompts.length || state.reportSubmitted,
    side_zong_jianfang: () => isPersonDiscovered("chen_jing") || hasReadOrCollected(["doc_women_fed", "doc_talent_window"]),
    side_qian_rumor: () => hasObtainedOrRead(["doc_yunqian_bus_line"]) || hasReadOrCollected(["doc_false_qian", "doc_yunqian_bus_line"]),
    side_equity_trust: () => hasReadOrCollected(["doc_equity_draft_2005", "doc_board_handover_2015"]),
    visit_missed_recovery: () => missedVisitLocations().length > 0
  };
  return rules[item.id] ? rules[item.id]() : true;
}

function renderNotebookTasks() {
  if (!els.taskList) return;
  els.taskList.innerHTML = notebookTaskGroups.map((group) => {
    const items = group.items.filter(isNotebookTaskAvailable);
    if (items.length === 0) return "";
    const completed = items.filter((item) => item.done()).length;
    const firstOpen = items.find((item) => !item.done() && taskManualState(item.id) !== "ignored")
      || items.find((item) => !item.done());
    return `
      <article class="task-group">
        <header>
          <h4>${group.title}</h4>
          <span>${completed} / ${items.length}</span>
        </header>
        <div class="task-items">
          ${items.map((item) => {
            const done = item.done();
            const current = !done && item === firstOpen;
            const manualState = taskManualState(item.id);
            const statusLabel = taskStatusLabel(done, current, manualState);
            const pinned = manualState === "pinned";
            const ignored = manualState === "ignored";
            const queryAttr = item.query ? ` data-task-query="${item.query}"` : "";
            return `
              <section class="task-item ${done ? "is-done" : ""} ${current ? "is-current" : ""} ${pinned ? "is-pinned" : ""} ${ignored ? "is-ignored" : ""}">
                <div>
                  <strong><span>${item.title}</span><em>${statusLabel}</em></strong>
                  <p>${item.detail}</p>
                </div>
                <div class="task-actions">
                  <button class="task-primary" data-task-view="${item.view}"${queryAttr}>${done ? "复查" : item.actionLabel}</button>
                  <div class="task-state-actions" aria-label="${item.title}手动状态">
                    <button data-task-state="${item.id}" data-task-state-value="pinned" aria-pressed="${pinned}">${pinned ? "取消锁定" : "锁定"}</button>
                    <button data-task-state="${item.id}" data-task-state-value="ignored" aria-pressed="${ignored}">${ignored ? "取消忽略" : "忽略"}</button>
                  </div>
                </div>
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
  const openRelations = availableRelationPrompts();
  const correctCount = openRelations.filter(isRelationCorrect).length;
  const notesChars = state.notes.trim().length;
  const pinnedTasks = Object.values(state.taskStates).filter((value) => value === "pinned").length;
  const ignoredTasks = Object.values(state.taskStates).filter((value) => value === "ignored").length;
  els.soundToggle.checked = state.sound;
  els.ambientToggle.checked = state.sound && state.ambient;
  els.ambientToggle.disabled = !state.sound;
  els.saveSummary.innerHTML = `
    <dt>资料阅读</dt><dd>${state.readDocs.size} 已读</dd>
    <dt>证据收藏</dt><dd>${state.collected.size}</dd>
    <dt>已走访地点</dt><dd>${state.visitedLocations.size} / ${visitLocations.length}</dd>
    <dt>关系完成</dt><dd>${correctCount} / ${openRelations.length} 已开放</dd>
    <dt>调查笔记</dt><dd>${notesChars} 字</dd>
    <dt>备忘整理</dt><dd>${pinnedTasks} 锁定 / ${ignoredTasks} 忽略</dd>
  `;
  els.settingsReset.disabled = els.resetConfirmInput.value.trim() !== "清空";
}

function renderCounters() {
  $("read-count").textContent = `${state.readDocs.size} 已读`;
  $("evidence-count").textContent = `${state.collected.size}`;
  const openRelations = availableRelationPrompts();
  const correctCount = openRelations.filter(isRelationCorrect).length;
  $("relation-count").textContent = `${correctCount} / ${openRelations.length} 已开放`;
  $("sound-btn").textContent = `声音：${state.sound ? "开" : "关"}`;
  $("ambient-btn").textContent = `环境音：${state.ambient ? "开" : "关"}`;
}

function renderCurrentGoals() {
  if (!els.currentGoalList) return;
  const goals = [
    state.readDocs.has("doc_official_family") ? "复核公开家庭资料中的已知成员。" : "确认宗世昌公开家庭。",
    state.collected.size > 0 ? "继续收藏能直接支撑关系的资料。" : "阅读并收藏可验证资料。",
    `为当前已开放的 ${availableRelationPrompts().length} 条关系绑定证据。`
  ];

  if (!isPersonDiscovered("luo_yuezhen")) {
    goals.push("根据新线索继续走访。");
  } else if (!isPersonDiscovered("chen_jing")) {
    goals.push("核实已显名旁支人物的下一段身份。");
  } else if (!isPersonDiscovered("chen_jiadong")) {
    goals.push("核实已显名后段人物的现居身份。");
  } else {
    goals.push(state.reportSubmitted ? "最终报告已提交，可复盘证据链。" : "完成关系核验后提交最终报告。");
  }

  els.currentGoalList.innerHTML = goals.map((goal) => `<li>${goal}</li>`).join("");
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
      done: state.collected.has("doc_trust_clause"),
      text: state.readDocs.has("doc_official_family") || hasObtainedOrRead(["doc_trust_clause"])
        ? "找到规则文件，确认资格审查看哪些条件。"
        : "先把公开家庭版本建起来，再查规则文件。"
    }
  ];

  if (isPersonDiscovered("luo_yuezhen")) {
    leads.push({
      done: isPersonDiscovered("luo_jianning"),
      text: "旧档人物已经入卷，继续核对其后续身份。"
    });
  } else {
    leads.push({
      done: false,
      text: "从已读资料里的陌生姓名、地点、年份继续回查。"
    });
  }

  if (isPersonDiscovered("chen_jing")) {
    leads.push({
      done: isPersonDiscovered("chen_jiadong"),
      text: "后段人物已经显名，继续用正式身份资料核验。"
    });
  }

  leads.push({
    done: availableRelationPrompts().length === relationPrompts.length && relationPrompts.every(isRelationCorrect),
    text: `把当前开放的 ${availableRelationPrompts().length} 条关系绑定强证据。`
  });

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
  renderFamilyMap();
  renderPeople();
  renderRelations();
  renderEvidence();
  renderReportOptions();
  renderNotes();
  renderNotebookTasks();
  renderUpdates();
  renderSettings();
  renderCounters();
  renderCurrentGoals();
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
  state.visitedLocations = new Set(visitLocations.map((location) => location.id));
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
  state.obtainedDocuments = new Set(documents.map((doc) => doc.id));
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

function resetProgressForHiddenTest() {
  state.query = "";
  state.filter = "all";
  state.selectedDoc = null;
  state.readDocs = new Set();
  state.collected = new Set();
  state.obtainedDocuments = new Set();
  state.relationAnswers = {};
  state.report = { heir: "", descendant: "" };
  state.notes = "";
  state.activeRelationId = relationPrompts[0]?.id || "";
  state.sound = false;
  state.ambient = false;
  state.visitedLocations = new Set();
  state.locationVisits = {};
  state.activeVisitId = "group";
  state.lastVisitResult = null;
  state.currentLocationId = "office";
  state.clockMinutes = dayStartMinutes;
  state.visitQuestionLog = {};
  state.taskStates = {};
  state.reportSubmitted = false;
  localStorage.removeItem("yunshan-save");
}

function runGuidedPlaytest() {
  const checkpoints = [];
  const errors = [];

  const record = (label, detail = {}) => {
    checkpoints.push({ label, ...detail });
  };
  const assert = (condition, message) => {
    if (!condition) errors.push(message);
  };
  const visibleResultIds = () => [...els.resultList.querySelectorAll("[data-doc-id]")].map((node) => node.dataset.docId);
  const assertUnlockGuidance = (query, expectedLocationIds = []) => {
    const callout = els.resultList.querySelector(".unlock-callout");
    const suggestedLocations = callout
      ? [...callout.querySelectorAll("[data-unlock-location]")].map((node) => node.dataset.unlockLocation)
      : [];
    const hasVisitFallback = Boolean(callout?.querySelector("[data-unlock-view='visit']"));
    assert(Boolean(callout), `search "${query}" should show non-spoiler unlock guidance`);
    assert(hasVisitFallback, `search "${query}" should include the full visit list fallback`);
    for (const id of expectedLocationIds) {
      assert(suggestedLocations.includes(id), `search "${query}" should suggest visiting ${id}`);
    }
    record(`Guidance: ${query}`, { suggestedLocations, hasVisitFallback });
  };
  const search = (query, expectedIds, lockedIds = [], guidanceLocationIds = []) => {
    state.query = query;
    state.filter = "all";
    state.selectedDoc = null;
    switchView("search");
    renderAll();
    const visible = visibleResultIds();
    for (const id of expectedIds) assert(visible.includes(id), `search "${query}" should show ${id}`);
    for (const id of lockedIds) assert(!visible.includes(id), `search "${query}" should keep ${id} locked`);
    if (lockedIds.length || guidanceLocationIds.length) assertUnlockGuidance(query, guidanceLocationIds);
    record(`搜索：${query}`, { visible: visible.length });
  };
  const readAndCollect = (docId) => {
    const doc = documents.find((item) => item.id === docId);
    assert(Boolean(doc), `missing document ${docId}`);
    assert(doc ? isDocumentUnlocked(doc) : false, `${docId} should be unlocked before reading`);
    state.selectedDoc = docId;
    renderAll();
    state.collected.add(docId);
    renderAll();
    assert(state.readDocs.has(docId), `${docId} should be marked read`);
    assert(state.collected.has(docId), `${docId} should be collected`);
    record(`阅读并收藏：${doc?.title || docId}`, { docId });
  };

  resetProgressForHiddenTest();
  renderAll();
  assert(visibleResultIds().length === 0, "blank archive search should not dump unlocked documents at case start");
  record("开局资料库空检索", { visible: visibleResultIds().length });
  const visiblePersonCards = () => [...els.peopleList.querySelectorAll("[data-person-id]")].map((node) => node.dataset.personId);
  switchView("tree");
  renderAll();
  const startPeople = visiblePersonCards();
  const startRelationButtons = [...els.relationList.querySelectorAll("[data-relation-focus]")].map((node) => node.dataset.relationFocus);
  assert(startPeople.length === 8, `case start should only show public Zong family dossiers, found ${startPeople.length}`);
  assert(startRelationButtons.length === 1 && startRelationButtons[0] === "rel_public_family", "case start should only open the public family relation");
  assert(!els.familyMap.querySelector('[data-map-query="罗月珍"], [data-map-query="罗建宁"], [data-map-query="陈静"], [data-map-query="陈嘉东"]'), "case start family map should not reveal hidden bloodline names");
  assert(!$("lead-list").textContent.includes("罗月珍") && !$("lead-list").textContent.includes("陈嘉东"), "case start lead board should not reveal hidden names");
  assert(!$("current-goal-list").textContent.includes("第七支"), "case start goals should not reveal final truth language");
  record("开局家谱与侧栏显隐", {
    people: startPeople.length,
    relations: startRelationButtons.length,
    readCounter: $("read-count").textContent,
    relationCounter: $("relation-count").textContent
  });
  resetProgressForHiddenTest();
  switchView("visit");
  renderAll();
  assert(Boolean(els.visitDetail.querySelector('[data-visit-map][data-current-location="office"]')), "visit view should render the county route map from the office");
  assert(Boolean(els.visitDetail.querySelector('[data-map-pin="group"].is-active')), "visit route map should mark the active destination");
  assert(Boolean(els.visitDetail.querySelector(".visit-map-route")), "visit route map should draw the current route");
  assert(els.visitDetail.querySelectorAll('[data-visit-interview="group"] [data-visit-question]').length >= 2, "visit view should render contact interview prompts");
  recordVisitQuestion("group", "trust_scope");
  renderAll();
  assert(Boolean(els.visitDetail.querySelector('[data-visit-answer="trust_scope"]')), "visit interview should record asked contact answers");
  assert(Boolean(els.visitDetail.querySelector('[data-visit-question-log="group:trust_scope"]')), "visit log should keep asked contact answers for review");
  performLocationVisit("group");
  renderAll();
  assert(Boolean(els.visitDetail.querySelector(".visit-next-step")), "obtained visit should show a next-step panel");
  assert(Boolean(els.visitDetail.querySelector('[data-visit-search="信托"]')), "obtained group visit should suggest searching trust");
  const firstDocButton = els.visitDetail.querySelector('[data-visit-open-doc="doc_trust_clause"]');
  assert(Boolean(firstDocButton), "asked visit answers should offer a direct first-doc open button after obtaining documents");
  firstDocButton?.click();
  assert(state.selectedDoc === "doc_trust_clause", "direct first-doc button should select the trust clause document");
  assert(state.readDocs.has("doc_trust_clause"), "direct first-doc button should mark the opened document as read");
  record("问询先看材料直达", { selectedDoc: state.selectedDoc });
  switchView("visit");
  renderAll();
  assert(Boolean(els.visitDetail.querySelector('[data-visit-map][data-current-location="group"]')), "visit route map should move the current location after handling");
  assert(Boolean(els.visitDetail.querySelector('[data-map-pin="group"].is-obtained')), "visit route map should mark obtained locations");
  assert(Boolean(els.visitDetail.querySelector('[data-visit-log="group"][data-visit-log-status="obtained"]')), "obtained group visit should appear in the visit schedule");
  assert(els.visitDetail.querySelector(".visit-log")?.textContent.includes("香港家族信托文件节选"), "visit schedule should list obtained entry documents");
  search("信托", ["doc_trust_clause"], ["doc_family_meeting", "doc_equity_draft_2005", "doc_dinghui_due_diligence"]);
  const groupVisible = visibleResultIds();
  const groupLocationDocs = locationDocumentIds.group.filter((id) => groupVisible.includes(id));
  assert(groupLocationDocs.length < locationDocumentIds.group.length, "visiting Shichang Group should not unlock every group document at once");
  record("世昌集团走访分层", { visibleGroupDocs: groupLocationDocs, schedule: "obtained" });
  resetProgressForHiddenTest();
  state.clockMinutes = 17 * 60;
  switchView("visit");
  performLocationVisit("school");
  renderAll();
  assert(state.locationVisits.school?.status === "missed", "late school visit should record a missed window");
  assert(Boolean(els.visitDetail.querySelector("[data-visit-reschedule='school']")), "missed visit should offer next-day rescheduling");
  assert(Boolean(els.visitDetail.querySelector('[data-visit-log="school"][data-visit-log-status="missed"]')), "missed school visit should appear in the visit schedule");
  switchView("notes");
  renderAll();
  assert(els.taskList.textContent.includes("补办错过窗口"), "missed visit should create a notebook recovery task");
  record("走访错过补救", { missed: "school" });
  resetProgressForHiddenTest();

  search("宗世昌", ["doc_official_family"]);
  search("信托", [], ["doc_trust_clause"]);
  search("\u7f57\u6708\u73cd", [], ["doc_educated_youth", "doc_photo_back"], ["archives"]);
  readAndCollect("doc_official_family");

  search("信托", ["doc_trust_clause"]);
  readAndCollect("doc_trust_clause");

  search("罗月珍", ["doc_educated_youth", "doc_photo_back"]);
  readAndCollect("doc_photo_back");

  search("罗建宁", ["doc_luo_birth"]);
  readAndCollect("doc_luo_birth");

  search("陈静", ["doc_chen_birth", "doc_women_fed", "doc_talent_window"]);
  readAndCollect("doc_women_fed");
  readAndCollect("doc_talent_window");
  readAndCollect("doc_chen_birth");

  search("陈嘉东", ["doc_school_forum", "doc_jiadong_school"]);
  readAndCollect("doc_school_forum");
  readAndCollect("doc_jiadong_school");

  search("DNA", ["doc_dna_record", "doc_hospital_blood", "doc_trust_clause"]);
  readAndCollect("doc_dna_record");

  state.relationAnswers = {};
  for (const rel of relationPrompts) {
    state.relationAnswers[rel.id] = {
      slots: [...rel.correct],
      evidence: [...rel.requiredEvidence]
    };
    assert(isRelationCorrect(rel), `${rel.title} should pass with collected evidence`);
  }
  record("关系核验", { passed: relationPrompts.filter(isRelationCorrect).length });

  state.report = { heir: "luo_jianning", descendant: "chen_jiadong" };
  switchView("report");
  renderAll();
  submitReport();
  renderAll();
  assert($("report-result").classList.contains("success"), "final report should submit successfully");
  record("最终提交", { submitted: $("report-result").classList.contains("success") });

  const status = errors.length ? "fail" : "pass";
  document.body.dataset.playtest = status;
  const report = document.createElement("pre");
  report.id = "guided-playtest-report";
  report.textContent = JSON.stringify({ status, checkpoints, errors }, null, 2);
  document.body.appendChild(report);
}

function runDocumentLayoutAudit() {
  const failures = [];
  const samples = [];
  const byKind = {};
  const allowedOverflow = 2;

  const nodeLabel = (node) => {
    if (node.id) return `#${node.id}`;
    const className = String(node.className || "").trim().replace(/\s+/g, ".");
    return `${node.tagName.toLowerCase()}${className ? `.${className}` : ""}`;
  };
  const checkOverflow = (doc, node) => {
    if (!node || node.hidden) return;
    const rect = node.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) {
      failures.push({ docId: doc.id, title: doc.title, selector: nodeLabel(node), reason: "empty-render" });
      return;
    }
    const overflow = Math.ceil(node.scrollWidth - node.clientWidth);
    if (overflow > allowedOverflow) {
      failures.push({
        docId: doc.id,
        title: doc.title,
        selector: nodeLabel(node),
        overflow,
        width: Math.round(rect.width),
        text: node.textContent.trim().slice(0, 80)
      });
    }
  };

  resetProgressForHiddenTest();
  state.visitedLocations = new Set(visitLocations.map((location) => location.id));
  state.obtainedDocuments = new Set(documents.map((doc) => doc.id));
  state.readDocs = new Set(documents.map((doc) => doc.id));
  switchView("search");
  renderAll();

  for (const doc of documents) {
    state.selectedDoc = doc.id;
    renderAll();
    const kind = sourceKind(doc.source);
    byKind[kind] = (byKind[kind] || 0) + 1;
    const body = els.documentView.querySelector(".document-body");
    if (!body) {
      failures.push({ docId: doc.id, title: doc.title, reason: "missing-document-body" });
      continue;
    }
    const nodes = [
      els.documentView,
      body,
      body?.querySelector(".doc-text"),
      body?.querySelector(".original-page"),
      ...body.querySelectorAll(".original-masthead, .original-sheet-head, .original-fields, .original-note, .original-clause, .browser-bar")
    ];
    for (const node of nodes) checkOverflow(doc, node);
    samples.push({ id: doc.id, kind, bodyHeight: Math.round(body.getBoundingClientRect().height) });
  }

  const status = failures.length ? "fail" : "pass";
  document.body.dataset.layouttest = status;
  const report = document.createElement("pre");
  report.id = "document-layout-report";
  report.textContent = JSON.stringify({
    status,
    viewport: { width: window.innerWidth, height: window.innerHeight },
    documents: documents.length,
    byKind,
    checkedNodes: samples.length,
    failures
  }, null, 2);
  document.body.appendChild(report);
}

function runVisualAssetAudit() {
  const failures = [];
  const samples = [];
  const assert = (condition, message) => {
    if (!condition) failures.push(message);
  };
  const checkImage = (img, label) => {
    assert(Boolean(img), `${label} should render an image node`);
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const src = img.getAttribute("src") || "";
    assert(src.startsWith("assets/images/"), `${label} should use a local image asset`);
    assert(rect.width >= 24 && rect.height >= 24, `${label} should have visible dimensions`);
    samples.push({
      label,
      src,
      width: Math.round(rect.width),
      height: Math.round(rect.height)
    });
  };

  resetProgressForHiddenTest();
  state.visitedLocations = new Set(visitLocations.map((location) => location.id));
  state.readDocs = new Set(documents.map((doc) => doc.id));
  state.collected = new Set(documents.map((doc) => doc.id));
  state.obtainedDocuments = new Set(documents.map((doc) => doc.id));
  state.personFilter = "all";
  state.relationAnswers = {};
  for (const rel of relationPrompts) {
    state.relationAnswers[rel.id] = {
      slots: [...rel.correct],
      evidence: [...rel.requiredEvidence]
    };
  }
  switchView("tree");
  renderAll();

  const navIcons = [...document.querySelectorAll(".tabs .nav-asset-icon img")];
  const navIconSrcs = new Set(navIcons.map((img) => img.getAttribute("src") || ""));
  assert(navIcons.length >= 8, `main navigation should render at least 8 asset icons, found ${navIcons.length}`);
  assert(navIconSrcs.size >= 5, `main navigation should use all 5 split UI icon assets, found ${navIconSrcs.size}`);
  for (const [index, icon] of navIcons.entries()) {
    checkImage(icon, `nav-icon:${index + 1}`);
  }

  const discoveredPortraitIds = Object.keys(personPortraits)
    .filter((id) => people.some((person) => person.id === id) && isPersonDiscovered(id));
  for (const id of discoveredPortraitIds) {
    const card = els.peopleList.querySelector(`[data-person-id="${id}"]`);
    checkImage(card?.querySelector("img.avatar-img"), `portrait:${id}`);
  }

  const familyIcons = [...els.familyMap.querySelectorAll("img.family-node-icon")];
  assert(familyIcons.length >= 15, `family map should render at least 15 node/legend icons, found ${familyIcons.length}`);
  for (const [index, icon] of familyIcons.entries()) {
    checkImage(icon, `family-node-icon:${index + 1}`);
  }

  const docDetailIds = Object.keys(documentDetailImages);
  let checkedDocumentImages = 0;
  switchView("search");
  for (const id of docDetailIds) {
    state.selectedDoc = id;
    renderAll();
    const galleryImages = [...els.documentView.querySelectorAll(".doc-detail-gallery img")];
    assert(galleryImages.length === documentDetailImages[id].length, `document detail images should render for ${id}`);
    for (const [index, image] of galleryImages.entries()) {
      checkedDocumentImages += 1;
      checkImage(image, `doc-detail:${id}:${index + 1}`);
    }
  }

  const status = failures.length ? "fail" : "pass";
  document.body.dataset.visualtest = status;
  const report = document.createElement("pre");
  report.id = "visual-assets-report";
  report.textContent = JSON.stringify({
    status,
    portraits: discoveredPortraitIds.length,
    navIcons: navIcons.length,
    navIconAssets: navIconSrcs.size,
    familyNodeIcons: familyIcons.length,
    documentDetailImages: checkedDocumentImages,
    checkedImages: samples.length,
    samples,
    failures
  }, null, 2);
  document.body.appendChild(report);
}

function maybeRunHiddenTests() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("autotest") === "1") {
    runAutotest();
  }
  if (params.get("playtest") === "1") {
    runGuidedPlaytest();
  }
  if (params.get("layouttest") === "1") {
    runDocumentLayoutAudit();
  }
  if (params.get("visualtest") === "1") {
    runVisualAssetAudit();
  }
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => switchView(tab.dataset.view)));
  els.locationList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-location-id]");
    if (!card) return;
    state.activeVisitId = card.dataset.locationId;
    playSound("click");
    renderAll();
  });
  els.visitDetail.addEventListener("click", (event) => {
    const action = event.target.closest("[data-visit-action]");
    if (action) {
      performLocationVisit(action.dataset.visitAction);
      playSound(state.lastVisitResult?.status === "obtained" ? "evidence" : "conflict");
      renderAll();
      return;
    }
    const focus = event.target.closest("[data-visit-focus]");
    if (focus) {
      state.activeVisitId = focus.dataset.visitFocus;
      playSound("click");
      renderAll();
      return;
    }
    const reschedule = event.target.closest("[data-visit-reschedule]");
    if (reschedule) {
      rescheduleMissedVisit(reschedule.dataset.visitReschedule);
      playSound("click");
      renderAll();
      return;
    }
    const question = event.target.closest("[data-visit-question]");
    if (question) {
      recordVisitQuestion(question.dataset.visitQuestionLocation, question.dataset.visitQuestion);
      playSound("click");
      renderAll();
      return;
    }
    const openDoc = event.target.closest("[data-visit-open-doc]");
    if (openDoc) {
      state.selectedDoc = openDoc.dataset.visitOpenDoc;
      state.query = "";
      state.filter = "all";
      switchView("search");
      playSound("paper");
      renderAll();
      return;
    }
    const search = event.target.closest("[data-visit-search]");
    if (!search) return;
    state.query = search.dataset.visitSearch;
    state.filter = "all";
    switchView("search");
    playSound("search");
    renderAll();
  });
  els.familyMap.addEventListener("click", (event) => {
    const button = event.target.closest("[data-map-query]");
    if (!button) return;
    state.query = button.dataset.mapQuery;
    state.filter = "all";
    switchView("search");
    playSound("search");
    renderAll();
  });
  els.peopleFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-people-filter]");
    if (!button) return;
    state.personFilter = personFilterIds.has(button.dataset.peopleFilter) ? button.dataset.peopleFilter : "all";
    playSound("click");
    renderAll();
  });
  els.phaseGoalBody.addEventListener("click", (event) => {
    const button = event.target.closest("[data-phase-view]");
    if (!button) return;
    if (button.dataset.phaseQuery) {
      state.query = button.dataset.phaseQuery;
      state.filter = "all";
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
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    state.filter = button.dataset.filter;
    playSound("click");
    renderAll();
  });
  els.resultList.addEventListener("click", (event) => {
    const startQuery = event.target.closest("[data-start-query]");
    if (startQuery) {
      state.query = startQuery.dataset.startQuery;
      state.filter = "all";
      playSound("search");
      renderAll();
      return;
    }
    const locationButton = event.target.closest("[data-unlock-location]");
    if (locationButton) {
      performLocationVisit(locationButton.dataset.unlockLocation);
      state.query = locationButton.dataset.locationQuery || "";
      state.filter = "all";
      switchView("search");
      playSound("search");
      renderAll();
      return;
    }
    const unlock = event.target.closest("[data-unlock-view]");
    if (unlock) {
      switchView(unlock.dataset.unlockView);
      playSound("click");
      renderAll();
      return;
    }
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
  els.relationList.addEventListener("click", (event) => {
    const focus = event.target.closest("[data-relation-focus]");
    if (focus) {
      if (!availableRelationPrompts().some((rel) => rel.id === focus.dataset.relationFocus)) return;
      state.activeRelationId = focus.dataset.relationFocus;
      playSound("click");
      renderAll();
      return;
    }
    const search = event.target.closest("[data-relation-search]");
    if (!search) return;
    state.query = search.dataset.relationSearch;
    state.filter = "all";
    switchView("search");
    playSound("search");
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
    const stateButton = event.target.closest("[data-task-state]");
    if (stateButton) {
      const taskId = stateButton.dataset.taskState;
      const value = stateButton.dataset.taskStateValue;
      if (!notebookTaskIds.has(taskId) || !["pinned", "ignored"].includes(value)) return;
      if (state.taskStates[taskId] === value) delete state.taskStates[taskId];
      else state.taskStates[taskId] = value;
      saveState();
      playSound("click");
      renderNotebookTasks();
      renderSettings();
      return;
    }
    const button = event.target.closest("[data-task-view]");
    if (!button) return;
    if (button.dataset.taskQuery) {
      state.query = button.dataset.taskQuery;
      state.filter = "all";
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
    visitDetail: $("visit-detail"),
    familyMap: $("family-map"),
    documentEmpty: $("document-empty"),
    documentView: $("document-view"),
    peopleFilters: $("people-filters"),
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
    currentGoalList: $("current-goal-list"),
    heirSelect: $("heir-select"),
    descendantSelect: $("descendant-select")
  });
  loadState();
  bindEvents();
  renderAll();
  maybeRunHiddenTests();
}

init();
