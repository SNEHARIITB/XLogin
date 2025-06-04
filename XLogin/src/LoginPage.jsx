import { useState } from "react";

const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loggedin, setLoggedin] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit =(e) =>{
        e.preventDefault()
        if(username == "user" && password == "password"){
            setLoggedin(true);
            setError(false);
        }
        else{
            setError(true);
        }
        
    }

    return(
        <>
            <h1>Login Page</h1>
            {loggedin ? 
            
                <h2>Welcome, user!</h2>

                :
                <>
                {error && <h5>Invalid username and password</h5> }
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Username">Username:</label>
                    <input id="Username" type="text" value={username} required onChange={(e) => setUsername(e.target.value)}/>
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                </>
            }

        </>
    );
}
export default LoginPage;