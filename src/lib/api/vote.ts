import client from "../axios";

interface VoteInfo {
  username: string;
  part: string;
  vote: boolean[];
}

interface ResponseData {
  code: number;
  message: string;
  data: null;
}

export const postVote = ({ username, part, vote }: VoteInfo) => {
  try {
    const data = client.post<ResponseData>("/vote", {
      name: username,
      part,
      voteList: vote,
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};
