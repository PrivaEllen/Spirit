import { makeAutoObservable } from "mobx";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { addIntern, deleteTest, renameTest, sendTest } from "../services/TestService";
import { TEST_SET } from "../router/utils";
import { saveChangedTest, saveTest } from "../services/TestService"
import { Formik } from "formik";
import * as Yup from 'yup';
import { observer } from "mobx-react-lite";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

class TestTools {
    innerContent = ""
    constructor() {
      this.validationSchema = Yup.object().shape({
        email: Yup.string().email('Введите верную почту').required('Обязательно'),
      })
        makeAutoObservable(this)
    }

    delete(testId){
        deleteTest(testId)
        window.location.assign(TEST_SET)
    }

    send(testId, sq, user_id, email, value) {
        try{
          if (testId){
            console.log('change')
            saveChangedTest({
              testId: testId,
              name: sq.sections[0].title,
              idCreator: user_id,
              type: value,
              sections: sq.sections.map(section => {
                return {
                  name: section.title,
                  description: section.description,
                  questions: section.questions.map(question => {
                    return {
                      questionText: question.title,
                      type: question.type,
                      obligatory: question.isImportant,
                      answers: question.answers.map(answer => {
                        return {
                          text: answer.title,
                          correctness: answer.IsRight
                        }
                      })
                    }
                  })
                }
              })
            }).then(data => addIntern(data, email, user_id).then(window.location.assign(TEST_SET)))
          }
          else{
            console.log('saved')
            saveTest({
              name: sq.sections[0].title,
              idCreator: user_id,
              type: value,
              sections: sq.sections.map(section => {
                return {
                  name: section.title,
                  description: section.description,
                  questions: section.questions.map(question => {
                    return {
                      questionText: question.title,
                      type: question.type,
                      obligatory: question.isImportant,
                      answers: question.answers.map(answer => {
                        return {
                          text: answer.title,
                          correctness: answer.IsRight
                        }
                      })
                    }
                  })
                }
              })
            }).then(data => addIntern(data, email, user_id).then(window.location.assign(TEST_SET)))
          }
        }  
        catch(e){
          console.log(e)
        }
      }    

    save(testId, sq, user_id, value) {
        try{
          if (testId){
            saveChangedTest({
              testId: testId,
              name: sq.sections[0].title,
              idCreator: user_id,
              type: value,
              sections: sq.sections.map(section => {
                return {
                  name: section.title,
                  description: section.description,
                  questions: section.questions.map(question => {
                    return {
                      questionText: question.title,
                      type: question.type,
                      obligatory: question.isImportant,
                      answers: question.answers.map(answer => {
                        return {
                          text: answer.title,
                          correctness: answer.IsRight
                        }
                      })
                    }
                  })
                }
              })
            })
          }
          else{
            saveTest({
              name: sq.sections[0].title,
              idCreator: user_id,
              type: value,
              sections: sq.sections.map(section => {
                return {
                  name: section.title,
                  description: section.description,
                  questions: section.questions.map(question => {
                    return {
                      questionText: question.title,
                      type: question.type,
                      obligatory: question.isImportant,
                      answers: question.answers.map(answer => {
                        return {
                          text: answer.title,
                          correctness: answer.IsRight
                        }
                      })
                    }
                  })
                }
              })
            })
          }
          window.location.assign(TEST_SET)
        }  
        catch(e){
          console.log(e)
        }
    }

    rename(testId, name){
      renameTest(testId, name)
    }

    sendTemplate(testId, email, user_id){
      addIntern(testId, email, user_id).then(window.location.assign(TEST_SET))
    }

    showDeleteMenu(testId) {
        this.innerContent = <div className="inner-content">
                                <div className="inner-content__header">
                                    <h2>Удалить тест?</h2>
                                </div>
                                <div className="inner-content__subtext">
                                    <p>Это действие не может быть отменено.</p>
                                </div>
                                <div className="inner-content__buttons">
                                    <Button variant="text">Отмена</Button>
                                    <Button variant="text" onClick={() => this.delete(testId)}>Да, удалить</Button>
                                </div>
                            </div>
    }

    showExitMenu(testId, sq, user_id, value) {
        this.innerContent = <div className="inner-content">
                                <div className="inner-content__header">
                                    <h2>Перед выходом вы хотите сохранить изменения?</h2>
                                </div>
                                <div className="inner-content__subtext">
                                    <p>При выборе варианта “Не сохранять” все изменения пропадут</p>
                                </div>
                                <div className="inner-content__buttons">
                                    <Button variant="text">Отмена</Button>
                                    <Button variant="text" onClick={() => window.location.assign(TEST_SET)}>Не сохранять</Button>
                                    <Button variant="text" onClick={() => this.save(testId, sq, user_id, value)}>Сохранить</Button>
                                </div>
                            </div>
    }
    showGenerateLink(testId, sq, user_id, value) {
        this.innerContent = <ThemeProvider theme={darkTheme}>
                                <div className="inner-content">
                                <Formik
                                        initialValues={{
                                            email: '',
                                        }}
                                        validateOnBlur
                                        onSubmit={(values) => console.log(values)}
                                        validationSchema={this.validationSchema}
                                    >
                                    {({ values, touched, errors, handleBlur, handleChange, handleSubmit }) => (
                                      <div onSubmit={handleSubmit}>
                                        <div className="inner-content__header">
                                          <h2>Отправить</h2>
                                        </div>
                                        <div className="inner-content__subtext">
                                          <p>Электронная почта</p>
                                        </div>
                                        <TextField
                                            id="email"
                                            name="email"
                                            type="email"
                                            variant="outlined"
                                            label="Кому"
                                            fullWidth="true"
                                            sx={{marginBottom: "16px"}}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            error={touched.email && errors.email}
                                        />
                                        <div className="inner-content__buttons">
                                            <Button variant="text">Отмена</Button>
                                            <Button variant="text" disabled={!values.email} onClick={() => {this.send(testId, sq, user_id, values.email, value)}}>Отправить</Button>
                                        </div>
                                      </div>
                                    )}
                                    </Formik>
                                </div>
                            </ThemeProvider>
    }

    showTemplateLink(testId, user_id) {
      this.innerContent = <ThemeProvider theme={darkTheme}>
                              <div className="inner-content">
                              <Formik
                                      initialValues={{
                                          email: '',
                                      }}
                                      validateOnBlur
                                      onSubmit={(values) => console.log(values)}
                                      validationSchema={this.validationSchema}
                                  >
                                  {({ values, touched, errors, handleBlur, handleChange, handleSubmit }) => (
                                    <div onSubmit={handleSubmit}>
                                      <div className="inner-content__header">
                                        <h2>Отправить</h2>
                                      </div>
                                      <div className="inner-content__subtext">
                                        <p>Электронная почта</p>
                                      </div>
                                      <TextField
                                          id="email"
                                          name="email"
                                          type="email"
                                          variant="outlined"
                                          label="Кому"
                                          fullWidth="true"
                                          sx={{marginBottom: "16px"}}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.email}
                                          error={touched.email && errors.email}
                                      />
                                      <div className="inner-content__buttons">
                                          <Button variant="text">Отмена</Button>
                                          <Button variant="text" disabled={!values.email} onClick={() => this.sendTemplate(testId, values.email, user_id)}>Отправить</Button>
                                      </div>
                                    </div>
                                  )}
                                  </Formik>
                              </div>
                          </ThemeProvider>
  }
}

const testTools = new TestTools()

export default testTools