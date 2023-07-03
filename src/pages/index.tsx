import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import projects from '@/assets/data/projects'
import * as S from '../components/pages/styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>NASA Projects</title>
      </Head>
      <S.Container>
        <Navbar />
        <S.Explorer>
          {projects.map((item, index) => (
            <Card type="project" item={item} key={index} />
          ))}
        </S.Explorer>
      </S.Container>
    </>
  )
}
