import styled from "styled-components";
import { IcFinal } from "../assets";
import { useRecoilValue } from "recoil";
import { inputState } from "../recoil/atom";
import { postVote } from "../lib/api/vote";
import { useNavigate } from "react-router-dom";

const Final = () => {
  const { username, part, vote } = useRecoilValue(inputState);
  const navigate = useNavigate();

  const handleSubmitVote = async () => {
    const response = await postVote({ username, part, vote });
    if (response?.data.code === 201) {
      alert(`${response?.data.message}`);
      navigate("/");
    }
  };
  return (
    <StWrapper>
      <StTitle>{username}님!</StTitle>
      <StDes>수고하셨습니다!</StDes>
      <StTextBlock>
        <StText>Hello World ! 즐거우셨나요?</StText>
        <StText>GO SOPT 임원진입니다.</StText>
        <StText>리크루팅 때 뵌 게 엊그제 같은데</StText>
        <StText>벌써 솝커톤까지 끝이 났네요!</StText>
        <StText>그동안 열심히 달려오신 여러분,</StText>
        <StText>정말 고생 많으셨어요.</StText>
        <StText>임원진도 항상 고솝트를 위해</StText>
        <StText>최선을 다해 노력하겠습니다.</StText>
        <StText>화이팅 ! 한솝영솝 !</StText>
      </StTextBlock>
      <StAlertText>제출하기 버튼을 반드시 눌러주세요.</StAlertText>
      <img src={IcFinal} alt="final" />
      <StBtn type="button" onClick={handleSubmitVote}>
        제출하기
      </StBtn>
    </StWrapper>
  );
};

export default Final;

const StWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StTitle = styled.span`
  margin-top: 4.577rem;

  font-family: "DOSGothic";
  font-style: normal;
  font-weight: 500;
  font-size: 3.4rem;
  line-height: 4.7rem;

  color: ${({ theme }) => theme.colors.Color_Blue};
`;
const StDes = styled.span`
  font-family: "DOSGothic";
  font-style: normal;
  font-weight: 500;
  font-size: 3.4rem;
  line-height: 4.7rem;

  color: ${({ theme }) => theme.colors.Color_Blue};
`;
const StAlertText = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;

  color: ${({ theme }) => theme.colors.Color_Blue};
`;

const StBtn = styled.button`
  position: absolute;
  bottom: 3.7rem;

  width: 90%;
  border: none;
  background-color: ${({ theme }) => theme.colors.Color_Blue};
  outline: none;
  color: ${({ theme }) => theme.colors.Color_White};
  padding: 1rem 6.8rem;
  margin-top: 2.6rem;

  font-family: "DOSGothic";
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 2.6rem;
`;

const StTextBlock = styled.div`
  margin: 3.4rem 0 3.3rem 0;
`;
const StText = styled.p`
  font-family: "Pretendard";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.5rem;

  text-align: center;
`;
