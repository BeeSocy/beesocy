import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    gap: 4rem;
`;
export const ComponentMusic = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-auto-flow: column;
    gap: 2rem;

`;