import "./navbar.css"
import {Button, ButtonGroup} from "@mui/material";


const Home = () => {
    return (
        <div className={"navbar"}>
            <div className={"navContainer"}>
                <span className={"logo"}>GroupAA - FBMS</span>
                <div className={"navItems"}>
                    <ButtonGroup>
                        <Button variant="contained">Register</Button>
                        <Button variant="contained">Login</Button>
                    </ButtonGroup>

                </div>
            </div>
        </div>
    )
}

export default Home;
