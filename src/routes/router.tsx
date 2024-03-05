import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from './route-paths';
import { MainPage } from '@pages/main-page';
import Auth from '@pages/auth/auth';
import ConfirmEmail from '@pages/confirm-email/confirm-email';
import ChangePassword from '@pages/change-password/change-password';
import Success from '@pages/result-pages/success/success';
import Error from '@pages/result-pages/error/error';
import ErrorLogin from '@pages/result-pages/error-login/error-login';
import ErrorUserExists from '@pages/result-pages/error-user-exists/error-user-exists';
import SuccessChangePassword from '@pages/result-pages/success-change-password/success-change-password';
import ErrorChangePassword from '@pages/result-pages/error-change-password/error-change-password';
import ErrorCheckEmailNoExist from '@pages/result-pages/error-check-email-no-exist/error-check-email-no-exist';
import ErrorCheckEmail from '@pages/result-pages/error-check-email/error-check-email';
import FeedbackPage from '@pages/feedback-page/feedback-page';
import { useEffect } from 'react';
import { history } from '@redux/configure-store';


const Router = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
        if(location.pathname === ROUTE_PATHS.root){
            if(accessToken){
                history.push(ROUTE_PATHS.main);
            } else {
                const gtoken = new URL(window.location.href).searchParams.get('accessToken');
                if (gtoken) {
                    localStorage.setItem('accessToken', gtoken);
                    history.push(ROUTE_PATHS.main);
                } else {
                    history.push(ROUTE_PATHS.auth);
                }
            }
        } else if ((location.pathname.startsWith('/main') || location.pathname.startsWith('/feedbacks')) && !accessToken){
            history.push(ROUTE_PATHS.auth);
        } else if ((location.pathname.startsWith('/auth') || location.pathname.startsWith('/result')) && accessToken){
            history.push(ROUTE_PATHS.main);
        }
    }, [navigate])

    useEffect(() => {
        window.addEventListener('beforeunload', () => sessionStorage.removeItem('accessToken'));
    }, [])

    return (
        <Routes>
            <Route path={ROUTE_PATHS.root}/>
            <Route path={ROUTE_PATHS.main} element={<MainPage />} />
            <Route path={ROUTE_PATHS.auth} element={<Auth/>}/>
            <Route path={ROUTE_PATHS.registration} element={<Auth/>}/>
            <Route path={ROUTE_PATHS.confirmEmail} element={<ConfirmEmail/>}/>
            <Route path={ROUTE_PATHS.changePassword} element={<ChangePassword/>}/>
            <Route path={ROUTE_PATHS.success} element={<Success/>}/>
            <Route path={ROUTE_PATHS.successChangePassword} element={<SuccessChangePassword/>}/>
            <Route path={ROUTE_PATHS.resultRoot} element={<Navigate to={ROUTE_PATHS.auth}/>}/>
            <Route path={ROUTE_PATHS.error} element={<Error/>}/>
            <Route path={ROUTE_PATHS.errorLogin} element={<ErrorLogin/>}/>
            <Route path={ROUTE_PATHS.errorUserExist} element={<ErrorUserExists/>}/>
            <Route path={ROUTE_PATHS.errorChangePassword} element={<ErrorChangePassword/>}/>
            <Route path={ROUTE_PATHS.errorCheckEmailNoExist} element={<ErrorCheckEmailNoExist/>}/>
            <Route path={ROUTE_PATHS.errorCheckEmail} element={<ErrorCheckEmail/>}/>
            <Route path={ROUTE_PATHS.feedbacks} element={<FeedbackPage />} />
        </Routes>
    );
};

export default Router;