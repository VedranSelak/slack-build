import styled from 'styled-components'

const ModalItem = ( { Icon, title, shortcut } ) => {
    return (
        <ModalItemContainer>
            <div>
                <Icon />
                <h3>{title}</h3>
            </div>
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
    }

    > p {
        font-size: 14px;
        margin-right: 10px;
        color: grey;
    }

    > div {
        font-size: 12px;
        font-weight: 500;
        display: flex;
        align-items: center;
        padding: 0;
        margin-left: 15px;
    }

    > div > h3 {
        font-weight: 200;
    }

    > div .MuiSvgIcon-root {
        font-size: 20px;
        margin-right: 10px;
    }
`;
