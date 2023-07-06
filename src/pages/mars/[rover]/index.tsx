import Navbar from "@/components/Navbar";
import * as S from "@/components/pages/mars/styles"
import { RoverData } from "@/types/api/mars/rover";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Mars() {
    const router = useRouter()
    const [rover, setRover] = useState({} as RoverData)
    useEffect(() => {
        if (router.query.rover) {
            axios.get(`/api/mars/${router.query.rover}`).then(({ data }) => {
                setRover(data.rover)
            })
        }
    }, [router])
    return (
        <div>
            <Navbar />
            <S.Container>
                <div>
                    <h1>{rover.name}</h1>
                </div>
            </S.Container>
        </div>
    )
}