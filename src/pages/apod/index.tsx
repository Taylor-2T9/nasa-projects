import Head from 'next/head'
import Navbar from '@/components/Navbar'
import * as S from '../../components/pages/apod/styles'
import { useEffect, useState } from 'react'
import { IPictureData } from '@/types/api/apod'
import axios from 'axios'
import MediaRenderer from '@/components/pages/apod/MediaRenderer'
import Loading from '@/components/Loading'
import Modal from '@/components/Modal'
import Footer from '@/components/Footer'

export default function Apod() {
    const [picture, setPicture] = useState({} as IPictureData)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    useEffect(() => {
        axios.get("/api/apod").then(res => {
            setPicture(() => {
                const data = {
                    ...res.data,
                    resumeExplanation: res.data.explanation.length > 600 ?
                        res.data.explanation.substr(0, 600) + '...' : '',
                    date: new Date(res.data.date + " ")
                }
                return data
            })
        })
    }, [])
    return (
        <>
            <Head>
                <title>Astro Picture of the Day</title>
            </Head>
            <Navbar title="Astro Picture of the Day" setPicture={setPicture} />
            <S.Container>
                {picture.url ?
                    <>
                        <S.InfoArea>
                            <h2>{picture.title}</h2>
                            {
                                picture.resumeExplanation?.length ?
                                    <>
                                        <S.Description>
                                            {picture.resumeExplanation}
                                        </S.Description>
                                        <S.DescriptionButton
                                            onClick={() => setIsOpen(true)}
                                        >
                                            View More
                                        </S.DescriptionButton>
                                    </>
                                    : <S.Description>
                                        {picture.explanation}
                                    </S.Description>
                            }
                            <S.LocalDate>{picture.date.toLocaleDateString()}</S.LocalDate>
                        </S.InfoArea>
                        <S.PictureArea>
                            <MediaRenderer
                                url={picture.url}
                                title={picture.title}
                                media_type={picture.media_type}
                            />
                        </S.PictureArea>
                        {
                            picture.resumeExplanation?.length ?
                                <>
                                    <S.MobileDescription>
                                        {picture.resumeExplanation}
                                    </S.MobileDescription>
                                    <S.MobileDescriptionButton
                                        onClick={() => setIsOpen(true)}
                                    >
                                        View More
                                    </S.MobileDescriptionButton>
                                </>
                                : <S.MobileDescription>
                                    {picture.explanation}
                                </S.MobileDescription>
                        }
                    </>
                    : <Loading />
                }
                <Modal
                    isOpen={isOpen}
                    close={() => setIsOpen(false)}
                    title={picture.title}
                    content={
                        <p>
                            {picture.explanation}
                        </p>
                    }
                />
            </S.Container>
            <Footer />
        </>
    )
}
