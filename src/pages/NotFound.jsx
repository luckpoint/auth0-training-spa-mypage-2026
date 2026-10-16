import { Link } from 'react-router';

export default function NotFound() {
  return (
    <main className="page">
      <h1>ページが見つかりません</h1>
      <p>URLをご確認ください。</p>
      <p><Link to="/">トップに戻る</Link></p>
    </main>
  );
}
