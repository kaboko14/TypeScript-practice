// tsconfig.jsonの"experimentalDecorators": trueのコメントアウトを外す
// フレームワークでよく使われる

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
function Logging(message: string) {
  return function Logging(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
    console.log(message);
  }
}


// Component デコレータでclassのnameに定義された文字列を#app内にh1タグで囲んで描写する
function Component(template: string, selector: string, selector2: string) {

  //渡されるコンストラクタ関数に引数が動的に変化する場合、引数をいくつでも受け入れできるように指定する必要がある
  // (constructor: {new(...args: any[])}: {})
  //any型の配列のスプレッド構文を利用する
  return function (constructor: { new(...args: any[]): {name: string} }) {
    const mountedElement = document.querySelector(selector);
    // classのnameを取得するためにインスタンスの生成が必要になるが、引数の型をFunctionにするだけではTSはそれがコンストラクタ関数なのか普通の関数なのか判断できないためにエラーで出る
    // newができる型であることを明示しないといけない
    // 引数に予約語であるnew()を指定
    const instance = new constructor();
    if (mountedElement) {
      mountedElement.innerHTML = template;
      mountedElement.querySelector(selector2)!.textContent = instance.name;
    }
  }
}

// Decorationしたい場所に@をつける
// デコレータファクトリを利用する際は()をつける
//デコレータが複数あるときは下から上に実行される
@Component('<h1>{{ name }}</h1>', '#app1', 'h1')
@Logging('Logging user')
class User {
  name = 'Quill';
  constructor() {
    console.log('User was created!');
  }
}
const user = new User();

@Component('<h2>{{ name }}</h2>', '#app2', 'h2')
class User2 {
  name = 'Kevin';
}