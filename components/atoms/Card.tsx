import styled from "@emotion/styled";
import Image from "next/image";
import MapImagePNG from 'public/images/map.png';
import Rank from 'public/svgs/icon_ranking.svg';



const CardWrapper = styled.div`
    /* background-color: pink; */
    position: relative;
    width: 288px;
    height: 302px;

    cursor: pointer;
    :hover {}
`


const CardContainer = styled.div`
    position: absolute;
`

const CardImageWrapper = styled.div`
    z-index: 1;
    * {
        z-index: 1;
    }
`
const CardImg = styled(Image)`
    object-fit: cover;
    z-index: 1;
`


const LottoRankWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 8px 16px;
    gap: 10px;

    position: absolute;
    left: 62.5%;
    right: 6.94%;
    top: 6.79%;
    bottom: 80.3%;

    background: #FFFFFF;
    border-radius: 6px;
    box-shadow: 1px 4px 4px 1px gray;
`

const LottoRankText = styled.p`
    display: flex;
    /* align-items: flex-end; */
    /* justify-content: center; */
    margin: 0px;
    width: 32px;
    height: 100%;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: -0.05em;

    color: #333333;
`

const StoreName = styled.div`
    position: absolute;
    margin: 0px;
    left: 0%;
    right: 0%;
    top: 84.77%;
    bottom: 0%;
    
    p {
        margin: 0px;
        position: relative;
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: -0.05em;

        color: #333333;
    }
`

const Card = () => {
    return (
        <CardWrapper>
            <CardContainer>
                
                <LottoRankWrapper>
                    <Rank />
                    <LottoRankText>10회</LottoRankText>
                </LottoRankWrapper>
                <CardImageWrapper>
                    <CardImg 
                        src={MapImagePNG}
                        width={288}
                        height={240} alt={""}                
                    />
                </CardImageWrapper>
            </CardContainer>
            <StoreName>
                <p>복권판매점 야탑점 복권판매점 야탑점</p>
                <p>복권판매점 야탑점 복권판매점 야탑점</p>
            </StoreName>
        </CardWrapper>
    )
}


export default Card;