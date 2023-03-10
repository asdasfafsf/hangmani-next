import styled from "@emotion/styled";
import BlackOpacityCover from "../atoms/BlackOpacityCover";
import Image from "next/image";
import MapImagePNG from 'public/images/map.png'

import Button from "../atoms/Button";


import LocationIcon from 'public/svgs/icon_location.svg';
import SearchIcon from 'public/svgs/icon_search.svg'
import useLayout from "@/hooks/useLayout";
import { css } from "@emotion/react";


const ViewerWrapper = styled.div`
    position: relative;
    top: 100px;
    height: 560px;
    justify-content: center;
    min-width: 1070px;
    width: 100%;
`


const BackgroundMap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    min-width: 1070px;
 
    img {
        width: 100%;
        max-height: 100%;
        height: 100%;
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
    margin: auto;
`

const ForYouWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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

const LottoP = styled.p`
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
    gap:20px;
`

const CoverWrapper = styled.div`
    position: absolute;
    min-width: 1070px;
    width: 100%;
    height: 100%;
`



const TopView = () => {
    const { header } = useLayout();

    const addr = `?????? ????????? ????????? ?????????`
    return (
        <ViewerWrapper>
            <BackgroundMap>
                <Image 
                    src={MapImagePNG}
                    alt='maps'
                />
            </BackgroundMap>
            <CoverWrapper>
                <BlackOpacityCover />
            </CoverWrapper>
            <ForeGroundWrapper>
                <FlexBox>
                    <AreaWrapper>

                            <ForYouWrapper>
                                <ForYou>&nbsp;????????? ??????&nbsp;</ForYou>
                            </ForYouWrapper>
                            <ForYouWrapper>
                                <Addr>{addr} </Addr>
                                &nbsp;
                                <LottoP>?????? ??????</LottoP>
                            </ForYouWrapper>
                  
                        <ButtonArea>
                            <Button 
                                // icon={LocationIcon}
                                text="?????? ?????? ??????"
                                textColor="white"
                                color="#FF7044"
                                IconComponent={SearchIcon}
                            />
                            <Button 
                                text="??? ????????? ??????"
                                textColor="white"
                                color="#2AB5BE"
                                IconComponent={LocationIcon}
                                // width={header ? '162px' : '190px'}
                                // height={header ? '39px' : undefined}
                            />
                        </ButtonArea>
                    </AreaWrapper>
                </FlexBox>
            </ForeGroundWrapper>

        </ViewerWrapper>
    )
}

export default TopView;