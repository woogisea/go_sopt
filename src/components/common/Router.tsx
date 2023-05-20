import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../pages/Main";
import Landing from "../../pages/Landing";
import { RecoilRoot } from "recoil";
import Vote from "../../pages/Vote";
import Final from "../../pages/Final";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/vote/:id" element={<Vote />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
