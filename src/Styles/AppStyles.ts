import { ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgcolor?: string;
  height?: string;
  direction?: string;
  align?: string;
  width?: string;
  display?: string;
  fontSize?: string;
  justify?: string;
  padding?: string;
  maxwidth?: string;
  border?: string;
  borderBotton?: string;
  gap?: string;
  lg_width?: string;
}
interface ButtonStyle {
  children: ReactNode;
  bgcolor?: string;
  hoverColor?: string;
  onClick?: () => void;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  border?: string;
  radius?: string;
  width?: string;
  alignItems?: string;
}
export const Container = styled.div<ContainerProps>`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "none"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100vh"};
  background-color: ${(props) => props.bgcolor || "#1a1033"};
  color: ${(props) => props.color || "#FFFFFF"};
  padding: ${(props) => props.padding || "none"};
  max-width: ${(props) => props.maxwidth || "100%"};
  border: ${(props) => props.border || "none"};
  border-bottom: ${(props) => props.borderBotton || "none"};
  gap: ${(props) => props.gap || "none"};

  &&.header {
    display: flex;
    flex-direction: row;
    max-width: 1300px;
    width: 100%;
    border-bottom: 1px solid #abb2bf;
    padding: 0px 20px 0px;

    h1 {
      font-size: 30px;
      font-weight: 600;
      font-family: "poppins", "Helvetica";

      span {
        color: ${(props) => props.color || "#FBB04D"};
        font-size: ${(props) => props.fontSize || "30px"};
        font-weight: 600;
        font-family: "poppins", "Helvetica";
      }
    }
    .logoHeader {
      width: 60%;
      height: 100%;
      justify-content: center;
      align-items: start;
    }
    .buttonsHeader {
      height: 100%;
      flex-direction: row;
      justify-content: center;
      width: 40%;
      gap: 30px;
      background-color: none;
    }
    @media (max-width: 1010px) {
      .buttonsHeader {
        width: 100%;
      }
    }
    @media (max-width: 770px) {
      .buttonsHeader {
        display: none;
      }
    }
  }
  &&.Container_Primary {
    max-width: 1300px;
    align-items: start;
    flex-direction: row;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;

    .Container_Left {
      width: 50%;
      height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      padding-right: 10px;

      h2 {
        font-size: 38px;
        font-weight: 600;
        font-family: "poppins", "Helvetica";
        color: #fbb04d;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        font-family: "poppins", "Helvetica";
        align-items: center;
        padding: 10px 0px 10px 0px;
        align-items: center;
        justify-content: center;
        display: flex;
        gap: 5px;
      }
    }

    .Container_Right {
      width: 50%;
      height: 90vh;
      overflow: hidden;

      .Login {
        min-width: 30%;
        max-width: 500px;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 30%;
        align-items: center;
        background-color: #ffffff;
        border-radius: 20px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        gap: 20px;

        h3 {
          font-size: 38px;
          font-weight: 700;
          font-family: "poppins", "Helvetica";
          color: #6950a1;
          height: 100%;
          display: flex;
          width: 80%;
          height: 100%;
          align-items: center;
          padding-top: 100px;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          font-family: "poppins", "Helvetica";
          align-items: center;
          padding: 10px 0px 10px 0px;
          align-items: center;
          justify-content: center;
          display: flex;
          gap: 5px;
        }
        .div_input {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: center;
          height: 100%;
          width: 80%;
          gap: 10px;
          color: #6950a1;
          background-color: #ffffff;

          label {
            font-size: 16px;
            font-weight: 500;
            font-family: "poppins", "Helvetica";
          }
          input {
            width: 100%;
            height: 40px;
            border-radius: 10px;
            padding: 10px;
            font-size: 16px;
            font-weight: 400;
            font-family: "poppins", "Helvetica";
            outline: none;
            border: 1px solid #d1d1d1;
          }
          input:focus {
            border: 1px solid #6950a1;
            animation: 2s ease-in;
          }
        }
        .div_button {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 80%;
          background-color: #ffffff;
        }
        .tag_link {
          font-size: 16px;
          font-weight: 400;
          font-family: "poppins", "Helvetica";
          align-items: center;
          padding: 10px 0px 10px 0px;
          align-items: center;
          justify-content: center;
          display: flex;
          color: #6950a1;
          background-color: #ffffff;

          a {
            text-decoration: none;

            span {
              text-decoration: underline;
            }
          }
          a:active {
            color: #6950a1;
          }
        }
      }
    }
    @media (max-width: 1080px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .Container_Left {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        h2 {
          font-size: 28px;
          font-weight: 600;
          font-family: "poppins", "Helvetica";
          color: #fbb04d;
        }
      }
      .Container_Right {
        .Login {
          max-width: 70%;
          height: 80%;
          top: 35vh;
        }
      }
    }
    @media (max-width: 650px) {
      .Container_Right {
        .Login {
          h3 {
            font-size: 28px;
            font-weight: 600;
          }
        }
      }
    }
    @media (max-width: 560px) {
      .Container_Left {
        p {
          font-size: 13px;
        }
        h2 {
          font-size: 20px;
          font-weight: 600;
        }
      }
      .Container_Right {
        .Login {
          max-width: 90%;
        }
      }
    }
    @media (max-width: 470px) {
      .Container_Left {
        align-items: start;
        p {
          font-size: 10px;
        }
        h2 {
          font-size: 18px;
          font-weight: 600;
        }
      }
      .Container_Right {
        .Login {
          h3 {
            font-size: 24px;
            font-weight: 600;
          }
        }
      }
    }
  }
`;
export const Button = styled.button<ButtonStyle>`
  background-color: ${(props) => props.bgcolor || "#6950a1"};
  color: ${(props) => props.color || "#FFFFFF"};
  font-weight: ${(props) => props.fontWeight || "400"};
  font-family: poppins, sans-serif;
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.radius || "10px"};
  cursor: pointer;
  justify-content: center;
  padding: 10px 20px 10px 20px;
  font-size: ${(props) => props.fontSize || "16px"};
  width: ${(props) => props.width || "100%"};
  align-items: ${(props) => props.alignItems || "center"};

  &&.buttonEntrar {
    background-color: #1a1033;
    border: 1px solid #ffffff;
    width: 30%;
    &&:hover {
      background-color: #fbb04d;
      border: none;
      transition: 1s ease-in-out;
      color: #ffffff;
    }
  }
  &&.buttonCadastrar {
    color: #1a1033;
    font-weight: 600;
    background-color: #fbb04d;

    &&:hover {
      transition: 1s ease-in-out;
      background-color: #1a1033;
      color: #ffffff;
      border: 1px solid #ffffff;
    }
  }
`;
