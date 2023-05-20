import styled, { css } from "styled-components";
import { IcLanding } from "../assets";
import { useNavigate, useParams } from "react-router-dom";
import { VOTE } from "../constants/vote";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { inputState } from "../recoil/atom";

const Vote = () => {
  const { id } = useParams();
  // const [isVote, setIsVote] = useState([]);
  const voteId = parseInt(id!);
  const [isVote, setIsVote] = useRecoilState(inputState);
  const navigate = useNavigate();
  const [go, setGo] = useState(false);
  const [pass, setPass] = useState(false);
  const [next, setNext] = useState(false);

  const copyVoteList = [...isVote.vote];

  useEffect(() => {
    setGo(false);
    setPass(false);
    setNext(false);
  }, [id]);

  const handleMoveVotePage = (voteId: number) => {
    navigate(`/vote/${voteId + 1}`);
    if (go === true) {
      copyVoteList.push(true);
    } else {
      copyVoteList.push(false);
    }
    setIsVote({ ...isVote, vote: copyVoteList });
    if (voteId === 13) {
      navigate("/final");
    }
  };

  const handleGo = () => {
    setGo((prev) => !prev);
    setPass(false);
  };

  const handlePass = () => {
    setPass((prev) => !prev);
    setGo(false);
  };

  useEffect(() => {
    if (go || pass) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [go, pass]);

  return (
    <StWrapper>
      <img src={IcLanding} alt="landing" />
      <StTitleBlock>
        <img src={VOTE[voteId - 1].src} alt="" />
        <StVoteTitle>{VOTE[voteId - 1].name}</StVoteTitle>
      </StTitleBlock>
      <StVoteBlock>
        <StVoteBtn type="button" onClick={handleGo} go={go}>
          GO!
        </StVoteBtn>
        <StVoteBtn type="button" onClick={handlePass} pass={pass}>
          PASS!
        </StVoteBtn>
      </StVoteBlock>
      <StSubmitBtn
        disabled={!next}
        next={next}
        onClick={() => handleMoveVotePage(voteId)}
      >
        다 음
      </StSubmitBtn>
    </StWrapper>
  );
};

export default Vote;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 3.2rem;
`;

const StVoteTitle = styled.span`
  margin: 2.7rem 0 3.2rem 0;

  font-family: "DOSGothic";
  font-style: normal;
  font-weight: 500;
  font-size: 3.4rem;
  line-height: 4.7rem;

  color: ${({ theme }) => theme.colors.Color_Blue};
`;
const StVoteBlock = styled.div`
  margin-bottom: 12.5rem;
`;
const StVoteBtn = styled.button<{ go?: boolean; pass?: boolean }>`
  width: 15rem;
  height: 16rem;
  border: 1px solid ${({ theme }) => theme.colors.Color_Blue};
  background: rgba(18, 67, 154, 0.21);

  font-family: "DOSGothic";
  font-style: normal;
  font-weight: 500;
  font-size: 3.4rem;
  line-height: 4.7rem;

  color: ${({ theme }) => theme.colors.Color_Blue};

  & + & {
    margin-left: 1.6rem;
  }

  ${({ go }) =>
    go &&
    css`
      background-color: ${({ theme }) => theme.colors.Color_Blue};
      color: ${({ theme }) => theme.colors.Color_White};
    `}
  ${({ pass }) =>
    pass &&
    css`
      background-color: ${({ theme }) => theme.colors.Color_Blue};
      color: ${({ theme }) => theme.colors.Color_White};
    `}
`;

const StSubmitBtn = styled.button<{ next: boolean }>`
  width: 100%;
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

  background: #aaaaaa;

  ${({ next }) =>
    next &&
    css`
      background-color: ${({ theme }) => theme.colors.Color_Blue};
    `}

  cursor: pointer;
`;
