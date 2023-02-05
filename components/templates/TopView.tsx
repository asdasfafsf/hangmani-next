import styled from "@emotion/styled";
import BlackOpacityCover from "../atoms/BlackOpacityCover";
import Image from "next/image";
import MapImagePNG from 'public/images/map.png'

import Button from "../atoms/Button";


import LocationIcon from 'public/svgs/icon_location.svg';
import SearchIcon from 'public/svgs/icon_search.svg'

const ViewerWrapper = styled.div`
    position: relative;
    top: 100px;
    height: 560px;
    width: 100%;
`


const BackgroundMap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
 
    img {
        max-height: 100%;
        height: auto;
        object-fit: cover;
    }
`



const ForeGroundWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

`

const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const AreaWrapper = styled.div`
    /* position: absolute; */
    /* width: 425px;
    height: 80px;
    top: 295px;  */
    margin: auto;
`

const ForYouWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
`

const ForYou = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    /* identical to box height */
    letter-spacing: -0.05em;

    color: #FFFFFF;
    margin: 0px;
`

const Addr = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 43px;
    letter-spacing: -0.05em;

    color: #FFFFFF;
    margin: 0px;
`

const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
`



const TopView = () => {
    const addr = `경기 성남시 분당구 야탑동`
    return (
        <ViewerWrapper>
            <BackgroundMap>
                <Image 
                    src={MapImagePNG}
                    alt='maps'
                />
            </BackgroundMap>
            <BlackOpacityCover />
            <ForeGroundWrapper>
                <FlexBox>
                    <AreaWrapper>
                        <ForYouWrapper>
                            <ForYou>당신을 위한</ForYou>
                        </ForYouWrapper>
                        <ForYouWrapper>
                            <Addr>{addr} 복권 맛집</Addr>
                        </ForYouWrapper>
                        <ButtonArea>
                            <Button 
                                // icon={LocationIcon}
                                text="다른 지역 선택"
                                textColor="white"
                                color="#FF7044"
                                IconComponent={SearchIcon}
                            />
                            <Button 
                                text="현 위치로 설정"
                                textColor="white"
                                color="#2AB5BE"
                                IconComponent={LocationIcon}
                            />
                        </ButtonArea>
                    </AreaWrapper>
                </FlexBox>
            </ForeGroundWrapper>

        </ViewerWrapper>
    )
}

export default TopView;