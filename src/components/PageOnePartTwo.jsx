"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { GoStarFill } from "react-icons/go";

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 14rem;
`;

const ArianImg = styled.img`
  height: 80%;
  width: 50%;
  border-radius: 12px;
`;

const Div2h2 = styled.h2`
  font-size: 90px;
  font-weight: bold;
  line-height: 80px;
  letter-spacing: -6px;
  font-family: serif;
`;

const ButtonSectionTwo = styled.button`
  padding: 1vw;
  border-radius: 500px;
  background-color: #004733;
  color: white;
  margin: 30px 0 5px 0;
`;

const SpanText = styled.span`
  font-family: "better";
  letter-spacing: -1px;
  margin: 0 10px;
`;

const SecondPagePartTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ImgButton = styled.button`
  padding: 10px;
  border: 0.5px solid rgb(159, 167, 175);
  border-radius: 500px;
  margin: 1rem 1rem;
  padding: 0.5rem 1rem;
`;

const PageOnePartTwo = () => {
  const [Img, setImg] = useState("/still-quote-Arian.webp");

  const ImageSwitch = (e) => {
    if (e.target.innerText === "Amanda") {
      setImg("/still-quote-Amanda.webp");
    }
    if (e.target.innerText === "Arian") {
      setImg("/still-quote-Arian.webp");
    }
    if (e.target.innerText === "Paul") {
      setImg("/still-quote-Paul.webp");
    }
  };
  return (
    <MainDiv>
      <div id="div1">
        <ArianImg src={Img} />
        <ImgButton onClick={ImageSwitch}>Arian</ImgButton>
        <ImgButton onClick={ImageSwitch}>Amanda</ImgButton>
        <ImgButton onClick={ImageSwitch}>Paul</ImgButton>
      </div>
      <div id="div2">
        <Div2h2>Find out why we’re better.</Div2h2>
        <ButtonSectionTwo>See all out stories</ButtonSectionTwo>
        <SecondPagePartTwo>
          <GoStarFill color="#23AD7A" /> <SpanText>TrustPilot</SpanText>
          Excellent 4.3 out of 5
        </SecondPagePartTwo>
      </div>
    </MainDiv>
  );
};

export default PageOnePartTwo;
