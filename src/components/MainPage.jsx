"use client";
import React from "react";
import styled from "styled-components";
import { IoIosTimer } from "react-icons/io";
import { Tilt } from "react-tilt";

const MainDiv = styled.div`
  height: fit-content;
  width: 100%%;
  background-color: #004733;
  padding-top: 1rem;
  font-family: "better2";
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  position: relative;
`;

const SecondMain = styled.div`
  padding: 0 5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const HeroTitle = styled.h1`
  font-size: 120px;
  color: #1ee07f;
  z-index: +9;
  text-align: center;
  padding-top: 10rem;
  line-height: 100px;
  font-family: serif;
  background-color: #004733;
  z-index: 2
  letter-spacing: -2px;
`;

const Img = styled.img`
  // height: 40%;
  // position: absolute;
  // bottom: 40%;
  // align-self: center;
  // justify-content: flex-start;
  // z-index: 1;
`;

const ApprovalButton = styled.button`
  height: 78px;
  width: 230px;
  border: 1px solid #004733;
  padding: 12px 24px;
  background-color: #1ee07f;
  border-radius: 500px;
  color: black;
  font-size: 15px;
  font-weight: 600;
  font-family: serif;
  line-height: 13px;

  &:hover {
    background-color: #004733;
    color: white;
  }
`;

const LeftDiv = styled.div`
  // position: absolute;
  // left: 20%;
  // bottom: 40%;
`;

const SecondImg = styled.img`
  // position: absolute;
  // bottom: 40%;
  // right: 10%;
`;
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const MainPage = () => {
  return (
    <>
      <MainDiv>
        <HeroTitle>
          Mortgages <br /> made simple
        </HeroTitle>
        <SecondMain>
          <LeftDiv>
            <ApprovalButton>Start My Approval</ApprovalButton>
            <p
              style={{
                fontSize: "18px",
                color: "white",
                display: "flex",
              }}
            >
              <IoIosTimer /> 3 min | No credit impact
            </p>
          </LeftDiv>

          <div id="div2">
            <Tilt options={defaultOptions}>
              <Img src="/hero-variant-c.webp" alt="heroImg" />
            </Tilt>
          </div>
          <div id="div-3">
            <SecondImg src="/googleStats.png" alt="google-review" />
          </div>
        </SecondMain>
      </MainDiv>
    </>
  );
};

export default MainPage;
