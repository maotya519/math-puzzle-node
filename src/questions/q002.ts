export async function q002() {
    const ops = ['+', '-', '*', '/', ''];
    for (let i = 1000; i < 10000; i++) {
        const c = i.toString().split('');
        for (const op1 of ops) {
            for (const op2 of ops) {
                for (const op3 of ops) {
                    const e = `${c[0]}${op1}${c[1]}${op2}${c[2]}${op3}${c[3]}`
                        // ８進数リテラル回避（0から始まる記法）
                        .replace(/(^|\+|-|\*|\/)0+([0-9])/g, '$1$2');
                    // オペレーターが一つでも含まれているかチェック
                    if (/\+|-|\*|\//.test(e)) {
                        if (i.toString() === eval(e).toString().split('').reverse().join('')) {
                            console.log(`ans: ${i}`);
                        }
                    }
                }
            }
        }
    }
}
