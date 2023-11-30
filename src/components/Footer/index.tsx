import { NextPage } from "next"
import * as S from './styles'
import NasaIcon from '../../assets/images/favicon.ico'
export interface FooterProps {

}
const Footer: NextPage<FooterProps> = () => {
    return (
        <S.Container>
            <a href={'https://www.nasa.gov'} target={'_blank'}>
                <S.NasaLogo src={NasaIcon.src} title={'Logo da Nasa'} />
            </a>
            <S.Title>
                <sub>
                    <a href="https://github.com/taylor-2t9" target={'_blank'}>
                        Copyright © 2023 - Taylor de Oliveira
                    </a>
                </sub>
            </S.Title>
            <a href={'https://github.com/Taylor-2T9'} target={'_blank'}>
                <S.UserAstronaut title={'Criador do site'} />
            </a>
        </S.Container>
    )
}
export default Footer