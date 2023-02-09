import Head from 'next/head'
import styled from '@emotion/styled'
import GridMain from '@/components/templates/GridMain'


const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 200px;
`


export default function Home() {

  return (
    <>
      <Head>
        <title>행마니</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <GridMain />
      </Section>
    </>
  )
}
