/**const,letの変数宣言 */

var val1 = "var変数";
console.log(val1);

let val2 = "let変数";
console.log(val2);

val2 = "let変数を上書き";
console.log(val2);

const val3 = "const変数";
console.log(val3);

// constで定義したオブジェクト、配列の中身は更新可能
const val4 = {
  name: "ぽち",
  age: 5
};

val4.name = "ぽーち";
val4.address = "長野";

console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "doog";
val5.push("monkey");
console.log(val5);

// テンプレート文字列
const name = "ぽち";
const age = 5;

const massage = `私の名前は${name}です。年齢は${age}です。`;
console.log(massage);

// アロー関数

// 従来の関数
// function func1(str){
// return str;
// }

const func1 = function (str) {
  return str;
};

console.log(func1("func1です"));

// アロー関数の場合
const func2 = (str) => {
  return str;
};

console.log(func2("func2です"));
