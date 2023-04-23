// 追加ボタンを押した時に実行する関数
const onClickAdd = () => {
  // テキストボックスのElementを取得
  const textEl = document.getElementById('add-text');

  // テキストボックスの値を取得
  const text = textEl.value;

  // テキストボックスを初期化(空白にする)
  textEl.value = '';

  // liタグを生成
  const li = document.createElement('li');

  // divタグを生成
  const div = document.createElement('div');

  // pタグを生成(テキストボックスの文字を設定)
  const p = document.createElement('p');
  p.textContent = text;

  // buttonタグを生成(ラベルは削除)
  const button = document.createElement('button');
  button.textContent = '削除'

  // 削除ボタンを押した時に行(li)を削除する処理
  button.addEventListener('click', () => {
    // 削除対象の行(li)を取得
    // closestは親要素に一致する文字列を探すメソッド
    const deleteTarget = button.closest('li');

    // ulタグの配下から上記で特定した行(li)を削除
    document.getElementById('memo-list').removeChild(deleteTarget);
  });

  // divタグの配下にpタグとbuttonタグを設定
  div.appendChild(p);
  div.appendChild(button);

  // liタグの配下に上記のdivタグを設定
  li.appendChild(div);

  // メモ一覧のリストに上記のliタグを設定
  document.getElementById('memo-list').appendChild(li);
};

// 追加ボタンを押した時にonClickAdd関数を実行するように登録
document.getElementById('add-button').addEventListener('click', () => onClickAdd());