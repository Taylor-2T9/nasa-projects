import Head from 'next/head'
import Navbar from '@/components/Navbar'
import * as S from '../../components/pages/images/styles'
import { useEffect, useState, useMemo, useRef } from 'react'
import axios from 'axios'
import Loading from '@/components/Loading'

export default function Apod() {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([] as any[])
    const [show, setShow] = useState<number>(-1)
    const [loading, setLoading] = useState(false)

    const loadMoreRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)
    const redirectRefs = useRef<Array<HTMLAnchorElement>>([])

    const searchSubmit = (ev) => {
        ev.preventDefault()
        setData([])
        axios.get(
            `/api/images?page=1&terms=${searchInputRef.current?.value}`
        ).then(res => {
            setData(res.data.items)
            setLoading(false)
        })
    }

    const content = useMemo(() => {
        return data?.map(item => {
            const description = item.data[0].description_508 || item.data[0].description
            return {
                link: item.links[0],
                title: item.data[0].title,
                date: new Date(item.data[0].date_created),
                preview_description: description.length > 100 ?
                    description.substr(0, 100) + '...' : description,
                description,
            }
        })
    }, [data])

    useEffect(() => {
        const observer = new IntersectionObserver((entities) => {
            const target = entities[0]

            if (target.isIntersecting && !loading) {
                setPage(value => value + 1)
                setLoading(true)
            }
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0
        })

        if (loadMoreRef.current)
            observer.observe(loadMoreRef.current)

        return () => { observer.disconnect() }
    }, [loadMoreRef.current])

    useEffect(() => {
        axios.get(
            `/api/images?page=${page}&terms=${searchInputRef.current?.value}`
        ).then(res => {
            setData(state => {
                return [...state, ...res.data.items] as any[]
            })
            setLoading(false)
        })
    }, [page])
    return (
        <>
            <Head>
                <title>Astro Picture of the Day</title>
            </Head>
            <Navbar title="NASA Image and Video Library" />
            <S.Container>
                <S.SearchArea
                    onSubmit={searchSubmit}
                >
                    <S.Input
                        type="text"
                        placeholder="Search for a term"
                        ref={searchInputRef}
                    />
                    <S.ConfirmButton>Search</S.ConfirmButton>
                </S.SearchArea>
                {data.length ?
                    <>
                        <S.List>
                            {content.map((item, index) => (
                                <S.Card
                                    onMouseEnter={() => setShow(index)}
                                    onMouseLeave={() => setShow(-1)}
                                    onClick={() => {
                                        redirectRefs.current[index].click()
                                    }}
                                >
                                    <img src={item.link.href} />
                                    <S.Preview show={show === index}>
                                        <h3>{item.title}</h3>
                                        <p
                                            title={item.description}
                                        >
                                            {item.preview_description}
                                        </p>
                                        <p>
                                            {item.date.toLocaleDateString()}
                                        </p>
                                    </S.Preview>
                                    <a
                                        href={item.link.href}
                                        ref={el => redirectRefs.current[index] = el as HTMLAnchorElement}
                                        target="_blank"
                                    >
                                    </a>
                                </S.Card>
                            ))}
                        </S.List>
                        {
                            searchInputRef.current?.value ?
                                (
                                    <div ref={loadMoreRef}>
                                        Loading more...
                                    </div>
                                )
                                : null
                        }
                    </>
                    : <Loading />
                }
            </S.Container>
        </>
    )
}
