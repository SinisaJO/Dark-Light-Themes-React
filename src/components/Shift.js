import styled from "styled-components";
import { GiMoonBats } from "react-icons/gi";
import { GiSun } from "react-icons/gi";


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.background};
    transition: all .5s ease;
`;


const Anchor = styled.a`
    cursor: pointer;
    margin: 1rem;
`

const styleLight = { color: "gold" };


export default function Shift(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <GiMoonBats size={60} /> : <GiSun style={styleLight} size={60} />;

    return (
        <Container>
                <Anchor onClick={changeTheme}>
                    {icon}
                </Anchor>
        </Container>
    );
};