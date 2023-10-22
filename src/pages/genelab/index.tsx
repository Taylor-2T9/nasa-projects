import Head from 'next/head'
import Navbar from '@/components/Navbar'
import * as S from '../../components/pages/apod/styles'
import { useEffect, useState } from 'react'
import { IPictureData } from '@/types/api/apod'
import axios from 'axios'
import Loading from '@/components/Loading'

export default function Apod() {
    useEffect(() => {
        axios.get("/api/genelab").then(res => {
            console.log(res.data)
        })
    }, [])
    return (
        <>
            <Head>
                <title>NASA GeneLab</title>
            </Head>
            <Navbar title="NASA GeneLab" />
            <S.Container>
                <Loading />
            </S.Container>
        </>
    )
}
