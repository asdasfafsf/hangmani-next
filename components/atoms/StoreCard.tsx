import styled from "@emotion/styled";
import Image from "next/image";
import LottoRank from "./LottoRank";


interface StoreCardProps {
    storeName: string;
    distance: string;
    storeAddr: string;
    oneWinCount: number;
    twoWinCount: number;
    lottoTypeList: string[]
}

interface LottoType {
    type: string;
}


const StoreCardWrapper = styled.div`
    width: 450px;
    height: 165px;
    box-sizing: border-box;
    border: 1px solid lightgray;
    padding: 20px;
`


const StoreUpper = styled.div`
    display: flex;
    width: 100%;
    gap: 15px;
`

const StoreImage = styled(Image)`
    width: 92px;
    height: 92px;
`

const StoreUpperRight = styled.div`
    width: 300px;
    row-gap: 10px;
    align-items: flex-start;
    
`

const StoreCardLiner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StoreNameText = styled.p`
    margin: 0px;
    padding: 0px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    /* identical to box height */

    letter-spacing: -0.05em;

    color: #333333;
`

const DistanceText = styled.p`
    margin: 0px;
    padding: 0px;
    width: 28px;
    height: 20px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.05em;

    color: #707070;
`

const StoreCardLiner2 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`
const AddrText = styled.p`
    margin: 0px;
    margin-top: 6px;
    padding: 0px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.05em;

    color: #333333;
`

const LottoListWrapper = styled.div`
    display: flex;
    height: 40px;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 10px;
`

const LottoTypeImage = styled(Image)`
    width: 70px;
    height: 21px;
`

const StoreCard = ({storeName, distance, storeAddr, oneWinCount, twoWinCount, lottoTypeList}: StoreCardProps) => {
    return(
        <StoreCardWrapper>
            <StoreUpper>
                <StoreImage src={""} alt={""} />
                <StoreUpperRight>
                    <StoreCardLiner>
                        <StoreNameText>
                            나눔로또판매점
                        </StoreNameText>
                        <DistanceText>
                            50m
                        </DistanceText>
                    </StoreCardLiner>
                    <StoreCardLiner2>
                        <LottoRank 
                            winCount={oneWinCount} 
                            rank={1} 
                            isShadow={false}
                            isBorder={true}
                        />
                        <LottoRank 
                            winCount={twoWinCount} 
                            rank={1} 
                            isShadow={false}
                            isBorder={true}
                        />
                    </StoreCardLiner2>
                    <AddrText>
                        서울특별시 영등포구 영등포동가 10-13
                    </AddrText>
                </StoreUpperRight>
            </StoreUpper>
            <LottoListWrapper>
                {
                    lottoTypeList.map(elem => {
                        switch(elem) {
                            case 'Lotto6/45':
                                return <LottoTypeImage src="" alt=""/>;
                            case '':
                                return <LottoTypeImage src="" alt=""/>;
                            case 'Lotto6/45':
                                return <LottoTypeImage src="" alt=""/>;
                            case 'Lotto6/45':
                                return <LottoTypeImage src="" alt=""/>;
                            case 'Lotto6/45':
                                return <LottoTypeImage src="" alt=""/>;
    
                        }
                            
                    })
                }
                
            </LottoListWrapper>
        </StoreCardWrapper>
    )
}


export default StoreCard;