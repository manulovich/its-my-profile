import LogoStyle from './Logo.module.css';


const Logo = () => {
    return (
         <div className={`${LogoStyle.logo} header__logo`}>
            <h2 className={`${LogoStyle.logo__part} ${LogoStyle['logo__part--left']}`}>its</h2>
            my
            <h2 className={`${LogoStyle.logo__part} ${LogoStyle['logo__part--right']}`}>profile</h2>
        </div>
    );
};

export default Logo;