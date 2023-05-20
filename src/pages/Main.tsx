import styled, { css } from "styled-components";
import { IcMain } from "../assets";
import { IcBoard } from "../assets";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { inputState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";

const TEXT = "즐거우셨나요? \n 투표를 위해 입력해주세요!";

const Main = () => {
  const [userId, setUsername] = useState("");
  const [part, setPart] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isAtom, setIsAtom] = useRecoilState(inputState);

  const navigate = useNavigate();

  const { username } = isAtom;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    if (name === "username") {
      setUsername(e.target.value);
      setIsAtom({ ...isAtom, username: e.target.value });
    } else {
      setPart(e.target.value);
      setIsAtom({ ...isAtom, part: e.target.value });
    }
  };

  useEffect(() => {
    if (username && part) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [username, part]);

  const handleNavigate = () => {
    navigate("/landing");
  };
  return (
    <StWrapper>
      <img src={IcMain} alt="main" />
      <StTitle>{TEXT}</StTitle>
      <StStyleInput
        type="text"
        name="username"
        placeholder="이름을 입력하세요"
        value={userId}
        onChange={handleInput}
      />
      <StStyleInput
        type="text"
        name="part"
        placeholder="파트 이름"
        value={part}
        onChange={handleInput}
      />
      <StBtn
        type="button"
        disabled={!isActive}
        isActive={isActive}
        onClick={handleNavigate}
      >
        START
      </StBtn>
      <img src={IcBoard} alt="board" />
    </StWrapper>
  );
};

export default Main;

const StWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 11.4rem 8rem 0 8rem;
`;

const StTitle = styled.span`
  font-family: "DOSGothic";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;

  white-space: pre-line;

  color: ${({ theme }) => theme.colors.Color_Blue};

  margin: 4.3rem 0;
`;

const StStyleInput = styled.input`
  width: 100%;
  padding: 1.4rem 2rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.Color_Blue};
  outline: none;

  font-family: "DOSGothic";
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;

  & + & {
    margin-top: 1.6rem;
  }
`;

const StBtn = styled.button<{ isActive: boolean }>`
  width: 100%;
  border: none;
  background-color: #8f8f8f;
  outline: none;
  color: ${({ theme }) => theme.colors.Color_White};
  padding: 1rem 6.8rem;
  margin-top: 2.6rem;

  font-family: "DOSGothic";
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 2.6rem;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.Color_Blue};
    `}
`;
