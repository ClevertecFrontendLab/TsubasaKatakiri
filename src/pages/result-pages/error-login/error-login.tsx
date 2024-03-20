/// <reference types="vite-plugin-svgr/client" />

import LayoutLogin from '@components/layout-login/layout-login';
import MessageWindow from '@components/message-window/message-window';
import Warning from '../../../resources/icons/warning.svg?react';
import { history } from '@redux/configure-store';

const ErrorLogin = () => {
    const handleClick = () => {
        history.push('/auth')
    }

    return (
        <LayoutLogin>
            <MessageWindow
                icon={<Warning/>}
                header={'Вход не выполнен'}
                message={'Что-то пошло не так. Попробуйте еще раз.'}
                buttonText={'Повторить'}
                buttonTestId={'login-retry-button'}
                action={handleClick}
            />
        </LayoutLogin>
    );
};

export default ErrorLogin;