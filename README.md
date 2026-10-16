# React・Auth0 認証管理マイページ

Step 3として、トップの「ログインして管理を開始」からAuth0のログイン画面へ進めるようにしています。ログイン後の戻り処理は次のステップで実装します。

## 起動とビルド

Node.js 24系（推奨）または26系を使用します。このフォルダで実行してください。

```sh
npm ci
cp .env.example .env.local
npm run dev
```

`.env.local` には、配布されたAuth0のドメインとクライアントIDを書きます。値がない場合、トップに「ログインの設定が完了していません。」と表示されます。

開発画面：`http://127.0.0.1:5173/`

```sh
npm run build
npm run preview
```

画面のURL：`/`（トップ）、`/mypage`、`/help`、`/callback`。それ以外のURLでは「ページが見つかりません」を表示します。

```sh
npm test
```

ビルド確認：`http://127.0.0.1:4173/`。生成先は `dist/` です。
