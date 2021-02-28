import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Логин не может быть короче 2 символов!")
    .max(30, "Логин не может быть длиньше 30 символов!")
    .required("Обязательное поле!"),
  password: Yup.string()
    .min(5, "Пароль не может быть короче 5 символов!")
    .required("Обязательное поле!")
});
export default loginFormSchema;