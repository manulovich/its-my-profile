import './Post.css';
import Response from '../../Response/Response';

const Post = (props) => {
    return (
        <article className="blog__post post">
            <p className="post__p">
                {props.message}
            </p>

            <Response />
        </article>
    );
};

export default Post;