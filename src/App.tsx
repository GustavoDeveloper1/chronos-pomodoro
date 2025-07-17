import { Container } from "./components/Container";
import { Heading } from "./components/Heading"

import { TimerIcon } from 'lucide-react';

export const App = () => {
    return (
        <>
            <Container>
                <Heading>
                    LOGO
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