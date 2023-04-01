import React from 'react'


const CounterResult = ({Up, Down}) => {
  return (
    <>
      <Switch>
        <LeftButton onClick={Up}>
          <StaticImage src="../images/arrow.png" />
        </LeftButton>
        <RightButton onClick={Down}>
          <StaticImage src="../images/arrow.png" />
        </RightButton>
      </Switch>
    </>
  );
};

const LeftButton = styled.button`
  width : 40px;
  height : 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${val.darkGray};
  img{
    width: 60%;
  }
`
const RightButton = styled.button`
  width : 40px;
  height : 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  background: ${val.black};
  img{
    width: 60%;
  }
`

export default CounterResult;
