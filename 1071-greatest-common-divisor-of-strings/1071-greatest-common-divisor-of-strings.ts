function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return "";

    const lengthGcd = gcd(str1.length, str2.length);
    return str1.substring(0, lengthGcd);
};