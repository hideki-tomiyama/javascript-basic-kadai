//変数numに1～100までのランダムな整数を代入する
let num = Math.floor(Math.random() * 100);

//変数numの値を出力(確認用)
console.log(num);

//変数num 3の倍数であれば"3の倍数です"という文字列を出力
//変数num 5の倍数であれば"5の倍数です"という文字列を出力
//変数num 3と5の倍数であれば"3と5の倍数です"という文字列を出力
//変数num　が上記以外だったら"変数(num)を出力

if (num % 15 ===0){
  console.log("3と5の倍数です");
}
else if (num % 3 ===0){
  console.log("3の倍数です");
}
else if (num % 5 ===0){
  console.log("5の倍数です");
}
else{
  console.log("変数"+(num));
}
