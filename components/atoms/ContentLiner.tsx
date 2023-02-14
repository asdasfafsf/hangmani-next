import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Component, ReactElement } from "react";

interface ContentLinerProps {
    IconComponent: any;
    text: string;
}



const ContentLinerWrapper = styled.div`
    width: 796px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
`

const ContentText = styled.p`
    padding: 0px;
    margin: 0px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.05em;

    color: #333333;
`

export const ContentLiner = ({IconComponent, text}: ContentLinerProps) => {

    return (
        <ContentLinerWrapper>
            <IconComponent/>
            <ContentText>{text}</ContentText>
        </ContentLinerWrapper>
    )
}


export default ContentLiner;