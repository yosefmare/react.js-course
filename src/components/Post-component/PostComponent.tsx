import './post-component.css'
import { MyPropsTitlePostsComponent } from "../../interfaces/interface";
import ButtonsComponent from "../buttons-component/ButtonsComponent";



const PostComponent = ({ title, content,children }: MyPropsTitlePostsComponent) => {
    return (
        <>
            <div className="post">
                <h1 className="post-title">{title}</h1>
                <hr />
                <h2>{content}</h2>
                <div style={{
                    height: "162px",
                    marginTop: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <ButtonsComponent word='show more' />
                    <div>{children}</div>
                </div>
            </div>
        </>
    )
}

export default PostComponent
