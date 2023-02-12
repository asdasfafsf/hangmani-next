import styled from "@emotion/styled";
import Rank2 from 'public/svgs/icon_ranking.svg';
import Rank1 from 'public/svgs/icon_ranking1.svg';

interface LottoRankProps {
    winCount: number;
    rank: number;
}


const LottoRankWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-item: center;
    padding: 4px 16px;
    gap: 8px;
    /* width: 58px; */
    background: #FFFFFF;
    border-radius: 6px;
    box-shadow: 1px 4px 4px 1px gray;
`

const LottoRankTextWrapper = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
`


const LottoRankText = styled.div`
    align-items: center;
    margin: 0px;
    padding: 0px;
    width: 32px;
    height: 100%;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: -0.05em;
    margin-top: 4px;
    color: #333333;
`

export const LottoRank = ({winCount, rank}: LottoRankProps) => {

    return (<LottoRankWrapper>
                {rank === 2 ? <Rank2 /> : <Rank1 />}
                <LottoRankText>
                    <div>{winCount}회</div>
                </LottoRankText>
    </LottoRankWrapper>)
}