/**
 * @Author XIAO-LI-PIN
 * @Description 線性搜尋法
 * @Date 2021/6/28 12:59 上午
 * @Version 1.0
 */

import LinearSearch from "../../src/LinearSearch";

test("線性搜尋法",()=>{

    const data:string[] = ["小明","小Ａ","小Ｂ","小Ｃ","小Ｄ"];

    let a1 = LinearSearch.searching<string>(data,"小美");
    let a2 = LinearSearch.searching<string>(data,"小Ｃ");

    console.log(`結果 : 小美 是否有在資料內 : ${a1} `);
    console.log(`結果 : 小Ｃ 是否有在資料內 : ${a2} `);
})