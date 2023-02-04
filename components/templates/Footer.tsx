import styled from "@emotion/styled";

interface FooterProps {
  
}


const Foot = styled.footer`
    width: 100%;
    height: 160px;
    left: 0px;
    background: #EEEEEE;

`

const Footer = ({}: FooterProps) => {

    return <Foot>
        저는 푸터입니다
    </Foot>
}


export default Footer;