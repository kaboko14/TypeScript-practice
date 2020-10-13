"use strict";
class Parson {
    // // publicは初期値 privateは外から値をいじれなくなる
    // public name: string; // jsにはフィールドはない
    // private age: number;
    // constructor(initName: string, initAge: number) {
    //   this.name = initName;
    //   this.age = initAge;
    // }
    // フィールドを省略
    // 引数にはpublic,private,readonlyが必要になる
    // readonly修飾子をつければclass内外関係なく書き換え禁止になる
    // constructor関数内で初期化する際はreadonlyははたらかない
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    // thisがどういうオブジェクトかを明示的に示す事でエラーを防ぐことも可能
    // this: Parsonで型をParsonと同じカタチの型を指定することもできる
    greeting() {
        console.log(`hello! My name is ${this.name}, I'm ${this.age} years old`);
    }
    // //thisにクラスを指定
    // greeting(this: Parson) {
    //   console.log(`hello! My name is ${this.name}`);
    // }
    incrementAge() {
        this.age += 1;
    }
}
const quill = new Parson('Quill', 38);
quill.incrementAge();
console.log(quill);
quill.greeting();
// const anotherQuill = {
//   name: 'anotherQuill',
//   age: 42,
//   // ↓の関数内のthisはanotherQuillオブジェクト
//   // thisは呼び出されたときにきまる
//   // 関数宣言がもしarrow関数であればthisは定義時に決まるのでthis.nameは'Quill'が入る
//   anotherGreeting: quill.greeting
// }
// //thisは呼び出されたときに決まる。
// anotherQuill.anotherGreeting(); //hello! My name is anotherQuill
class Teacher extends Parson {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    // ゲッター
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject');
        }
        return this._subject;
    }
    // セッター 値が変更された場合に処理される ゲッターと同名でもよい
    // getterと同名にすることで型が統一される（今回はstring）
    // 最低一つの引数が必要
    set subject(value) {
        if (!this._subject) {
            throw new Error('There is no subject');
        }
        this._subject = value;
    }
    // 派生元のParsonでageがprivateなので、派生先のTeacherで使う際もエラーが出る
    // Parsonのageをprivateからprotectedに変更する → 派生先では使える
    greeting() {
        console.log(`hello! My name is ${this.name}, I'm ${this.age} years old. I teach ${this.subject}.`);
    }
}
const teacher = new Teacher('Quill', 38, 'Math');
console.log(teacher.subject);
teacher.subject = 'music';
teacher.greeting();
// static
//Mathのようにnewでインスタンスを作らずにつかう
Math.random();
// Abstractクラス
// Abstract:抽象的な
// 継承策のクラスで必ず書かれるメソッドを
class Parson2 extends Parson {
    constructor(name, age) {
        super(name, age);
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    greeting() {
        console.log(`hello! My name is ${this.name}. I'm ${this.age} years old`);
        this.explainJob();
    }
}
//staticを定義する
// staticはインスタンスを作っていないのでthisではつかえない（thisはインスタンスを指す）
// クラス内で使用したい場合は直接クラス名（この場合はParson2）を記述する
// → Parson2.speciesのように
Parson2.species = 'Homo sapiens';
console.log(Parson2.species); //Homo sapiens
console.log(Parson2.isAdult(38)); //true
// Abstractクラス
// Abstract:抽象的な
// 継承策のクラスで必ず書かれるメソッドを
class Doctor extends Parson2 {
    explainJob() {
        console.log("I am a doctor.");
    }
    constructor(name, age) {
        super(name, age);
    }
}
const doctor = new Doctor("Kevin", 32);
doctor.greeting();
