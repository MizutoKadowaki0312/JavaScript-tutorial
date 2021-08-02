// 6-5

/*
var element = document.getElementById("weather");

// HTML として読み込んで表示．
element.innerHTML = "<span>曇り</span>";

//単純な文字列として表示．
element.textContent = "<span>曇り</span>";
*/



// 6-6

//class属性の場合にはドットをつける
var element = document.querySelector(".weather");
console.log(element);

var element = document.querySelector("dl");
console.log(element); // 先述した id指定の方のdlを引っ張っているみたい．

var element = document.querySelector("dl dd");
console.log(element);

// 6-7
var element = document.querySelector(".weather");

/*
element.style.color = "#ff7c89";
element.style.textDecoration = "underline";
*/

//上の書き方を1つに書き直す
element.style.cssText = "color:#ff7c89; text-decoration:underline";
var element = document.querySelector(".weather");
element.className = "sample";

// 6-8
var element = document.createElement("p");
var text = document.createTextNode("良いお天気ですね．");
document.body.appendChild(element).appendChild(text);

var element = document.getElementById("credit");
var parent = element.parentElement;
parent.removeChild(element);