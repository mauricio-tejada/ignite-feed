import styled from "styled-components";


export const Container = styled.article`

    padding: 2.5rem;
    border-radius: 8px;

    background-color: var(--gray2);


    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    time {
        color: var(--gray5);
        font-size: 0.875rem;
        font-weight: 400;
    }

    .authorContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }

    .avatar {
        box-sizing: initial;
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
        border: 4px solid var(--gray2);
        outline: 2px solid var(--green);
    }

    .authorInfo {
        display: flex;
        flex-direction: column;
        gap: 0.56rem;


        strong {
        color: var(--gray7);
        font-size: 1rem;
        font-weight: 700;
        }

        span {
            color: var(--gray5);
            font-size: 0.875rem;
            font-weight: 400;
        }
    }
`