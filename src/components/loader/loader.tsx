import classes from './loader.module.scss';
import Lottie from 'react-lottie';
import loader from '../../resources/Loader.json';

const Loader = () => {
    return (
        <div data-test-id='loader' className={classes.loader}>
            <Lottie options={{loop: true, autoplay: true, animationData: loader}} width={150} height={150}/>
        </div>
    );
};

export default Loader;