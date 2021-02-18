import './PostBlock.css';
import Post from './Post/Post';
import Ava from './ava.jpg';

const PostBlock = () => {
    return (
        <section className="blog">
            <div className="post-section porfile__post-section blog__post-section">
                <div className="post-section__top">
                    <div className="post-section__avatar">
                        <img src={Ava} alt="Avatar"/>
                    </div>
                    <textarea name="post-input" class="post-section__input" placeholder="Что у вас нового?">

                    </textarea>
                </div>
                <div className="post-section__footer">
                    <button className="post-section__btn-send">Отправить</button>
                </div>
            </div>

            <Post/>
        </section>
    );
};

export default PostBlock;