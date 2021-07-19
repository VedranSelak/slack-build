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
    padding: 10px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: grey;
    font-weight: 200;
    margin: 0;
    
    :hover {
        background-color: #0E76A8;
        color: white;
        cursor: pointer;
    }

    > div {
        display: flex;
        padding: 0;
        margin: 0;
    }

    > div > h3 {
        font-weight: 200;
    }
`;
