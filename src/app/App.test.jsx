import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';

const render = (path) =>
  renderToStaticMarkup(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );

describe('App routes', () => {
  it.each([
    ['/', 'マイページ'],
    ['/callback', 'ログイン処理'],
    ['/mypage', 'マイページ'],
    ['/help', 'お困りの場合'],
    ['/no-such-page', 'ページが見つかりません'],
  ])('%s を表示する', (path, heading) => {
    expect(render(path)).toContain(`>${heading}</h1>`);
  });

  it('トップからマイページへの仮リンクを持つ', () => {
    expect(render('/')).toContain('href="/mypage"');
  });

  it('全画面のヘッダーにヘルプへのリンクを持つ', () => {
    expect(render('/mypage')).toContain('href="/help"');
  });
});
