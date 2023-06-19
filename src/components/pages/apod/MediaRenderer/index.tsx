import { MediaRenderer } from "@/types/components/pages/apod"
import * as S from "./styles"
import { NextPage } from "next"
import Image from 'next/image'

const MediaRenderer: NextPage<MediaRenderer> = ({ media_type, url, title }) => {
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
                <embed
                    src={url}
                    width={470}
                    height={470}
                >
                </embed>
            }
        </>
    )
}

export default MediaRenderer