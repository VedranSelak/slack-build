import styled from 'styled-components'

const ModalItem = ( { Icon, title, shortcut } ) => {
    return (
        <ModalItemContainer>
            <ModalMain>
                <Icon />
                <h3>{title}</h3>
            </ModalMain>
            <p>{shortcut}</p>
        </ModalItemContainer>
    )
}

export default ModalItem

const ModalItemContainer = styled.div`
    padding: 5px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: 	#484848;
    font-weight: 200;
    margin: 0;
    
    :hover {
        background-color: #0E76A8;
        color: white;
        cursor: pointer;

        > p {
            color: white;
        }
    }

    > p {
        font-size: 14px;
        margin-right: 10px;
        color: grey;
    }
`;

const ModalMain = styled.div`
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
    padding: 0;
    margin-left: 15px;

    > h3 {
        font-weight: 200;
    }

    > .MuiSvgIcon-root {
        font-size: 20px;
        margin-right: 10px;
    }
`;
