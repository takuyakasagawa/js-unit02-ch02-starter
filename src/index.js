import _ from 'lodash';
import { promises } from 'fs';
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
/* 
  getDataを呼び出して、mainEl.innerHTMLを利用して、結果を出力します。
*/

function handleClick(e) {
  e.preventDefault();
  const mainEl = document.getElementById('main');
  return getData().then((result) => {
    resolve(mainEl.innerHTML = result.propertyData) 
  })
  .catch((err) => {
    rejct( alert(reject.message) );
  })
}
​
function getData() {
    /* 
    fetchDataを呼び出して、戻ってきたデータのsuccessの値を元にresolveで物件データまたは、rejectでエラーメッセージを返す。
  */
  return fetchData().then((result) => {
    if (result.success) {
      resolve(result.propertyData);
    }
    else {	
      reject();
    }
  })
}

//if (result.succes === true)
//if (result.succes)に省略可能
//if (result.succes === fales)
//if (!result.succes)に省略可能
//true falseは論理値のため書き換えが可能

//return fetchData().then(function (result) {
//return fetchData().then((result) => {
//引数()があればアロー関数に変更できる

//グローバルスコープに入るためプロパティresult.succes
//.then() .catch()の間はセミコロン;入れない

// x,y
// x + y
// x = 3,​ y = 5の時のx+yの合計を求めなさい
// X + y = 8

// function sumData(x, y) {
//   const sum = x + y;
//   console.log(sum);
// }
// sumData(3, 5);

function fetchData() {
  /* 
    lodashのrandom()を使って、80%の確率で正しいデータを返し、20%の確率でエラーを返すようにしましょう。
    またsetTimeoutを利用して、1秒待ってから結果を得るようにします。
  */
 
  new Promise(function(resolve, reject) {
    const showData =  _.random(1,5);
    setTimeout(() => {
      if (showData <= 4)　{
        resolve({ success: true, propertyData: propertyData});
      } 
      else {
        reject({ success: false, message: 'データの取得に失敗しました。' });
      }
    }, 1000);
  });
}
​
{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", handleClick);
}