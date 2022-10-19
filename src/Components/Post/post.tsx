import { Container, Content, Header, CommentForm, Button } from "./style";
import { Comment } from "../Comment/comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR"
import { useState, FormEvent, ChangeEvent, JSXElementConstructor } from 'react'

interface Author {
    avatarUrl: string,
    name: string,
    role: string,
}

interface PostContent {
    type: 'paragraph' | 'link',
    content: string
}

interface PostProps {
    author: Author,
    content: PostContent[],
    publishedAt: Date
}



export function Post({ author, content, publishedAt } : PostProps) {

    const [comments, setComments] = useState<string[]>([])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
        locale: ptBR,
    })

    const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
    }

    function deleteComment(comment: string) {
        let currentComments = comments
        let newCommentList = currentComments.filter( item =>  item !== comment)

        setComments(newCommentList)
    }

    const isNewCommentEmpty = newCommentText.length === 0

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
                    disabled={isNewCommentEmpty}
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