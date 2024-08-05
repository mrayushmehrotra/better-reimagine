"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import styled from "styled-components";

const AboutUsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: 60%;
  margin-left: 20%;
`;

const AboutUsH1 = styled.h1`
  font-family: "better";
  color: #017848;
  font-weight: 700;
  scale: 2;
`;

const AboutUsH5 = styled.h5`
  font-family: "better";
  color: #000;
  font-weight: 800;
  font-size: 40px;
  text-align: center;
`;

const Page = () => {
  return (
    <>
      <Navbar textColor={"#000"} bgcolor={"#fff"} />
      <AboutUsDiv>
        <AboutUsH1>Our mission</AboutUsH1>
        <br />
        <AboutUsH5>
          We’re making homeownership simpler, faster —
          <br />
          and most importantly, more accessible for all Americans.
        </AboutUsH5>
      </AboutUsDiv>
    </>
  );
};

export default Page;
