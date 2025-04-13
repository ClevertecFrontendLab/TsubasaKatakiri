import './App.css';

import { Route, Routes } from 'react-router';

import JuiciestPage from '~/pages/juiciest-page';
import MainPage from '~/pages/main-page';
import VeganPage from '~/pages/vegan-page';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/vegan' element={<VeganPage />} />
            <Route path='/juiciest' element={<JuiciestPage />} />
        </Routes>
    );
}

export default App;
