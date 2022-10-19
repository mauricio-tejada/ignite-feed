import { CommentContainer, Container, Footer, Profile } from "./style";
import { Trash, ThumbsUp } from "phosphor-react";
import { useState } from 'react'

interface CommentProps {
    content: string,
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment } : CommentProps) {

    const [likes, setLikes] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleNewLike() {
        setLikes(likes + 1)
    }


    return (
        <Container>

            <Profile>
                <img src="https://github.com/mauricio-tejada.png" />
            </Profile>

            <CommentContainer>
                <header>
                    <strong>Fulano de Tal</strong>
                    <time title="07 de Outubro às 05:55" dateTime="2022/10/07 05:55:00">Publicado há 8h</time>
                </header>
                <p>{content}</p>
                <button
                    title="deletar comentário"
                    onClick={handleDeleteComment}
                >
                    <Trash size={20} />
                </button>
            </CommentContainer>

            <Footer>
                <button onClick={handleNewLike}>
                    <ThumbsUp size={20} />
                    Aplaudir
                </button>
                <span>{likes}</span>
            </Footer>

        </Container>
    )
}