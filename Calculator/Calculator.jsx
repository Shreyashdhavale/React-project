import React, { useState } from "react";
import "./styles/Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");

  const calculateInput = (input) => {
    const operators = ["+", "-", "*", "/"];
    let result;
    let operator;
    for (let i = 0; i < input.length; i++) {
      if (operators.includes(input[i])) {
        operator = input[i];
        break;
      }
    }
    const [operand1, operand2] = input.split(operator).map(parseFloat);

    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        if (operand2 !== "0") {
          result = operand1 / operand2;
        } else {
          setInput("Division by Zero");
        }
        break;

      case "%":
        result = (operand1 / 100) * operand2;
        break;
      default:
        throw new Error("Invalid Operator");
        break;
    }
    setInput(result.toString());
  };

  const handleInput = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "<") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      calculateInput(input);
    } else {
      setInput((prevValue) => prevValue + value);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>{input}</h1>
        <div>
          <button
            onClick={() => {
              handleInput("C");
            }}
          >
            C
          </button>
          <button
            onClick={() => {
              handleInput("<");
            }}
          >
            &lt;
          </button>
          <button
            onClick={() => {
              handleInput("%");
            }}
          >
            %
          </button>
          <button
            onClick={() => {
              handleInput("/");
            }}
          >
            /
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleInput("7");
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              handleInput("8");
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              handleInput("9");
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              handleInput("*");
            }}
          >
            *
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleInput("4");
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              handleInput("5");
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              handleInput("6");
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              handleInput("-");
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleInput("1");
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              handleInput("2");
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              handleInput("3");
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              handleInput("+");
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleInput("0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              handleInput("00");
            }}
          >
            00
          </button>
          <button
            onClick={() => {
              handleInput(".");
            }}
          >
            .
          </button>
          <button
            onClick={() => {
              handleInput("=");
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
