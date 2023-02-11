import styled from "@emotion/styled";
import Image from "next/image";
import MapImagePNG from 'public/images/map.png';
import Rank2 from 'public/svgs/icon_ranking.svg';
import Rank1 from 'public/svgs/icon_ranking1.svg';

interface CardProps {
    rank: number;
    winCount: number;
    storeName: string;
    thumbnail: string;
}



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
    gap: 8px;

    position: absolute;
    left: 62.5%;
    right: 6.94%;
    top: 6.79%;
    bottom: 80.3%;
    width: 58px;

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

const Card = ({rank, winCount, thumbnail, storeName}: CardProps) => {
    return (
        <CardWrapper>
            <CardContainer>
                
                <LottoRankWrapper>
                    {rank === 2 ? <Rank2 /> : <Rank1 />}
                    <LottoRankText>{winCount}회</LottoRankText>
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
                <p>{storeName}{storeName}</p>
                <p>{storeName}{storeName}</p>
            </StoreName>
        </CardWrapper>
    )
}


export default Card;