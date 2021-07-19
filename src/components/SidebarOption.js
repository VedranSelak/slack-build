import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { showModal } from '../features/modalSlice'

const SidebarOption = ( { browse, Icon, title } ) => {

    const dispatch = useDispatch()

    const showTheModal = () => {
        console.log("blaa");
        dispatch(showModal())
    }

    return (
        <SidebarOptionContainer onClick={browse ? showTheModal : ''}>
            <Icon />
            <h3>{title}</h3>
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    color: lightgrey;
    padding: 10px;
    font-size: 13px;
    align-items: center;

    :hover {
        color: white;
        cursor: pointer;
    }
    
    > h3 {
        font-weight: 200;
        padding-left: 3px;
    }
`;
