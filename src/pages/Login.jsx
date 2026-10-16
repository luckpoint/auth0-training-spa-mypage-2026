import { useState } from 'react';
import { login, readAuth0Config } from '../lib/auth0.js';

const features = [
  ['パスキー', '端末の生体認証でサインイン'],
  ['追加認証要素', '認証アプリやSMSによる確認'],
  ['パスワード', '変更とリセット'],
];

const messages = {
  unconfigured: 'ログインの設定が完了していません。管理者に連絡してください。',
  failed: 'ログインを開始できませんでした。時間をおいて再度お試しください。',
};

export default function Login() {
  const [status, setStatus] = useState(readAuth0Config() ? 'idle' : 'unconfigured');

  async function handleLogin() {
    setStatus('redirecting');
    try {
      await login();
    } catch {
      setStatus('failed');
    }
  }

  return (
    <main className="landing">
      <section className="intro" aria-labelledby="page-title">
        <h1 id="page-title">マイページ</h1>
        <div className="intro-actions">
          <button
            className="button-primary"
            type="button"
            onClick={handleLogin}
            disabled={status === 'redirecting' || status === 'unconfigured'}
          >
            {status === 'redirecting'
              ? 'ログイン画面へ移動中…'
              : <>ログインして管理を開始 <span aria-hidden="true">→</span></>}
          </button>
          <button className="link-secondary" type="button">新規登録</button>
        </div>
        {messages[status] && <p className="notice-error" role="alert">{messages[status]}</p>}
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
