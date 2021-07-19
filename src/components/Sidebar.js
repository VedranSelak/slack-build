import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import SidebarOption from './SidebarOption';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useSelector, useDispatch } from 'react-redux'
import { hideModal, selectModal, showModal } from '../features/modalSlice'
import ModalItem from './ModalItem';


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
                            <div className="container">
                                <ModalItem Icon={EditIcon} title='All DMs' shortcut='Ctrl+Shift+K' />
                                <ModalItem Icon={EditIcon} title='All DMs' shortcut='Ctrl+Shift+K' />
                                <ModalItem Icon={EditIcon} title='All DMs' shortcut='Ctrl+Shift+K' />
                                <ModalItem Icon={EditIcon} title='All DMs' shortcut='Ctrl+Shift+K' />
                            </div>
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

    > .container {
        background-color: white;
        padding: 10px 0;
        width: 20rem;
        height: 20rem;
        margin-top: 140px;
        margin-left: 25px;
        z-index: 6;
        border-radius: 10px;
        border: 1px solid lightgray;
        overflow: hidden;
    }
`;