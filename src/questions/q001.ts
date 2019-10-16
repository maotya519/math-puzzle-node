export async function q001() {
    function checkReversibleNum(num: number, radix: number) {
        // radix→　基数
        const toS = num.toString(radix);
        console.log(toS);
        return toS === toS.split('').reverse().join('');
    }

    let n = 10;
    while (true) {
        if (checkReversibleNum(n, 10) && checkReversibleNum(n, 2)
                && checkReversibleNum(n, 8)) {
            console.log(`ans: ${n}`);
            break;
        }
        n++;
    }
}
