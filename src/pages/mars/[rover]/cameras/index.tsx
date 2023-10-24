import Loading from "@/components/Loading"
import Navbar from "@/components/Navbar"
import * as S from "@/components/pages/mars/rover/cameras/styles"
import { IRoverCamera } from "@/types/api/mars/rover"
import axios from "axios"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"

export default function Mars() {
    const router = useRouter()
    const [cameras, setCameras] = useState([] as IRoverCamera[])

    const camerasLinksRefs = useRef<Array<HTMLAnchorElement>>([])

    useEffect(() => {
        if (router.query.rover)
            axios.get(`/api/mars/${router.query.rover}`).then(({ data }) => {
                const cameras: string[] = data.rover.cameras.map((item: IRoverCamera) => {
                    return item.name
                })
                axios.get(`/api/mars/${router.query.rover}/cameras?cams=${cameras.toString()}`).then(({ data }) => {
                    setCameras(data)
                })
            })
    }, [router])
    return (
        <>
            <Head>
                <title>NASA Mars Rovers - {
                    router.query.rover && typeof router.query.rover === 'string' ?
                        router.query.rover[0].toUpperCase() + router.query.rover.substring(1)
                        : ''} Cameras</title>
            </Head>
            <Navbar
                title={
                    router.query.rover && typeof router.query.rover === 'string' ?
                        router.query.rover[0].toUpperCase() + router.query.rover.substring(1)
                        : ''
                }
            />
            <S.Container>
                {cameras.length ? <S.List>
                    {cameras?.map((item, index) => {
                        if (item.src)
                            return (
                                <S.Item
                                    key={index}
                                    onClick={() => camerasLinksRefs.current[index].click()}
                                >
                                    <S.CameraLink
                                        key={index}
                                        ref={el => camerasLinksRefs.current[index] = el as HTMLAnchorElement}
                                        href={`/mars/${router.query.rover}/cameras/${item.name}`}
                                    />
                                    <img src={item.src} />
                                    <S.ItemInfo>
                                        <h3>Camera {index + 1}</h3>
                                        <p>{item.camera_full_name}</p>
                                        <h5>See more images</h5>
                                    </S.ItemInfo>
                                </S.Item>
                            )
                    }
                    )}
                </S.List> : <Loading />}
            </S.Container>
        </>
    )
}