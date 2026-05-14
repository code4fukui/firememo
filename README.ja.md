# firememo

Firebase Cloud Firestoreを利用した、シンプルなクライアントサイドのメモWebアプリケーションです。

## プレビュー

ユーザーインターフェースは、メモの作成や編集を行うための大きなテキストエリア、「追加」および「削除」ボタン、そして下部に表示される既存のメモのリストで構成されています。各メモの1行目がリスト上のタイトルとして機能します。

## 機能

- **メモの作成・表示・削除:** メモに対する完全なCRUD機能を提供します。
- **永続的ストレージ:** メモはCloud Firestoreデータベースに直接保存されます。
- **シンプルなインターフェース:** すばやくメモを取るための、すっきりとしたシングルページアプリケーション（SPA）です。
- **動的なリスト:** メモのリストは、各メモの1行目をタイトルとして使用します。

## はじめに

以下の手順に従って、ローカルマシン上でプロジェクトのコピーをセットアップし、実行してください。

### 前提条件

- [Firebaseアカウント](https://firebase.google.com)
- モダンWebブラウザ
- ローカルWebサーバー。このアプリはES Modulesを使用しており、`file://`プロトコルから実行するとCORSポリシーによってブロックされるため、サーバーが必要です。[live-server](https://www.npmjs.com/package/live-server)の使用を推奨します。

### インストールとセットアップ

1. ローカルマシンに**このリポジトリをクローン**します。

2. **Firebaseプロジェクトのセットアップ:**
   a. [Firebase Console](https://firebase.google.com)にアクセスし、新しいプロジェクトを作成します。
   b. プロジェクトに新しいWebアプリを追加します。
   c. プロジェクトで[Cloud Firestoreを有効化](https://firebase.google.com/docs/firestore?hl=en)します。データベースの作成とロケーションの選択を求められます。
   d. Webアプリの設定（プロジェクトの設定 > 全般 > マイアプリ）から、Firebase SDKの構成オブジェクトを見つけてコピーします。

3. **アプリケーションの設定:**
   a. プロジェクトのルートディレクトリで、`firebaseConfig_template.js`をコピーし、新しく`firebaseConfig.js`という名前のファイルを作成します。
   b. `firebaseConfig.js`を開き、Firebaseプロジェクトからコピーした構成オブジェクトを貼り付けます。以下のようになります。

   ```javascript
   // Your web app's Firebase configuration
   export const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "your-project-id.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project-id.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:..."
   };
   ```
   *（注: 認証情報を非公開に保つため、`firebaseConfig.js`は`.gitignore`に含まれています。）*

4. **アプリケーションの実行:**
   a. ローカルサーバーがない場合は、npmを使用してインストールできます。
   ```sh
   npm install -g live-server
   ```
   b. プロジェクトのルートディレクトリからサーバーを起動します。
   ```sh
   live-server
   ```
   c. ブラウザで自動的に`index.html`が開き、メモアプリが実行されます。

## 仕組み

このプロジェクトは、Firebase SDK（v9、モジュラー版）を使用してCloud Firestoreデータベースと通信します。

- **コレクション:** すべてのメモは`list1`という1つのコレクションに保存されます。
- **ドキュメント:** 各メモはコレクション内の1つのドキュメントです。各ドキュメントの一意のIDには、作成時のタイムスタンプが使用されます。
- **ドキュメントデータ:** 各ドキュメントには、`dt`（作成時のタイムスタンプ）と`body`（メモのテキスト内容）の2つのフィールドが含まれます。

## ライセンス

MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
