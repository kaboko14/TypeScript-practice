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
  constructor(public readonly name: string, protected age: number) {
    this.name = name;
    this.age = age;
  }


  // thisがどういうオブジェクトかを明示的に示す事でエラーを防ぐことも可能
  // this: Parsonで型をParsonと同じカタチの型を指定することもできる
  greeting(this: Parson) {
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
  // ゲッター
  get subject() {
    if (!this._subject) {
      throw new Error('There is no subject')
    }
    return this._subject;
  }
  // セッター 値が変更された場合に処理される ゲッターと同名でもよい
  // getterと同名にすることで型が統一される（今回はstring）
  // 最低一つの引数が必要
  set subject(value) {
    if (!this._subject) {
      throw new Error('There is no subject')
    }
    this._subject = value;
  }
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
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
Math.random()

// Abstractクラス→インスタンスは作れない
// 継承のためのクラス
// Abstract:抽象的な
// 継承策のクラスで必ず書かれるメソッドを

abstract class Parson2 extends Parson {
  //staticを定義する
  // staticはインスタンスを作っていないのでthisではつかえない（thisはインスタンスを指す）
  // クラス内で使用したい場合は直接クラス名（この場合はParson2）を記述する
  // → Parson2.speciesのように
  static species = 'Homo sapiens';
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }
  constructor(name: string, age: number) {
    super(name, age);
  }

  greeting() {
    console.log(`hello! My name is ${this.name}. I'm ${this.age} years old`);
    this.explainJob();
  }

  // Abstractクラス
  // Abstract:抽象的な
  // 継承策のクラスで必ず定義することを約束する必要がある
  // es6ではこの定義は必要ない
  abstract explainJob(): void
}

console.log(Parson2.species); //Homo sapiens
console.log(Parson2.isAdult(38)); //true

class Doctor extends Parson2 {
  // staticをつけることにより、staticメソッドからstaticを呼び出せる
  //
  private static instance: Doctor; //フィールドの用意 instanceはDoctorの形をしてほしいのでDoctorを定義
  // Abstractで定義されたメソッドは必ず継承先で定義する必要がある
  explainJob() {
    console.log("I am a doctor.");
  }
//constructorにprivateをつけることが出来る
  //シングルトンパターンを作るために用いる
  //インスタンスを一回しかつくれない
  private constructor(name: string, age: number) {
    super(name, age);
  }

  static getInstance() {
    //初回のgetInstanceはnewでインスタンスを作成する
    //2回目以降はDoctor.instanceが存在するので、初回で作られたDoctor.instanceを返す
    //つまり、何回実行しても同じインスタンスしか返さない
    if (Doctor.instance) return Doctor.instance;
    Doctor.instance = new Doctor("kevin", 32);
    return Doctor.instance;
}
}

// 外部からnewが使えなくなる
// クラスの定義の中でのみ使うことが出来る
// const doctor = new Doctor("Kevin", 32);これはできない

// staticで作成したgetInstanceメソッドからインスタンスを作る
const doctor1 = Doctor.getInstance();