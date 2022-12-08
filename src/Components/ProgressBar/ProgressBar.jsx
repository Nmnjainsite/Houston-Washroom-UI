import React from "react";
import "./ProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const ProgressBars = ({ page, onPageNumberClick }) => {
  var stepPercentage = 0;
  if (page === "pageone") {
    stepPercentage = 10;
  } else if (page === "pagetwo") {
    stepPercentage = 49.5;
  } else if (page === "pagethree") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Get A Free Quote</h1>
      <div>
        <ProgressBar percent={stepPercentage}>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
                onClick={() => onPageNumberClick("1")}
              >
                {index + 1}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
                onClick={() => onPageNumberClick("2")}
              >
                {index + 1}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
                onClick={() => onPageNumberClick("3")}
              >
                {index + 1}
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
    </>
  );
};

export default ProgressBars;
