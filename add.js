function sum(x,y) {
    return x+y 
}
console.log(sum(3, 2));


function toSekunds(minutes) {
    return minutes*60
}
console.log(toSekunds(6));


function nextInteger(int) {
    return int+1
}
console.log(nextInteger(5));

function uchburchakYuzi(asos, balandlik) {
    return (asos*balandlik)/2
}
console.log(uchburchakYuzi(3,2));


function ageToDays(age) {
    return age*365
}
console.log(ageToDays(65));


function kub(son) {
    return son ** 3;
}
console.log(kub(5));


function firstElement(arr) {
    return arr[0]
}
console.log(firstElement([1,2,3]));


function power(x,y) {
    return x*y
}
console.log(power(3,5));


function hourToSekunds(hour) {
    return hour*3600
}
console.log(hourToSekunds(2));


function uchinchiTomon(tomon1, tomon2) {
    return (tomon1+tomon2)-1
}
console.log(uchinchiTomon(10,8));

function koldiq(son1, son2) {
    return son1%son2
}
console.log(koldiq(1,3));

function turtburchakYuzi(boyi, eni) {
    return boyi*eni
}
console.log(turtburchakYuzi(6,7));


function something(a) {
    return "Something" + " " + a;
}
console.log(something("Bob Jane"));


function kvadrat(sonn){
    return sonn**2
}
console.log(kvadrat(5));

function noldan(rakam) {
    return rakam <= 0;
}
console.log(noldan(-5));

function ichkiBurchaklar(n) {
    return (n-2)*180
}
console.log(ichkiBurchaklar(4));

function ochkolar(x,y) {
    return (x*2)+(y*3)
}
console.log(ochkolar(7,5));

function nameString(str) {
    return str + "Edabit";
}
console.log(nameString("javaScript"));

function ikkitaSon(x,y){
    return x+y<100
}
console.log(ikkitaSon(222,15));

function printArray(n) {
    return Array.from({ length: n }, (_, i) => i + 1);
}
console.log(printArray(5));

function oyoqlar(tovuq, qoy, sigir) {
    return (tovuq*2+qoy*4+sigir*4)
}
console.log(oyoqlar(2,3,5));

function  and(a,b){
    return a&&b;
}
console.log(and( true, true));


function tengMi(x, y) {
    return x === y;
}
console.log(tengMi(4,9));


function futbolOchko(yutishlar, duranglar,
maglubiyatlar) {
    return yutishlar*3+duranglar*1+maglubiyatlar*0
}
console.log(futbolOchko(3, 4, 2));

function sekundlar(soat, minut) {
    return soat*3600+minut*60
}
console.log(sekundlar(1, 3));
console.log(sekundlar(2, 0));
console.log(sekundlar(0, 0));


function checkEquality(x, y) {
    return x === y;
}

function tengMi(x, y) {
    return checkEquality(x, y);
}
console.log(checkEquality(1, true));

const arrowFunc=(son1)=>{
    return son1
}
console.log(arrowFunc(4));
console.log(arrowFunc("3"));
console.log(arrowFunc(true));



function frameSoni(minut, frame) {
    return minut*60*frame
}
console.log(frameSoni(1,1));
console.log(frameSoni(10, 1));


function calc(str) {
    return eval(str);
}
console.log(calc("23+4"));
console.log(calc("45-15"));


function teng10(a, b) {
    return a === 10 || b === 10 || a + b === 10;
}
console.log(teng10(4,6));
console.log(teng10(5,6));

function litrMasofa(km) {
    return Math.max(km*10, 100)
}
console.log(litrMasofa(3));

function fun(a,b){
    return Math.max(a,b)
}
console.log(fun(66,5));
console.log(fun(-1,6));

function arr(x, y) {
    return [x,y]
}
console.log(arr(5,7));

function tengStrings(str1, str2) {
    return str1.length === str2.length;
}
console.log(tengStrings("AB", "CD"));
console.log(tengStrings("ABC", "DE"));


function boshStr(str) {
    return str.length === 0;
}
console.log(boshStr(""));
console.log(boshStr("a"));


function bolinsin5(son) {
    return son %5===0
}
console.log(bolinsin5(-59));

function bolinsin100(sonn) {
    return sonn%100==0
}
console.log(bolinsin100(1));
console.log(bolinsin100(1000));


function uzunlik(str) {
    let sanokk=0
    for(let i of str){
        sanokk++
    }
    return sanokk;
}
console.log(uzunlik("apple"));


function bolinsin(x, y) {
    return x%y===0
}
console.log(bolinsin(98, 7));






