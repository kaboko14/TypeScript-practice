// オブジェクトの型
//typeエイリアスとの違いはあまりないが
//interfaceはオブジェクトのみ
//interfaceを使うことで必ずオブジェクトであることを明示できる
interface Nameable {
  readonly name: string;
  //?をつけることであってもなくてもよい
  // Nameable型を定義された先で定義されていなくてもエラーにはならない
  nickName?: string;
}

// interfaceからinterfaceに継承が出来る
// typeエイリアス同士も継承が可能
// 特定の部分の再利用に便利：再利用性を上げる
interface Human extends Nameable  {
  age: number;
  // greeting: (message: string) => void;
  //どちらの書き方でもよい
  greeting(message?: string): void;
}
const human: Human = {
  name: 'Quill',
  age: 38,
  nickName: 'Q',
  //戻り値を明示的に書きたい場合は（）の後に:をつけて書くことが出来る
  greeting(message: string): void {
    console.log(message);
  }
}

// classとinterfaceの条件を適応させる
// Developerクラスで生成するインスタンスにHumanのinterfaceの型を指定したいとする
// implements で継承
// typeエイリアスもimplementsで継承できる
// クラスと違って複数のinterfaceから継承できる
// 何を継承しているか明示できる
class Developer implements Human {
  // 引数の修飾子はpublic/readonlyはOK
  // private/protectはNG
  // implementsした型以外のものも＋できる（↓だとexperience）
  //Humanの型を継承しているが、nameの修飾子は影響を受けない:今回はpublicにしているので、Developerから生成されるインスタンスのnameは外部から変更することができる
  constructor(public name: string, public age: number, public experience: number) { }
  // 引数に=をつけることで初期値（引数が渡されなかった時の値）が用意できる。ES6
  greeting(msg: string = 'hello') {
    console.log(msg);
  }
}
// Developer はexperienceも含むが、Humanの型に必要なものを網羅しているので、プラスで何か追加されていてもOK
// Humanを型で指定していることで、Humanの型を網羅していることが明示的に示されている
const user: Human = new Developer('Quill', 38, 3);
console.log(user.name);
console.log(user.age);
// 型にHumanを指定していることで、型外のexperienceにはアクセスできない
// console.log(user.experience);

// greetingメソッドに引数を渡していないのでクラス内で定義された初期値(hello)が表示される
user.greeting();

//interfaceにreadonlyを使用する
// interface Human  {
  //修飾子が利用できる
//   readonly name: string;
//   age: number;
//   greeting(message: string): void;
// }

// interfaceで関数の型を定義する
// typeエイリアスでは下記のようになる
// type addFunc = (num1: number, num2: number) => number;
// let addFunc: addFunc;
// addFunc = (n1, n2) => {
//   return n1 + n2;
// }
// interfaceで定義する事もできるが基本的にはtypeエイリアスで書くほうがわかりやすい
interface addFunc {
  //プロパティ名を書かない
  (num1: number, num2: number): number;
}
