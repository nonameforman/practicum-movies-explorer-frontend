import './NavTab.css';

export const NavTab = () => {
    return (
        <nav className='nav-tab'>
            <a href='#project' className='nav-tab__link opacity transition'>О проекте</a>
            <a href='#stacks' className='nav-tab__link opacity transition'>Технологии</a>
            <a href='#student' className='nav-tab__link opacity transition'>Студент</a>
        </nav>
    );
}
