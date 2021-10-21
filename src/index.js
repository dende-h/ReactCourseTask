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

/**
 * 比較演算(==と===、!=と!==の違い)
 */

/**
 * 論理演算(&& || ! ? :)
 */

/**
 * switch文
 */

/**
 * テンプレート文字列
 */
