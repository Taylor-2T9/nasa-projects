import Card from "@/components/Card"
import Navbar from "@/components/Navbar"
import * as S from "@/components/pages/mars/styles"
import rovers_list from "@/assets/data/rovers"
import Head from "next/head"
import Footer from "@/components/Footer"

export default function Mars() {
    return (
        <>
            <Head>
                <title>NASA Mars Rovers</title>
            </Head>
            <Navbar title="Mars Rovers" />
            <S.Container>
                {
                    rovers_list.map((item, index) => (
                        <Card type="rover" key={index} item={item} />
                    ))
                }
            </S.Container>
            <Footer />
        </>
    )
}