var a = 3;
var b = 2;

console.log("add : "+(a+b));
console.log("sub : "+(a-b));
console.log("mul : "+(a*b));
console.log("div : "+(a/b));
console.log("reminder : "+(a%b));
console.log("* : "+(a**b))

console.log('1'+1); //문자열로 return

console.log(+"1023"+1); //숫자로 return 
console.log(+true);  //숫자로 return
console.log(-false); //숫자로 return 

//연산자는 내용이 숫자형인경우 문자열 -> 숫자형으로 형변환하여 연산함
console.log("ex")
console.log('10'-2)// 8

//comparison
var size1= 1024;
var size2 = '1024';
console.log(size1 == size2)
console.log(size1 === size2);
//=== 일치 연산자는 type까지 고려함

console.log(300 > '200');//true
//다른 타입도 숫자로 형변환하여 연산함 

//branch 
var age=30;
var result = age>=19?"adult":"kid";//비교연산후 branch 
console.log(result); 

