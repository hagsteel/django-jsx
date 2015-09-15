import About from "./components/about"
import Home from "./components/home"


const router = {
    getComponent(pathname) {
        switch (pathname) {
            case "/":
                return Home;
            case "/about/":
                return About;
            default :
                return Home
        }
    }
};

export default router;
