import { Cycles } from "./components/Cycles";
import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";



import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";

export const App = () => {
    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>

                <Menu />

            </Container>
            <Container>
                <CountDown />
            </Container>
            <Container>
                <form className="form" action="">

                    <div className="formRow">
                        <DefaultInput labelText="Task" type="text" id="meuInput" />
                    </div>
                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="formRow">
                        <Cycles />
                    </div>
                    <div className="formRow">
                        <DefaultButton icon={<PlayCircleIcon />} />
                    </div>

                </form>
            </Container>
            <Container>
                <Footer />
            </Container>
        </>

    )
}