import styled from "@emotion/styled";


const LogoText = styled.p`
    width: 80px;
    height: 44px;
    left: 140px;
    top: 28.5px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;
    /* identical to box height */

    letter-spacing: -0.05em;

    color: #000000;
`

const Logo = () => {

    return <LogoText>행마니</LogoText>
}

export default Logo;