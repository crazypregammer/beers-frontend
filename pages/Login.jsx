function Login() {

    const login = () => {
        if(email == "user" || password == user) {
            alert("Logged in");
        }        
    }

    return(
        <form action="" onSubmit={login}>
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" value={email}/>
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" value={password}/>
            <button type="submit">Login</button>
            <button>Back</button>
        </form>
    )
}

export default Login;