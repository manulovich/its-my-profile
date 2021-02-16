import './Profile.css';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import Avatar from './ava.jpg';

const Profile = () => {
    return (
        <section className="profile main__content main__item--box-shadow">
            <div className="profile__main">
                <div className="profile__avatars main__item--box-shadow">
                    <img src={Avatar} alt="profile"/>
                </div>
                <div className="profile__name-and-link">
                    <h2 className="profile__name main__item--box-shadow">Manul</h2>
                    <a target="__blank" href="#" class="profile__link-to-git main__item--box-shadow">my link to github</a>
                </div>
            </div>
            
            <SocialNetworks/>
        </section>
    );
};

export default Profile;