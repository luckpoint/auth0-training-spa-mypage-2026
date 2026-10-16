import { Link } from 'react-router';

const features = [
  ['パスキー', '端末の生体認証でサインイン'],
  ['追加認証要素', '認証アプリやSMSによる確認'],
  ['パスワード', '変更とリセット'],
];

export default function Login() {
  return (
    <main className="landing">
      <section className="intro" aria-labelledby="page-title">
        <h1 id="page-title">マイページ</h1>
        <div className="intro-actions">
          <Link className="button-primary" to="/mypage">
            ログインして管理を開始 <span aria-hidden="true">→</span>
          </Link>
          <button className="link-secondary" type="button">新規登録</button>
        </div>
      </section>
      <section className="features" aria-labelledby="features-title">
        <h2 id="features-title">管理できる項目</h2>
        <dl>
          {features.map(([term, detail]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
