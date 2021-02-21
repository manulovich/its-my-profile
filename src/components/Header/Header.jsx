import './Header.css';
import Logo from '../Logo/Logo';
import NowProf from '../Prof/NowProf';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <Logo additionalClass="header__logo" />
                    <NowProf additionalClass="header__now-prof" />
                </div>
            </div>
        </header>
    );
};

export default Header;