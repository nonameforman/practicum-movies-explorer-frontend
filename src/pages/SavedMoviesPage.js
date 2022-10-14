import { Header } from '../components/Header/Header.js';
import { MoviesNavigation } from '../components/Header/MoviesNavigation/MoviesNavigation.js';
import { SavedMovies } from '../components/SavedMovies/SavedMovies.js'
import { Footer } from '../components/Footer/Footer.js';

export const SavedMoviesPage = () => {
    return (
        <>
            <Header>
                <MoviesNavigation />
            </Header>
            <SavedMovies />
            <Footer />
        </>
    );
}
