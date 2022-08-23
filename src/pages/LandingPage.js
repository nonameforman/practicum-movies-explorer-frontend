import { Header } from '../components/Header/Header.js';
import { AuthNavigation } from '../components/Header/AuthNavigation/AuthNavigation.js';
import { MoviesNavigation } from '../components/Header/MoviesNavigation/MoviesNavigation.js';
import { Landing } from '../components/Landing/Landing.js';
import { Footer } from '../components/Footer/Footer.js';

export const LandingPage = ({loggedIn}) => {
    return (
        <>
            <Header>
                {loggedIn ?
                    <MoviesNavigation />
                    :
                    <AuthNavigation />
                }
            </Header>
            <Landing />
            <Footer />
        </>
    );
}
