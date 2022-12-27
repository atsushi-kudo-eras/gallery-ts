# お題でお絵かき づほギャラリー
- Reactで作ったよ
- プロトタイプはJSだったけどTSに移行したよ
- sassを使っていたけどReach UIを使ってみたよ
- Material UIも候補にあったけどカスタマイズにコストがかかると判断したよ
- 基本設計, DB設計, フロントエンド実装は僕、バックエンドはネキに担当してもらったよ


## 基本設計
### ページ一覧
  - /      : gallery本体
  - /admin : 管理画面

### 機能
- 共通
  - ページにアクセスした際、GET reqを送信
  - resを処理して表示する

- /admin
  - 表示画像選択機能
    - 一覧の中から画像がクリックされた際、POST reqでIDを送信
    - 同期処理で画面停止
    - resで画面更新
  - ログイン画面作るかも

### 使用プラグイン
- react-router-dom
- Reach UIあたり？

## DBイメージ
```
gallery.data
+----+----------+----------+------------+--------+
| ID | authorID |   url    |    date    | delflg |
+----+----------+----------+------------+--------+
|  0 |        0 | http://~ | 2022/11/30 |      0 |
+----+----------+----------+------------+--------+
|  1 |        1 | http://~ | 2022/11/30 |      0 |
+----+----------+----------+------------+--------+

gallery.authors
+----------+-----------------------+
| authorID |        author         |
+----------+-----------------------+
|        0 | 志津子                |
+----------+-----------------------+
|        1 | ムキムキドリルまさのり |
+----------+-----------------------+
```

## フロントエンド環境構築
### 環境構築
- Install node if you haven't installed yet.
- Change directory into project root on your terminal.
- Execute `npm install` or `yarn install` on your terminal.

### 実行
- Execute `yarn start` or `npm start` then automatically open [http://localhost:3000](http://localhost:3000).

