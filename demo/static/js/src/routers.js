import Home from './components/home'
import Form from './components/form'
import Data from './components/data'


const router = {
    getComponent(pathname) {
        switch (pathname) {
            case '/':
                return Home;
            case '/form/':
                return Form;
            case '/data/':
                return Data;
            default :
                return Home
        }
    }
};

export default router;
