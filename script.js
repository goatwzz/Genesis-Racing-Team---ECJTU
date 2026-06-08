function createPlaceholderMembers(group, meta, initials, roles) {
  return ["A", "B", "C", "D"].map((suffix, index) => ({
    name: `${group}成员${suffix}`,
    group,
    meta,
    bio: roles[index],
    initials: suffix,
    details: {
      "所在组别": group,
      "负责方向": roles[index],
      "备注": "当前为占位成员，后续可替换为真实姓名、年级、专业、照片和项目经历。"
    }
  }));
}

const teamMembers = [
  {
    name: "杨云",
    group: "指导老师",
    meta: "指导老师 / 检测技术及自动化",
    bio: "负责车队科研与竞赛指导，研究方向为检测技术及自动化。曾指导学生参加全国大学生“挑战杯”、电子设计竞赛、飞思卡尔杯智能汽车竞赛、交通科技竞赛等并获得多项奖励。",
    initials: "杨",
    photo: "assets/photos/teacher-yang-yun.jpg",
    details: {
      "出生年月": "1972.5",
      "研究方向": "检测技术及自动化",
      "联系地址": "江西南昌双港东路808号华东交通大学电气学院",
      "电话": "0791-87046206",
      "电子邮件": "yyang@ecjtu.edu.cn",
      "指导成果": "指导学生申报实用新型专利 25 项，参与指导学生科技竞赛并获得国家级奖励 10 项、省级奖励 25 项。"
    }
  },
  {
    name: "王子铮",
    displayName: "队长-王子铮",
    group: "综合管理",
    meta: "项目统筹 / 赛前联调",
    bio: "负责年度任务拆解、组间协同、训练安排、比赛材料和技术复盘。",
    initials: "王",
    photo: "assets/photos/members/wang-zizheng.jpg",
    photoFit: "cover",
    photoPosition: "center 28%",
    details: {
      "负责方向": "年度任务规划、比赛组织、整车联调",
      "主要工作": "协调算法、电控、视觉、机械、软件等组别推进项目。"
    }
  },
  {
    name: "刘欣荣",
    displayName: "宣传组长-刘欣荣",
    group: "综合管理",
    meta: "电子科技协会会长 / 宣传组长 / 招新统筹",
    bio: "2024级电力牵引及其传动控制，电子科技协会会长，负责协会骨干选拔、招新组织、内部授课统筹、第二课堂建设和校级智能车竞赛宣传保障等工作。",
    initials: "刘",
    photo: "assets/photos/members/liu-xinrong.jpg",
    photoFit: "cover",
    photoPosition: "center 44%",
    details: {
      "所在组别": "综合管理",
      "年级专业": "2024级 电力牵引及其传动控制",
      "协会职务": "电子科技协会会长",
      "QQ": "756408795",
      "电话": "19570112183",
      "负责方向": "协会骨干选拔、招新统筹、授课组织、活动立项、赛事宣传",
      "主要工作": "依托腾讯会议开展线上民主选举，牵头统筹协会招新，组织骨干完成新人笔试、面试全流程考核；联合骨干研讨课程内容与排期，制作考勤签到表并跟进学员学习状态；对接社建委完成智慧交大平台活动立项，协同讲师优化课程内容、规范课堂秩序；协助筹备校级智能车竞赛，负责赛事宣传、赛前培训、物资筹备、志愿者招募和现场秩序维护。",
      "个人感悟": "从招新、授课到校级智能车赛组织，很多工作都是第一次做。前期准备不够充分，也经历过担心和忙乱，但在骨干成员配合下不断改进流程，最终完成招新、第二课堂和校赛保障。那段时间常常往 102 跑，虽然很累，但忙碌而充实。"
    }
  },
  {
    name: "范乙晨",
    displayName: "宣传副部长-范乙晨",
    group: "综合管理",
    meta: "电子科技协会副会长 / 财务 / 宣传",
    bio: "2023级测控技术与仪器1班，电子科技协会副会长，负责协会财务与宣传相关工作，并持续参与车队内容制作与设计支持。",
    initials: "范",
    photo: "assets/photos/members/fan-yichen.png",
    photoFit: "cover",
    photoPosition: "center 36%",
    details: {
      "所在组别": "综合管理",
      "年级专业": "2023级测控技术与仪器1班",
      "协会职务": "电子科技协会副会长",
      "QQ": "3515883354",
      "电话": "15579132106",
      "负责方向": "协会财务、宣传策划、视频剪辑、内容制作、视觉设计",
      "主要工作": "负责协会财务和宣传工作，同时参与招新标准、授课内容等事项讨论，持续推进素材整理、宣传片剪辑和设计物料制作。",
      "项目经历": "围绕车队宣传片反复调整节奏、特效和素材组织方式，同时参与队服、队旗、竞赛牌照和公众号内容的设计与维护。",
      "个人感悟": "宣传工作往往不是灵感一来就能直接落地，真正困难的是反复推翻、重做和把想法变成成片，但这也是最能逼着人持续进步的过程。"
    }
  },
  {
    name: "李林林",
    displayName: "财务与后勤-李林林",
    group: "综合管理",
    meta: "经费管理 / 后期制作 / 资料归档",
    bio: "负责车队经费记录与报销材料整理，同时承担活动照片视频后期、宣传成片整理和资料归档工作。",
    initials: "李",
    details: {
      "所在组别": "综合管理",
      "负责方向": "经费管理、报销材料整理、照片视频后期、宣传资料归档",
      "主要工作": "跟进车队日常经费记录、物资采购与报销流程，协助整理活动素材并完成照片、视频和宣传内容的后期输出。",
      "备注": "当前为岗位卡展示，后续可替换为真实姓名、年级、专业、照片和具体经历。"
    }
  },
  {
    name: "姚俊弘",
    group: "视觉组",
    meta: "Linux / ROS / OpenCV 图像处理",
    bio: "电牵2024-1，主要负责 Linux 操作系统、ROS 机器人框架和 OpenCV 图像处理，曾获 2025 年第七届全球校园人工智能算法精英大赛无人驾驶算法应用赛全国一等奖、2025 年江西省大学生智能汽车竞赛一等奖。",
    initials: "姚",
    photo: "assets/photos/members/yao-junhong.jpg",
    details: {
      "所在组别": "视觉组",
      "专业班级": "电牵2024-1",
      "负责方向": "Linux 操作系统、ROS 机器人框架、OpenCV 图像处理",
      "QQ": "2625128548",
      "Github": "buchiyuaaa",
      "竞赛成果": "2025 年第七届全球校园人工智能算法精英大赛无人驾驶算法应用赛全国一等奖；2025 年江西省大学生智能汽车竞赛江西省一等奖。",
      "个人感悟": "从大一开始接触智能车竞赛，逐步学习 PCB、YOLO 模型和图像处理等知识，在实验室学习交流和比赛备战中不断成长。"
    }
  },
  {
    name: "张曦",
    group: "视觉组",
    meta: "上位机 / 图像处理 / 路径跟踪",
    bio: "城轨2023-1，参与完全模型比赛备赛，负责上位机板卡操作、配网、图像处理和视觉方案调试，完成从八邻域识别、逆透视边线提取到纯路径跟踪方案落地的持续迭代。",
    initials: "张",
    photo: "assets/photos/members/zhang-xi.png",
    photoMaxWidth: "330px",
    details: {
      "所在组别": "视觉组",
      "专业班级": "城轨2023-1",
      "电话": "18479567668",
      "QQ": "959357383",
      "负责方向": "上位机操作、图像处理、赛道边线识别、纯路径跟踪方案调试",
      "项目经历": "参与完全模型比赛备赛，完成远程网络连接、八邻域赛道识别、逆透视边线处理、贝塞尔曲线中线优化和纯路径跟踪算法移植调试。",
      "个人感悟": "24 年校赛结束后，我其实一度犹豫过还要不要继续打智能车。那时候总觉得自己无论单片机还是 PCB 都学得不够扎实，像个半吊子，甚至连选拔演示都做得一塌糊涂。但也正是王哥和几位学长在我最没底气的时候给了我鼓励、提醒和托底，才让我真正走进了这段长达半年的备赛旅程。\n\n这半年里，我从配网试错、上位机板卡操作，到八邻域识别、逆透视边线提取，再到贝塞尔优化和纯路径跟踪算法落地，几乎是被问题一步一步逼着往前学。中间也经历过很多挫败，比如蓝桥杯准备不足留下遗憾，比如自己写出来的视觉代码漏洞很多，最后还得靠学长们一起兜底完善。那种明明拼命投入了，却还是看见自己能力边界的感觉，其实很难受。\n\n我最忘不了的，还是比赛前几天在 102 实验室和学长们一起彻夜调车的场景，以及到了南京赛场后那种压抑到让人喘不过气的氛围。第一天三支队伍都没拿到有效成绩的时候，真的会怀疑这半年一百八十多个日夜到底值不值得。可回头看，我越来越觉得，真正留在我身上的，不是一张奖状，而是这段经历逼着我走出舒适圈，学会面对不擅长的领域，学会和不同风格的人协作，也学会为了一个自己真正在意的目标全力以赴。\n\n车队对我来说早就不只是比赛队伍，更像是第二个家。这里有学长们毫无保留的帮助，也有队友之间那种一起熬过压力、一起扛过失落之后建立起来的信任。就算最后仍然留有遗憾，我也依然很庆幸，自己曾经这样认真地投入过、燃烧过。这段经历带给我的成长、韧劲和热爱，往后很长一段路上都会一直跟着我。"
    }
  },
  {
    name: "庞凯",
    group: "视觉组",
    meta: "视觉算法 / 疯狂电路智能车",
    bio: "2025级工业自动化，参与疯狂电路智能车组备赛，主要负责视觉算法，并持续参与校赛、寒假选拔和后续整车联调。",
    initials: "庞",
    photo: "assets/photos/members/pang-kai.jpg",
    details: {
      "所在组别": "视觉组",
      "年级专业": "2025级工业自动化",
      "比赛组别": "疯狂电路智能车组别",
      "负责方向": "视觉算法",
      "电子邮件": "3207084232@qq.com",
      "QQ": "3207084232",
      "电话": "18179621646",
      "Github": "https://github.com/Pk18179621646",
      "项目经历": "大一参加招新后进入电协方向学习，校赛阶段独立推进智能车调试，长期往返赛道完成车辆联调并获得校赛二等奖。寒假期间继续准备车队选拔，在环境配置、OpenCV 安装和基础视觉训练中逐步补齐能力，随后完成考核并正式进入车队备赛。",
      "个人感悟": "真正进入备赛之后，视觉方案并不是一开始就顺利跑通的。无论是爬线策略还是后续优化，很多内容都经历了反复推翻和重做，压力也一直不小。但也正是在这个过程中，我开始真正理解视觉、控制和整车配合之间的关系。和队友一起不断讨论方案、试错、联调，到现在小车已经能够稳定完赛，这种从零到能跑起来的过程让我收获很大。接下来也希望继续把速度和稳定性做上去，向更高层级的比赛冲刺。"
    }
  },
  {
    name: "宋俊林",
    group: "视觉组",
    meta: "软件编写 / 程序调试 / 算法实现",
    bio: "23级电气工程及其自动化（电力牵引及传动控制），参与智能车与数学建模竞赛，主要负责程序编写、算法实现与联调。",
    initials: "宋",
    photo: "assets/photos/members/song-junlin.jpg",
    details: {
      "所在组别": "视觉组",
      "年级专业": "2023级电气工程及其自动化（电力牵引及传动控制）",
      "负责方向": "软件编写、程序调试、算法实现",
      "参赛经历": "第二十届全国大学生智能汽车竞赛微缩光电组华东赛区二等奖；2025 年江西省大学生数学建模竞赛本科三等奖。",
      "QQ": "1165283175",
      "个人感悟": "智能车和建模是两种完全不同的比赛节奏，但真正让我印象最深的，还是智能车这一年近乎贯穿日常的备赛生活。\n\n从校赛选拔、寒假训练，到正式组队、反复调试，再到最后奔赴赛场，很多时候都很累，尤其是在课业压力也不轻的时候，会反复怀疑自己到底能不能坚持下来。\n\n但回头看，真正支撑我走下去的，不只是结果，而是那种每天都能看到自己和队友往前挪一点点的感觉。正因为一起熬过那些高强度、也有点狼狈的日子，最后的收获才显得特别真实。"
    }
  },
  {
    name: "李云逸",
    group: "视觉组",
    meta: "软件框架 / 视觉识别 / 控制算法",
    bio: "2024级工业自动化，参加过智能车走马观碑赛道、电子类先进成图大赛及多项校级比赛，主要负责软件部分与车体识别控制框架搭建。",
    initials: "李",
    photo: "assets/photos/members/li-yunyi.jpg",
    details: {
      "所在组别": "视觉组",
      "年级专业": "2024级工业自动化",
      "负责方向": "软件部分、视觉识别、控制算法、Linux",
      "参赛经历": "全国大学生智能车走马观碑赛道；电子类先进成图大赛开放赛道和个人赛道；部分校级比赛。",
      "Github": "lyy4445",
      "电子邮件": "2935714710@qq.com",
      "QQ": "2936714710",
      "电话": "17808826110",
      "项目经历": "完成智能车校赛后续考核，搭建小车视觉与控制的基础框架，持续推进识别与控制方案迭代，并在课外项目中强化代码逻辑与程序控制能力。",
      "个人感悟": "回头看这一路，我最大的感受不是“我学会了多少东西”，而是终于慢慢明白自己适合怎样成长。\n\n我以前也迷茫过，觉得课本里的很多内容离真实问题很远，也试过在不同方向之间来回摇摆。后来真正进入智能车、开始自己搭框架、补漏洞、和队友一起把方案从想法做成能跑的东西之后，才第一次明显感觉到，原来自己更适合在真实项目里被问题逼着成长。\n\n这段经历让我从“跟着别人学”慢慢变成“愿意主动找问题、主动补能力”的状态。技术上当然还有很多不足，但至少我知道自己接下来想继续往前走。"
    }
  },
  {
    name: "梁博安",
    group: "视觉组",
    meta: "上位机软件框架 / AI 模型 / 图像处理",
    bio: "24自动化过程控制，曾获 2025 年第七届全球校园人工智能算法精英大赛无人驾驶算法应用赛全国一等奖，主要负责上位机软件框架、图像处理、AI 模型与语义分割等方向。",
    initials: "梁",
    photo: "assets/photos/members/liang-boan.jpg",
    photoFit: "cover",
    photoPosition: "center 30%",
    details: {
      "所在组别": "视觉组",
      "专业班级": "24自动化过程控制",
      "电话": "15970962032",
      "QQ": "1150074955",
      "电子邮件": "1150074955@qq.com",
      "竞赛经历": "2025年第七届全球校园人工智能算法精英大赛无人驾驶算法应用赛全国一等奖",
      "负责方向": "上位机软件框架、图像处理、AI模型、元素识别、语义分割、元素处理、地址通讯、Linux 操作系统、ROS 机器人框架",
      "个人感悟": "全国大学生智能车竞赛竞争激烈，所有能走到线下赛场的队伍都具备扎实功底，想拿成绩并不容易。但从长远看，备赛阶段系统学习到的电路、编程、控制算法等知识都很通用，不仅能支撑智能车项目，也能迁移到其他科创竞赛和实际工程中。\n\n这项比赛的备赛周期很长，从三月到七月都需要持续高强度投入，还会牺牲不少假期，所以保持平和心态很重要。选择参赛之后，更值得关注的是能力有没有真正提升，而不是只盯着最终竞速成绩。对我来说，科创竞赛最核心的意义，不是会不会使用现成技术，而是在实践中不断提升认知、反复动手验证想法、把技术真正拆开吃透。\n\n在代码工作上，我也越来越意识到，AI 最有价值的地方不是替代思考，而是提效。先梳理需求、搭好整体架构，再借助 AI 完成模块编码，最后由自己审核、迭代和优化，这样才能同时兼顾效率与质量。"
    }
  },
  {
    name: "翟家驹",
    group: "视觉组",
    meta: "上位机代码 / AI 模型组 / 参数调试",
    bio: "2024级信号专业，参与人工智能模型组备赛，主要负责上位机代码修改、现场调试与参数配合优化。",
    initials: "翟",
    photo: "assets/photos/members/zhai-jiaju.png",
    photoFit: "cover",
    photoPosition: "center 24%",
    details: {
      "所在组别": "视觉组",
      "年级专业": "2024级信号专业",
      "比赛组别": "人工智能模型组",
      "负责方向": "上位机代码修改、现场调试、参数配合优化",
      "QQ": "1930673884",
      "项目经历": "第一次参加智能车 AI 模型组竞赛，在前期学习 5132、VScode 和代码基础的过程中逐步进入备赛节奏。加入车队后主要配合已有方案进行上位机代码小修、参数联调与现场调试，并参与搭建场地和比赛准备工作。",
      "个人感悟": "这是我第一次正式参加智能车 AI 模型组竞赛。刚加入时很多核心代码已经完成，我能做的更多是跟着学长们一起改细节、调参数、补小问题，但也正是在这些具体工作里，我慢慢学会了怎么真正参与一套工程方案。很感谢王哥和队友们一直包容、提醒和带着我往前走，也让我有机会真正接触这个优秀的团队。"
    }
  },
  {
    name: "郭博文",
    group: "视觉组",
    meta: "控制 / 通信 / 部分图像 / AI 模型组",
    bio: "2024级电气工程及其自动化（电力牵引及传动控制），参与人工智能模型组与创意赛智慧城市 Robotaxi，主要负责控制、通信和部分图像工作。",
    initials: "郭",
    photo: "assets/photos/members/guo-bowen.png",
    photoFit: "cover",
    photoPosition: "center 22%",
    photoMaxWidth: "330px",
    details: {
      "所在组别": "视觉组",
      "年级专业": "2024级电气工程及其自动化（电力牵引及传动控制）",
      "竞赛经历": "第21届全国大学生智能车竞赛（人工智能模型组）；第21届全国大学生智能车竞赛（创意赛智慧城市 Robotaxi）",
      "负责方向": "控制、通信和部分图像",
      "QQ": "3990692981",
      "电话": "17612461836",
      "电子邮件": "3990692981@qq.com",
      "项目经历": "从校赛阶段开始参与智能车训练，围绕控制模块、通信链路和部分图像相关内容持续推进方案实现。校赛期间完成小车各模块联调、画板焊板和现场调试，并在后续选拔后继续投入人工智能模型组与智慧城市 Robotaxi 方向备赛。",
      "个人感悟": "我大一刚开始几乎没有实验室经历，硬件基础和软件实战都比较薄弱。真正进入智能车之后，才在反复画板、焊板、调模块、改代码和联调整车的过程中慢慢建立起完整的工程概念。一路上虽然常常觉得自己准备不够，但也正是这些高强度的实战，让我对智能车有了更深的理解。"
    }
  },
  {
    name: "廖开辉",
    group: "电控组",
    meta: "核心控制算法 / 视觉算法",
    bio: "2025 电牵一班，微缩光电-疯狂电路组成员，主要负责核心控制算法和视觉算法，日常参与 PID 调参、元素识别、边界问题排查和整车联调。",
    initials: "廖",
    photo: "assets/photos/members/liao-kaihui.jpg",
    details: {
      "所在组别": "电控组",
      "专业班级": "2025 电牵一班",
      "比赛组别": "微缩光电 - 疯狂电路",
      "负责方向": "核心控制算法、视觉算法、PID 调参、元素识别",
      "项目经历": "参与小车控制和视觉识别调试，从赛道识别不稳定到稳定处理各类元素，持续排查数组越界、图像缓冲区边界等问题。",
      "个人感悟": "车队给人的感觉更像是一个大家认真做同一件事的地方，在调试和比赛中逐渐从旁听融入到可靠做事。"
    }
  },
  {
    name: "张艺沥",
    group: "电控组",
    meta: "图像算法 / 控制算法 / 走马观碑",
    bio: "2025级工业自动化，第二十一届智能车竞赛走马观碑组成员，负责图像与控制算法方向。",
    initials: "张",
    photo: "assets/photos/members/zhang-yili.png",
    details: {
      "所在组别": "电控组",
      "年级专业": "2025级工业自动化",
      "比赛组别": "第二十一届智能车竞赛走马观碑组",
      "负责方向": "图像算法、控制算法",
      "项目经历": "通过电协补试进入团队后，从校赛备赛、寒假选拔到进入 102 实验室，逐步完成基于开源方案的二次开发、OpenCV 算法复刻、串级 PID 控制直流电机等训练内容。进入走马观碑备赛阶段后，和李云逸学长共同参与控制与图像相关的开发和优化，在实验室持续推进算法调试、方案磨合与整车联调。",
      "Github": "RMxiaotaobao",
      "电子邮件": "13197957885@163.com",
      "QQ": "2493269974",
      "电话": "17770031949",
      "个人感悟": "大一上学期，我通过补试进入电协，随后从学习 STM32、准备智能车校赛开始，慢慢走进了真正的科创训练节奏。最开始很多事情都靠查资料、看视频、跟着学长们一点点摸索，但也正是在这些反复试错里，我第一次真切感受到把兴趣变成长期投入是什么样子。\n\n后来从校赛、寒假选拔一路走到进入 102 实验室，再和队友一起准备第二十一届智能车竞赛走马观碑赛题，我对自己的方向也越来越清晰。相比硬件，我更适合控制和图像领域；在和学长、队友并肩调车、打磨算法的过程中，我不仅学到了 OpenCV、串级 PID 和整车联调这些具体能力，也逐渐建立起了对工程实践和团队协作的真实理解。\n\n这段经历对我最大的意义，不只是学到了多少技术，而是让我从一个会因为条件不足而犹豫的新生，慢慢变成愿意主动投入、主动突破舒适圈的人。电子科技协会、102 实验室，还有一路上认真带过我的学长们，让我找到了真正愿意长期深耕的方向。接下来我也会继续在控制与图像领域沉淀自己，把这份热爱延续下去。"
    }
  },
  {
    name: "金华鑫",
    group: "电控组",
    meta: "硬件焊接 / 调试协同 / 视觉处理",
    bio: "2023级工业自动化，参与智能车微缩电磁组与电赛控制类项目，智能车中主要负责硬件焊接与调试，并协助软件和算法优化。",
    initials: "金",
    photo: "assets/photos/members/jin-huaxin.jpg",
    details: {
      "所在组别": "电控组",
      "年级专业": "2023级工业自动化",
      "竞赛方向": "智能车微缩电磁组、电赛控制类",
      "负责方向": "硬件焊接与调试、软件联调、算法优化、视觉图像处理、模块通信",
      "QQ": "3151754497",
      "电话": "19047960669",
      "主要荣誉": "第二十届全国大学生智能汽车竞赛华东赛区微缩电磁组二等奖；2025 年江西省大学生智能汽车竞赛微缩电磁组一等奖；2025 年全国大学生电子设计竞赛 E 题全国二等奖。",
      "个人感悟": "我一直觉得，比赛真正难的地方不只是技术，而是人和人能不能在高压状态下继续把事情一起做下去。\n\n备赛的时候，我们也不是一开始就什么都顺。出问题会紧张，出意外会懊恼，有时候连续几天看不到明显进展，心态真的会被磨得很厉害。尤其到了比赛现场，时间被压得很紧，任何一个细节出错都可能把前面的努力全部放大成焦虑。\n\n但也正因为经历过这些，我更能体会到团队磨合和互相包容的重要。很多时候不到最后一刻，谁也不知道结果会怎样，只能一边顶住情绪，一边把该做的事继续做完。最后能不能跑出来，往往靠的就是这种不轻易散掉的劲。"
    }
  },
  {
    name: "郭乾川",
    group: "电控组",
    meta: "软件开发 / 图像处理 / 微缩光电",
    bio: "23级铁道电气化成员，参与江西省智能汽车竞赛缩微光电组和全国大学生智能汽车竞赛微缩光电组备赛，主要负责软件开发与图像处理。",
    initials: "郭",
    photo: "assets/photos/members/guo-qianchuan.png",
    photoMaxWidth: "330px",
    details: {
      "所在组别": "电控组",
      "年级专业": "2023级铁道电气化",
      "负责方向": "软件、图像处理",
      "QQ": "1296886946",
      "电子邮件": "sillytime@163.com",
      "参赛经历": "第一届江西省智能汽车竞赛缩微光电组省级一等奖；第二十届全国大学生智能汽车竞赛微缩光电组华东赛区二等奖。",
      "个人感悟": "智能车竞赛的获奖难度很高，能站上赛场的人都在各自学校投入了大量时间和精力，没有所谓的“炮灰”去垫分。也正因为这样，它更像一场真正检验学习深度和持续投入的长跑。\n\n换个角度看，备赛期间主动补齐的基础知识会成为后续参加其他比赛的重要底子。你会花很长时间学控制、软件、图像处理等内容，这些积累不会只停留在一场比赛里。\n\n既然已经选择了智能车，就要尽量坚持到底，不只盯着车跑得多快，更要看自己真正学到了多少。三月到七月的高强度备赛会很消耗人，所以保持稳定心态也很重要，不要太急，才能把这条路走稳。"
    }
  },
  {
    name: "李宇翔",
    group: "电控组",
    meta: "嵌入式开发 / 电控调试 / 竞赛实战",
    bio: "2023级电子信息专业，参与智能车、电子设计和嵌入式相关竞赛，逐步从入门学习走向实战备赛与项目协作。",
    initials: "李",
    photo: "assets/photos/members/li-yuxiang.png",
    photoMaxWidth: "330px",
    details: {
      "所在组别": "电控组",
      "年级专业": "2023级电子信息",
      "负责方向": "嵌入式开发、电控调试、竞赛项目实践",
      "QQ": "3221882259",
      "电话": "15303563327",
      "参赛经历": "第一届江西省智能车竞赛省一等奖；全国大学生电子设计竞赛江西赛区二等奖；西门子杯嵌入式赛道全国初赛二等奖；蓝桥杯江西赛区二等奖。",
      "个人感悟": "最开始接触这些东西的时候，其实只是零零散散地学，学单片机、看教程、做一些不成体系的小尝试，知道自己对这类东西感兴趣，但还谈不上真正理解“做项目”是什么感觉。\n\n后来进入比赛备赛之后，我才慢慢意识到，原来以前那些零碎的知识只有放到真实任务里，才会真正连起来。你会因为一个问题卡很久，也会因为某个小突破高兴很久；会发现自己懂得远没有想象中多，但也会在一次次调试里看到自己确实在往前走。\n\n车队对我最大的意义，就是给了我这样一个能把兴趣变成持续投入的场景，也让我对自己想走的技术方向越来越坚定。"
    }
  },
  {
    name: "杨超然",
    group: "电控组",
    meta: "裸机开发 / PID控制 / ROS2导航",
    bio: "2023级工业自动化，参与 2025 年缩微电磁组和电子设计竞赛 E 题，主要负责单片机裸机开发、PID 控制与 ROS2 导航小车相关内容。",
    initials: "杨",
    photo: "assets/photos/members/yang-chaoran.jpg",
    details: {
      "所在组别": "电控组",
      "年级专业": "2023级工业自动化",
      "智能车组别": "2025 年缩微电磁组",
      "电赛题目": "2025 年电子设计竞赛 E 题",
      "负责方向": "单片机裸机开发、PID 控制、ROS2 导航小车",
      "Github": "hhhycr",
      "电子邮件": "3359892099@qq.com",
      "QQ": "3359892099",
      "电话": "18513262636",
      "个人感悟": "如果只看结果，奖项和加分当然很重要，但真正走完整个过程之后，我反而越来越觉得，那些东西更像是附带的收获。\n\n真正让我记得很深的，是从一开始只是因为兴趣报名，到后来越来越确认这就是自己愿意投入时间和精力去做的事情；也是和队友一起做项目、一起扛压力、一起熬过很多看起来快要走不下去的节点。\n\n还有那些看上去很琐碎的时刻，比如反复调代码、反复调参数、一次次排错、一次次推翻重来。它们当下并不浪漫，甚至很折磨人，但正是这些细节，慢慢把人变得更踏实，也让我更清楚自己以后想成为什么样的人。"
    }
  },
  {
    name: "许雄钦",
    group: "电控组",
    meta: "电控开发 / 视觉应用 / 机器人竞赛",
    bio: "2023级过程装备与控制工程专业，先后参与智能车、Robomaster 和嵌入式类竞赛，在项目中兼顾电控、视觉和系统稳定性优化。",
    initials: "许",
    photo: "assets/photos/members/xu-xiongqin.png",
    details: {
      "所在组别": "电控组",
      "年级专业": "2023级过程装备与控制工程",
      "QQ": "1515774098",
      "电话": "18779875671",
      "主要荣誉": "江西省智能汽车竞赛一等奖；Robomaster 高校联盟赛（上海站）步兵对抗赛二等奖；Robomaster 高校联盟赛（上海站）3v3 对抗赛二等奖；第十七届蓝桥杯 EDA 赛道省级二等奖。",
      "负责方向": "电控开发、视觉应用、机器人竞赛项目实践",
      "项目经历": "从智能车光电组备赛到 RM 项目开发，先后承担电控和视觉相关工作，并围绕自瞄方案、稳定性和赛场应对做持续迭代。",
      "个人感悟": "我后来越来越能理解，比赛里最让人遗憾的，往往不是“不会”，而是明明做出来了，却没能在关键几分钟里稳定地跑完、打完、交出来。\n\n从智能车到 RM，我都明显感受到一件事：很多看上去很厉害的方案，如果稳定性不够，到了赛场上就很容易被现实打回原形。真正让人紧张的，不只是技术难题本身，而是你明知道时间很短、机会很少，却还要在那几分钟里把所有问题都压住。\n\n所以现在回头看，我最深的感悟反而不是某一个高光瞬间，而是对“稳定”这两个字更敬畏了。把潜在风险一点点清掉，把能出错的地方尽量提前解决，这种看似笨的方法，很多时候才是最可靠的底气。"
    }
  },
  {
    name: "刘文涛",
    group: "硬件组",
    meta: "硬件设计 / 电赛 / 无线充电",
    bio: "电牵2023-1，主要参与硬件方向工作，经历智能车竞赛与全国大学生电子设计竞赛备赛，负责电路设计、画板调试、综合测评准备和无线充电方案探索。",
    initials: "刘",
    photo: "assets/photos/members/liu-wentao.png",
    coverPhoto: "assets/photos/members/liu-wentao-cover.jpg",
    coverFit: "cover",
    coverPosition: "center 58%",
    details: {
      "所在组别": "硬件组",
      "专业班级": "电牵2023-1",
      "电话": "19579953185",
      "QQ": "2032706357",
      "负责方向": "硬件设计、电路搭建、调试验证、无线充电探索",
      "项目经历": "从 2024 年校赛成绩不理想后的低谷重新出发，在队友鼓励下再次组队投入 2025 年备赛。前期主要负责更熟悉的硬件部分，从最开始画得还很生涩的板子，一点点磨到能真正落地使用；蓝桥杯备赛阶段是他静下心沉淀硬件能力的重要阶段。5 月到 7 月持续死磕无线充电方案，虽然最终到南京比赛时仍使用了网上模块，但这段长时间的攻关和试错让他对硬件设计与调试有了更扎实的理解。回校后又迅速投入电赛准备，参与电路搭建、仿真与综测冲刺。",
      "竞赛成果": "参加南京智能车比赛并完成关键调整，第二天顺利拿到成绩；参与全国大学生电子设计竞赛备赛与综测冲刺，最终获得国家二等奖。",
      "个人感悟": "我其实不是一开始就对比赛很有信心的人。24 年校赛成绩并不理想，那段时间会怀疑自己是不是不太适合继续往下做。后来是队友主动来找我组队，我才重新鼓起勇气把这半年走完。现在回头看，最开始那些画得很抽象的板子、那些调不好又重来的夜晚，其实都是成长里躲不过去的过程。\n\n南京那几天是我大学里最难忘的一次外出。第一天比赛结束后，回到酒店的氛围真的很压抑，大家都知道自己还有很多问题没有解决。那天晚上几个队伍一起复盘、讨论第二天怎么办，几乎都睡不好。但也正因为经历了这种压力，第二天重新把状态拉回来、最终拿到成绩时，才会觉得那种释然特别真实。虽然还是有遗憾，但至少没有辜负前面的努力。\n\n回学校之后又几乎没有停下来，马上接着准备电赛。综测那段时间可能是我参与得最专注的一次，很多看起来以为已经稳了的东西，真正做下去才发现远没有那么简单。也正是这些反复实践、试错和临场调整，让我慢慢意识到，比赛带来的收获从来不只是技术本身，还有执行力、抗压能力、团队配合和面对突发情况时快速应对的能力。\n\n车队对我来说更像一个大家庭。这里有一起熬夜、一起复盘、一起开玩笑的人，也有愿意把经验毫无保留教给学弟的学长。102 实验室、南京的那几天、备赛和复盘的无数个夜晚，对我来说都是很难替代的记忆。后来我选择了直接就业，但在车队学到的那种钻研劲、执行力和持续学习的习惯，会一直陪着我往后走。"
    }
  },
  {
    name: "汪旭涛",
    group: "硬件组",
    meta: "硬件研发 / 车体结构 / PCB",
    bio: "2024级工业自动化，先后参与第二十一届全国大学生智能车竞赛走马观碑组别、第十九届全国大学生成图大赛电子类赛事，项目实操中主攻硬件研发工作。",
    initials: "汪",
    photo: "assets/photos/members/wang-xutao.jpg",
    details: {
      "所在组别": "硬件组",
      "年级专业": "2024级 工业自动化",
      "竞赛经历": "第二十一届全国大学生智能车竞赛走马观碑组别；第十九届全国大学生成图大赛电子类赛事。",
      "负责方向": "硬件研发、车体结构设计、PCB 原理图设计、电路板焊接",
      "专业技能": "独立完成车体结构设计、PCB 原理图设计与电路板焊接，自主研制电子调速器、电机驱动模块及设备主控板；系统学习图像处理、目标检测相关技术，可熟练操作 Linux 系统开展开发工作。",
      "QQ": "3968004189",
      "电话": "18247125729",
      "电子邮件": "wxt198888@qq.com",
      "个人感悟": "从大一加入电子科技协会开始，逐步学习 STM32、STC51、ESP32 等单片机项目，接触 PID 控制、平衡摆、图像处理、目标检测和 ROS 等技术。通过校级智能车赛进入车队后主要负责硬件设计，过程中暴露出不少问题，也倒逼自己提升电路分析和故障检测能力。加入车队后更加认识到团队协作和技术交流的重要性。"
    }
  },
  {
    name: "罗晨璇",
    group: "硬件组",
    meta: "硬件电路设计 / 单片机开发",
    bio: "2024级轨道交通信号与控制专业，参与第二十一届智能车疯狂电路组、蓝桥杯嵌入式设计与开发组和先进成图赛，主要负责硬件电路设计与 STM32 单片机开发。",
    initials: "罗",
    photo: "assets/photos/members/luo-chenxuan.jpg",
    photoFit: "contain",
    photoPosition: "center center",
    details: {
      "所在组别": "硬件组",
      "年级专业": "2024级 轨道交通信号与控制",
      "竞赛经历": "第二十一届智能车疯狂电路组；蓝桥杯嵌入式设计与开发组；先进成图赛。",
      "负责方向": "硬件电路设计、简单单片机开发、STM32F103",
      "Github": "accountoflcx",
      "电子邮件": "2278609200@qq.com",
      "QQ": "2278609200",
      "电话": "13879189164",
      "项目经历": "大一加入电协后开始系统学习课外技术内容，并在与智能车方向学长交流中逐步明确了参赛目标。积累一年基础后参加智能车校赛，通过车队选拔正式进入备赛阶段，持续承担硬件电路设计与 STM32F103 相关开发工作。",
      "个人感悟": "进入车队后，最直观的感受是团队氛围很好。大家在高强度备赛之外也会交流技术难题和日常琐事，老学长们对问题的解答非常热心，队内也愿意共享硬件、软件和元器件等资源。虽然备赛过程很累，但正是这种和睦讨论、一起解决问题的状态，让原本疲惫的训练生活多了很多乐趣，也让我更愿意长期投入到这个团队里。"
    }
  },
  {
    name: "殷凯",
    group: "硬件组",
    meta: "硬件设计 / 智能车电磁组 / 学长经验分享",
    bio: "2022级入学铁道电气化方向，曾参加智能车折线电磁组并获省三，具备硬件设计、仿真软件和竞赛实践经验，也长期参与协会学习与交流。",
    initials: "殷",
    photo: "assets/photos/members/yin-kai.jpg",
    photoFit: "cover",
    photoPosition: "center 24%",
    photoMaxWidth: "330px",
    details: {
      "所在组别": "硬件组",
      "年级专业": "2022级入学铁道电气化",
      "竞赛经历": "大二暑假参加智能车折线电磁组比赛并获省级三等奖",
      "负责方向": "硬件设计、EDA/AD/CAD 建模仿真、智能车硬件相关经验分享",
      "QQ": "1933488634",
      "电话": "15170261059",
      "电子邮件": "u1933488634@163.com",
      "项目经历": "曾担任全国大学生节能减排竞赛团队技术顾问，参与基于 BST 分层介质材料的介质谐振式无线充电系统设计与建模；在第十九届全国大学生智能车竞赛中担任电磁组队长和小车硬件设计负责人，围绕主板、电源模块、驱动电路、运放电路、电感检测电路、PCB 绘制打板、焊接调试和 PID 参数联调积累了完整经验；同时参与南昌铁路勘测设计院接触网工程相关暑期实习，以及协会宣讲、课程组织和竞赛答疑工作。",
      "个人感悟": "智能车带给我的，不只是比赛成绩，更像是一段会反复被想起的成长时光。它让我认识了很多优秀的人，也让我慢慢明白，真正重要的不只是会不会做题、会不会焊板，而是在一次次实践和试错里，能不能把自己的热情沉淀成长期坚持下去的能力。\n\n现在我已经提前走到校园外实习，也因此更能感受到学校里那段并肩学习、一起熬夜做项目的日子有多珍贵。很多事情在外面不会像代码和硬件那样允许你反复重来，所以我反而越来越觉得，年轻时能在校园里认真做一件事、找到自己的目标，是一件很幸运的事。大家或许也会迷茫，但不要陷入内耗，先去做，再在过程中找到自己的方位。\n\n如果一定要总结这些年让我能稳住自己的几个词，那就是：健康、冷静、思考、恒心、自制。把这些东西慢慢练出来，比短期的输赢更重要。也希望学弟们珍惜现在身边愿意带你们、提醒你们的人，珍惜还能全力投入的校园时光，找到自己的节奏，把自己认为对的事情认真做好。"
    }
  },
  {
    name: "徐诣博",
    group: "硬件组",
    meta: "PCB设计 / 结构设计 / 现场实操",
    bio: "2024级电气工程及其自动化-铁道电气化，参与完全模型组、人工智能模型组和智慧城市 Robotaxi 创意组，主要负责 PCB 设计绘制、结构设计和现场装配调试。",
    initials: "徐",
    photo: "assets/photos/members/xu-yibo.png",
    photoFit: "contain",
    photoPosition: "center center",
    reflectionImages: [
      {
        src: "assets/photos/members/xu-yibo-memory-1.jpg",
        alt: "徐诣博在北京出行时的照片"
      },
      {
        src: "assets/photos/members/xu-yibo-memory-2.jpg",
        alt: "徐诣博在北京地标前的照片"
      }
    ],
    reflectionImageInsertAfter: 0,
    details: {
      "所在组别": "硬件组",
      "年级专业": "2024级电气工程及其自动化-铁道电气化",
      "参赛组别": "完全模型组、人工智能模型组、智慧城市 Robotaxi 创意组",
      "负责方向": "硬件方向主要负责 PCB 设计绘制；机械方向主要负责结构设计、修车、打孔、打胶和现场缝缝补补。",
      "项目与成果": "擅长板级设计与实物落地，参与过多类 PCB 设计绘制和现场结构改装调试工作，既能啃板子，也能在赛场和实验室里把车和结构问题一点点补到能跑。",
      "主要荣誉": "2025年第一届江西省智能车竞赛省一等奖；2025年第七届全球校园人工智能算法精英大赛全国一等奖；2026年蓝桥杯江西赛区 EDA 设计组进行中。",
      "电话": "18322556043",
      "QQ": "3388393973",
      "电子邮件": "3388393973@qq.com",
      "个人感悟": "我一直很喜欢那两张照片。每次翻相册看到我们几个人当时一起出去的画面，都会一下子想起那段很难得的日子。骑着自行车吹着冷风、迎着夕阳在路边往前走，整个人是很松、很亮堂的，像是什么都不用多想，只要把眼前的路继续往前骑就够了。现在回头看，我还是会觉得，那一刻的自己是真的开心，也真的像是在为自己而活一次。要说遗憾，也只是还有很多想带大家去吃的东西、想一起去看的地方，当时没来得及都走一遍。\n\n可真正回到比赛里，节奏就完全不一样了。前一天虽然试车结果还不错，但到了正式上场前，人还是紧张得坐不住，在看台上看别人比赛也根本看不进去。现场设备、网络、时间，每一样都在拉扯情绪，心里总会反复担心是不是下一秒就要出问题。可真轮到我们上场之后，三个人又会一下子进入状态，脑子里只剩下争分夺秒地把每一步做好。最后成绩出来的时候，那种“我们真的做到了”“我们没有辜负学长们期待”的开心，到现在想起来都还是很真。那不是单纯因为拿了一个结果，而是因为你知道这一路上的熬夜、试错、返工和压力，终于在那个瞬间有了回应。\n\n我后来越来越觉得，真正让我舍不得的，其实不只是比赛本身，而是这一路走过来的整段日子。刚进协会的时候，我其实挺迷茫的，也不是很清楚自己到底适合什么、想做什么，很多时候甚至有点摆。后来因为比赛、因为留校、因为一次次被拉着去做事，我才慢慢开始明白自己真正感兴趣的东西是什么。暑假留校那段时间其实不轻松，一开始也会迷茫，也会觉得自己帮不上什么忙，但正是在那些看起来有点苦、甚至有点狼狈的日子里，我才一点点走近这个团队，也一点点走近自己真正想走的方向。\n\n再后来进了 102，开始跟着大家一起折腾板子、结构、现场调试，也开始真正体会到什么叫做“痛并快乐着”。中间当然也挨过批评，也怀疑过自己是不是适合继续待下去，但现在回头看，那些被指出问题、被逼着往前走的时刻，反而成了我成长最快的时候。很感谢王哥，也很感谢一路上认真带过我的学长和一起并肩做事的队友。对我来说，他们带来的从来不只是比赛成绩，而是做事的态度、扛事的方法，还有在你想退的时候，怎么咬牙把这段路继续走下去。\n\n如果一定要说这段经历留下了什么，那大概就是它让我从一个并不确定自己方向的人，慢慢变成了愿意认真投入、愿意为一件事吃苦、也愿意和一群人一起把目标扛到底的人。以后回头看，我想我还是会一直记得那些照片、那些赛场上紧到发麻的瞬间、那些暑假留校和 102 的夜晚。因为它们连在一起，才真正组成了我在大学里很重要、也很难替代的一段时间。"
    }
  },
  {
    name: "万吉迟",
    group: "硬件组",
    meta: "硬件设计 / 微缩光电 / 竞赛备赛",
    bio: "23级铁道电气化，参加第二十届全国大学生智能汽车竞赛微缩光电组并获华东赛区二等奖，主要负责智能车硬件方向设计与调试。",
    initials: "万",
    photo: "assets/photos/members/wan-jichi.png",
    photoFit: "contain",
    photoPosition: "center center",
    details: {
      "所在组别": "硬件组",
      "专业班级": "23级铁道电气化",
      "参赛经历": "第二十届全国大学生智能汽车竞赛微缩光电组华东赛区二等奖",
      "负责方向": "硬件设计、硬件调试",
      "QQ": "3392211767",
      "电子邮件": "3392211767@qq.com",
      "项目经历": "从备赛初期对智能车硬件体系并不熟悉开始，逐步围绕微缩光电组需求推进方案学习、请教学长、交流迭代与实物落地，最终独立折腾出一两套可用硬件方案。虽然比赛阶段负压方案没有完全发挥预期作用，但这段持续试错和硬件攻关的经历，帮助他建立了更完整的硬件设计与实现经验。",
      "个人感悟": "我认为这个智能车竞赛是我整个大二这一年，或者说可能会是我大学生涯印象最深刻的一件事。从开始准备到去南京比赛这将近半年，经历的太多太多。刚开始的时候什么都不清楚，妄想着自己去异想天开的做各种硬件，到不断向学长请教，和其他人交流学习，最终也是一路摸爬滚打地搞出一两套硬件，尽管在比赛的时候负压并没有派上多大的用途。\n\n其实不仅仅是学习上的进步，这次比赛我也在心态与处事上受益良多。在硬件连续失败后我开始有点自暴自弃，我开始怀疑自己是否真的能完成，但是每当有这种想法的时候，看到队友仍在不断地努力，日日夜夜地攻克难关，我便暗自提醒自己：一定得搞定这些东西，不能让队友的心血就这样白白浪费。\n\n我非常感激我有如此优秀的队友，有如此负责的学长，一路披荆斩棘。去参赛的路上，和其他学校的成员交流时，“遗憾是智能车的主旋律”这句话时常在耳边回荡着。或许在名次上确实如此，如果能时光倒流重来一次，确实能做得更好；但对这次经历，我并不觉得遗憾。能与我的队友和伙伴一起参加比赛，我认为是大学里最正确的事情之一。至此，再次感谢一路上帮助过、激励过、一起并肩作战的所有人。"
    }
  },
  {
    name: "傅瑞涛",
    group: "机械组",
    meta: "机械组组长 / 结构实现 / 建模与打样",
    bio: "2024级电子信息工程，参与第二十一届全国大学生智能车竞赛人工智能模型组和智慧城市 Robotaxi 挑战赛，主要负责智能车车体机械部分，并参与 PCB、焊接、OpenCV 和 SolidWorks 建模相关实践。",
    initials: "傅",
    photo: "assets/photos/members/fu-ruitao.jpg",
    photoFit: "cover",
    photoPosition: "center 18%",
    photoMaxWidth: "330px",
    details: {
      "所在组别": "机械组",
      "年级专业": "2024级电子信息工程",
      "竞赛经历": "正在参与第21届全国大学生智能车竞赛（人工智能模型组别）；第21届全国大学生智能车竞赛（智慧城市 Robotaxi 挑战赛组别）",
      "负责方向": "智能车车体机械部分",
      "专业技能": "参与结构实现工作，掌握 PCB 原理图设计、电路板焊接与基础调试流程；学习 OpenCV 图像处理与目标检测相关技术；使用 SolidWorks 完成智能小车 3D 构件设计与建模。",
      "QQ": "1843152770",
      "电话": "18679598950",
      "电子邮件": "1843152770@qq.com",
      "项目经历": "从转专业后几乎不了解电协和智能车，到在郭博文带动下参加校赛、进入车队选拔，再到通过考核后参与正式组队与备赛。备赛期间持续接触 TC264、逐飞库、下位机、香橙派上位机、AI 模型训练部署流程、SolidWorks 3D 建模、四层 PCB 绘制、Python、STM32CubeIDE 与 HAL 库等内容，并在车队购入 3D 打印机后参与机械相关绘制、打印和新机开荒工作。",
      "个人感悟": "回头看这一路，其实从最开始连电协是什么都不知道，到现在能坐在实验室里和大家一起备赛，我感觉自己真的变了很多。以前总觉得只要有兴趣和热情，事情就会自然而然做好；可真正接触智能车之后才明白，热情只是开始，后面更多的是反复学习、反复试错，还有在一次次问题面前硬着头皮继续坚持下去。\n\n这一年里，我很多时候都觉得自己很菜，也经常怀疑自己是不是不适合做这些东西。但博文、王哥和队友们一次次给我的帮助和包容，让我没有在最迷茫的时候停下来。如果当时在电协面试失败后就放弃，如果在校赛前觉得自己帮不上忙就退缩，如果在选拔群压力最大的那段时间没顶住，那我可能根本不会接触到后面这些有意思的人和事。\n\n现在的我当然还有很多不足，很多东西也只是刚入门，但至少已经不再像一开始那样完全不知道该往哪里走了。智能车对我来说，也早就不只是一个比赛。它让我认识了一群很厉害、也很有趣的人，也让我第一次这么强烈地感受到，一群人为了同一个目标一起熬夜、调车、改代码、搬设备、解决问题，虽然很累，但真的很快乐。希望后面我能真正多承担一些任务，不再只是觉得自己在抱大腿，而是能慢慢成为一个真正对队伍有贡献的人。"
    }
  },
  {
    name: "谢超",
    group: "机械组",
    meta: "后勤保障 / 辅助图像处理 / 软件思路配合",
    bio: "2023级电子信息工程，参与第十九届、第二十届完全模型组备赛，主要负责后勤保障、辅助图像处理、软件思路配合和轮胎维护等工作。",
    initials: "谢",
    photo: "assets/photos/members/xie-chao.png",
    photoFit: "contain",
    photoPosition: "center center",
    details: {
      "所在组别": "机械组",
      "年级专业": "2023级电子信息工程",
      "竞赛经历": "第十九届、第二十届全国大学生智能车竞赛完全模型组",
      "负责方向": "后勤保障、辅助图像处理、软件思路配合、轮胎维护",
      "电子邮件": "2258667986@qq.com",
      "项目经历": "从对单片机和电路板抱有强烈兴趣开始加入协会，在几位学长带领下逐步完成 C 语言入门、问题排查和开源项目复刻，并通过校智能车比赛与层层选拔进入车队。进入完全模型组后，进一步理解了智能车从基础结构到闭环控制、硬件驱动、姿态感知以及 MCU 与 Linux 系统板协同通信的完整工程体系，也在备赛中持续承担后勤、轮胎处理、辅助图像与软件思路配合等支持工作。",
      "个人感悟": "回头看大学四年，真正称得上最精彩、最难忘的，还是从进入协会到参加智能车竞赛的这一段日子。相比之下，其他很多经历都会显得平平无奇。直到现在再想起那段时间，我心里还是会很有波澜。\n\n我当初报考电子信息工程，就是想真正和单片机、电路板这些东西打交道。大一的时候，我就对那种能够自己跑起来的小车很感兴趣，也一直希望能亲手做出一辆属于自己的车，所以最后只加入了电子科技协会这一个社团。很感谢当时一路带过我的学长们，在我几乎零基础的时候，愿意给我肯定、讲入门知识、耐心答疑，也带着我复刻出第一个开源小项目。这些事情看起来也许不大，但对当时的我来说，是真的一点点把信心和兴趣建立起来了。\n\n后来通过校智能车比赛取得靠前名次，再经过选拔正式进入车队，我才真正看到“智能车”这件事背后完整的工程分量。以前我理解的小车，只是电机、MCU 和传感器拼起来能跑；可真正进了完全模型组之后，我才慢慢明白，想让它称得上“智能”，远不只是把车搭起来那么简单。控制、驱动、姿态感知、串口通信、图像识别，这些东西一层一层叠上来，才让人真正意识到这项比赛能学到的东西到底有多扎实。\n\n在车队备赛的那些日子里，我第一次真正体会到什么叫“苦日子”，也是第一次真切地感受到，努力不是嘴上说说，而是比赛最后几天里昼夜不分地调车、改 bug、顶着困意继续扛着不睡，把生活节律和精力都压到一件事情上，只为了给前面所有的付出争一个结果。那种日子很苦，但也正因为苦，后来回头看才会觉得特别值。\n\n如果一定要说这段经历教会了我什么，那就是大学这个阶段，既然还有血气、还有时间、还有愿意狠狠干一场的资本，就不要轻易放过任何一次机会。哪怕过程很苦很累，最后你也会发现，不管结果怎样，这段经历都会变成特别珍贵的回忆，也会成为以后很难再被替代的一份积累。"
    }
  },
  ...createPlaceholderMembers("机械组", "结构设计 / 加工装配", "机", [
    "负责车辆底盘、传感器支架和安装结构设计。",
    "负责三维建模、加工出图和装配验证。",
    "负责重心布局、轻量化设计和结构优化。",
    "负责机械装配、可靠性检查和现场维护。"
  ]).slice(0, 3)
];

const groupMemberIndexes = teamMembers.reduce((acc, member, index) => {
  acc[member.group] = acc[member.group] || [];
  acc[member.group].push(index);
  return acc;
}, {});

const teamGroups = [
  {
    name: "指导老师",
    meta: "科研指导 / 竞赛指导",
    intro: "负责车队建设、技术路线把关、竞赛指导与实验室资源协调。",
    initials: "师",
    artwork: "assets/images/group-teacher-comic.svg",
    memberIndexes: [0]
  },
  {
    name: "综合管理",
    meta: "队长 / 项目统筹 / 宣传统筹",
    intro: "负责年度任务拆解、组间协同、训练安排、比赛材料和技术复盘。",
    initials: "管",
    artwork: "assets/images/group-management-comic.svg",
    memberIndexes: groupMemberIndexes["综合管理"]
  },
  {
    name: "视觉组",
    meta: "图像处理 / 目标识别",
    intro: "负责摄像头标定、赛道识别、目标检测、视觉调参与数据集整理。",
    initials: "视",
    artwork: "assets/images/group-vision-comic.svg",
    memberIndexes: groupMemberIndexes["视觉组"]
  },
  {
    name: "电控组",
    meta: "嵌入式 / 电机控制 / 传感器",
    intro: "负责主控代码、驱动模块、传感器采集、电机舵机控制和硬件联调。",
    initials: "电",
    artwork: "assets/images/group-control-comic.svg",
    memberIndexes: groupMemberIndexes["电控组"]
  },
  {
    name: "硬件组",
    meta: "电路设计 / PCB / 硬件调试",
    intro: "负责硬件方案、电源管理、传感器接口、电路板设计焊接、测试和排障。",
    initials: "硬",
    artwork: "assets/images/group-hardware-comic.svg",
    memberIndexes: groupMemberIndexes["硬件组"]
  },
  {
    name: "机械组",
    meta: "结构设计 / 加工装配",
    intro: "负责车辆底盘、安装结构、传感器支架、轻量化设计和可靠性优化。",
    initials: "机",
    artwork: "assets/images/group-mechanical-comic.svg",
    memberIndexes: groupMemberIndexes["机械组"]
  }
];

const techItems = [
  {
    icon: "C",
    title: "运动控制与轨迹跟踪",
    text: "围绕车辆动力学、横向控制、速度规划和参数整定构建稳定可复现的控制方案。",
    tasks: ["车辆运动模型建立", "轨迹跟踪控制器设计", "速度规划与参数整定", "误差分析与赛道策略优化"],
    tools: ["C/C++", "Python", "MATLAB/Simulink", "数据日志分析"],
    groups: ["电控组", "视觉组"],
    outcome: "可沉淀控制算法代码、仿真曲线、赛道调参记录和比赛复盘报告。"
  },
  {
    icon: "V",
    title: "机器视觉与感知",
    text: "开展赛道识别、边线提取、目标检测、图像预处理和现场光照适应性调试。",
    tasks: ["摄像头标定与图像采集", "赛道识别与边线提取", "目标检测与视觉调参", "现场光照鲁棒性测试"],
    tools: ["OpenCV", "Python", "C/C++", "数据集管理"],
    groups: ["视觉组"],
    outcome: "可沉淀视觉处理流程、识别效果图、误检分析和现场调试文档。"
  },
  {
    icon: "E",
    title: "嵌入式系统与电控",
    text: "完成主控程序、驱动板调试、传感器融合、电机舵机控制和实时数据采集。",
    tasks: ["主控程序与任务调度", "传感器采集与通信", "电机舵机控制", "实时数据记录与联调"],
    tools: ["单片机", "C/C++", "串口调试", "示波器/逻辑分析仪"],
    groups: ["电控组", "硬件组"],
    outcome: "可沉淀底层驱动代码、通信协议、联调日志和故障排查记录。"
  },
  {
    icon: "M",
    title: "机械结构与整车集成",
    text: "进行车体结构设计、加工装配、重心布局、传感器安装和赛前可靠性检查。",
    tasks: ["车体结构与支架设计", "加工装配与尺寸校核", "重心布局与轻量化", "赛前可靠性检查"],
    tools: ["SolidWorks", "三维打印/加工", "装配工具", "结构测试"],
    groups: ["机械组", "硬件组"],
    outcome: "可沉淀结构模型、装配图、加工记录和可靠性测试清单。"
  },
  {
    icon: "S",
    title: "仿真测试与数据分析",
    text: "通过上位机、日志系统、仿真环境和实验数据复盘支撑算法迭代。",
    tasks: ["上位机工具与日志系统", "仿真环境搭建", "实验数据可视化", "问题复盘与参数对比"],
    tools: ["Python", "MATLAB", "CSV/日志分析", "可视化工具"],
    groups: ["电控组", "软件方向"],
    outcome: "可沉淀数据分析脚本、曲线图、参数对比表和赛后复盘材料。"
  },
  {
    icon: "P",
    title: "宣传运营与团队传承",
    text: "维护官网、招新材料、比赛记录、技术文档和历届成果档案。",
    tasks: ["官网与招新材料维护", "比赛记录与活动报道", "技术文档归档", "历届成员与成果整理"],
    tools: ["HTML/CSS/JS", "Markdown", "摄影与排版", "文档管理"],
    groups: ["综合管理", "宣传运营"],
    outcome: "可沉淀官网内容、活动新闻、技术资料库和车队历史档案。"
  }
];

const honors = [
  {
    year: "2026",
    title: "全国大学生智能汽车竞赛",
    meta: "智能车竞赛 / 华东赛区 / 待补充组别",
    text: "请替换为真实奖项等级、指导老师、参赛成员和证书照片。",
    badge: "待补充"
  },
  {
    year: "2025",
    title: "校级大学生科技创新项目",
    meta: "项目立项 / 实验室建设 / 技术训练",
    text: "用于展示车队项目训练、校内创新创业项目或学院重点支持成果。",
    badge: "项目成果"
  },
  {
    year: "2024",
    title: "智能车队年度招新与训练营",
    meta: "招新培训 / 技术分享 / 传承建设",
    text: "可记录 C/C++、嵌入式、视觉算法、机械建模和整车调试培训。",
    badge: "团队建设"
  }
];

const competitionTeams = [
  {
    year: "2026",
    season: "第二十一届全国大学生智能汽车竞赛备赛",
    summary: "以下为示例结构，请替换为车队真实赛题、队长、成员和职责。",
    groups: [
      {
        topic: "完全模型组",
        captain: "待补充",
        status: "备赛中",
        members: [
          { name: "待补充", role: "队长，负责总体方案、进度安排和赛前联调。" },
          { name: "待补充", role: "负责路径规划、轨迹跟踪和参数调试。" },
          { name: "待补充", role: "负责主控程序、传感器采集和底层驱动。" }
        ]
      },
      {
        topic: "视觉组",
        captain: "待补充",
        status: "备赛中",
        members: [
          { name: "待补充", role: "队长，负责视觉方案和现场调试。" },
          { name: "待补充", role: "负责图像预处理、赛道识别和数据集整理。" },
          { name: "待补充", role: "负责相机标定、上位机工具和日志分析。" }
        ]
      }
    ]
  },
  {
    year: "2025",
    season: "年度训练与参赛复盘",
    summary: "用于沉淀上一年度实际参赛队伍和成员贡献。",
    groups: [
      {
        topic: "智能车基础训练组",
        captain: "待补充",
        status: "已复盘",
        members: [
          { name: "待补充", role: "负责训练计划、基础考核和任务分配。" },
          { name: "待补充", role: "负责嵌入式入门培训和电控调试。" },
          { name: "待补充", role: "负责机械装配、赛道搭建和测试记录。" }
        ]
      }
    ]
  }
];

const newsItems = [
  {
    tag: "竞赛",
    title: "赛前整车联调",
    text: "记录车辆调试、参数整定、赛道测试和组间协作过程，适合配现场照片。"
  },
  {
    tag: "招新",
    title: "新生训练营",
    text: "展示入门培训、任务分组、阶段考核和优秀成员成长路径。"
  },
  {
    tag: "技术",
    title: "技术分享会",
    text: "沉淀算法、电控、视觉、机械和软件工具链经验，形成长期可维护文档。"
  }
];

const faqItems = [
  {
    question: "没有智能车基础可以加入吗？",
    answer: "可以。车队更看重持续投入和动手意愿，入队后会按组别进行 C/C++、嵌入式、视觉、机械、硬件和调试流程训练。"
  },
  {
    question: "应该如何选择算法、电控、视觉、硬件或机械组？",
    answer: "可以先按兴趣选择方向。算法偏控制与规划，电控偏嵌入式和传感器，视觉偏图像处理，硬件偏电路与 PCB，机械偏结构设计和装配。"
  },
  {
    question: "加入后主要做什么？",
    answer: "前期完成基础训练和小任务，中期参与组内专项，后期进入整车联调、赛题攻关、比赛备赛和赛后复盘。"
  }
];

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const pageViews = document.querySelectorAll(".page-view");
const internalLinks = document.querySelectorAll('a[href^="#"]');
const scrollTopButton = document.querySelector("[data-scroll-top]");
const filters = document.querySelector("[data-team-filters]");
const memberGrid = document.querySelector("[data-member-grid]");
const techGrid = document.querySelector("[data-tech-grid]");
const backTechButton = document.querySelector("[data-back-tech]");
const techDetailIcon = document.querySelector("[data-tech-detail-icon]");
const techDetailTitle = document.querySelector("[data-tech-detail-title]");
const techDetailSummary = document.querySelector("[data-tech-detail-summary]");
const techDetailBody = document.querySelector("[data-tech-detail-body]");
const competitionList = document.querySelector("[data-competition-list]");
const honorList = document.querySelector("[data-honor-list]");
const faqList = document.querySelector("[data-faq-list]");
const questionList = document.querySelector("[data-question-list]");
const questionForm = document.querySelector("[data-question-form]");
const formNote = document.querySelector("[data-form-note]");
const newsGrid = document.querySelector("[data-news-grid]");
const memberModal = document.querySelector("[data-member-modal]");
const modalPhoto = document.querySelector("[data-modal-photo]");
const modalGroup = document.querySelector("[data-modal-group]");
const modalName = document.querySelector("[data-modal-name]");
const modalMeta = document.querySelector("[data-modal-meta]");
const modalBio = document.querySelector("[data-modal-bio]");
const modalDetails = document.querySelector("[data-modal-details]");
const backTeamButton = document.querySelector("[data-back-team]");
const profilePhoto = document.querySelector("[data-profile-photo]");
const profileGroup = document.querySelector("[data-profile-group]");
const profileName = document.querySelector("[data-profile-name]");
const profileMainTitle = document.querySelector("[data-profile-main-title]");
const profileMeta = document.querySelector("[data-profile-meta]");
const profileSideDetails = document.querySelector("[data-profile-side-details]");
const profileSections = document.querySelector("[data-profile-sections]");
let activeGroup = teamGroups[0].name;

function formatProfileText(text, className = "") {
  const value = String(text || "").trim();
  const paragraphs = (value || "后续可补充真实内容。")
    .split(/\n+/)
    .map((item) => item.trim())
    .filter(Boolean);
  return paragraphs
    .map((paragraph) => `<p${className ? ` class="${className}"` : ""}>${paragraph}</p>`)
    .join("");
}

function normalizeMajorValue(value) {
  const raw = String(value || "").trim();
  if (!raw) {
    return raw;
  }

  const exactMap = new Map([
    ["电牵2024-1", "2024级电气工程及其自动化（电力牵引及传动控制）专业"],
    ["电牵2023-1", "2023级电气工程及其自动化（电力牵引及传动控制）专业"],
    ["城轨2023-1", "2023级城市轨道交通供电专业"],
    ["24自动化过程控制", "2024级自动化过程控制专业"],
    ["2024级信号专业", "2024级轨道交通信号与控制专业"],
    ["2025 电牵一班", "2025级电气工程及其自动化（电力牵引及传动控制）专业"],
    ["23级铁道电气化", "2023级电气工程及其自动化（铁道电气化）专业"],
    ["23级铁道电气化成员", "2023级电气工程及其自动化（铁道电气化）专业"],
    ["2023级铁道电气化", "2023级电气工程及其自动化（铁道电气化）专业"],
    ["2022级入学铁道电气化", "2022级电气工程及其自动化（铁道电气化）专业"],
    ["2022级入学铁道电气化方向", "2022级电气工程及其自动化（铁道电气化）专业"],
    ["2024级电力牵引及其传动控制", "2024级电气工程及其自动化（电力牵引及传动控制）专业"]
  ]);

  if (exactMap.has(raw)) {
    return exactMap.get(raw);
  }

  let normalized = raw
    .replace(/^(\d{2})级/, "20$1级")
    .replace(/^(\d{2})(?=[\u4e00-\u9fa5A-Za-z（(])/, "20$1级")
    .replace(/^(\d{4})级\s+/, "$1级")
    .replace(/([A-Za-z\u4e00-\u9fa5（）()]+?)(?:[1-9一二三四五六七八九十]+班)$/, "$1")
    .replace(/入学/g, "")
    .replace(/方向$/, "")
    .replace(/-铁道电气化$/, "（铁道电气化）")
    .replace(/-电力牵引及传动控制$/, "（电力牵引及传动控制）");

  if (/^\d{4}级电子信息$/.test(normalized)) {
    normalized = normalized.replace("电子信息", "电子信息专业");
  } else if (/^\d{4}级.+$/.test(normalized) && !normalized.endsWith("专业")) {
    normalized = `${normalized}专业`;
  }

  return normalized.replace(/\s+/g, "");
}

function normalizeBioMajorPrefix(text) {
  const raw = String(text || "").trim();
  if (!raw) {
    return raw;
  }

  return raw.replace(/^[^，,]{2,40}(?=[，,])/, (prefix) => {
    const normalized = normalizeMajorValue(prefix);
    return normalized || prefix;
  });
}

function normalizeDetailEntry([label, value]) {
  if (label === "专业班级" || label === "年级专业") {
    return ["年级专业", normalizeMajorValue(value)];
  }

  return [label, value];
}

function splitProfileParagraphs(text) {
  const value = String(text || "").trim();
  return (value || "后续可补充真实内容。")
    .split(/\n+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function renderProfileGallery(images = []) {
  if (!images.length) {
    return "";
  }

  return `
    <div class="profile-inline-gallery">
      ${images
        .map(
          (image) => `
            <figure class="profile-inline-gallery-item">
              <img src="${image.src}" alt="${image.alt || ""}" loading="lazy">
            </figure>
          `
        )
        .join("")}
    </div>
  `;
}

function renderProfileTextWithGallery(text, className = "", images = [], insertAfterParagraph = null) {
  const paragraphs = splitProfileParagraphs(text);
  const gallery = renderProfileGallery(images);

  if (!gallery || insertAfterParagraph == null || insertAfterParagraph < 0) {
    return paragraphs
      .map((paragraph) => `<p${className ? ` class="${className}"` : ""}>${paragraph}</p>`)
      .join("") + gallery;
  }

  return paragraphs
    .map((paragraph, index) => {
      const content = `<p${className ? ` class="${className}"` : ""}>${paragraph}</p>`;
      return index === insertAfterParagraph ? `${content}${gallery}` : content;
    })
    .join("");
}

function memberImageFallback(img, initials) {
  img.replaceWith(Object.assign(document.createElement("span"), { textContent: initials }));
}

function handleMemberImageLoad(img) {
  if (!img?.naturalWidth || !img?.naturalHeight) {
    return;
  }

  img.classList.remove("is-portrait", "is-landscape");
  const frame = img.closest(".member-photo, .member-dialog-photo, .member-profile-photo");
  frame?.classList.remove("is-portrait-photo", "is-landscape-photo");
  if (img.naturalHeight / img.naturalWidth > 1.03) {
    img.classList.add("is-portrait");
    frame?.classList.add("is-portrait-photo");
  } else {
    img.classList.add("is-landscape");
    frame?.classList.add("is-landscape-photo");
  }
}

function getMemberImageStyle(member, useCover = false) {
  const fit = useCover ? member.coverFit : member.photoFit;
  const position = useCover ? member.coverPosition : member.photoPosition;
  const maxWidth = useCover ? member.coverMaxWidth : member.photoMaxWidth;
  return [
    fit ? `--member-image-fit: ${fit}` : "",
    position ? `--member-image-position: ${position}` : "",
    maxWidth ? `--member-image-max-width: ${maxWidth}` : ""
  ].filter(Boolean).join("; ");
}

function renderMemberImage(member, options = {}) {
  const { useCover = false } = options;
  const photo = useCover ? member.coverPhoto : member.photo;
  const style = getMemberImageStyle(member, useCover);
  return photo
    ? `<img src="${photo}" alt="${member.name}"${style ? ` style="${style};"` : ""} onload="handleMemberImageLoad(this)" onerror="memberImageFallback(this, '${member.initials}')">`
    : `<span>${member.initials}</span>`;
}

function memberPhotoMarkup(member) {
  const photo = member.photo || member.coverPhoto;
  return photo
    ? renderMemberImage(member, { useCover: !member.photo && Boolean(member.coverPhoto) })
    : `<span>${member.initials}</span>`;
}

function renderGroupCards() {
  memberGrid.innerHTML = teamGroups
    .map((group, index) => `
      <article class="member-card group-card" data-group-index="${index}" tabindex="0" role="button" aria-label="查看${group.name}成员">
        <div class="member-photo member-photo-group">
          <img src="${group.artwork}" alt="${group.name}漫画科技风插画">
        </div>
        <div class="member-card-body">
          <span class="member-meta">${group.meta}</span>
          <h3>${group.name}</h3>
          <p>${group.intro}</p>
        </div>
      </article>
    `)
    .join("");
}

function renderMembers(group = activeGroup) {
  activeGroup = group;
  const selectedGroup = teamGroups.find((item) => item.name === group) || teamGroups[0];
  const members = selectedGroup.memberIndexes.map((index) => ({ ...teamMembers[index], index }));
  memberGrid.innerHTML = members
    .map((member) => `
      <article class="member-card" data-member-index="${member.index}" tabindex="0" role="button" aria-label="查看${member.displayName || member.name}主页">
        <div class="member-photo">${memberPhotoMarkup(member)}</div>
        <div class="member-card-body">
          <span class="member-meta">${member.group} · ${member.meta}</span>
          <h3>${member.displayName || member.name}</h3>
          <p>${normalizeBioMajorPrefix(member.bio)}</p>
        </div>
      </article>
    `)
    .join("");
}

function renderFilters() {
  const groups = ["全部", ...teamGroups.map((group) => group.name)];
  filters.innerHTML = groups
    .map((group, index) => `<button class="filter-button ${index === 0 ? "is-active" : ""}" type="button" data-group="${group}">${group}</button>`)
    .join("");
}

function renderCards() {
  techGrid.innerHTML = techItems
    .map((item, index) => `
      <article class="tech-card" data-tech-index="${index}" tabindex="0" role="button" aria-label="查看${item.title}详情">
        <span class="tech-icon">${item.icon}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `)
    .join("");

  competitionList.innerHTML = competitionTeams
    .map((yearItem) => `
      <article class="competition-year">
        <div class="competition-year-head">
          <span>${yearItem.year}</span>
          <div>
            <h3>${yearItem.season}</h3>
            <p>${yearItem.summary}</p>
          </div>
        </div>
        <div class="competition-groups">
          ${yearItem.groups
            .map((group) => `
              <section class="competition-group">
                <div class="competition-group-head">
                  <div>
                    <span class="card-tag">${group.status}</span>
                    <h4>${group.topic}</h4>
                  </div>
                  <strong>队长：${group.captain}</strong>
                </div>
                <ul>
                  ${group.members.map((member) => `<li><strong>${member.name}</strong><span>${member.role}</span></li>`).join("")}
                </ul>
              </section>
            `)
            .join("")}
        </div>
      </article>
    `)
    .join("");

  honorList.innerHTML = honors
    .map((item) => `
      <article class="honor-item">
        <div class="honor-year">${item.year}</div>
        <div>
          <span class="honor-meta">${item.meta}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
        <span class="honor-badge">${item.badge}</span>
      </article>
    `)
    .join("");

  faqList.innerHTML = faqItems
    .map((item) => `
      <article class="qa-item is-answered">
        <h4>${item.question}</h4>
        <p>${item.answer}</p>
      </article>
    `)
    .join("");

  newsGrid.innerHTML = newsItems
    .map((item) => `
      <article class="news-card">
        <span class="card-tag">${item.tag}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `)
    .join("");
}

function getStoredQuestions() {
  try {
    return JSON.parse(localStorage.getItem("genesisQuestions") || "[]");
  } catch {
    return [];
  }
}

function saveStoredQuestions(questions) {
  localStorage.setItem("genesisQuestions", JSON.stringify(questions));
}

function renderQuestions() {
  const questions = getStoredQuestions();
  if (!questions.length) {
    questionList.innerHTML = `
      <article class="qa-empty">
        <h4>暂时还没有新的提问</h4>
        <p>提交后会先显示为“待回复”。接入后台后，管理员回复的问题可公开展示在这里。</p>
      </article>
    `;
    return;
  }

  questionList.innerHTML = questions
    .map((item) => `
      <article class="qa-item">
        <span>${item.status}</span>
        <h4>${item.question}</h4>
        <p>提问人：${item.name}${item.contact ? ` · 联系方式：${item.contact}` : ""}</p>
        ${item.answer ? `<p class="qa-answer">回复：${item.answer}</p>` : ""}
      </article>
    `)
    .join("");
}

function submitQuestion(data) {
  const questions = getStoredQuestions();
  questions.unshift({
    id: Date.now(),
    name: data.get("name").trim(),
    contact: data.get("contact").trim(),
    question: data.get("question").trim(),
    status: "待回复",
    answer: "",
    createdAt: new Date().toISOString()
  });
  saveStoredQuestions(questions);
}

function openMemberModal(member) {
  modalPhoto.innerHTML = renderMemberImage(member);
  modalGroup.textContent = member.group;
  modalName.textContent = member.displayName || member.name;
  modalMeta.textContent = member.meta;
  modalBio.textContent = normalizeBioMajorPrefix(member.bio);
  modalDetails.innerHTML = Object.entries(member.details || {})
    .map(normalizeDetailEntry)
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");

  memberModal.classList.add("is-open");
  memberModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeMemberModal() {
  memberModal.classList.remove("is-open");
  memberModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderMemberProfile(member) {
  profilePhoto.innerHTML = renderMemberImage(member);
  profileGroup.textContent = member.group;
  profileName.textContent = member.displayName || member.name;
  profileMainTitle.textContent = `${member.displayName || member.name}个人主页`;
  profileMeta.textContent = member.meta;

  const details = member.details || {};
  const sideKeys = ["所在组别", "研究方向", "电话", "电子邮件", "联系地址"];
  const sideItems = [["组别", member.group], ["方向", member.meta], ...sideKeys.filter((key) => details[key]).map((key) => [key, details[key]])];
  profileSideDetails.innerHTML = sideItems
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");

  const responsibility = details["负责方向"] || details["研究方向"] || member.meta;
  const achievements = details["指导成果"] || details["主要工作"] || details["项目经历"] || details["项目与成果"] || details["参赛经历"] || details["竞赛经历"] || details["主要荣誉"] || details["备注"] || "后续可补充项目经历、竞赛成果、负责模块、技术文档和个人成长记录。";
  const reflection = details["参赛感悟"] || details["个人感悟"] || details["涓汉鎰熸偀"] || "后续可补充成员在备赛、调车、比赛和团队协作中的真实感受。";
  const reflectionImages = member.reflectionImages || [];
  const reflectionImageInsertAfter = member.reflectionImageInsertAfter;
  const otherDetails = Object.entries(details)
    .map(normalizeDetailEntry)
    .filter(([key]) => !["参赛感悟", "个人感悟", "涓汉鎰熸偀"].includes(key))
    .filter(([key]) => !["所在组别", "研究方向", "电话", "电子邮件", "联系地址", "负责方向", "指导成果", "主要工作", "项目经历", "项目与成果", "参赛经历", "竞赛经历", "主要荣誉", "备注"].includes(key));

  profileSections.innerHTML = [
    {
      title: "个人简介",
      content: formatProfileText(normalizeBioMajorPrefix(member.bio))
    },
    {
      title: member.group === "指导老师" ? "研究方向" : "方向与职责",
      content: formatProfileText(responsibility)
    },
    {
      title: member.group === "指导老师" ? "指导成果" : "项目与成果",
      content: formatProfileText(achievements)
    },
    {
      title: "参赛感悟",
      content: renderProfileTextWithGallery(reflection, "reflection-paragraph", reflectionImages, reflectionImageInsertAfter)
    },
    {
      title: "详细信息",
      content: otherDetails.length
        ? `<dl class="member-detail-list">${otherDetails.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl>`
        : `<p>后续可补充年级、专业、联系方式、参与赛事、负责项目和作品链接。</p>`
    }
  ]
    .map((section) => `
      <section class="profile-section">
        <h3>${section.title}</h3>
        ${section.content}
      </section>
    `)
    .join("");
}

function openMemberProfile(memberIndex) {
  renderMemberProfile(teamMembers[memberIndex]);
  showPage("member-detail");
}

function renderTechDetail(item) {
  techDetailIcon.textContent = item.icon;
  techDetailTitle.textContent = item.title;
  techDetailSummary.textContent = item.text;
  techDetailBody.innerHTML = [
    ["方向简介", [item.text]],
    ["核心任务", item.tasks],
    ["常用工具", item.tools],
    ["关联组别", item.groups],
    ["成果沉淀", [item.outcome]]
  ]
    .map(([title, entries]) => `
      <section class="profile-section">
        <h3>${title}</h3>
        <ul class="tech-detail-list">
          ${entries.map((entry) => `<li>${entry}</li>`).join("")}
        </ul>
      </section>
    `)
    .join("");
}

function openTechDetail(index) {
  renderTechDetail(techItems[index]);
  showPage("tech-detail");
}

function showPage(pageId, shouldUpdateHash = true) {
  const targetId = pageId && document.getElementById(pageId) ? pageId : "home";

  pageViews.forEach((view) => {
    view.classList.toggle("is-active", view.id === targetId);
  });

  internalLinks.forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle("is-active", href === `#${targetId}`);
  });

  if (shouldUpdateHash && window.location.hash !== `#${targetId}`) {
    history.pushState(null, "", `#${targetId}`);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  nav.classList.remove("is-open");
  updateHeader();
}

function updateHeader() {
  const homeActive = document.getElementById("home").classList.contains("is-active");
  header.classList.toggle("is-scrolled", !homeActive || window.scrollY > 24);
}

navToggle.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

nav.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  event.preventDefault();
  showPage(link.getAttribute("href").slice(1));
});

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || nav.contains(link)) return;
  const pageId = link.getAttribute("href").slice(1);
  if (!document.getElementById(pageId)?.classList.contains("page-view")) return;
  event.preventDefault();
  showPage(pageId);
});

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-group]");
  if (!button) return;
  filters.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
  button.classList.add("is-active");
  if (button.dataset.group === "全部") {
    renderGroupCards();
    return;
  }
  renderMembers(button.dataset.group);
});

memberGrid.addEventListener("click", (event) => {
  const groupCard = event.target.closest("[data-group-index]");
  if (groupCard) {
    const group = teamGroups[Number(groupCard.dataset.groupIndex)];
    filters.querySelectorAll(".filter-button").forEach((item) => {
      item.classList.toggle("is-active", item.dataset.group === group.name);
    });
    renderMembers(group.name);
    return;
  }
  const card = event.target.closest("[data-member-index]");
  if (!card) return;
  openMemberProfile(Number(card.dataset.memberIndex));
});

memberGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const groupCard = event.target.closest("[data-group-index]");
  if (groupCard) {
    event.preventDefault();
    const group = teamGroups[Number(groupCard.dataset.groupIndex)];
    filters.querySelectorAll(".filter-button").forEach((item) => {
      item.classList.toggle("is-active", item.dataset.group === group.name);
    });
    renderMembers(group.name);
    return;
  }
  const card = event.target.closest("[data-member-index]");
  if (!card) return;
  event.preventDefault();
  openMemberProfile(Number(card.dataset.memberIndex));
});

backTeamButton.addEventListener("click", () => {
  showPage("team");
});

techGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-tech-index]");
  if (!card) return;
  openTechDetail(Number(card.dataset.techIndex));
});

techGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-tech-index]");
  if (!card) return;
  event.preventDefault();
  openTechDetail(Number(card.dataset.techIndex));
});

backTechButton.addEventListener("click", () => {
  showPage("tech");
});

memberModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-modal-close]")) {
    closeMemberModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && memberModal.classList.contains("is-open")) {
    closeMemberModal();
  }
});

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(questionForm);
  submitQuestion(data);
  questionForm.reset();
  renderQuestions();
  formNote.textContent = "问题已提交并暂存在当前浏览器。后续接入后台后可同步到数据库。";
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("popstate", () => {
  showPage(window.location.hash.slice(1) || "home", false);
});

renderFilters();
renderGroupCards();
renderCards();
renderQuestions();
showPage(window.location.hash.slice(1) || "home", false);
