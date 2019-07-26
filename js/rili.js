function RunGLNL() {
    var e = new Date
      , t = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")
      , r = e.getFullYear() + "年" + [e.getMonth() + 1] + "月" + e.getDate() + "日";
    intHours = e.getHours(),
    intMinutes = e.getMinutes(),
    intSeconds = e.getSeconds(),
    0 == intHours ? (hours = "12:",
    xfile = "") : 12 > intHours ? (hours = intHours + ":",
    xfile = "") : 12 == intHours ? (hours = "12:",
    xfile = "") : (intHours -= 12,
    hours = intHours + ":",
    xfile = ""),
    minutes = 10 > intMinutes ? "0" + intMinutes + ":" : intMinutes + ":",
    seconds = 10 > intSeconds ? "0" + intSeconds + " " : intSeconds + " ",
    r = r + "<i style=padding-right:10px;></i>" + t[e.getDay()];
    var r = r + "<i style=padding-right:10px;></i>" + CnDateofDateStr(e);
    r += SolarTerm(e),
    document.write(r)
}
function DaysNumberofDate(e) {
    return parseInt((Date.parse(e) - Date.parse(e.getFullYear() + "/1/1")) / 864e5) + 1
}
function CnDateofDate(e) {
    var t, r, a, n, o, i, s, u, D = new Array(22,42,218,0,131,73,182,5,14,100,187,0,25,178,91,0,135,106,87,4,18,117,43,0,29,182,149,0,138,173,85,2,21,85,170,0,130,85,108,7,13,201,118,0,23,100,183,0,134,228,174,5,17,234,86,0,27,109,42,0,136,90,170,4,20,173,85,0,129,170,213,9,11,82,234,0,22,169,109,0,132,169,93,6,15,212,174,0,26,234,77,0,135,186,85,4), f = new Array, g = new Array, l = new Array, h = e.getFullYear();
    if (e.getMonth() + 1,
    e.getDate(),
    100 > h && (h += 1900),
    1997 > h || h > 2020)
        return 0;
    for (l[0] = D[4 * (h - 1997)],
    l[1] = D[4 * (h - 1997) + 1],
    l[2] = D[4 * (h - 1997) + 2],
    l[3] = D[4 * (h - 1997) + 3],
    f[0] = 0 != (128 & l[0]) ? 12 : 11,
    t = 127 & l[0],
    n = l[1],
    n <<= 8,
    n |= l[2],
    r = l[3],
    a = 15; a >= 0; a--)
        g[15 - a] = 29,
        0 != (1 << a & n) && g[15 - a]++,
        f[15 - a] == r ? f[15 - a + 1] = -r : (f[15 - a + 1] = f[15 - a] < 0 ? -f[15 - a] + 1 : f[15 - a] + 1,
        f[15 - a + 1] > 12 && (f[15 - a + 1] = 1));
    if (o = DaysNumberofDate(e) - 1,
    o <= g[0] - t)
        s = h > 1901 && CnDateofDate(new Date(h - 1 + "/12/31")) < 0 ? -f[0] : f[0],
        u = t + o;
    else {
        for (i = g[0] - t,
        a = 1; o > i && i + g[a] < o; )
            i += g[a],
            a++;
        s = f[a],
        u = o - i
    }
    return s > 0 ? 100 * s + u : 100 * s - u
}
function CnYearofDate(e) {
    var t = e.getFullYear()
      , r = e.getMonth() + 1
      , a = parseInt(Math.abs(CnDateofDate(e)) / 100);
    return 100 > t && (t += 1900),
    a > r && t--,
    t -= 1864,
    CnEra(t) + "年"
}
function CnMonthofDate(e) {
    var t, r = new Array("零","正","二","三","四","五","六","七","八","九","十","冬","腊");
    return t = parseInt(CnDateofDate(e) / 100),
    0 > t ? "闰" + r[-t] + "月" : r[t] + "月"
}
function CnDayofDate(e) {
    var t, r = new Array("零","初一","初二","初三","初四","初五","初六","初七","初八","初九","初十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十");
    return t = Math.abs(CnDateofDate(e)) % 100,
    r[t]
}
function DaysNumberofMonth(e) {
    var t = e.getFullYear();
    100 > t ? t += 1900 : t;
    var r = t;
    return t += "/" + (e.getMonth() + 1),
    r += "/" + (e.getMonth() + 2),
    t += "/1",
    r += "/1",
    parseInt((Date.parse(r) - Date.parse(t)) / 864e5)
}
function CnEra(e) {
    var t = new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸")
      , r = new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
    return t[e % 10] + r[e % 12]
}
function CnDateofDateStr(e) {
    return "零月" == CnMonthofDate(e) ? "　请调整您的计算机日期!" : "农历" + CnMonthofDate(e) + CnDayofDate(e)
}
function SolarTerm(e) {
    var t = new Array("","","","","","","","","","","","","","","","","","","","","","","","")
      , r = new Array(1272060,1275495,1281180,1289445,1299225,1310355,1321560,1333035,1342770,1350855,1356420,1359045,1358580,1355055,1348695,1340040,1329630,1318455,1306935,1297380,1286865,1277730,1274550,1271556)
      , a = 31556926
      , n = new Date(1901);
    for (n.setTime(94712046e4); e.getFullYear() < n.getFullYear(); )
        n.setTime(n.getTime() - 1e3 * a);
    for (; e.getFullYear() > n.getFullYear(); )
        n.setTime(n.getTime() + 1e3 * a);
    for (var o = 0; e.getMonth() > n.getMonth(); o++)
        n.setTime(n.getTime() + 1e3 * r[o]);
    for (var i = 0; 22 > i; i++)
        n.setTime(n.getTime() + 1e3 * r[i]);
    e.getDate() > n.getDate() && (n.setTime(n.getTime() + 1e3 * r[o]),
    o++),
    e.getDate() > n.getDate() && (n.setTime(n.getTime() + 1e3 * r[o]),
    23 == o ? o = 0 : o++);
    var s = e.getFullYear()
      , u = e.getMonth() + 1
      , D = s;
    if (3 >= u)
        var D = D - 1;
    var f = D.toString().substr(2, 2)
      , g = Math.floor(.2422 * f + 21.94) - Math.floor(f / 4)
      , g = new Date(D + "/12/" + g);
    iDays = parseInt(Math.abs(e - g) / 1e3 / 60 / 60 / 24);
    var l = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];
    l[Math.floor(iDays / 9)] && l[Math.floor(iDays / 9)];
    var h = " ";
    return e.getDate() == n.getDate() && (h += "<i>" + t[o] + " " + h + "</i>"),
    h
}
