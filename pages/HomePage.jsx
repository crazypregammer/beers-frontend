import { Link } from 'react-router-dom';

function HomePage() {
    return(
        <>
            <nav>
                <ul>
                    <Link to="login">
                        <a href="">Login</a>
                    </Link>
                    <Link to="register">
                        <a href="">Sign up</a>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default HomePage;