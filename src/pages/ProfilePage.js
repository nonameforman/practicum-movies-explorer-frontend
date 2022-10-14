import { Header } from '../components/Header/Header.js';
import { MoviesNavigation } from '../components/Header/MoviesNavigation/MoviesNavigation.js';
import { Profile } from '../components/Profile/Profile.js';

export const ProfilePage = () => {
    return (
        <>
            <Header>
                <MoviesNavigation />
            </Header>
            <Profile 
                name='Виталик'
            />
        </>
    );
}
