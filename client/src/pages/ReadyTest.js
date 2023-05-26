import React from "react";
import { observer } from "mobx-react-lite";
import ModalWindow  from "../components/TestForClient/ModalWindow";


function ReadyTest() {
  
  return (
    <>
      <div id="_body">
       <ModalWindow/>
      </div>
    </>
  );
}

export default observer(ReadyTest);
