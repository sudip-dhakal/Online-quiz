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
import Message from "./Components/Message";

function App() {
  const [quizData, setQuizData] = useState([]);
  const [userData, setUserData] = useState([]);

  let getData = () => {
    axios.get("https://the-trivia-api.com/v2/questions").then((res) => {
      setQuizData(res.data);
    });
  };

  let getUserData = () => {
    axios
      .get("https://66d581f5f5859a704266544c.mockapi.io/complainSys/admin")
      .then((res) => {
        setUserData(res.data);
      });
  };

  useEffect(() => {
    getData();
    getUserData();
  }, []);

  return (
    <>
      <Landing_page userData={userData} setUserData={setUserData} />
    </>
  );
}

export default App;
