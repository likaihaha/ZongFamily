#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = path.resolve(process.cwd());
const outDir = path.join(root, "game", "assets", "images", "generated-cn");
const htmlDir = path.join(outDir, "_html");
fs.mkdirSync(htmlDir, { recursive: true });

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const assets = [
  {
    id: "doc_official_family",
    title: "《云山商界》宗世昌专访",
    subtitle: "地方报刊剪报 1996",
    kind: "press",
    stamp: "报刊剪存",
    lines: ["公开家庭版本", "宗世昌与李桂兰", "六名子女", "未提及罗月珍"],
    promptBasis: "报刊剪报"
  },
  {
    id: "doc_group_history",
    title: "世昌集团历程页",
    subtitle: "企业官网截图 2020",
    kind: "web",
    stamp: "网页留档",
    lines: ["1982 综合商店", "1995 集团挂牌", "2005 宗建红接任", "2020 宗明军接任"],
    promptBasis: "企业官网领导页"
  },
  {
    id: "doc_anonymous_letter",
    title: "世昌集团匿名信",
    subtitle: "内部文件复印件 2020",
    kind: "memo",
    stamp: "内部流转",
    lines: ["第七个继承人", "后代仍在云山", "信托纠纷", "要求妥善处理"],
    promptBasis: "内部会议纪要"
  },
  {
    id: "doc_educated_youth",
    title: "知青名册节选",
    subtitle: "《云山县志》1995 年卷",
    kind: "archive",
    stamp: "县志扫描",
    lines: ["罗月珍", "贵州籍女知青", "1968 到云山", "1970 离县返乡"],
    promptBasis: "县志扫描页"
  },
  {
    id: "doc_naming_rule",
    title: "宗氏家族字辈观察",
    subtitle: "民俗资料摘录 2015",
    kind: "note",
    stamp: "民俗摘录",
    lines: ["第二代多用“建”", "第三代多用“明”", "第四代多用“嘉”", "随母姓亦可保留字辈"],
    promptBasis: "档案资料卡"
  },
  {
    id: "doc_women_fed",
    title: "妇联创业帮扶登记表",
    subtitle: "云山县妇联 2014",
    kind: "form",
    stamp: "妇联档案",
    lines: ["申请人：陈静", "项目：KTV", "帮扶干部：宗建芳", "非干部亲属"],
    promptBasis: "妇联帮扶档案"
  },
  {
    id: "doc_blog_chenjing",
    title: "陈静博客日记",
    subtitle: "个人博客页面 2014-03-15",
    kind: "blog",
    stamp: "网页截图",
    lines: ["决定回云山县", "很少提外公", "怀孕与创业", "档案关系暂挂"],
    promptBasis: "2014 个人博客"
  },
  {
    id: "doc_school_forum",
    title: "县一中家长会帖子",
    subtitle: "地方论坛截图 2020",
    kind: "forum",
    stamp: "论坛留痕",
    lines: ["陈小东", "正式名陈嘉东", "高二三班", "年级前十"],
    promptBasis: "2008 地方论坛"
  },
  {
    id: "doc_tiktok_chenjing",
    title: "短视频评论转写",
    subtitle: "移动端截图整理 2020",
    kind: "mobile",
    stamp: "转写",
    lines: ["我的女儿小东", "县一中高二", "学习不用操心", "母女关系确认"],
    promptBasis: "短视频评论"
  },
  {
    id: "doc_chen_birth",
    title: "陈静出生医学记录",
    subtitle: "医院复印件 1988",
    kind: "medical",
    stamp: "医院复印",
    lines: ["新生儿：陈明静", "母亲：罗建宁", "出生日期：1988-08-19", "父亲栏另册"],
    promptBasis: "医学档案"
  },
  {
    id: "doc_jiadong_school",
    title: "陈嘉东学生信息表",
    subtitle: "云山县第一中学 2020",
    kind: "school",
    stamp: "学校档案",
    lines: ["学生：陈嘉东", "曾用名：陈小东", "监护人：陈静", "成绩稳定"],
    promptBasis: "学校档案表"
  },
  {
    id: "doc_zong_deathbed",
    title: "临终录音整理稿",
    subtitle: "录音文字整理 2020",
    kind: "audio",
    stamp: "录音整理",
    lines: ["还有一件事", "外面还有一个孩子", "录音中断", "病房杂音"],
    promptBasis: "旧录音整理"
  },
  {
    id: "doc_hospital_blood",
    title: "住院样本留存单",
    subtitle: "县人民医院 2020",
    kind: "medical",
    stamp: "样本留存",
    lines: ["患者：宗世昌", "样本类型：外周血", "编号：YS2020-0317", "用于司法鉴定"],
    promptBasis: "医院档案"
  }
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function htmlFor(asset, index) {
  const isWeb = ["web", "blog", "forum", "mobile"].includes(asset.kind);
  const hue = 16 + (index * 17) % 44;
  const rows = asset.lines.map((line, lineIndex) => `
    <div class="row">
      <span>${String(lineIndex + 1).padStart(2, "0")}</span>
      <strong>${escapeHtml(line)}</strong>
      <i></i>
    </div>
  `).join("");

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      width: 1280px;
      height: 720px;
      overflow: hidden;
      background:
        radial-gradient(circle at 18% 18%, rgba(255,255,255,0.32), transparent 24%),
        repeating-linear-gradient(0deg, rgba(39,32,25,0.035) 0 1px, transparent 1px 7px),
        hsl(${hue} 33% 85%);
      color: #2e2921;
      font-family: "Microsoft YaHei", "SimSun", "Noto Serif CJK SC", serif;
    }
    .sheet {
      position: absolute;
      left: ${isWeb ? 90 : 126}px;
      top: ${isWeb ? 74 : 52}px;
      width: ${isWeb ? 1100 : 1028}px;
      height: ${isWeb ? 572 : 620}px;
      padding: 48px 58px;
      background: ${isWeb ? "#f6f8f5" : "#fbf4e6"};
      border: 2px solid rgba(72,54,37,0.32);
      box-shadow: 0 24px 58px rgba(34,25,16,0.22);
      transform: rotate(${isWeb ? "0" : (index % 2 ? "-0.7deg" : "0.6deg")});
    }
    .sheet::before {
      content: "";
      position: absolute;
      inset: 18px;
      border: 1px solid rgba(112,89,61,0.22);
      pointer-events: none;
    }
    .header {
      display: flex;
      justify-content: space-between;
      gap: 24px;
      align-items: flex-start;
      border-bottom: 3px double rgba(70,54,39,0.45);
      padding-bottom: 22px;
    }
    h1 {
      margin: 0 0 12px;
      font-size: 46px;
      line-height: 1.08;
      letter-spacing: 0;
      font-weight: 800;
    }
    .subtitle {
      font-size: 24px;
      color: #695d4d;
    }
    .stamp {
      width: 168px;
      height: 168px;
      border: 8px solid rgba(137,32,28,0.64);
      border-radius: 50%;
      display: grid;
      place-items: center;
      color: rgba(137,32,28,0.74);
      font-size: 30px;
      font-weight: 800;
      transform: rotate(-12deg);
      text-align: center;
      line-height: 1.12;
    }
    .rows {
      margin-top: 38px;
      display: grid;
      gap: 18px;
    }
    .row {
      display: grid;
      grid-template-columns: 74px 1fr 180px;
      align-items: center;
      min-height: 54px;
      border-bottom: 1px solid rgba(64,52,38,0.26);
      font-size: 27px;
    }
    .row span {
      color: rgba(58,48,38,0.42);
      font-family: Consolas, monospace;
    }
    .row strong {
      font-weight: 650;
      letter-spacing: 0;
    }
    .row i {
      height: 18px;
      background: rgba(42,36,29,0.13);
      border-radius: 2px;
    }
    .basis {
      position: absolute;
      left: 58px;
      bottom: 38px;
      color: rgba(48,40,31,0.5);
      font-size: 20px;
    }
    .redline {
      position: absolute;
      left: 0;
      top: ${160 + index * 11 % 240}px;
      width: 100%;
      height: 30px;
      background: rgba(135,35,29,0.1);
    }
    .clip {
      position: absolute;
      right: ${isWeb ? 42 : 96}px;
      top: ${isWeb ? 42 : 24}px;
      width: 92px;
      height: 28px;
      border-radius: 16px;
      background: linear-gradient(90deg, #888, #dad3c6, #777);
      opacity: 0.58;
      transform: rotate(4deg);
    }
  </style>
</head>
<body>
  <div class="sheet">
    <div class="redline"></div>
    <div class="clip"></div>
    <div class="header">
      <div>
        <h1>${escapeHtml(asset.title)}</h1>
        <div class="subtitle">${escapeHtml(asset.subtitle)}</div>
      </div>
      <div class="stamp">${escapeHtml(asset.stamp)}</div>
    </div>
    <div class="rows">${rows}</div>
    <div class="basis">依据美术提示词：${escapeHtml(asset.promptBasis)}</div>
  </div>
</body>
</html>`;
}

for (const [index, asset] of assets.entries()) {
  const htmlPath = path.join(htmlDir, `${asset.id}.html`);
  const pngPath = path.join(outDir, `${asset.id}.png`);
  fs.writeFileSync(htmlPath, htmlFor(asset, index), "utf8");

  if (!fs.existsSync(edgePath)) {
    throw new Error(`Microsoft Edge not found: ${edgePath}`);
  }

  const result = spawnSync(edgePath, [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1280,720",
    `--screenshot=${pngPath}`,
    `file:///${htmlPath.replaceAll("\\", "/")}`
  ], { stdio: "pipe", encoding: "utf8" });

  if (result.status !== 0) {
    throw new Error(`Failed to render ${asset.id}: ${result.stderr || result.stdout}`);
  }
}

console.log(`[OK] generated ${assets.length} localized PNG art assets in ${outDir}`);
