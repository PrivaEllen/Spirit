import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import { renameTest } from "../../services/TestService";
import { TEST_SET } from "../../router/utils";

function RenameMenu(props) {
  return (
    <div className="rename_container">
      <Formik
        initialValues={{
          name: props.name_test,
        }}
        validateOnBlur
        onSubmit={(values) => console.log(values)}
      >
        {({values, touched, errors, handleBlur, handleChange, handleSubmit}) => (
          <div onSubmit={handleSubmit}>
            <div className="rename_container_text">
              <h2>Переименовать тест?</h2>
            </div>
            <TextField
              id="name"
              name="name"
              type="name"
              variant="outlined"
              label="Имя"
              fullWidth="true"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={touched.name && errors.name}
              sx={{marginTop: '8px'}}
            />
            <div className="rename_container_buttons"> 
              <Button>Отмена</Button>
              <Button onClick={() => {renameTest(props.testId, values.name); window.location.assign(TEST_SET)}}>Да</Button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default observer(RenameMenu);
