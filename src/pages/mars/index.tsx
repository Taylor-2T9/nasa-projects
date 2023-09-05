import Card from "@/components/Card"
import Navbar from "@/components/Navbar"
import * as S from "@/components/pages/mars/styles"
import rovers_list from "@/assets/data/rovers"

export default function Mars() {
    return (
        <div>
            <Navbar />
            <S.Container>
                {
                    rovers_list.map((item, index) => (
                        <Card type="rover" key={index} item={item} />
                    ))
                }
            </S.Container>
        </div>
    )
}