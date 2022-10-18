import { Container, Content, Header, CommentForm, Button } from "./style";
import { Comment } from "../Comment/comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR"
import { useState } from 'react'


export function Post({ author, content, publishedAt } = props) {

    const [comments, setComments] = useState([])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
        locale: ptBR,
    })

    const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(comment) {
        let currentComments = comments
        let newCommentList = currentComments.filter( item =>  item !== comment)

        setComments(newCommentList)
    }

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
                        return <p key={item.content}>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p key={item.content}><a href="#">{item.content}</a></p>
                    }
                })}
            </Content>

            <CommentForm
                onSubmit={handleCreateNewComment}
            >
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    placeholder="Escreva seu comentário..."
                />

                <Button
                    type="submit"
                    buttonDisplay={!newCommentText ? "none" : "block"}
                >
                    Publicar
                </Button>
            </CommentForm>

            {comments.map(comment => {
                return (
                    <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                )
            })}

        </Container>
    )
}