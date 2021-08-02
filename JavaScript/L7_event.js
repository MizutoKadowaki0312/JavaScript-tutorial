/*
「nice」という id がついた要素をクリックした時のアクション設定
*/

/*
document.getElementById("nice").addEventListener("click" , function(){
    // pタグを用意
    var element = document.createElement("p");
    //「いいね！」というテキストを準備
    var text = document.createTextNode("いいね!");
    //pタグの中に「いいね！」を格納して要素を追加
    document.body.appendChild(element).appendChild(text);
})
*/
/*
var button = document.getElementById("nice");
button.addEventListener("click", NiceAction);

function NiceAction() {
    var element = document.createElement("p");
    var text = document.createTextNode("いいね！");
    document.body.appendChild(element).appendChild(text);
}
*/


var answer = ["なるほど！", "ふむふむ", "うーん", "(笑)", "あらら・・・"];

// メッセージ送信処理　引数：送信したいメッセージ(文字列)
function addChatText(val, type) {
    if(!val) return false;

    // チャットに追加するHTMLのタグを生成
    var text = document.createElement('li');
    // テキストを設定
    text.innerHTML = val;
    // 赤文字のスタイルを設定（CSSのclass「message-other」を設定）
    if(type == "other"){
        text.classList.add("message-other");
    }
    // 追加対象となる要素を取得
    var chatWindow = document.getElementById("chat-list");
    // appendChild()メソッドで要素とテキストをHTMLに追加
    chatWindow.appendChild(text);
}

// 送信ボタンを押した時にメッセージを送信
document.getElementById("chat-send").addEventListener("click", function(){
    var inputText = document.getElementById("chat-input");
    // addChatText関数を入力値とCSSのclass判別文字列を引数として実行
    addChatText(inputText.value,"you");
    // 入力欄を空欄にする
    inputText.value = "";
});

// 8秒毎にメッセージを送信
setInterval(function(){
    // ランダムの整数を設定
    var index = Math.floor(Math.random() * answer.length);
    // ランダムメッセージを表示
    addChatText(answer[index], "other");
}, 8000);

// 初回のみ1秒後にメッセージを自動送信
setTimeout(function(){
    addChatText("こんにちは！", "other");
}, 1000);