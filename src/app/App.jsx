import { Link, Route, Routes } from 'react-router';
import Login from '../pages/Login.jsx';
import Callback from '../pages/Callback.jsx';
import MyPage from '../pages/MyPage.jsx';
import Help from '../pages/Help.jsx';
import NotFound from '../pages/NotFound.jsx';

function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" to="/">
        <span className="wordmark">kyndryl</span>
      </Link>
      <nav aria-label="サイト">
        <Link to="/help">ヘルプ</Link>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
