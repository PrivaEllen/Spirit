import { makeAutoObservable } from "mobx";
import Button from '@mui/material/Button';
import { useContext } from "react";

class TestTools {
    innerContent = ""
    constructor() {
        makeAutoObservable(this)
    }

    showDeleteMenu() {
        this.innerContent = <div className="inner-content">
                                <div className="inner-content__header">
                                    <h2>Удалить тест?</h2>
                                </div>
                                <div className="inner-content__subtext">
                                    <p>Это действие не может быть отменено.</p>
                                </div>
                                <div className="inner-content__buttons">
                                    <Button variant="text">Отмена</Button>
                                    <Button variant="text">Да, удалить</Button>
                                </div>
                            </div>
    }
    showExitMenu() {
        this.innerContent = <div className="inner-content">
                                <div className="inner-content__header">
                                    <h2>Перед выходом вы хотите сохранить изменения?</h2>
                                </div>
                                <div className="inner-content__subtext">
                                    <p>При выборе варианта “Не сохранять” все изменения пропадут</p>
                                </div>
                                <div className="inner-content__buttons">
                                    <Button variant="text">Отмена</Button>
                                    <Button variant="text">Не сохранять</Button>
                                    <Button variant="text">Сохранить</Button>
                                    {/* <Button onClick={() => saveTest({
                                        testId: testId,
                                        name: name,
                                        description: description,
                                        idCreator: user._user.id,
                                        category: category,
                                        type: typeId,
                                        img: img,
                                        sections: sq.sections[
                                            idSection: idSection,
                                            name: name,
                                            description: description,
                                            id_test: testId,
                                            questions: sq.sections.questions[
                                                questionText: questionText,
                                                idSection: idSection,
                                                type: type,
                                                obligatory: obligatory,
                                                img: img,
                                                answers: sq.sections.questions.answers[
                                                    answerId: answerId,
                                                    text: text,
                                                    correctness: correctness,
                                                    idQuestion: idQuestion
                                                ]
                                            ]
                                        ]
                                    })}>Save</Button> */}
                                </div>
                            </div>
    }
}

const testTools = new TestTools()

export default testTools