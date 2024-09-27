import { useEffect, useState } from "react";
import axios from "axios";
import Landing_page from "./Landing_page/Landing_page";
import Rules_Regulations from "./Rules_&_Questions/Rules_Regulations";
import Multiple_Choice_Question from "./Rules_&_Questions/Multiple_Choice_Question";
import True_and_False from "./Rules_&_Questions/True_and_False";
import Fill_in_the_blanks from "./Rules_&_Questions/Fill_in_the_blanks";
import Score_board from "./Score_&_Review/Score_board";
import Review from "./Score_&_Review/Review";
import Register from "./Login_&_Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [userData, setUserData] = useState([]);

  let getUserData = () => {
    axios
      .get("https://66d581f5f5859a704266544c.mockapi.io/complainSys/admin")
      .then((res) => {
        setUserData(res.data);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Landing_page userData={userData} setUserData={setUserData} />
            }
          />

          <Route path="/home" element={<Rules_Regulations />} />
          <Route path="/questions" element={<Multiple_Choice_Question />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
