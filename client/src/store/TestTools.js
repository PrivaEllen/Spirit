import { makeAutoObservable } from "mobx";
import Button from '@mui/material/Button';
import { useContext } from "react";
import { saveTest } from "../services/TestService";

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
                                    {/* <Button variant="text" onClick={() => saveTest({test:{
                                        name: name,
                                        description: description,
                                        idCreator: user._user.id,
                                        category: category,
                                        type: typeId,
                                        sections: sq.sections[{
                                            name: name,
                                            description: description,
                                            questions: sq.sections.questions[{
                                                questionText: questionText,
                                                type: type,
                                                obligatory: obligatory,
                                            }]
                                        }]                                        
                                    }})} >Сохранить</Button> */}
                                </div>
                            </div>
    }
}

const testTools = new TestTools()

export default testTools