import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { PictureData } from '@/types/api/apod'
import axios from 'axios'

export default function Home() {
    const [picture, setPicture] = useState<PictureData>()
    useEffect(() => {
        axios.get("/api/apod").then(res => {
            setPicture(() => {
                const data = res.data
                data.date = new Date(data.date)
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
                <Navbar />
                {picture ?
                    <>
                        <S.InfoArea>
                            <h2>{picture.title}</h2>
                            <p>{picture.explanation}</p>
                            <p>{picture.date.toLocaleDateString()}</p>
                        </S.InfoArea>
                        <S.PictureArea>
                            <Image 
                            src={picture.url}
                            alt={picture.title}
                            width={470}
                            height={470}
                            priority
                            />
                        </S.PictureArea>
                    </>
                    : ''
                }
            </S.Container>
        </>
    )
}
