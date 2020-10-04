let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12; //numberで浮動小数点もマイナスも使える
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

let hello: string; //:stringは型注釈
hello = 'hello!';

const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21,
};

const fruits: string[] = ['Apple', 'Banana', 'Grope'];

// fruits.push(21);
// 21は数字なのでエラーがです

const fruit = fruits[0];
// fruit.reduce() fruitは配列ではないのでreduceでエラーが出る

const book: [string, number, boolean] = ['business', 1500, false];
//例えば、配列で型の順序を固定したい場合（上記の場合は　string/number/boolean）
book.push(21);
// push出来てしまう
// console.log(book[3]); など、初期で定義していない4番目の要素はエラーが出る。

// 列挙型
enum CoffeeSize  {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
// coffee.sizeをCoffeeSizeて固定する。
coffee.size = CoffeeSize.TALL;
//coffee.sizeはCoffeeSizeでしか置き換えることができない。

let anything: any = true;
anything = 'hello';
anything = 21;
anything = {};
// anyは何にでもできる JavaScriptのような挙動になる
const banana: string = anything;
// 型指定した変数や定数などにもany型を入れることが出来る
//なるべく使わないようにする

let unionType: number | string = 10;
unionType = 'hello';
// union型　上記例ではnumberもstringも入れることが出来る
let unionTypes: (number | string)[] = [21, 'hello'];
// 配列のunion型には()が必要。

const apple: 'apple' = 'apple'
// リテラル型　文字列の'apple'しか入れるこ
// constを使うと型推論でリテラル型になる

let clothSize: 'small' | 'medium' | 'large' = 'large';
// union型とリテラル型を組み合わせる

const cloth: {
  color: string;
  // オブジェクトの型注釈内でリテラル型を固定する
  // 基本はenum型　固定するものが少ない時はこれでもいいかも
  size: 'small' | 'medium' | 'large';
} = {
  color: 'white',
  size: 'medium',
}