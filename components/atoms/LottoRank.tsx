import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Rank2 from 'public/svgs/icon_ranking.svg';
import Rank1 from 'public/svgs/icon_ranking1.svg';

interface LottoRankProps {
    winCount: number;
    rank: number;
    isShadow: boolean;
    isBorder?: boolean;
    width?: number;
    height?: number;
}



interface ShadowCssProps {
    isShadow: boolean;
    isBorder: boolean;
}


const ShadowCss = ({isShadow, isBorder}: ShadowCssProps) => css`
    box-shadow: ${(isShadow ? '1px 4px 4px 1px gray' : undefined)};
    border: ${(isBorder ? '1px solid lightgray' : undefined)};
`;

const LottoRankWrapper = styled.div`
    ${ShadowCss}
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 4px 12px;
    gap: 8px;
    background: #FFFFFF;
    border-radius: 6px;

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

export const LottoRank = ({winCount, rank, isShadow, isBorder=false, width, height}: LottoRankProps) => {

    return (<LottoRankWrapper isShadow={isShadow} isBorder={isBorder}>
                {rank === 2 ? <Rank2 /> : <Rank1 />}
                <LottoRankText>
                    <div>{winCount}회</div>
                </LottoRankText>
    </LottoRankWrapper>)
}

export default LottoRank;