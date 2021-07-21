import styled from 'styled-components'
import { db } from '../firebase.js'
import Channel from './Channel'
import { useState } from 'react'

const SidebarOption = ( { Icon, IconTwo, title, array } ) => {

    const [active, setActive] = useState(false);

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name:')

        if(channelName) {
            db.collection('channels').add({
                name: channelName,
            })
        }
    }

    return (
        <div onClick={() => setActive(!active)}>
            <Header>
                <SidebarMain className={active ? 'active' : ''}>
                    <Icon onClick={() => setActive(!active)} />
                    <h3>{title}</h3>
                </SidebarMain>
                <IconTwo onClick={addChannel} />
            </Header> 
            <ChannelList className={active ? 'active' : ''}>
                {array?.map((item) => (
                    <Channel key={item.id} id={item.id} title={item.data().name} />
                ))}
            </ChannelList>
        </div>
    )
}

export default SidebarOption

const SidebarMain = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    color: lightgrey;
    padding: 10px;

    &.active {
        > .MuiSvgIcon-root {
            transform: rotate(-90deg);
            transition: all 0.3s ease-in-out;
        }
    }

    > .MuiSvgIcon-root {
            transition: all 0.3s ease-in-out;
        }

    > h3 {
        font-weight: 200;
        padding-left: 3px;
    }

    > .MuiSvgIcon-root:hover {
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 5px;
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    :hover {
        cursor: pointer;
        > div {
            color: white;
        }

        > .MuiSvgIcon-root {
            display: inline;
        }
    }

    > .MuiSvgIcon-root {
        display: none;
        color: white;
        margin-right: 10px;
    }

    > .MuiSvgIcon-root:hover {
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 5px;
    }
`;

const ChannelList = styled.div`
    display: none;
    &.active {
        display: block;
    }
`;
