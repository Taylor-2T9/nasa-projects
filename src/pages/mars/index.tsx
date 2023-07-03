import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import curiosity from "@/assets/images/curiosity.jpg"
import opportunity from "@/assets/images/opportunity.jpg"
import perseverance from "@/assets/images/perseverance.jpg"
import spirit from "@/assets/images/spirit.jpg"
import * as S from "@/components/pages/mars/styles"

export default function Mars() {
    return (
        <div>
            <Navbar />
            <S.Container>
                <Card type="rover" item={{ name: "Curiosity", logo: curiosity }} />
                <Card type="rover" item={{ name: "Opportunity", logo: opportunity }} />
                <Card type="rover" item={{ name: "Perseverance", logo: perseverance }} />
                <Card type="rover" item={{ name: "Spirit", logo: spirit }} />
            </S.Container>
        </div>
    )
}