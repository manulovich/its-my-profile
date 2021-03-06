import './Aside.css';

const Aside = (props) => {
    return (
        <aside className="aside">
            <nav className={`nav aside__nav ${props.additionalClass || ' '}`}>
                <button className="nav__link">profile</button>
                <button className="nav__link">work</button>
                <button className="nav__link">to write</button>
                <button className="nav__link">search</button>
            </nav>
        </aside>
    );
};

export default Aside;