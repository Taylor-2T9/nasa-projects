import * as S from "./styles"
import { Props } from "@/types/components/card"
import { NextPage } from "next"
import Image from 'next/image'

const Card: NextPage<Props> = ({
    type,
    item
}) => {
    function redirect() {
        switch (type) {
            case "project":
                location.href = item.route
                break
            case "rover":
                location.href += item.route
                break
        }
    }
    return (
        <S.CardArea
            onClick={redirect}
            type={type}
        >
            <h3>{item.name}</h3>
            <p>{item.subtitle}</p>
            <Image src={item.logo} alt=" " width={170} height={170} />
        </S.CardArea>
    )
}

export default Card