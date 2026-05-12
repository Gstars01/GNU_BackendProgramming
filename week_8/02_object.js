let dic = new Object()

dic.boy = "Boy"         //선언된 객체에 값을 대입하는 방법 
dic.girl = "girl"
dic.friend = "friend";

console.log(dic.boy)    //객체 접근 방식 
console.log(dic.girl)
console.log(dic.friend)
console.log(dic["boy"]) //이런식으로도 객체 접근가능 

delete dic.girl;        //객체에 대입된 값을 삭제하는 방법 
console.log(dic.girl)

let doc = {             //이런식으로도 객체 값 대입 및 선언 가능 
    boy : "BOy",
    girl : "girl",
    friend : "friend"
}
console.log(doc)

const condoc ={
    boy : "boy"
}
condoc.boy = "girl"
console.log(condoc.boy) //이런식으로 변수의 값을 변경하는 행위는 문제가 없음 
//condoc= {boy:{"girl"}} 객체의 변수에 값을 재할당하는 행위는 불가능함 
// 이유 : 객체를 const로 선언하는 경우 변수의 메모리가 특정위치로 고정되기 때문에 값을 변경 할 수 없음 