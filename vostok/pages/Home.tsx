import styles from "../styles/Home.module.scss"
import cn from "classnames";
import TitleBlock from "../components/TitleBlock/TitleBlock";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import Services from "../components/Services/Services";

const Home = () => {

    return (
        <>
            <div className={cn('container', styles['home-container'])}>
                <TitleBlock />
                <About />
            </div>
            <Team />
            <Services />
        </>
    )
}

export default Home;