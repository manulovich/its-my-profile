import './Response.css';
import like from './images/like.png';
import repost from './images/repost.png';

const Response = () => {
	return (
		<div className="response post__response">
			<div className="response__item response__like">
				<img src={like} alt="like" />
			</div>
			<div className="response__item response__repost">
				<img src={repost} alt="repost" />
			</div>
		</div>
	);
};

export default Response;