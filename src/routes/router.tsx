import { Routes, Route, Navigate } from 'react-router-dom';
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

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={ROUTE_PATHS.main}/>}/>
            <Route path={ROUTE_PATHS.main} element={<MainPage />} />
            <Route path={ROUTE_PATHS.auth} element={<Auth/>}/>
            <Route path={ROUTE_PATHS.registration} element={<Auth/>}/>
            <Route path={ROUTE_PATHS.confirmEmail} element={<ConfirmEmail/>}/>
            <Route path={ROUTE_PATHS.changePassword} element={<ChangePassword/>}/>
            <Route path={ROUTE_PATHS.success} element={<Success/>}/>
            <Route path={ROUTE_PATHS.successChangePassword} element={<SuccessChangePassword/>}/>
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