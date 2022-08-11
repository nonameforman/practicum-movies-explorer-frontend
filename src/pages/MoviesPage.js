import { Header } from '../components/Header/Header.js';
import { MoviesNavigation } from '../components/Header/MoviesNavigation/MoviesNavigation.js';
import { Movies } from '../components/Movies/Movies.js';
import { Footer } from '../components/Footer/Footer.js';

export const MoviesPage = () => {
    return (
        <>
            <Header>
                <MoviesNavigation />
            </Header>
            <Movies />
            <Footer />
        </>
    );
}
