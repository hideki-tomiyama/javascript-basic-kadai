//HtML要素の取得、代入
const Btn = document.getElementById("btn");
const textdisp = document.getElementById("text");

//イベント処理(ボタンクイックしたら2秒後に表示)
Btn.addEventListener("click", () => {
 setTimeout(() => {
  textdisp.textContent = "ボタンをクリックしました"
 },2000);
})