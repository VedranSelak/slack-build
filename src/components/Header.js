import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {

    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvater />
                <AccessTimeIcon />
            </HeaderLeft>
            <HeaderMiddle>
                <input type="text" placeholder='Search VedranSelak' />
                <SearchIcon />
            </HeaderMiddle>
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
    color: white;
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
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
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    display: flex;
    text-align: center;
    color: lightgrey;
    padding: 0 5px;
    border: 1px solid grey;
    justify-content: space-between;

    > input {
        background-color: transparent;
        outline: none;
        border: none;
        color: lightgrey;
        font-size: 11px;
    }

    > input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: lightgrey;
    }
`;
