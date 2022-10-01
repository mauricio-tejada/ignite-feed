import styled from "styled-components";


export const Container = styled.article`
    display: flex;
    flex-direction: column;

    padding: 2.5rem;
    border-radius: 8px;

    background-color: var(--gray2);

    
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

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


        strong {
        line-height: 1.6;
        color: var(--gray7);
        font-size: 1rem;
        font-weight: 700;
        }

        span {
            line-height: 1.6;
            color: var(--gray5);
            font-size: 0.875rem;
            font-weight: 400;
        }
    }
`

export const Content = styled.div`
    color: var(--gray6);

    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin-top: 1.5rem;

    p {
        font-size: 1rem;
        font-weight: 400;
    }

    a {
        text-decoration: none;
        color: var(--green-light);
        font-weight: 700;
    }
`

export const CommentForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding-top: 1.5rem;
    margin: 1.5rem 0 2.5rem 0;
    border-top: 1px solid var(--gray3);

    strong {
        color: var(--gray7);
        line-height: 1.6;
        font-size: 1rem;
        font-weight: 700;
    }

    textarea {
        width: 100%;
        height: 6rem;
        background: var(--gray1);
        border: 0;
        resize: none;
        padding: 1rem;
        border-radius: 8px;
        color: var(--gray6);
        line-height: 1.4;
        margin-top: 1rem;
    }

    button {
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        border-radius: 8px;
        border: 0;
        background: var(--green);
        color: var(--white);
        font-weight: 700;
        width: 6.75rem;
        cursor: pointer;

        &:hover {
            background: var(--green-light);
        }
    }

    
` 

