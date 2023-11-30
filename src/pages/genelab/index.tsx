import Head from 'next/head'
import Navbar from '@/components/Navbar'
import * as S from '../../components/pages/genelab/styles'
import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react'
import axios from 'axios'
import Loading from '@/components/Loading'
import projects from '@/assets/data/projects'
import Footer from '@/components/Footer'


export default function Genelab() {
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState<string>()
    const [ascendent, setAscendent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState<any[]>([])

    const list = useMemo(() => {
        const items = [...content] // The original array cannot be passed directly to avoid being sorted
        if (!filter)
            return content || []
        if (filter !== 'updated')
            return items.sort((a, b) => {
                return ascendent ? a[filter].localeCompare(b[filter])
                    : b[filter].localeCompare(a[filter])
            })
        return items.sort((a, b) => {
            const a_updated = a.date_updated || a.date_created
            const b_updated = b.date_updated || b.date_created
            return ascendent ? a_updated - b_updated
                : b_updated - a_updated
        })
    }, [ascendent, content, filter])

    const loadMoreRef = useRef<HTMLTableRowElement>(null)

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
        axios.get(`/api/genelab?page=${content.length ? page : 1}`).then(res => {
            setContent((oldList) => {
                const newItems = res.data.list?.reduce(
                    (acc, new_files_list) => acc.concat(new_files_list.study_files), []
                )
                return [...oldList, ...newItems]
            })
            setLoading(false)
        })
    }, [page])

    return (
        <>
            <Head>
                <title>NASA GeneLab</title>
            </Head>
            <Navbar title="NASA GeneLab" />
            <S.Container>
                <S.TableWrapper>
                    {list.length ? <>
                        <table>
                            <thead>
                                <tr>
                                    <S.HeaderColumn
                                        variant='interactive'
                                        onClick={() => {
                                            if (filter !== 'category') {
                                                setFilter('category')
                                                setAscendent(true)
                                            }
                                            else setAscendent(!ascendent)
                                        }}
                                    >
                                        {(ascendent && filter === 'category') && <span>▲</span>}
                                        {(!ascendent && filter === 'category') && <span>▼</span>}
                                        Category
                                    </S.HeaderColumn>
                                    <S.HeaderColumn
                                        variant='interactive'
                                        onClick={() => {
                                            if (filter !== 'file_name') {
                                                setFilter('file_name')
                                                setAscendent(true)
                                            }
                                            else setAscendent(!ascendent)
                                        }}
                                    >
                                        {(ascendent && filter === 'file_name') && <span>▲</span>}
                                        {(!ascendent && filter === 'file_name') && <span>▼</span>}
                                        Name
                                    </S.HeaderColumn>
                                    <S.HeaderColumn
                                        variant='interactive'
                                        onClick={() => {
                                            if (filter !== 'organization') {
                                                setFilter('organization')
                                                setAscendent(true)
                                            }
                                            else setAscendent(!ascendent)
                                        }}
                                    >
                                        {(ascendent && filter === 'organization') && <span>▲</span>}
                                        {(!ascendent && filter === 'organization') && <span>▼</span>}
                                        Organization
                                    </S.HeaderColumn>
                                    <S.HeaderColumn
                                        variant='interactive'
                                        onClick={() => {
                                            if (filter !== 'updated') {
                                                setFilter('updated')
                                                setAscendent(true)
                                            }
                                            else setAscendent(!ascendent)
                                        }}
                                    >
                                        {(ascendent && filter === 'updated') && <span>▲</span>}
                                        {(!ascendent && filter === 'updated') && <span>▼</span>}
                                        Updated
                                    </S.HeaderColumn>
                                    <S.HeaderColumn>
                                        Download
                                    </S.HeaderColumn>
                                </tr>
                            </thead>
                            <tbody>
                                {list?.map((item, index) => (
                                    <S.Row key={index}>
                                        <td>{item.category}</td>
                                        <td>{item.file_name}</td>
                                        <td>{item.organization}</td>
                                        <td>
                                            {
                                                new Date(item.date_updated ?
                                                    item.date_updated : item.date_created)
                                                    .toLocaleDateString()
                                            }
                                        </td>
                                        <td>
                                            <a
                                                href={projects[3].base_url + item.remote_url}
                                                target="_blank"
                                            >
                                                Export
                                            </a>
                                        </td>
                                    </S.Row>
                                ))}
                            </tbody>
                            <tfoot>
                                <S.Row data-variant="observer" ref={loadMoreRef}>
                                    <td>
                                        Loading more...
                                    </td>
                                </S.Row>
                            </tfoot>
                        </table>
                    </> : <Loading />}
                <Footer />
                </S.TableWrapper>
            </S.Container >
        </>
    )
}
