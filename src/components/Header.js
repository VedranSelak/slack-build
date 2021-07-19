import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Header = () => {

    return (
        <HeaderContainer>
            <HeaderLeft>
                <AccessTimeIcon />
            </HeaderLeft>
            <HeaderMiddle>
                <input type="text" placeholder='Search VedranSelak' />
                <SearchIcon />
            </HeaderMiddle>
            <HeaderRight>
                <HelpOutlineIcon />
                <HeaderAvater />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    background-color: var(--primary-color);
    color: lightgrey;
`;

const HeaderLeft = styled.div`
    flex: 0.25;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 10px;
        cursor: pointer;
    }
`;

const HeaderAvater = styled(Avatar)`
    cursor: pointer;
    border-radius: 5px !important;
    height: 30px !important;
    width: 30px !important;

    :hover {
        opacity: 0.7;
    }
`;

const HeaderMiddle = styled.div`
    flex: 0.5;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    display: flex;
    text-align: center;
    color: lightgrey;
    padding: 0 5px;
    border: 1px solid grey;
    justify-content: space-between;

    > .MuiSvgIcon-root {
        cursor: pointer;
    }

    > input {
        background-color: transparent;
        outline: none;
        border: none;
        color: lightgrey;
        min-width: 35vw;
        font-size: 11px;
    }

    > input::placeholder {
        color: lightgrey;
    }
`;

const HeaderRight = styled.div`
    flex: 0.25;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;

    > .MuiSvgIcon-root {
        margin-left: 10px;
        cursor: pointer;
    }
`;
