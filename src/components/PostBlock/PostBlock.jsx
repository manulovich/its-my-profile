import './PostBlock.css';
import Post from './Post/Post';
import Ava from './ava.jpg';

const PostBlock = (props) => {
    return (
        <section className="blog">
            <div className={`post-section ${props.additionalClass || ' '} blog__post-section`}>
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

            <Post additionalClass="blog__post" message="Сегодня как обычно провел весь день на кровати"/>
            <Post additionalClass="blog__post" message="А сегодня хватило сил включить ноутбук. Лежа на кровати"/>
        </section>
    );
};

export default PostBlock;