/**
 * @Author XIAO-LI-PIN
 * @Description 線性搜尋法
 * @Date 2021/6/28 12:56 上午
 * @Version 1.0
 */
export default class LinearSearch {

    /**
     * 線性搜尋,如果該陣列內無該資料,返回 -1
     * @param {Array<any>} data - 要搜尋的陣列
     * @param {T} any - 要搜尋的資料
     * @returns {number} - 返回該資料在該陣列內哪個位置
     */
    static searching<T>(data: Array<T>, any: T): number {

        let index = -1;
        for (let i = 0; i < data.length; i++) {
            console.log(`該 資料 ${data[i]} 是否與 ${any} 相等`)
            if (data[i] === any) {
                console.log(`相等`);
                return i;
            }
            console.log(`不相等`);
        }
        return index;
    }
}