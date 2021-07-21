import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import SidebarOption from './SidebarOption';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useSelector, useDispatch } from 'react-redux'
import { hideModal, selectModal } from '../features/modalSlice'
import MenuIcon from '@material-ui/icons/Menu';
import ModalItem from './ModalItem';
import ForumIcon from '@material-ui/icons/Forum';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import PageviewIcon from '@material-ui/icons/Pageview';
import ListIcon from '@material-ui/icons/List';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';


const Sidebar = () => {

    const modal = useSelector(selectModal)
    const dispatch = useDispatch()

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarName>
                    <h2>VedranSelak</h2>
                    <ExpandMoreIcon />
                </SidebarName>
                <EditIcon />
            </SidebarHeader>
            <SidebarOption browse={true} Icon={MoreVertIcon} title='Browse Slack' />
            { modal ? <ExtendModal onClick={() => dispatch(hideModal())}>
                            <Container>
                                <ContainerTopSection>
                                    <ModalItem Icon={MenuIcon} title='All unreads' shortcut='' />
                                    <ModalItem Icon={ForumIcon} title='All DMs' shortcut='Ctrl+Shift+K' />
                                    <ModalItem Icon={AlternateEmailIcon} title='Mentions & reactions' shortcut='' />
                                    <ModalItem Icon={BookmarkIcon} title='Saved items' shortcut='Ctrl+Shift+S' />
                                </ContainerTopSection>
                                <ContainerMiddleSection>
                                    <ModalItem Icon={AssistantPhotoIcon} title='Slack Connect' shortcut='' />
                                    <ModalItem Icon={PageviewIcon} title='Channel browse' shortcut='Ctrl+Shift+L' />
                                    <ModalItem Icon={ListIcon} title='File browser' shortcut='' />
                                    <ModalItem Icon={PeopleIcon} title='People & user groups' shortcut='Ctrl+Shift+E' />
                                    <ModalItem Icon={AppsIcon} title='Apps' shortcut='' />
                                </ContainerMiddleSection>
                                <ContainerBottomSection>
                                    <p>Customize this list in your <span>preferences.</span></p>
                                </ContainerBottomSection>
                            </Container>
                     </ExtendModal> : '' }
            <SidebarOption Icon={MoreVertIcon} title='Browse Slack' />
            <SidebarOption Icon={MoreVertIcon} title='Browse Slack' />
        </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`
    margin-top: 40px;
    flex: 0.3;
    border-top: 1px solid #49274b;
    background-color: #490e4a;
    max-width: 260px;
    color: white;
`;

const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #49274b;

    :hover {
        background-color: var(--primary-color);
    }

    > .MuiSvgIcon-root {
        padding: 8px;
        background-color: white;
        font-size: 18px;
        border-radius: 50%;
        color: var(--primary-color);
        cursor: pointer;
    }
`;

const SidebarName = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    > h2 {
        font-size: 18px;
    }

    > .MuiSvgIcon-root {
        font-size: 16px;
        margin-left: 3px;
    }
`;

const ExtendModal = styled.div`
    background-color: transparent;
    position: absolute;
    top:0;
    height: 100vh;
    width: 100vw;
    z-index: 5;
`;

const Container = styled.div`
    background-color: white;
    padding: 10px 0;
    width: 20rem;
    height: 21rem;
    margin-top: 140px;
    margin-left: 25px;
    z-index: 6;
    border-radius: 10px;
    border: 1px solid lightgray;
    overflow: hidden;
`;

const ContainerTopSection = styled.div`
    border-bottom: 1px solid lightgrey;
    padding-bottom: 10px;
`;

const ContainerMiddleSection = styled.div`
    border-bottom: 1px solid lightgrey;
    padding: 10px 0;
`;

const ContainerBottomSection = styled.div`
    color: #484848;
    height: 40px;
    display: flex;
    font-weight: 500;
    align-items: center;
    font-size: 12px;
    padding-left: 20px;


    > p > span{
        color: #0E76A8;
        font-weight: bold;
    }

    :hover{
        color: white !important;
        background-color: #0E76A8;
        cursor: pointer;

        > p > span {
            color: white;
        }
    }
`;