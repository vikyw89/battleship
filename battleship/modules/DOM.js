import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./components/Main"

class DOM {
    static init = () => {
        const app = document.querySelector('#app')
        app = (
            <Header />
            <Main />
            <Footer />
        ) 
    }
}