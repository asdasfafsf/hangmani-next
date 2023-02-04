import styled from "@emotion/styled";

const Viewer = styled.div`
    position: relative;
    top: 100px;
    height: 560px;
    width: 100%;
    background: #707070;
    mix-blend-mode: multiply;
`


const TopView = () => {
    return <Viewer/>
}

export default TopView;