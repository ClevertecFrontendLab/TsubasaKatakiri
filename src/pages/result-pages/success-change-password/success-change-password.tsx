/// <reference types="vite-plugin-svgr/client" />


import LayoutLogin from '@components/layout-login/layout-login';
import MessageWindow from '@components/message-window/message-window';
import SuccessIcon from '../../../resources/icons/success.svg?react';
import { history } from '@redux/configure-store';

const SuccessChangePassword = () => {
    const handleClick = () => {
        history.push('/auth')
    }

    return (
        <LayoutLogin>
            <MessageWindow
                icon={<SuccessIcon/>}
                header={'Пароль успешно изменен'}
                message={'Теперь можно войти в аккаунт, используя\n свои e-mail и пароль.'}
                buttonText={'Вход'}
                buttonTestId={'change-entry-button'}
                action={handleClick}
            />
        </LayoutLogin>
    )
};

export default SuccessChangePassword;