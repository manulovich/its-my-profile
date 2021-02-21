import './NowProf.css';

const NowProf = (props) => {
    return (
        <div className={`now-prof ${props.additionalClass || ' '}`}>
            <h3 className="now-prof__name">frontend developer</h3>
            <div className="now-prof__icon"></div>
        </div>
    );
};

export default NowProf;