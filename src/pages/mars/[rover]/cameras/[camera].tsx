import Loading from "@/components/Loading"
import Navbar from "@/components/Navbar"
import * as S from "@/components/pages/mars/rover/cameras/camera/styles"
import { IRoverData } from "@/types/api/mars/rover"
import { IRoverCameraSample } from "@/types/api/mars/rover/cameras/camera"
import axios from "axios"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"

export default function Mars() {
    const router = useRouter()
    const linkRef = useRef<HTMLAnchorElement>(null)
    const solRef = useRef<HTMLInputElement>(null)
    const [camImages, setCamImages] = useState([] as IRoverCameraSample[])
    const [roverInfo, setRoverInfo] = useState({} as IRoverData)
    const imagesLinksRefs = useRef<Array<HTMLAnchorElement>>([])

    function solFormSubmit(ev: any) {
        ev.preventDefault()
        setCamImages?.([])
        const { rover, camera } = router.query
        axios.get(
            `/api/mars/${rover}/cameras/${camera}?sol=${solRef.current?.value}`
        ).then(res => {
            setCamImages(res.data)
        })
    }

    useEffect(() => {
        if (router.query.rover) {
            axios.get(`/api/mars/${router.query.rover}/cameras/${router.query.camera}`).then(({ data }) => {
                setCamImages(data)
            })
            axios.get(`/api/mars/${router.query.rover}`).then(({ data }) => {
                setRoverInfo(data.rover)
            })
        }
    }, [router])

    return (
        <>
            <Head>
                <title>NASA Mars Rovers - {
                    router.query.rover && typeof router.query.rover === 'string' ?
                        router.query.rover[0].toUpperCase() + router.query.rover.substring(1)
                        : ''} {` (${router.query.camera})`}</title>
            </Head>
            <Navbar
                title={
                    router.query.rover && typeof router.query.rover === 'string' ?
                        router.query.rover[0].toUpperCase() + router.query.rover.substring(1)
                        : ''
                }
                setCamImages={setCamImages}
                rover_max_sol={roverInfo.max_sol ? roverInfo.max_sol : ''}
            />
            <S.Container>
                <S.SolForm
                    onSubmit={solFormSubmit}
                >
                    <S.SolInput
                        type="number"
                        placeholder={`Choose a day`}
                        min={1}
                        max={roverInfo.max_sol ? roverInfo.max_sol : 1}
                        ref={solRef}
                    />
                    <span>
                        {`min: 1 - max: ${roverInfo.max_sol ? roverInfo.max_sol : ''}`}
                    </span>
                    <S.SolConfirm>Search</S.SolConfirm>
                </S.SolForm>
                {camImages.length ? <S.List>
                    {camImages?.map((item, index) => {
                        imagesLinksRefs.current[index]
                        if (item.src)
                            return (
                                <S.Item
                                    key={index}
                                    onClick={() => imagesLinksRefs.current[index].click()}
                                >
                                    <a
                                        href={item.src}
                                        target="_blank"
                                        ref={el => imagesLinksRefs.current[index] = el as HTMLAnchorElement}
                                    />
                                    <img src={item.src} />
                                    <S.ItemInfo>
                                        <h3>{item.sol as number}º day in Mars</h3>
                                        <p>{item.earth_date}</p>
                                        <p>{item.camera_full_name} ({item.rover_name})</p>
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