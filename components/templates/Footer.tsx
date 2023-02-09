import styled from "@emotion/styled";
import Link from "next/link";

interface FooterProps {
  
}


const Foot = styled.footer`
    position: relative;
    width: 100%;
    height: 160px;
    left: 0px;
    background: #EEEEEE;
    /* min-width: 1070px; */
    /* max-width: 100%; */
`

const FooterWrapper = styled.div`
    position: relative;
    left: 360px;
    top: 60px;
    width: 100%;
`

const TextArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 25px;
    gap: 12px;
    width: 100%;
`

const Line = styled.p`
    height: 10px;
    width: 1px;
    background-color: gray;
`

const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.05em;
    
`

const Footer = ({}: FooterProps) => {

    return (<Foot>
        <FooterWrapper>
            {/* <TextArea>
                <Text>개인정보처리방침</Text>
                <Line />
                <Text>이용약관</Text>
                <Line />
                <Text>위치기반 서비스 이용약관</Text>
            </TextArea>
            <TextArea>
                <Text>행마니</Text>
                <Line />
                <Text>이메일 문의 : contact@hangmani.com</Text>
                <Line />
                <Text>Copyright Ⓒ hangmani</Text>
            </TextArea> */}
        </FooterWrapper>
    </Foot>)
}


export default Footer;