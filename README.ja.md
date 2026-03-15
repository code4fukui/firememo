# firememo

Firebase の Cloud Firestore データベースを使ったシンプルなメモアプリです。

## 機能

- メモの作成、表示、削除
- メモの内容は Cloud Firestore に保存される

## 必要環境

- Firebaseアカウント
- Cloud Firestoreの有効化

## 使い方

1. [Firebase](https://firebase.google.com)に登録する
2. [Cloud Firestore](https://firebase.google.com/docs/firestore?hl=ja)を有効化する
3. `firebaseConfig.js` ファイルを作成する (参考: [`firebaseConfig_template.js`](firebaseConfig_template.js))
4. ウェブサーバー (例: `live-server`) を起動し、`index.html`を開く

## ライセンス

MIT License