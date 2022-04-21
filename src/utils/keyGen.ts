export const __keyChecker = (): string => {
    if (localStorage.getItem("keyGEN") === null) {
        const max = 999999999999999;
        const min = 0;
        const genKey = Math.floor(Math.random() * (max - min)) + min;
        localStorage.setItem("keyGEN", String(genKey));
    } 

    return localStorage.getItem("keyGEN")!;
}