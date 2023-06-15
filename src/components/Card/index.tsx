import * as S from "./styles"
import projects from '@/assets/data/projects'
import { NextPage } from "next"
import Image from 'next/image'

interface Props {
    index: number
    item: any
}

const Card: NextPage<Props> = ({
    index,
    item
}) => {
    return (
        <S.CardArea
            key={index}
            onClick={() => {
                location.href = "/apod"
            }}
        >
            <h3>{item.name}</h3>
            <p>{item.subtitle}</p>
            <Image src={item.logo} alt=" " width={170} height={170} />
        </S.CardArea>
    )
}

export default Card