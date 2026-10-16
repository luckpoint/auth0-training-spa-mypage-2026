import { Link } from 'react-router';

export default function MyPage() {
  return (
    <main className="page">
      <h1>マイページ</h1>
      <section aria-labelledby="methods-title">
        <h2 id="methods-title">登録済みの認証要素</h2>
        <p>認証要素の一覧はここに表示されます。</p>
      </section>
      <p><Link to="/">ログアウト</Link></p>
    </main>
  );
}
