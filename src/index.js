//RaiseTech/Reactコース第3回課題

/**
 * 変数宣言　varの場合、再宣言可能、再代入可能
 */
var name = "den";
console.log(name); //den

var name = "dende"; //再宣言可能
console.log(name); //dende

name = "denden"; //再代入可能
console.log(name); //denden

/**
 * 変数宣言　letの場合、再宣言不可、再代入可能
 */
let age = 34;
console.log(age); //34
//let age = "34歳"；
//エラー　再宣言不可

age = 35; //再代入可能
console.log(age); //35

/**
 * 変数宣言　constの場合、再宣言不可、再代入不可
 */
const address = "山梨";
console.log(address);

//const address = "静岡";
//エラー　再宣言不可

////address = "東京";
//エラー　再代入不可

/**
 * 配列やオブジェクトの場合constでも中身の変更は可能
 */
const introduction = [name, age, address];
console.log(introduction);
introduction[0] = "dende"; //[dende,"35","山梨"]
//配列の中身は変更可能

const myHobby = {
  sports: "capoeira",
  book: "少年ジャンプ",
  anime: "氷菓"
};
console.log(myHobby);
myHobby.anime = "新世界より"; //{sports: "capoeira", book: "少年ジャンプ", anime: "新世界より"}
//オブジェクトの中身も変更可能

//ほとんどの場合、変数の宣言はconstとなる
//変更の必要があるものだけletで宣言となり、varはほぼ使わない

/**
 * 関数の宣言、実行(アロー関数の記法)
 * テンプレート文字列
 */
const selfIntroduction = function greeting() {
  return `オス、おらの名めぇは${introduction[0]}ってんだ。得意技は${myHobby.sports}だ!`;
};
console.log(selfIntroduction());

const selfIntroduction1 = () => {
  return `歳は今年で${introduction[1]}せぇだ。
            おすすめのアニメは${myHobby.anime}っちゅうぞ。おもしれぇからぜってぇ観てくれよな`;
};
console.log(selfIntroduction1());

const selfIntroduction2 = () =>
  `${introduction[2]}って山奥に住んでっぞ。${myHobby.book}は6年めぇから購読してっぞ！`;
console.log(selfIntroduction2());

/**
 * 四則演算
 */
let add = 1 + 1; //足し算
let sub = 4 - 1; //引き算
const mul = 7 * 1; //かけ算
const div = 11 / 1; //割り算
const sur = 13 % 14; //除算の余り

const prime = [add, sub, mul, div, sur];
console.log(prime);

//1を足す
console.log(add++); //2
console.log(add); //3
console.log(++add); //4

//前に「++」をつけるか、後につけるかで出力結果が変わる。
//後につけた場合は評価されてからプラスされるので評価順に注意
//後述の減算についても同様

//1を引く
console.log(sub--);
console.log(sub);
console.log(--sub);

/**
 * 比較演算(==と===、!=と!==の違い)
 */
const str2 = "2";

//「==」だと数値を文字列であっても同じだと評価される
if (add == str2) {
  console.log("trueです");
}

//「===」だと数値と文字列は違うものと区別される
if (add === str2) {
  console.log("trueです");
} else {
  console.log("trueではありません");
}

//「!=」だと数値を文字列であっても同じだと評価される
if (add != str2) {
  console.log("trueです");
} else {
  console.log("trueではありません");
}

//「!==」だと数値と文字列は違うものと区別される
if (add !== str2) {
  console.log("falseです");
} else {
  console.log("falseではありません");
}
//「!」は論理演算子として評価の結果を反転する意味を持つ
//大小比較は「＞」「＞＝」「＜」「＜＝」を使い評価する

/**
 * 論理演算(&& || ! ? :)
 */

const trueFlag = true;
const falseFlag = false;

if (trueFlag && falseFlag) {
  console.log("じっこうされない");
} else {
  console.log("実行される"); //こちらが出力される
}

//「&&」は左側がtrueの場合右側を評価する
trueFlag && console.log("実行される");

if (trueFlag || falseFlag) {
  console.log("じっこうされない?"); //こちらが出力される
} else {
  console.log("実行される?");
}

//「||」は左側がfalseの場合右側を評価する
falseFlag || console.log("実行された");

/**
 * switch文
 */
const calc = age + age;

switch (calc) {
  case 69:
    console.log("間違いです"); //実行されない
    break;
  case 70:
    console.log("正解です"); //ここが実行される
    break;
  default:
    console.log("ここは実行されません");
    break;
}

//caseごとに「：」で区切る
//breakを書き忘れると全てのコードが実行されてしまう
//fefaultは一致しない場合の処理をかく
