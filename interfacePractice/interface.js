"use strict";
const human = {
    name: 'Quill',
    age: 38,
    nickName: 'Q',
    //戻り値を明示的に書きたい場合は（）の後に:をつけて書くことが出来る
    greeting(message) {
        console.log(message);
    }
};
// classとinterfaceの条件を適応させる
// Developerクラスで生成するインスタンスにHumanのinterfaceの型を指定したいとする
// implements で継承
// typeエイリアスもimplementsで継承できる
// クラスと違って複数のinterfaceから継承できる
// 何を継承しているか明示できる
class Developer {
    // 引数の修飾子はpublic/readonlyはOK
    // private/protectはNG
    // implementsした型以外のものも＋できる（↓だとexperience）
    //Humanの型を継承しているが、nameの修飾子は影響を受けない:今回はpublicにしているので、Developerから生成されるインスタンスのnameは外部から変更することができる
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    // 引数に=をつけることで初期値（引数が渡されなかった時の値）が用意できる。ES6
    greeting(msg = 'hello') {
        console.log(msg);
    }
}
// Developer はexperienceも含むが、Humanの型に必要なものを網羅しているので、プラスで何か追加されていてもOK
// Humanを型で指定していることで、Humanの型を網羅していることが明示的に示されている
const user = new Developer('Quill', 38, 3);
console.log(user.name);
console.log(user.age);
// 型にHumanを指定していることで、型外のexperienceにはアクセスできない
// console.log(user.experience);
// greetingメソッドに引数を渡していないのでクラス内で定義された初期値(hello)が表示される
user.greeting();
