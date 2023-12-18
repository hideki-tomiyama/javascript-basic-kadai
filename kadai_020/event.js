//HTML要素から取得、定数へ代入
const textBtn = document.getElementById("btn");
//クイックされた時のイベント処理
textBtn.addEventListener("click", () =>{
  text.textContent = "ボタンをクリックしました";
})
