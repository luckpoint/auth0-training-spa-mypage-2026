import { Link } from 'react-router';

const topics = [
  ['lost-device', '端末を紛失した場合'],
  ['code-not-arriving', '認証コードが届かない場合'],
  ['contact', 'お問い合わせについて'],
];

export default function Help() {
  return (
    <main className="page">
      <h1>お困りの場合</h1>
      {topics.map(([id, title]) => (
        <section key={id} id={id} aria-labelledby={`${id}-title`}>
          <h2 id={`${id}-title`}>{title}</h2>
          <p>内容は準備中です。</p>
        </section>
      ))}
      <p><Link to="/mypage">マイページに戻る</Link></p>
    </main>
  );
}
