import './post-component.css'
import {MyPropsTitlePostsComponent}  from "../../interfaces/interface";



const PostComponent = ({title, content}: MyPropsTitlePostsComponent) => {
    return (
        <>
            <div className="post">
                <h1 className="post-title">{title}</h1>
                <hr />
                <h2>{content}</h2>
            </div>
        </>
    )
}

export default PostComponent
