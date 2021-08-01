// 6-1

/*
student「オブジェクト」というい言い方をする．
*/

var student = {
    gender: "female",
    age: 20,
    majour: "arts",
    lessons: function (theme) {
        console.log(this.majour + "専攻の" + theme + "の講義．");
        console.log(student.majour + "専攻の" + theme + "の講義．");
    }
};

console.log(student["gender"]);
console.log(student.gender);
console.log(student.age);

student.age = 30;
console.log(student.age);

student.lessons("グラフィック");

// 6-2

// 6-3
console.log(Math.PI);
console.log(Math.round(3.6));

// 6-4
var today = new Date();
console.log(today);

console.log(today.getFullYear());
console.log(today.getDate());

var mm = today.getMonth() + 1;
console.log(today.getMonth());
console.log(mm);

var yy = today.getFullYear();
var dd = today.getDate();

console.log(yy + "年" + mm + "月" + dd + "日");


