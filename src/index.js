import _ from 'lodash';
​
const propertyData = {
  id: 1,
  propertyName: '1BR Japanese-style Private Room near Kyoto Station',
  propertyType: 'private',
  cancelPolicy: 'strict',
  roomNum: 1,
  bathroomNum: 1,
  priceInDollars: 50,
  host: {
    id: 1,
    firstName: 'Tom'
  }
}
​
function handleClick(e) {
  e.preventDefault();
  const mainEl = document.getElementById('main');
  /* 
    getDataを呼び出して、mainEl.innerHTMLを利用して、結果を出力します。
  */
}
​
function getData() {
  /* 
    fetchDataを呼び出して、戻ってきたデータのsuccessの値を元にresolveで物件データまたは、rejectでエラーメッセージを返す。
  */
}
​
function fetchData() {
  /* 
    lodashのrandom()を使って、80%の確率で正しいデータを返し、20%の確率でエラーを返すようにしましょう。
    またsetTimeoutを利用して、1秒待ってから結果を得るようにします。
  */
 
  new Promise(function(resolve, reject) {
    const showData =  _.random(1,5);
    if (showData >= 4)　{
      resolve()
    } 
   else {
     reject()
    }
  });
  // Step 1: 生成コードの構文をまずはそのままここに書けます。構文だけ先に書いて、あとで中身を埋めていく手法ですね

  // Step 2: executor部分を書いていきます。「もし80%の確率に該当したら正しいデータを返し、それ以外の20%の確率であればエラーを返す」に着目すると、基礎編で習得したとある技法が使えます。これも構文だけ書いて、あとで中身を埋めていきます。
​
  // Step 3: 「もし80%の確率に該当したら正しいデータを返し、それ以外の20%の確率であればエラーを返す」を条件式で用意しなければいけませんが、確率もlodashで表現すると簡単です。lodashの_.randomメソッドを公式ドキュメントで調べましょう。構文がわかれば、構文だけ先に書きます。
​
  // Step 4: _.randomメソッドの構文内は、_.random(生成するランダムな数値のスタート地点, 生成するランダムな数値の終了地点);なので、_.random(0%の確率, 100%の確率); とすると良さそうです。
​
  // Step 5: 確率の表現には、分数を考え方として使用します。80%を分数で表現すると80/100（100分の80）。約分をしていくと、まず8/10になり、2でさらに約分ができ、最終的な約分の数値は4/5（5分の4）になります。100%は100/100なので、80%の分母が5であれば5/5とすれば、最終的に5で約分ができ、1/1、つまり1となる性質を利用します。
​
  // 分母を5で統一することができますので、_.randomメソッド内には分子部分だけ書けばOKです。_.random(1, 5); これを視覚的にわかりやすく書くと、_.random(1/5, 5/5);（5分の1 = 0%, 5分の5 = 100%）です。これを定数に入れておくと、if文の条件式が比較的記述しやすくなります
}
​
{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", handleClick);
