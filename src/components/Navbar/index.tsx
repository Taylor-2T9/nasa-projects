import { NextPage } from "next"
import { useRouter } from "next/router"
import { useMemo, useRef } from "react"
import * as S from "./styles"
import { INavProps } from "@/types/components/navbar"
import mars_header from "@/assets/images/mars_header.jpg"
import apod_header from "@/assets/images/apod_header.jpg"
import axios from "axios"
import { IPictureData } from "@/types/api/apod"

const Navbar: NextPage<INavProps> = ({ setPicture, setCamImages, title, rover_max_sol }) => {
    const router = useRouter()
    const linkRef = useRef<HTMLAnchorElement>(null)
    const dateRef = useRef<HTMLInputElement>(null)
    const solRef = useRef<HTMLInputElement>(null)

    const header_background = useMemo(() => {
        const path_without_bar = router.asPath.substring(1)
        let key = ''

        if (router.asPath === '/')
            key = 'default'
        else if (path_without_bar.search('/') === -1)
            key = path_without_bar
        else
            key = router.asPath
                .substring(1, path_without_bar.search('/') + 1)

        const background = {
            apod: apod_header,
            mars: mars_header,
            default: apod_header
        }[key]

        return background ? background : {
            apod: apod_header,
            mars: mars_header,
            default: apod_header
        }['default']
    }, [])

    function apodSubmit(ev: any) {
        ev.preventDefault()
        setPicture?.({} as IPictureData)
        axios.get(`api/apod/${dateRef.current?.value}`).then(res => {
            const data = {
                ...res.data,
                resumeExplanation: res.data.explanation.length > 600 ?
                    res.data.explanation.substr(0, 600) + '...' : '',
                date: new Date(res.data.date + " ")
            }
            setPicture?.(data)
        })
    }
    function roverCamSubmit(ev: any) {
        ev.preventDefault()
        setCamImages?.([])
        const { rover, camera } = router.query
        axios.get(
            `/api/mars/${rover}/cameras/${camera}?sol=${solRef.current?.value}`
        ).then(res => {
            setCamImages?.(res.data)
        })
    }
    return (
        <>
            <S.Container background_image={header_background}>
                <S.HeaderContent>
                    <S.Home onClick={() => linkRef.current?.click()}>
                        <S.HomeRedirect href="/" ref={linkRef} />
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                            <path d="M255.6 62.21c-25.1 0-50.7 5.02-75.3 15.48C81.74 119.5 35.86 233.1 77.69 331.7c4.76 11.1 10.45 21.7 16.93 31.5-12.6.3-23.45-.5-31.98-2.4-13.22-2.9-19.93-7.8-22.27-13.3-2.33-5.6-1.25-13.8 5.87-25.4 1.65-2.6 3.62-5.4 5.86-8.4-2.1-7.4-3.76-14.7-5.05-22.2-6.62 7.1-12.1 14.2-16.37 21.1-8.74 14.1-12.66 28.9-7.11 42 5.54 13.1 18.9 20.5 35.17 24 13.66 3 30.13 3.6 48.96 2.2 53.2 63.4 143.6 87.6 223.9 53.4 80.3-34.1 125.6-115.7 117.1-198.1 14.1-12.6 25.2-24.9 32.5-36.8 8.9-14.2 12.7-29 7.2-42-5.6-13.1-18.9-20.5-35.2-24.1-7.9-1.7-16.9-2.7-26.5-2.8 4.5 6.1 8.6 12.4 12.4 19.1 3.7.4 7.1.9 10.1 1.6 13.3 2.8 20 7.8 22.3 13.3 2.4 5.5 1.3 13.8-5.9 25.3-4.5 7.4-11.4 15.8-20.4 24.7 1.5 7.3 2.7 14.5 3.4 21.7-2.6 2.3-5.5 4.7-8.2 7.1-4.7 3.8-9.5 7.7-14.7 11.5 11.2 32-4.4 67.8-35.9 81.2-26.3 11.2-56 3.6-74-16.8-9.1 4.3-18.3 8.4-27.8 12.5-62.5 26.4-122.4 43-169.2 48.1-3.8.4-7.5.7-11 1.1-4.7-5.6-8.95-11.4-13.12-17.6 6.82-.2 14.22-.7 22.02-1.6 44.4-4.9 103-20.9 164.2-46.9 8.4-3.5 16.7-7.3 24.8-11-.4-.7-.7-1.4-1-2.1-14-32.9 1.5-71.2 34.4-85.1 28.3-12.1 60.7-2.1 78 21.8 4-3.1 7.9-6.1 11.5-9.1 6.1-5 11.6-10 16.6-14.8-2.6-11.5-6.2-22.9-11-34.1-31.4-73.9-103.1-118.22-178.6-118.09zM364.3 229.6c-5.9 0-12.1 1.2-18.1 3.7-23.7 10.1-34.8 37.3-24.6 61.2 10 23.8 37.3 34.7 61.1 24.6 23.7-10 34.8-37.3 24.6-61.1-7.5-17.9-24.7-28.5-43-28.4z"></path>
                        </svg>
                        <h3> NASA API Projects </h3>
                    </S.Home>
                    <S.Title
                        variant={
                            router.route.includes('/cameras/') ? "top"
                                : "center"
                        }
                    >
                        {title}
                    </S.Title>
                    {
                        router.route.includes("/apod") ?
                            <S.DateForm onSubmit={apodSubmit}>
                                <S.DateInput type="date" ref={dateRef} required />
                                <S.ConfirmButton>Choose a date</S.ConfirmButton>
                            </S.DateForm>
                            :
                            router.route.includes("/mars/") ?
                                <S.Options>
                                    <S.Link
                                        href={`/mars/${router.query.rover}`}
                                        active={
                                            router.asPath === `/mars/${router.query.rover}` ? 'true' : 'false'
                                        }
                                    >
                                        <h3>Information</h3>
                                    </S.Link>
                                    <S.Link
                                        href={`/mars/${router.query.rover}/cameras`}
                                        active={
                                            router.asPath.includes(`/mars/${router.query.rover}/cameras`) ? 'true' : 'false'
                                        }
                                    >
                                        <h3>Cameras</h3>
                                    </S.Link>
                                    {/* {router.route.includes('/cameras/') ?
                                        <S.Dropdown>
                                            <div>
                                                <S.MenuIcon />
                                            </div>
                                            <S.DropdownContent>
                                                <a href="#">Opção 1</a>
                                                <a href="#">Opção 2</a>
                                                <a href="#">Opção 3</a>
                                            </S.DropdownContent>
                                        </S.Dropdown> : ''} */}
                                    {
                                        router.route.includes('/cameras/') ?
                                            <S.SolForm onSubmit={roverCamSubmit}>
                                                <label>Choose a day</label>
                                                <S.SolInput
                                                    type="number"
                                                    placeholder={`1 - ${rover_max_sol}`}
                                                    min="1"
                                                    max={rover_max_sol}
                                                    ref={solRef}
                                                />
                                                <S.SolConfirm>Search</S.SolConfirm>
                                            </S.SolForm> : ''
                                    }
                                </S.Options> :
                                <></>
                    }
                </S.HeaderContent>
            </S.Container>
        </>
    )
}

export default Navbar