"use client";
import React from "react";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import styled from "styled-components";
import PageOnePartTwo from "./PageOnePartTwo";

const PageOneDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const PageOne = () => {
  return (
    <PageOneDiv>
      <Navbar bgcolor={"#004733"} />
      <MainPage />
      <PageOnePartTwo />
    </PageOneDiv>
  );
};

export default PageOne;
