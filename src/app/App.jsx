const features = [
  ['パスキー', '端末の生体認証でサインイン'],
  ['追加認証要素', '認証アプリやSMSによる確認'],
  ['パスワード', '変更とリセット'],
];

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/">
        <span className="wordmark">kyndryl</span>
      </a>
    </header>
  );
}

function Landing() {
  return (
    <main className="landing">
      <section className="intro" aria-labelledby="page-title">
        <h1 id="page-title">マイページ</h1>
        <div className="intro-actions">
          <button className="button-primary" type="button">
            ログインして管理を開始 <span aria-hidden="true">→</span>
          </button>
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

export default function App() {
  return (
    <>
      <SiteHeader />
      <Landing />
    </>
  );
}
