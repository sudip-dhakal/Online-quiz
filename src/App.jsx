import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Landing_page from "./Landing_page/Landing_page";
import Rules_Regulations from "./Rules_&_Questions/Rules_Regulations";
import Multiple_Choice_Question from "./Rules_&_Questions/Multiple_Choice_Question";
import True_and_False from "./Rules_&_Questions/True_and_False";
import Fill_in_the_blanks from "./Rules_&_Questions/Fill_in_the_blanks";
import Score_board from "./Score_&_Review/Score_board";
import Review from "./Score_&_Review/Review";

function App() {
  return (
    <>
      <Landing_page />
      {/* <Rules_Regulations />
      <Multiple_Choice_Question />
      <True_and_False />
      <Fill_in_the_blanks />
      <Score_board />
      <Review /> */}
    </>
  );
}

export default App;
