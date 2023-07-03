import Navbar from "@/components/Navbar"
import * as S from "@/components/pages/404-styles"
export default function Custom404() {
    return (
        <S.Container>
            <Navbar />
            <S.Message> 404 Error - Page Not Found </S.Message>
        </S.Container>
    )
}