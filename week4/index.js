const unan = {
    "name" : "Unan",
    "age" : 26,
    "bloodType" : 'AB'
}

let unan2 = {
    "name" : "unan",
    "age" : 26,
    "school" : "CAU"
}


unan2.age = 24;
console.log(unan2.age);
Object.freeze(unan2)

// object를 const로 선언하는 경우에는, 값에 할당하는 것이 아니라 주소로 할당하는 것.
// 따라서, 불변 객체를 만들고 싶을떄는 Object.freeze() method를 사용하면 된다.

const age = 26;

if (age > 19) {
    alert("hello")
}

else if (age <= 19 && age > 10) {
    alert("hi!")
}

else {
    alert("kk")
}

let isTrue = confirm("hello"); // alert와 confirm은 Web에서만 지원

let newAge = 20;

for (let i = 0; i< 5; i ++) {
    newAge += 1 // age = age + 1
    console.log(`${i}년 후의 나이는 ${newAge}살 입니다.`);
    console.log("i년후의 나이는 newAge살 입니다.")
}



document.querySelector('.section-title').innerHTML = "안녕하세여!";
document.querySelector('.section-title').style.color = "white";

fontSize
font-size