import { IMediaRenderer } from "@/types/components/pages/apod"
import * as S from "./styles"
import { NextPage } from "next"
import Image from 'next/image'

const MediaRenderer: NextPage<IMediaRenderer> = ({ media_type, url, title }) => {
    return (
        <>
            {media_type == "image" ?
                <Image
                    src={url}
                    alt={title}
                    width={470}
                    height={470}
                    priority
                /> :
                <S.Video
                    src={url}
                    width={470}
                    height={470}
                >
                </S.Video>
            }
        </>
    )
}

export default MediaRenderer