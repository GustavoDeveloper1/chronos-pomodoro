import { Container } from "./components/Container";
import { Heading } from "./components/Heading"


import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

export const App = () => {
    return (
        <>
            <Container>
                <Heading>
                    <Logo />
                </Heading>
            </Container>
            <Container>
                <Heading>
                    <Menu/>
                </Heading>
            </Container>
        </>

    )
}