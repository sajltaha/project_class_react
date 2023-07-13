import Container from "../container/container"
import style from './header.module.css'

function Header() {
    return (
        <div className={style.header__container}>
            <Container>
                <h3>Title</h3>
            </Container>
        </div>
    )
}

export default Header