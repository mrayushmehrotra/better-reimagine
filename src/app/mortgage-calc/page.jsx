"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import styled from "styled-components";

const MortgageDiv = styled.div`
  height: 60vh;
  width: 100%;
  background-color: #f0f7f1;
  display: flex;
  align-items: center;
  justify-content: center;
  fontfamily: "better";
`;

const h1Styles = {
  fontWeight: 700,
  color: "black",
  fontSize: "2rem",
  marginBottom: "8px",
};

const MortgageMain = styled.div`
  height: 80%;
  width: 80%;
`;

const HomePriceInput = styled.input`
  font-size: 1.5em;
  font-weight: bold;
  color: black;
  border: none;
  outline: none;
  margin-left: 5px;
  width: 20%;
  height: 15%;
  border-radius: 12px;

  &:focus {
    border: 2px solid green;
  }
`;

const MortgageInputDiv = styled.div``;

const page = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Navbar textColor={"black"} bgcolor={"white"} />
      <MortgageDiv>
        <MortgageMain>
          <h1 style={h1Styles}>Mortgage Calculator</h1>
          <p style={{ color: "#796277", marginBottom: "18px" }}>
            Use our mortgage calculator built directly into it! Get accurate
            estimates for your monthly mortgage <br /> payments if you will be
            required to have private mortgage insurance (PMI). Also learn why
          </p>
          <MortgageInputDiv>
            <div>
              <h4 style={{ fontWeight: 600 }}>Home price</h4>

              <label style={{ fontSize: "30px" }}>
                ₹
                <HomePriceInput
                  type="number"
                  value={value}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                MonthlyPayment
                <h2>200/mo</h2>
              </label>
            </div>

            <div>Get Pre-approed</div>
          </MortgageInputDiv>
        </MortgageMain>
      </MortgageDiv>
    </>
  );
};

export default page;
