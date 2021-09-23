import LoginForm from "../../components/login";
import { useState } from "react";
import Display from "../../components/display";

const Login = () => {

    const [authenticated, setAuthenticated] = useState(false);
    const [showDisplay, setShowDisplay] = useState(false);

    return(
        <>
            <div>Login</div>
            <LoginForm setAuthenticated={setAuthenticated} setShowDisplay={setShowDisplay}/>
            {showDisplay && <Display authenticated={authenticated}/>}
        </>
    )
}

export default Login;