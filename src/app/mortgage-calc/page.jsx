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
  font-family: "better";
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
  width: 20vw;
  height: 15%;
  border-radius: 12px;

  &:focus {
    border: 2px solid green;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;

const MortgageInputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GetPreApprovedDiv = styled.div`
  background-color: red;
  height: 70px;
  width: 200px;
  color: white;
  background-color: #017848;
  padding: 7px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

const GetPreApproved = styled.button``;
const RangeInput = styled.input.attrs((props) => ({
  style: {
    background: `linear-gradient(to right, #292B29 0%, #292B29 ${
      ((props.value - props.min) / (props.max - props.min)) * 100
    }%, #292B29 ${
      ((props.value - props.min) / (props.max - props.min)) * 100
    }%, #292b29 100%)`,
  },
}))`
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #292b29;
    cursor: pointer;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #000;
    cursor: pointer;
    border-radius: 50%;
  }
`;
const RangeContainer = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0;
`;

// Styled component for the input fields
const StyledInput = styled.input`
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  padding: 10px;
  font-size: 1em;
  width: 150px;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border: 2px solid green;
  }
`;
// Styled component for the dropdown select field
const StyledSelect = styled.select`
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  padding: 10px;
  font-size: 1em;
  width: 180px;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border: 2px solid green;
  }
`;

// Styled component for the label
const Label = styled.label`
  display: block;
  font-size: 0.8em;
  color: #796277;
  margin-bottom: 5px;
  font-weight: 600;
`;

// Styled component for input wrapper
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Styled component for complex input (with unit)
const ComplexInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  padding: 10px;
  transition: border 0.3s ease;

  &:focus-within {
    border: 2px solid green;
  }
`;
const Unit = styled.span`
  font-size: 1em;
  color: black;
  font-weight: bold;
  margin-left: 5px;
`;

const ComplexInput = styled.input`
  border: none;
  outline: none;
  font-size: 1em;
  width: 100px;
  margin-right: 5px;
`;

const Percentage = styled.span`
  font-size: 1em;
  color: black;
  font-weight: bold;
`;

const Page = () => {
  const [value, setValue] = useState(50000);
  const [rangeValue, setRangeValue] = useState(50000);
  const [downPayment, setDownPayment] = useState(181440);
  const [interestRate, setInterestRate] = useState(4.5); // Example interest rate
  const [loanTerm, setLoanTerm] = useState(30); // Default to 30 years

  const handleRangeChange = (event) => {
    const newValue = event.target.value;
    setRangeValue(newValue);
    setValue(newValue);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setRangeValue(inputValue);
  };

  const handleDownPaymentChange = (e) => {
    const inputValue = e.target.value;
    setDownPayment(inputValue);
  };

  const handleInterestRateChange = (e) => {
    const inputValue = e.target.value;
    setInterestRate(inputValue);
  };

  const handleLoanTermChange = (e) => {
    const inputValue = e.target.value;
    setLoanTerm(inputValue);
  };

  const calculateMonthlyPayment = () => {
    const principal = value - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment =
      (principal *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return monthlyPayment.toFixed(2);
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
              <p style={{ fontWeight: 600 }}>Home price</p>
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
                Monthly Payment
                <h2
                  style={{
                    fontWeight: 500,
                    fontSize: "3rem",
                  }}
                >
                  <p>₹ {calculateMonthlyPayment()}</p>
                </h2>
              </label>
            </div>
            <GetPreApprovedDiv>
              <GetPreApproved>Get pre-approved</GetPreApproved>
            </GetPreApprovedDiv>
          </MortgageInputDiv>
          <RangeContainer>
            <RangeInput
              type="range"
              min="50000"
              max="3000000"
              value={rangeValue}
              onChange={handleRangeChange}
            />
          </RangeContainer>
          <InputContainer>
            <InputWrapper>
              <Label>ZIP code</Label>
              <StyledInput type="text" value="22232" />
            </InputWrapper>
            <InputWrapper>
              <Label>Down payment</Label>
              <ComplexInputWrapper>
                <ComplexInput
                  type="number"
                  value={downPayment}
                  onChange={handleDownPaymentChange}
                />
                <Unit>₹</Unit>
                <Percentage>32 %</Percentage>
              </ComplexInputWrapper>
            </InputWrapper>
            <InputWrapper>
              <Label>Interest rate</Label>
              <ComplexInputWrapper>
                <ComplexInput
                  type="number"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                />
                <Percentage>%</Percentage>
              </ComplexInputWrapper>
            </InputWrapper>
            <InputWrapper>
              <Label>Length of loan</Label>
              <StyledSelect value={loanTerm} onChange={handleLoanTermChange}>
                <option value="30">30 years</option>
                <option value="20">20 years</option>
                <option value="15">15 years</option>
              </StyledSelect>
            </InputWrapper>
          </InputContainer>
        </MortgageMain>
      </MortgageDiv>
    </>
  );
};

export default Page;
