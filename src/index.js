import _ from 'lodash';
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

function handleClick(e) {
  e.preventDefault();
  const mainEl = document.getElementById('main');
  return getData().then((output) => {
    mainEl.innerHTML = `
      <div class="propertyInfo">
        <p>宿名: ${output.propertyName}</p>
        <p>宿のタイプ: ${output.propertyType}</p>
        <p>キャンセルポリシー: ${output.cancelPolicy}</p>
        <p>部屋数: ${output.roomNum}</p>
        <p>バスルーム数: ${output.bathroomNum}</p>
        <p>支払い通貨(USD):${output.priceInDollars}</p>
        <p>ホスト: ${output.host.firstName}</p>
      </div>
      `
  })
  .catch((err) => {
    alert(err.message);
  })
}
​
function getData() {
    /* 
    fetchDataを呼び出して、戻ってきたデータのsuccessの値を元にresolveで物件データまたは、rejectでエラーメッセージを返す。
  */
  return fetchData().then((result) => {
    if (result.success) {
      return Promise.resolve(result.propertyData);
    }
    else {	
      return Promise.reject(result.message);
    }
  })
}

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