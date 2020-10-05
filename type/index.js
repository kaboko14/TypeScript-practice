var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12; //numberで浮動小数点もマイナスも使える
var single = 'hello';
var double = "hello";
var back = "hello";
var hello; //:stringは型注釈
hello = 'hello!';
var person = {
    name: 'Jack',
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grope'];
// fruits.push(21);
// 21は数字なのでエラーがです
var fruit = fruits[0];
// fruit.reduce() fruitは配列ではないのでreduceでエラーが出る
var book = ['business', 1500, false];
//例えば、配列で型の順序を固定したい場合（上記の場合は　string/number/boolean）
book.push(21);
// push出来てしまう
// console.log(book[3]); など、初期で定義していない4番目の要素はエラーが出る。
// 列挙型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
// coffee.sizeをCoffeeSizeて固定する。
coffee.size = CoffeeSize.TALL;
//coffee.sizeはCoffeeSizeでしか置き換えることができない。
var anything = true;
anything = 'hello';
anything = 21;
anything = {};
// anyは何にでもできる JavaScriptのような挙動になる
var banana = anything;
// 型指定した変数や定数などにもany型を入れることが出来る
//なるべく使わないようにする
var unionType = 10;
unionType = 'hello';
// union型　上記例ではnumberもstringも入れることが出来る
var unionTypes = [21, 'hello'];
// 配列のunion型には()が必要。
var apple = 'apple';
var cloth = {
    color: 'white',
    size: 'medium'
};
// 関数宣言する際に型をつける
// 引数に型注釈がないとany型となる
// functionの戻り値に型注釈は必要か　→　あるほうが良い（ドキュメントとしてわかりやすい）
function add(num1, num2) {
    return num1 + num2;
}
// 引数に入るのは数字のみ
add(1, 2);
// void　→　何も返さない　return があってもなくても使える
//　※基本的にはvoidを使う
// undefined　→　undefinedを返す。return がないと使えない
// undefinedを返すことを明示的に示したいときに使う
function sayHello() {
    console.log('Hello!');
    return;
}
// 実行時にundefinedが返る
// undefined型: undefinedとnullを扱うことが出来る
console.log(sayHello());
var tme = null;
// null型というものもある
var tmpNull;
// 関数の型注釈には => を利用する
// 関数宣言の際の型注釈は：なので混同しないように注意
var anotherAdd = add;
// 無名関数も同様
// 型注釈が右辺左辺のどちらにあっても型推論はされるので大丈夫。
var decrement = function (n1, n2) {
    return n1 - n2;
};
//アロー関数の型付け
var doubleNumber = function (num) { return num * 2; };
// コールバック関数
//下記の関数宣言の場合　第二引数がnumberを引数に持ち、numberを返すようなコースバック関数となる
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
// unknown型
var unknownInput;
var anyInput;
var text;
anyInput = 'hey';
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// anyは他の型の変数に入れることはできるが、unknown型は他の型の変数に代入することはできない。
text = anyInput;
// text = unknownInput;　代入できない。
// unknown型はany型のようにどの型を代入することもできるが、逆に指定された型の変数に代入することはできない。
//　下記のように、if文を使ってunknown型が指定された型であるという分岐とうに利用する。
unknownInput = 'hello'; // ここでstring型になる
if (typeof unknownInput === 'string') { // string型の場合のみの分岐を通ることが出来る
    text = unknownInput;
    console.log(text); // 実行される
}
// never型　決して何も返さない
function error(message) {
    throw new Error(message);
}
console.log(error(('This is an error')));
