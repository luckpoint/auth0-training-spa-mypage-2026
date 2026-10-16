# React・Auth0 認証管理マイページ

Step 2として、トップ・マイページ・ヘルプ・ログイン後の戻り先の画面と、その間の遷移を実装しています。

## 起動とビルド

Node.js 24系（推奨）または26系を使用します。このフォルダで実行してください。

```sh
npm ci
npm run dev
```

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
