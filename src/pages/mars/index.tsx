import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import * as S from "@/components/pages/mars/styles"
import rovers from "@/assets/data/rovers";

export default function Mars() {
    return (
        <div>
            <Navbar />
            <S.Container>
                {
                    rovers.map((item, index) => (
                        <Card type="rover" key={index} item={{ name: item.name, logo: item.logo }} />
                    ))
                }
            </S.Container>
        </div>
    )
}