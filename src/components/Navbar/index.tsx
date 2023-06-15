import * as S from "./styles"

const Navbar = () => {
    return (
        <S.Container>
            <S.Nav>
                <S.TitleArea>
                    <S.Title>Projetos API da NASA</S.Title>
                </S.TitleArea>
                <S.List>
                    {[
                        { name: "Teste", route: "#" },
                        { name: "Segundo", route: "#" }
                    ].map((item, key) => (
                        <S.Option key={key}>
                            <a href={item.route}>
                                {item.name}
                            </a>
                        </S.Option>
                    ))}
                </S.List>
            </S.Nav>
        </S.Container>
    )
}

export default Navbar