import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

//페이지가 변경되더라도 상태관리를 유지
const { persistAtom } = recoilPersist();

interface InputInfo {
  username: string;
  part: string;
  vote: boolean[];
}

export const inputState = atom<InputInfo>({
  key: "input",
  default: {
    username: "",
    part: "",
    vote: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },

  effects_UNSTABLE: [persistAtom],
});
