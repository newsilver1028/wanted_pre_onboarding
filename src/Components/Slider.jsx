import { useState } from "react";
import styled from "styled-components";

export default function Slider() {
  const [value, setValue] = useState(50);

  function handleInputSlider(e) {
    const targetValue = e.target.value;
    setValue(targetValue);
  }

  function handleSectionButtonClick(e) {
    const targetValue = e.target.value;
    setValue(targetValue);
  }

  return (
    <Container>
      <TextWrapper>
        <Text>{value} %</Text>
      </TextWrapper>
      <SliderWrapper>
        <SlideBar currentValue={100} color={"lightgray"}></SlideBar>
        <SlideBar currentValue={value} color={"lightsteelblue"}></SlideBar>
        <InputSlider
          type="range"
          min="1"
          value={value}
          max="100"
          id="input-slider"
          onClick={handleInputSlider}
          onChange={handleInputSlider}
        />
        <SectionDivWrapper>
          <SectionDiv value={1} currentValue={value}></SectionDiv>
          <SectionDiv value={25} currentValue={value}></SectionDiv>
          <SectionDiv value={50} currentValue={value}></SectionDiv>
          <SectionDiv value={75} currentValue={value}></SectionDiv>
          <SectionDiv value={100} currentValue={value}></SectionDiv>
        </SectionDivWrapper>
        <SectionButtonWrapper>
          <SectionButton value={1} onClick={handleSectionButtonClick}>
            1%
          </SectionButton>
          <SectionButton value={25} onClick={handleSectionButtonClick}>
            25%
          </SectionButton>
          <SectionButton value={50} onClick={handleSectionButtonClick}>
            50%
          </SectionButton>
          <SectionButton value={75} onClick={handleSectionButtonClick}>
            75%
          </SectionButton>
          <SectionButton value={100} onClick={handleSectionButtonClick}>
            100%
          </SectionButton>
        </SectionButtonWrapper>
      </SliderWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px auto;
  width: 50%;
`;

const TextWrapper = styled.div`
  margin-bottom: 20px;
  padding: 10px 10px 0px 0px;
  width: 100%;
  height: 30px;
  background-color: rgb(239, 236, 236);
  border: 1px solid lightgray;
  border-radius: 5px;
  text-align: right;
`;

const Text = styled.span`
  color: dimgray;
  font-size: 1.2rem;
  letter-spacing: 2px;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputSlider = styled.input`
  position: relative;
  width: 100%;
  border: none;
  background-color: transparent;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background-color: transparent;
  }

  &::-webkit-slider-thumb {
    position: relative;
    margin-top: -7px;
    margin-left: -1px;
    width: 23px;
    height: 23px;
    background-color: lightsteelblue;
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: rgb(0, 0, 0, 0.15) 0px 5px 5px;
    z-index: 2;
    -webkit-appearance: none;
    cursor: pointer;
  }
`;

const SlideBar = styled.div`
  position: absolute;
  top: 14%;
  width: ${(props) => props.currentValue}%;
  height: 8px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  z-index: -1;
`;

const SectionDivWrapper = styled.div`
  position: absolute;
  top: 2px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: -1;
`;

const SectionDiv = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${(props) =>
    props.currentValue < props.value ? "lightgray" : "lightsteelblue"};
  border: none;
  border-radius: 50%;
`;

const SectionButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`;

const SectionButton = styled.button`
  width: 50px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
