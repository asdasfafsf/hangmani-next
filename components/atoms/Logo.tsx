import styled from "@emotion/styled";


const LogoText = styled.p`
    margin: 0px;
    width: 80px;
    height: 44px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    letter-spacing: -0.05em;

    color: #000000;
`

const Logo = () => {

    return <LogoText>행마니</LogoText>
}

export default Logo;