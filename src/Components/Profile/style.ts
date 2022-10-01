import styled from "styled-components";


export const Container = styled.aside`
    background-color: var(--gray2);
    border-radius: 8px;
    overflow: hidden;

    img {
        width: 100%;
        height: 72px;
        object-fit: cover;
    }
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: -2rem;

    
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

    img {
        box-sizing: initial;
        margin-bottom: 1rem;
        width: 3rem;
        height: 3rem;
        border-radius: 8px;
        border: 4px solid var(--gray2);
        outline: 2px solid var(--green);
    }
`

export const Footer = styled.footer`
    border-top: 1px solid var(--gray3);
    margin-top: 1.5rem;
    padding: 1.5rem rem 2rem;

    a {
        background: transparent;
        color: var(--green-light);
        border: 1px solid var(--green-light);
        border-radius: 8px;
        height: 50px;
        padding: 0 1.5rem;
        font-weight: bold;
        text-decoration: none;

        margin: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`