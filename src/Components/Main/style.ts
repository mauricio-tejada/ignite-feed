import styled from "styled-components";


export const Container = styled.main`
   
    max-width: 1120px;
    height: 100%;

    margin: 2rem auto;
    gap: 2rem;

    background-color: var(--gray1);

    display: grid;
    grid-template-columns: 256px 1fr;
`

export const Feed = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`