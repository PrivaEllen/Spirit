import React from "react";
import { observer } from "mobx-react-lite";
import Title from "../components/TestForClient/TitleTest";
import FormQustions from "../components/TestForClient/FormQuestions";
import EndButton from "../components/TestForClient/EndButton";
import { useParams } from "react-router-dom";
import { getTest } from "../services/TestService";
import ins from "../store/InternStore";
import { useEffect } from "react";

function TestClient() {
  const param = useParams();
  const testId = param.testId;

  useEffect(() => {
    if (testId) {
      getTest(testId).then((data) => {
        let sections = data.userTest.Sections;
        for (let i = 0; i < sections.length; i++) {
          let ins_section = ins.sections[i];
          ins_section.title = sections[i].name;
          ins_section.description = sections[i].description;

          let questions = sections[i].Questions;
          for (let j = 0; j < questions.length; j++) {
            let ins_question = ins_section.questions[j];
            ins_question.title = questions[j].questionText;
            ins_question.type = questions[j].type;
            ins_question.isImportant = questions[j].obligatory;

            let answers = questions[j].Answers;
            for (let k = 0; k < answers.length; k++) {
              ins.addAnswer(i, j);
              let ins_answer = ins_question.answers[k];

              ins_answer.title = answers[k].text;
              ins_answer.isImportant = answers[k].correctness;
            }

            if (j < questions.length - 1) {
              ins.addQuestion();
            }
          }

          if (i < sections.length - 1) {
            ins.addSection();
          }
        }
      });
    }
  });
  return (
    <>
      <div id="_body">
        <FormQustions />
        <EndButton />
      </div>
    </>
  );
}

export default observer(TestClient);
