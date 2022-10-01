import React from "react";
import { Container } from "./style";


export function Post() {
    return (
        <Container>

            <header>

                <div className="authorContainer">
                    <img src="https://github.com/mauricio-tejada.png" className="avatar"></img>
                    <div className="authorInfo">
                        <strong>Mauricio Fernandes</strong>
                        <span>Front-end dev</span>
                    </div>
                </div>
                
                <time>Publicado a 8h</time>
            </header>


        </Container>
    )
}