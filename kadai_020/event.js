//HTML要素から取得、定数へ代入
const textBtn = document.getElementById("btn");
const textdisp = document.getElementById("text");
//クイックされた時のイベント処理
textBtn.addEventListener("click", () =>{
  textdisp.textContent = "ボタンをクリックしました";
})
