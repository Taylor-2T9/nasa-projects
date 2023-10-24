import { IMediaRenderer } from "@/types/components/pages/apod"
import * as S from "./styles"
import { NextPage } from "next"
import Image from 'next/image'
import { MutableRefObject, useRef } from "react"

const MediaRenderer: NextPage<IMediaRenderer> = ({ media_type, url, title }) => {
    const redirectRef = useRef<HTMLAnchorElement>(null)
    return (
        <>
            {media_type == "image" ?
                <Image
                    onClick={() => redirectRef.current?.click()}
                    src={url}
                    alt={title}
                    width={400}
                    height={400}
                    style={{ cursor: 'pointer' }}
                    priority
                /> :
                <S.Video
                    onClick={() => redirectRef.current?.click()}
                    src={url}
                    width={470}
                    height={470}
                >
                </S.Video>
            }
            <S.Redirect
                target="_blank"
                href={url}
                ref={redirectRef}
            >
                Redirecionador - Midia
            </S.Redirect>
        </>
    )
}

export default MediaRenderer