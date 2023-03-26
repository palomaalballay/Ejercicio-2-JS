var a = 10;
var b = 1;

while (a === 10) {
    console.log (b * a);
    a = b * a;
    if (b > 9) {
        break;
    }
};
