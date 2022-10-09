import { Pencil } from "phosphor-react";
import { Container, Footer, ProfileInfo } from "./style";


export function Profile() {
    return(
        <Container>
            <img src="https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

            <ProfileInfo>
                <img src="https://github.com/mauricio-tejada.png"/>
                <strong>Mauricio Fernandes</strong>
                <span>Front-end Developer</span>
            </ProfileInfo>

            <Footer>
                <a href="#">
                <Pencil size={20} />
                    Editar seu perfil
                </a>
            </Footer>
        </Container>
    )
}