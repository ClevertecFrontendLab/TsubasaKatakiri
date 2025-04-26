import { Route, Routes } from 'react-router';

import JuiciestPage from '~/pages/juiciest-page';
import MainPage from '~/pages/main-page';
import VeganPage from '~/pages/vegan-page';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <Routes>
            <Route index element={<MainPage />} />
            <Route path='vegan'>
                <Route index element={<VeganPage />} />
                <Route path=':subcategory' element={<VeganPage />} />
            </Route>
            <Route path='/juiciest' element={<JuiciestPage />} />
        </Routes>
    );
}

export default App;
