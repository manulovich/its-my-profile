import './SocialNet.css';
import vk from './images/vk.png';
import facebook from './images/facebook.png';
import inst from './images/instagram.png';
import twitter from './images/twitter.png';

const SocialNetworks = (props) => {
    return (
        <div className={`social-networks ${props.additionalClass || ' '}`}>
            <div className="social-networks__item">
                <img src={vk} alt="vkontakte"/>
            </div>
            <div className="social-networks__item">
                <img src={facebook} alt="facebook"/>
            </div>
            <div className="social-networks__item">
                <img src={inst} alt="instagram"/>
            </div>
            <div className="social-networks__item">
                <img src={twitter} alt="twitter"/>
            </div>
        </div>
    );
};

export default SocialNetworks;