import { Link } from 'react-router';

export default function Callback() {
  return (
    <main className="page">
      <h1>ログイン処理</h1>
      <p>ログイン後に戻ってくる画面です。認証処理は今後のステップで接続します。</p>
      <p><Link to="/">トップに戻る</Link></p>
    </main>
  );
}
