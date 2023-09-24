import Navbar from "@/components/Navbar"
import * as S from "@/components/pages/404-styles"
export default function Error404() {
    return (
        <>
            <S.Container>
                <Navbar />
                <S.Message>
                    404 Error - Page Not Found
                    <br />
                    <br />
                    <br />
                    Return to Home Page
                </S.Message>
            </S.Container>
        </>
    )
}