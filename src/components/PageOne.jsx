"use client";
import React from "react";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import styled from "styled-components";

const PageOneDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const PageOne = () => {
  return (
    <PageOneDiv>
      <Navbar textColor={"#fff"} bgcolor={"#004733"} />
      <MainPage />
    </PageOneDiv>
  );
};

export default PageOne;
