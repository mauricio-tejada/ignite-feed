import { Post } from "../Post/post";
import { Profile } from "../Profile/profile";
import { Container, Feed } from "./style";


export function Main() {
    return (
        <>
            <Container>

                <Profile></Profile>

                <Feed>
                    <Post></Post>
                    <Post></Post>
                </Feed>

            </Container>
        </>
    )
}