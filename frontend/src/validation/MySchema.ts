import * as Yup from "yup";


const MySchema = Yup.object({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string()
      .matches(/^[0-9]+$/, "Only numbers allowed")
      .min(10, "Must be at least 10 digits")
      .required("Mobile number is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  })

  export default MySchema;