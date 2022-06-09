import styles from "../styles/Home.module.scss"
import cn from "classnames";
import TitleBlock from "../components/TitleBlock/TitleBlock";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import Services from "../components/Services/Services";
import Contacts from "../components/Contacts/Contacts";
import CallForm from "../components/CallForm/CallForm";

const Home = () => {
    return (
        <>
            <div className={cn('container')}>
                <TitleBlock />
                <About />
            </div>
            <Team />
            <Services />
            <Contacts />
            <CallForm source={'с главной страницы'}/>

        </>
    )
}

export default Home;