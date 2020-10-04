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
