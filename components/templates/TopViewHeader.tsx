import styled from "@emotion/styled";
import BlackOpacityCover from "../atoms/BlackOpacityCover";
import Image from "next/image";
import MapImagePNG from 'public/images/map.png'

import Button from "../atoms/Button";


import LocationIcon from 'public/svgs/icon_location.svg';
import SearchIcon from 'public/svgs/icon_search.svg'
import useLayout from "@/hooks/useLayout";
import Logo from "../atoms/Logo";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";


interface ViewerWrapperProps {
    isRender: boolean;
}

const DynamicViewerWrapper = (props:ViewerWrapperProps) => css`
    opacity: ${(props.isRender ? 1 : 0)};
`

const ViewerWrapper = styled.div`
    ${DynamicViewerWrapper}
    position: fixed;
    height: 100px;
    justify-content: center;
    min-width: 1070px;
    width: 100%;
    transition: 0.2s;
    z-index: 5;
`

const LoggoWrapper = styled.div`
    width: 210px;
    display: flex;
    align-items: center;
    justify-content: center;

    * {
        color: white;
    }
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
    /* justify-content: space-around; */
    justify-content: start;
    align-items: center;
    height: 100%;
    width: 100%;
`

const ContentArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


const ForYou = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    /* identical to box height */
    letter-spacing: -0.05em;
    color: #FFFFFF;
    margin: 3px;
`

const Addr = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    /* identical to box height */

    letter-spacing: -0.05em;
    margin: 3px;
    color: #FFFFFF;
`

const LottoP = styled.p`
    /* margin: 3px; */
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    /* identical to box height */

    letter-spacing: -0.05em;
    color: #FFFFFF;
    margin-right: 10px;
`



const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    gap: 5px;
`



const TopViewHeader = () => {
    const { header } = useLayout();
    const [isRender, setRender] = useState(false);

    useEffect(() => {
        setRender(true)
    }, [])

    const addr = `경기 성남시 분당구 야탑동`
    return (
        <ViewerWrapper isRender={isRender}>
            <BackgroundMap>
                <Image 
                    src={MapImagePNG}
                    alt='maps'
                />
            </BackgroundMap>
            <BlackOpacityCover />
            <ForeGroundWrapper>
                <FlexBox>
                    <LoggoWrapper>
                        <Logo />
                    </LoggoWrapper>
                    <ContentArea>
                    <ForYou>당신을 위한</ForYou>
                    <Addr>{addr} </Addr>
                    &nbsp;
                    <LottoP>복권 맛집</LottoP>
                    <ButtonArea>
                        <Button 
                            // icon={LocationIcon}
                            text="다른 지역 선택"
                            textColor="white"
                            color="#FF7044"
                            IconComponent={SearchIcon}
                            width={'162px'}
                            height={'39px'}
                        />
                        <Button 
                            text="현 위치로 설정"
                            textColor="white"
                            color="#2AB5BE"
                            IconComponent={LocationIcon}
                            width={'162px'}
                            height={'39px'}
                        />
                    </ButtonArea>
                    </ContentArea>
                </FlexBox>
            </ForeGroundWrapper>

        </ViewerWrapper>
    )
}

export default TopViewHeader;