import LayoutLogin from '@components/layout-login/layout-login';
import classes from './auth.module.scss';
import logo from '../../resources/img/Logo_big.png';
import LoginModule from '@components/login-module/login-module';


const Auth = () => {
    return (
        <LayoutLogin>
            <img src={logo} className={classes.logo} alt='CleverFit'/>
            <LoginModule/>
        </LayoutLogin>
    );
};

export default Auth;