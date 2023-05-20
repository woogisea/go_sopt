import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { inputState } from "../recoil/atom";
import { IcLanding } from "../assets";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { username } = useRecoilValue(inputState);
  const navigate = useNavigate();

  const handleNavigateVote = () => {
    navigate("/vote/1");
  };
  return (
    <StWrapper>
      <img src={IcLanding} alt="landing" />
      <StNameField>Hello, {username}님!</StNameField>
      <StDes>
        <span>그럼 솝커톤 투표를</span>
        <span>시작해볼까요?</span>
      </StDes>
      <StBtn type="button" onClick={handleNavigateVote}>
        다 음
      </StBtn>
    </StWrapper>
  );
};

export default Landing;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StNameField = styled.div`
  font-family: "DOSGothic";
  font-style: normal;
  font-weight: 500;
  font-size: 3.4rem;
  line-height: 4.7rem;

  color: ${({ theme }) => theme.colors.Color_Blue};
  margin: 10.2rem 0 3.2rem 0;
`;
const StDes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-family: "DOSGothic";
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.Color_Blue};
  }
`;
const StBtn = styled.button`
  width: 100%;
  margin-top: 29.4rem;
  padding: 1.4rem 2rem;

  border: none;
  border: 0.1rem solid ${({ theme }) => theme.colors.Color_Blue};
  outline: none;
  background-color: ${({ theme }) => theme.colors.Color_Blue};

  color: ${({ theme }) => theme.colors.Color_White};
  font-family: "DOSGothic";
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.2rem;

  cursor: pointer;
`;
