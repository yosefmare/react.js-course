import './body-component.css';
import ButtonsComponent from "../buttons-component/ButtonsComponent";
import PostComponent from "../Post-component/PostComponent";
import SideMenuComponent from '../sidemenue-component/sidenemueComponent';

const BodyComponent = () => {
    return (
        <>
            <div className='container'>
                <div>
                    <PostComponent title='the day' content="is too long this week" />
                    <PostComponent title='the sun' content="is beautiful" />
                    <PostComponent title='hello world' content="hayyyyyyyy😄😄😄" />
                    <PostComponent title='me' content="🫠" />
                    <PostComponent title='and' content="🅰️" />
                    <PostComponent title='you' content="🙃" />
                </div>
                <div>
                    <SideMenuComponent>
                        <ButtonsComponent index={1} />
                        <ButtonsComponent index={2} />
                        <ButtonsComponent index={3} />
                        <ButtonsComponent index={4} />
                        <ButtonsComponent index={5} />
                        <ButtonsComponent index={6} />
                        <ButtonsComponent index={7} />
                        <ButtonsComponent index={8} />
                        <ButtonsComponent index={8} />
                        <ButtonsComponent index={10} />
                    </SideMenuComponent>
                </div>
            </div>
        </>
    )
}


export default BodyComponent