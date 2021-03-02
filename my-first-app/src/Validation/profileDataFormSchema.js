import * as Yup from "yup";

const profileDataFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Имя не может быть короче 2 символов!")
    .max(30, "Имя не может быть длиньше 30 символов!")
    .required("Обязательное поле!"),
  lookingForAJobDescription: Yup.string()
    .max(100, "Не больше 100 символов!")
    .required("Обязательное поле!"),
  aboutMe: Yup.string()
    .max(100, "Не больше 100 символов!")
    .required("Обязательное поле!")
});
export default profileDataFormSchema;