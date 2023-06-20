import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import * as S from '../../components/pages/apod/styles'
import { useEffect, useState } from 'react'
import { PictureData } from '@/types/api/apod'
import axios from 'axios'
import MediaRenderer from '@/components/pages/apod/MediaRenderer'

export default function Home() {
    const [picture, setPicture] = useState<PictureData>({} as PictureData)
    useEffect(() => {
        axios.get("/api/apod").then(res => {
            setPicture(() => {
                const data = res.data
                data.date = new Date(data.date + " ")
                return data
            })
        })
    }, [])
    return (
        <>
            <Head>
                <title>Astro Picture of the Day</title>
            </Head>
            <S.Container>
                <Navbar setPicture={setPicture} />
                {picture.url ?
                    <>
                        <S.InfoArea>
                            <h2>{picture.title}</h2>
                            <S.Description>{picture.explanation}</S.Description>
                            <p>{picture.date.toLocaleDateString()}</p>
                        </S.InfoArea>
                        <S.PictureArea>
                            <MediaRenderer
                                url={picture.url}
                                title={picture.title}
                                media_type={picture.media_type}
                            />
                        </S.PictureArea>
                        <S.MobileDescription>{picture.explanation}</S.MobileDescription>
                    </>
                    : ''
                }
            </S.Container>
        </>
    )
}
