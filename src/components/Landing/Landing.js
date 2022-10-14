import { Promo } from '../Landing/Promo/Promo.js';
import { NavTab } from '../Landing/NavTab/NavTab.js';
import { AboutProject } from '../Landing/AboutProject/AboutProject.js';
import { Techs } from '../Landing/Techs/Techs.js';
import { AboutMe } from '../Landing/AboutMe/AboutMe.js';
import { Portfolio } from '../Landing/Portfolio/Portfolio.js';

export const Landing = () => {
    return (
        <main className='main'>
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
    );
}
