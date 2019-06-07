import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`

const HeaderDate = styled.div`
  margin-left: 25px;
  flex: 1;
`

const HeaderTemp = styled.div`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`


const Header = () => {
  return (
    <HeaderStyle>
      <HeaderDate>SMARCH 32, 2018</HeaderDate>
      <h1>Lambda Times</h1>
      <HeaderTemp>98°</HeaderTemp>
    </HeaderStyle>
  )
}

export default Header