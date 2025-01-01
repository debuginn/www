const bodyBgs = [];
// 2022 年
bodyBgs[0] = "https://webp.debuginn.com/202303120016035.jpeg"; // 日出龙泽
bodyBgs[1] = "https://webp.debuginn.com/202303120014022.jpeg"; // 京西隧道
bodyBgs[2] = "https://webp.debuginn.com/202303120017184.jpeg"; // 雁栖步道
bodyBgs[3] = "https://webp.debuginn.com/202303120020529.jpeg"; // 鼓楼大街
bodyBgs[4] = "https://webp.debuginn.com/202303120018416.jpeg"; // 徒步凤凰岭
bodyBgs[5] = "https://webp.debuginn.com/202303120018147.jpeg"; // 鱼鳞云层
// 2023 年
bodyBgs[6] = "https://webp.debuginn.com/202305162149771.jpg";  // 飞上云霄
bodyBgs[7] = "https://webp.debuginn.com/202305162151707.jpg";  // 洱海的月
bodyBgs[8] = "https://webp.debuginn.com/202305162152763.jpg";  // 和她她她
bodyBgs[9] = "https://webp.debuginn.com/202305162152732.jpg";  // 松赞林寺
bodyBgs[10] = "https://webp.debuginn.com/202305162153714.jpg"; // 滇池海鸥
bodyBgs[11] = "https://webp.debuginn.com/202305162153417.jpg"; // 蓝月谷
bodyBgs[12] = "https://webp.debuginn.com/202305162154852.jpg"; // 玉龙雪山
bodyBgs[13] = "https://webp.debuginn.com/202305162154677.jpg"; // 大冰的小屋
bodyBgs[14] = "https://webp.debuginn.com/202305162155271.jpg"; // 小狗老板
bodyBgs[15] = "https://webp.debuginn.com/202305162155529.jpg"; // 苍山的云
bodyBgs[16] = "https://webp.debuginn.com/202312241440666.jpg"; // 夜爬东灵山
bodyBgs[17] = "https://webp.debuginn.com/202312241448297.jpg"; // 伏地魔十七
bodyBgs[18] = "https://webp.debuginn.com/202312241459045.jpg"; // 搁浅的布鲁维斯号
bodyBgs[19] = "https://webp.debuginn.com/202312241509754.jpg"; // 青岛的浪
// 2024 年
bodyBgs[20] = "https://webp.debuginn.com/20250101R4kCmh.jpg"; // 新疆伊犁·果子沟大桥
bodyBgs[21] = "https://webp.debuginn.com/20250101gM3cIt.jpg"; // 北京鸟巢·五月天
bodyBgs[22] = "https://webp.debuginn.com/20250101M4FjnX.jpg"; // 北京鸟巢·五月天
bodyBgs[23] = "https://webp.debuginn.com/202501014ap3u9.jpg"; // 内蒙古·乌兰布统
bodyBgs[24] = "https://webp.debuginn.com/20250101V6b86k.jpg"; // 内蒙古·乌兰布统
bodyBgs[25] = "https://webp.debuginn.com/20250101DxpIDD.jpg"; // 甘肃兰州·黄河中山大桥
bodyBgs[26] = "https://webp.debuginn.com/202501014MMQzm.jpg"; // 甘肃金昌·银河
bodyBgs[27] = "https://webp.debuginn.com/202501018dy1Ym.jpg"; // 北京·司马台长城

// 输出随机的背景图
const randomBgIndex = Math.round(Math.random() * (bodyBgs.length - 1));
$("body").css({
    "background": 'url(' + bodyBgs[randomBgIndex] + ') no-repeat 50% 0',
    "background-attachment": "fixed",
    "background-size": "cover",
    "-webkit-background-size": "cover;-o-background-size: cover"
})