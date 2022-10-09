import { Container, Content, Header, CommentForm } from "./style";
import { Comment } from "../Comment/comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR"


export function Post({ author, content, publishedAt } = props) {

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
        locale: ptBR,
    })

    const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    return (
        <Container>

            <Header>
                <div className="authorContainer">
                    <img src={author.avatarUrl} className="avatar"></img>
                    <div className="authorInfo">
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedAtRelativeToNow}</time>
            </Header>

            <Content>
                {content.map(item => {
                    if (item.type === 'paragraph') {
                        return <p>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p><a href="#">{item.content}</a></p>
                    }
                })}
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

        </Container>
    )
}