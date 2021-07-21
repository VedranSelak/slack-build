import React from 'react'
import styled from 'styled-components'

const Channel = ( { id, title} ) => {

    const selectChannel = () => {
        
    }

    return (
        <ChannelContainer onClick={selectChannel}>
            <h3><span>#</span>{title}</h3>
        </ChannelContainer>
    )
}

export default Channel

const ChannelContainer = styled.div`
    padding-left: 35px;
    padding-top: 5px; 
    padding-bottom: 5px; 
    > h3 {
        font-size: 13px;
        color: lightgray;
        font-weight: 300;

        > span {
            margin-right: 10px;
            font-size: 15px;
        }
    }

    :hover {
        background-color: var(--primary-color);
        cursor: pointer;
    }
`;
