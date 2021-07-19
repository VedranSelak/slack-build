import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarName>
                    <h2>VedranSelak</h2>
                    <ExpandMoreIcon />
                </SidebarName>
                <EditIcon />
            </SidebarHeader>
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