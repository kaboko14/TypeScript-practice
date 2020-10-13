"use strict";
// tsconfig.jsonの"experimentalDecorators": trueのコメントアウトを外す
// フレームワークでよく使われる
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// クラスはコンストラクター関数とシンタックスシュガー
// なので引数であるclassの型は関数となる
// デコレータはクラスの定義時に実行されている
// function Logging(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor);
// }
// デコレータの引数は勝手に増やすことができない
// デコレータファクトリを利用する
// デコレータを返す関数を定義する
// 追加の引数を使えるようになる
function Logging(message) {
    return function Logging(constructor) {
        console.log('Logging...');
        console.log(constructor);
        console.log(message);
    };
}
// Component デコレータでclassのnameに定義された文字列を#app内にh1タグで囲んで描写する
function Component(template, selector, selector2) {
    //渡されるコンストラクタ関数に引数が動的に変化する場合、引数をいくつでも受け入れできるように指定する必要がある
    // (constructor: {new(...args: any[])}: {})
    //any型の配列のスプレッド構文を利用する
    return function (constructor) {
        var mountedElement = document.querySelector(selector);
        // classのnameを取得するためにインスタンスの生成が必要になるが、引数の型をFunctionにするだけではTSはそれがコンストラクタ関数なのか普通の関数なのか判断できないためにエラーで出る
        // newができる型であることを明示しないといけない
        // 引数に予約語であるnew()を指定
        var instance = new constructor();
        if (mountedElement) {
            mountedElement.innerHTML = template;
            mountedElement.querySelector(selector2).textContent = instance.name;
        }
    };
}
// Decorationしたい場所に@をつける
// デコレータファクトリを利用する際は()をつける
//デコレータが複数あるときは下から上に実行される
var User = /** @class */ (function () {
    function User() {
        this.name = 'Quill';
        console.log('User was created!');
    }
    User = __decorate([
        Component('<h1>{{ name }}</h1>', '#app1', 'h1'),
        Logging('Logging user')
    ], User);
    return User;
}());
var user = new User();
var User2 = /** @class */ (function () {
    function User2() {
        this.name = 'Kevin';
    }
    User2 = __decorate([
        Component('<h2>{{ name }}</h2>', '#app2', 'h2')
    ], User2);
    return User2;
}());
