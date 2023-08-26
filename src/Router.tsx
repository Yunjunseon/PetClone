import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Main from './pages/Main/Main/Main';
import Login from './pages/Login/Login';
import MemoryPage from './pages/MemoryPage/MemoryPage';
import MyPage from './pages/MyPage/MyPage';
import ReviseInfo from './pages/MyPage/ReviseInfo/ReviseInfo';
import FuneralPage from './pages/Main/FuneralPage/FuneralPage';
import MyAlbumContainer from './pages/MemoryPage/MyAlbum/MyAlbumContainer';
import QuestionAlbumContainer from './pages/MemoryPage/QuestionsAlbum/QuestionAlbumContainer';
import SharedAlbumContainer from './pages/MemoryPage/SharedAlbum/SharedAlbumContainer';
import WriteAlbum from './pages/Letter/Create/WriteAlbum';
import MemoryDetail from './pages/MemoryDetail/MemoryDetail';
import UnAuthorized from './pages/Unauthorized/Unauthorized';
import SignUp from './pages/SignUp/SignUp/Singup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main */}
        <Route path="/" element={<Main />} />
        <Route path="/:username" element={<Main />} />
        <Route path="/login" element={<Login />} />

        {/* SignUp */}
        <Route path="/signup" element={<SignUp />}>
          <Route path="activationFirst" element={<SignUp />} />
          <Route path="activationSecond" element={<SignUp />} />
          <Route path="activationThird" element={<SignUp />} />
        </Route>

        {/* Letter */}
        <Route path="/letter" element={<MemoryPage />}>
          <Route path="create" element={<MyAlbumContainer />} />
          <Route path="calendarList" element={<QuestionAlbumContainer />} />
          <Route path="calendarView/:id" element={<SharedAlbumContainer />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Profile */}
        <Route path="/mypage" element={<MyPage />} />

        {/* Error-Handling */}
        <Route path="/unauthorized" element={<UnAuthorized />} />
        <Route path="notFound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
