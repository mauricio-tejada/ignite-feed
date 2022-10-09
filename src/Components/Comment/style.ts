import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;
    gap: 1rem;
    grid-template-areas: 
    "profile comment"
    "profile comment"
    "profile footer";

`

export const Profile = styled.aside`
    grid-area: profile;

    img {
        box-sizing: initial;
        margin-bottom: 1rem;
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
    }
`

export const CommentContainer = styled.div`
    grid-area: comment;
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1rem 1.56rem 1rem;

    background: var(--gray3);
    border-radius: 8px;


    header {
        display: flex;
        flex-direction: column;
    }

    strong {
        line-height: 1.6;
        color: var(--gray7);
        font-size: 0.87rem;
        font-weight: 700;
    }

    time {
        line-height: 1.6;
        color: var(--gray5);
        font-size: 0.75rem;
        font-weight: 400;
    }

    p {
        line-height: 1.6;
        color: var(--gray6);
        font-size: 1rem;
        font-weight: 400;
    }

    button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: transparent;
        color: var(--gray6);
    }
`

export const Footer = styled.footer`
    grid-area: footer;

    button {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.62rem;

        background: transparent;
        color: var(--gray5);
        font-size: 0.87rem;
        font-weight: 700;

    }

    
`