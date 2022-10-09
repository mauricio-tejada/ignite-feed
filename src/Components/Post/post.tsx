import { Container, Content, Header, CommentForm } from "./style";
import { Comment } from "../Comment/comment";


export function Post() {
    return (
        <Container>

            <Header>
                <div className="authorContainer">
                    <img src="https://github.com/mauricio-tejada.png" className="avatar"></img>
                    <div className="authorInfo">
                        <strong>Mauricio Fernandes</strong>
                        <span>Front-end dev</span>
                    </div>
                </div>

                <time title="07 de Outubro às 05:55" dateTime="2022/10/07 05:55:00">Publicado há 8h</time>
            </Header>

            <Content>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa.
                    É um projeto que fiz no NLW Return, evento da
                    Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p>
                    <a href="#">👉 jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="#">#novoprojeto</a>{" "}
                    <a href="#">#nlw</a>{" "}
                    <a href="#">#rocketseat</a>{" "}
                </p>
            </Content>

            <CommentForm>
                <strong>Deixe seu feedback</strong>

                <textarea
                placeholder="Escreva seu comentário..."
                />

                <button type="submit">Publicar</button>
            </CommentForm>

            <Comment>
            </Comment>
            <Comment>
            </Comment>
            <Comment>
            </Comment>

        </Container>
    )
}