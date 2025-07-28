import { Container } from "./components/Container";
import { Heading } from "./components/Heading"


import { Logo } from "./components/Logo";

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
                    menu
                </Heading>
            </Container>
        </>

    )
}