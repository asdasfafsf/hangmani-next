import LogoSvg from 'public/svgs/Logo.svg';
import styled from 'styled-components';

const LogoWrap = styled.div`
    cursor: pointer;
`

const Logo = () => <LogoWrap><LogoSvg /></LogoWrap>

export default Logo;