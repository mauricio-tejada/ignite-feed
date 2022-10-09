import { Post } from "../Post/post";
import { Profile } from "../Profile/profile";
import { Container, Feed } from "./style";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/mauricio-tejada.png",
            name: "Mauricio Fernandes",
            role: "Frontend Dev",
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
            { type: "link", content: "jane.design/doctorcare" },
        ],
        publishedAt: new Date("2022-10-09 12:00:00")
    },
    {
        id: 1,
        author: {
            avatarUrl: "http://",
            name: "Mauricio Fernandes",
            role: "Frontend Dev",
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
            { type: "link", content: "jane.design/doctorcare" },
        ],
        publishedAt: new Date("2022-10-09 12:00:00")
    }
]


export function Main() {
    return (
        <>
            <Container>

                <Profile></Profile>

                <Feed>
                    {posts.map(post => {
                        return (
                            <Post 
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                            />
                        )
                    })}
                </Feed>

            </Container>
        </>
    )
}