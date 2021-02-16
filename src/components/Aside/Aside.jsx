import './Aside.css';

const Aside = () => {
    return (
        <aside className="aside main__aside">
            <nav className="nav aside__nav main__item--box-shadow">
                <button className="nav__link">profile</button>
                <button className="nav__link">work</button>
                <button className="nav__link">to write</button>
                <button className="nav__link">search</button>
            </nav>
        </aside>
    );
};

export default Aside;