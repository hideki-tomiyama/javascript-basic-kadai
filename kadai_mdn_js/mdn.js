//今日の日付を定義する
const today = new Date();

//今日の日付より”年”を抽出し定義する
const year = today.getFullYear();

//今日の日付より”月”を抽出し定義する
const moon = today.getMonth();

//抽出された月を日本月に調整し、定義する
//抽出された月(1月：0、2月：1、3月:2)となる為+1で日本月に調整する
const moons = moon + 1;

//今日の日付より“日”を抽出し定義する
const dayOfMonth = today.getUTCDate();

//定義された日付を呼び出す(形式(0000年00月00日))
console.log(year+"年",moons+"月",dayOfMonth+"日");