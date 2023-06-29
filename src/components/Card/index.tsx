import * as S from "./styles"
import projects from '@/assets/data/projects'
import { NextPage } from "next"
import Image from 'next/image'

interface Props {
    type: "project" | "rover"
    index: number
    item: any
}

const Card: NextPage<Props> = ({
    type,
    index,
    item
}) => {
    return (
        <S.CardArea
            key={index}
            onClick={() => {
                location.href = "/apod"
            }}
            type={type}
        >
            <h3>{item.name}</h3>
            <p>{item.subtitle}</p>
            <Image src={item.logo} alt=" " width={170} height={170} />
        </S.CardArea>
    )
}

export default Card