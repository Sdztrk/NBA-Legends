import { Container } from "react-bootstrap";

import nbaLogo from "../../assets/nba-logo.png"

const Header = () => {
    return(
        <Container>
        <img src={nbaLogo} alt="img" />
        <h1>NBA Legends</h1>
        </Container>
    )
}

export default Header;