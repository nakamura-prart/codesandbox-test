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

// スプレッド構文
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// mapやfilterを使った配列の処理

const nameArr = ["田中", "山田", "ぽち丸3号"];

// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
// return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index)=> console.log(`${index + 1}番目は${name}です⚓`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) =>{
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "ぽち丸3号") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

// 三項演算子
// ある条件　？　条件がtrueの時　：　条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100
    ? "100を越えています！！！！！！"
    : "許容範囲内です！！！！！！";
};

console.log(checkSum(10, 50));
