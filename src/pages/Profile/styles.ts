import styled from "styled-components";
import { distance } from "../../components/Profile/Container/styles";
import { breakpoint } from "../../hooks/useMobile";



export const Content = styled.div`
    display: flex;
    @media(max-width: ${breakpoint}){
        flex-direction: column;
    }

`;
export const MarginLeft = styled.div`
    margin-left: calc(${distance}rem + 2rem);
`;

export const ContentProfile = styled.div`
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
`;