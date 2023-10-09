import Loading from "@/components/Loading"
import Navbar from "@/components/Navbar"
import * as S from "@/components/pages/mars/rover/cameras/camera/styles"
import { IRoverData } from "@/types/api/mars/rover"
import { IRoverCameraSample } from "@/types/api/mars/rover/cameras/camera"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"

export default function Mars() {
    const router = useRouter()
    const linkRef = useRef<HTMLAnchorElement>(null)
    const [camImages, setCamImages] = useState([] as IRoverCameraSample[])
    const imagesLinksRefs = useRef<Array<HTMLAnchorElement>>([])

    useEffect(() => {
        if (router.query.rover)
            axios.get(`/api/mars/${router.query.rover}/cameras/${router.query.camera}`).then(({ data }) => {
                setCamImages(data)
            })
    }, [router])
    return (
        <div>
            <Navbar
                title={
                    router.query.rover && typeof router.query.rover === 'string' ?
                        router.query.rover[0].toUpperCase() + router.query.rover.substring(1)
                        : ''
                }
                setCamImages={setCamImages}
                rover_max_sol={camImages.length ? camImages[0].rover_max_sol : ''}
            />
            <S.Container>
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
        </div >
    )
}