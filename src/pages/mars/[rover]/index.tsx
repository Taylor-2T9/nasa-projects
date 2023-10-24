import rovers_list from "@/assets/data/rovers"
import Loading from "@/components/Loading"
import Navbar from "@/components/Navbar"
import * as S from "@/components/pages/mars/rover/styles"
import { IRoverData } from "@/types/api/mars/rover"
import axios from "axios"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useMemo, useRef, useState } from "react"

export default function Rover() {
    const router = useRouter()
    const linkRef = useRef<HTMLAnchorElement>(null)
    const [rover, setRover] = useState({} as IRoverData)
    const roverLogo = useMemo(() => {
        if (router.query.rover)
            return rovers_list.filter((item) => {
                return item.name.toLowerCase() === router.query.rover
            })[0].logo
        return ''
    }, [rover])

    useEffect(() => {
        if (router.query.rover)
            axios.get(`/api/mars/${router.query.rover}`).then(({ data }) => {
                setRover(data.rover)
            })
    }, [router])

    return (
        <>
            <Head>
                <title>NASA Mars Rovers - {rover.name}</title>
            </Head>
            <Navbar title={rover.name} />
            <S.Container>
                {rover.name ? <S.RoverArea>
                    <S.InfoArea>
                        <div>
                            <h2>Rover: {rover.name}</h2>
                        </div>
                        <div>
                            <h3>Status: {rover.status}</h3>
                        </div>
                        <div>
                            <p>Launch Date: {rover.launch_date}</p>
                            <p>Landing Date: {rover.landing_date}</p>
                        </div>
                    </S.InfoArea>
                    <S.ImageArea>
                        <S.Image src={roverLogo} alt={rover.name} width={500} height={500} />
                    </S.ImageArea>
                </S.RoverArea>
                    : <Loading />
                }
            </S.Container>
        </>
    )
}