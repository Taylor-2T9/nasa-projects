import * as S from "./styles"
import { ICardProps } from "@/types/components/card"
import { NextPage } from "next"
import Image from 'next/image'
import React from "react"

const Card: NextPage<ICardProps> = ({
    type,
    item
}) => {
    const linkRef = React.useRef<HTMLAnchorElement>(null)
    const redirect = {
        project: item.route,
        rover: `mars/${item.route}`
    }[type]
    return (
        <S.CardArea
            onClick={() => linkRef.current?.click()}
            type={type}
        >
            <S.CardRedirect href={redirect} ref={linkRef} />
            <h3>{item.name}</h3>
            <p>{item.subtitle}</p>
            <Image src={item.logo} alt=" " width={170} height={170} />
        </S.CardArea>
    )
}

export default Card