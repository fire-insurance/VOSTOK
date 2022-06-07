import styles from "../styles/Home.module.scss"
import cn from "classnames";
import TitleBlock from "../components/TitleBlock/TitleBlock";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import Services from "../components/Services/Services";
import Contacts from "../components/Contacts/Contacts";
import Script from "next/script";
import CallForm from "../components/CallForm/CallForm";
import Footer from "../components/Footer/Footer";

const Home = () => {
    const ymaps_link = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=${process.env.REACT_APP_YMAPS_KEY}`
    return (
        <>
            <div className={cn('container', styles['home-container'])}>
                <TitleBlock />
                <About />
            </div>
            <Team />
            <Services />
            <Contacts />
            <CallForm />
            <Footer />
            <Script src={ymaps_link} strategy='beforeInteractive' />
            <Script src="/maps.js" strategy='beforeInteractive'></Script>
        </>
    )
}

export default Home;