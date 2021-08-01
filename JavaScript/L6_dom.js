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
