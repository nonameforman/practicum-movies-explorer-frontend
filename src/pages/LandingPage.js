import { Header } from '../components/Header/Header.js';
import { AuthNavigation } from '../components/Header/AuthNavigation/AuthNavigation.js';
import { Landing } from '../components/Landing/Landing.js';
import { Footer } from '../components/Footer/Footer.js';

export const LandingPage = () => {
    return (
        <>
            <Header>
                <AuthNavigation />
            </Header>
            <Landing />
            <Footer />
        </>
    );
}
