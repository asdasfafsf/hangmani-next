import styled from "@emotion/styled";
import Image from "next/image";
import LocationIcon from 'public/svgs/icon_location2.svg';
import ContentLiner from "../atoms/ContentLiner";
import HorizontalLine from "../atoms/HorizontalLine";

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    width: 100%;
    max-width: 1300px;
    margin-bottom: 200px;
    gap: 10px;
`

const Aside = styled.aside`
    width: 288px;
    height: 360px;
    border: 1px solid black;
`

const StaticMap = styled.div`
    
`
const GoBackWrapper = styled.div`
    width: 288px;
    height: 60px;
`


const Section = styled.section`
    width: 896px;
`

const Thumbnail = styled(Image)`
    max-height: 100%;
    height: auto;
    object-fit: cover;
`

const ContentWrapper = styled.div`
    width: 100%;
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-start;
`
const Title = styled.p`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 46px;
    /* identical to box height */

    letter-spacing: -0.05em;

    color: #333333;
`





const DetailTemplate = () => {


    return (
        <>
            <Main>
                <Aside>
                    <StaticMap>제 자리에는 지도가 들어가용</StaticMap>
                    <GoBackWrapper>
                            저는 뒤로가기에용
                    </GoBackWrapper>
                </Aside>
                <Section>
                    <Thumbnail src={""} alt={""} />
                    <ContentWrapper>
                        <TitleWrapper>
                            <Title>
                                나눔로또판매점
                            </Title>
                        </TitleWrapper>
                        <ContentLiner 
                            IconComponent={LocationIcon} 
                            text={"서울특별시 영등포구 영등포동 3가 10-1"}
                        />
                   
                        <HorizontalLine length={796} weight={1} color={'lightgray'} />
                        <ContentLiner 
                            IconComponent={LocationIcon} 
                            text={"서울특별시 영등포구 영등포동 3가 10-1"}
                        />
                   
                        <HorizontalLine length={796} weight={1} color={'lightgray'} />

                        <ContentLiner 
                            IconComponent={LocationIcon} 
                            text={"서울특별시 영등포구 영등포동 3가 10-1"}
                        />
                   
                        <HorizontalLine length={796} weight={1} color={'lightgray'} />

                        <ContentLiner 
                            IconComponent={LocationIcon} 
                            text={"서울특별시 영등포구 영등포동 3가 10-1"}
                        />
                   
                        <HorizontalLine length={796} weight={1} color={'lightgray'} />

                    </ContentWrapper>
                </Section>
            </Main>
        </>
    )
}



export default DetailTemplate;