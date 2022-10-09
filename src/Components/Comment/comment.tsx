import { CommentContainer, Container, Footer, Profile } from "./style";
import { Trash, ThumbsUp } from "phosphor-react";



export function Comment() {
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
                <p>Muito bom, parabéns!</p>
                <button title="deletar comentário">
                    <Trash size={20} />
                </button>
            </CommentContainer>

            <Footer>
                <button>
                    <ThumbsUp size={20}/>
                    Aplaudir<span>5</span>
                </button>
            </Footer>

        </Container>
    )
}