import { CommentContainer, Container, Footer, Profile } from "./style";
import { Trash, ThumbsUp } from "phosphor-react";



export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment() {
        onDeleteComment(content)
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
                <button>
                    <ThumbsUp size={20} />
                    Aplaudir<span>5</span>
                </button>
            </Footer>

        </Container>
    )
}