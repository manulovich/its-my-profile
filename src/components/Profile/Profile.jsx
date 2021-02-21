import './Profile.css';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import PostBlock from '../PostBlock/PostBlock';
import Avatar from './ava.jpg';

const Profile = (props) => {
    return (
        <section className="profile profile--container item--box-shadow">
            <div className="profile__main">
                <div className="profile__avatars item--box-shadow">
                    <img src={Avatar} alt="profile"/>
                </div>
                <div className="profile__name-and-link">
                    <h2 className="profile__name item--box-shadow">Manul</h2>
                    <a target="__blank" href="#" class="profile__link-to-git item--box-shadow">my link to github</a>
                </div>
            </div>
            
            <SocialNetworks additionalClass={`profile__social-networks ${props.additionalClass}`}/>
            <PostBlock additionalClass="porfile__post-section" />
        </section>
    );
};

export default Profile;