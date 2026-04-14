function pangkat(basis, eksponen) {
    if (eksponen === 0) return 1;
    return basis * pangkat(basis, eksponen - 1);
}

console.log('fungsi pangkat:');
console.log(`2 pangkat 3 = ${pangkat(2, 3)}`);
console.log(`3 pangkat 4 = ${pangkat(3, 4)}`);
console.log(`5 pangkat 0 = ${pangkat(5, 0)}`);
console.log(`10 pangkat 2 = ${pangkat(10, 2)}`);

function balikString(str) {
    if (str.length <= 1) return str;
    return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

console.log('\nfungsi balikString:');
console.log(`'halo' = '${balikString('halo')}'`);
console.log(`'javascript' = '${balikString('javascript')}'`);
console.log(`'rekursi' = '${balikString('rekursi')}'`);
console.log(`'a' = '${balikString('a')}'`);