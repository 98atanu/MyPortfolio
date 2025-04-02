import * as Yup from "yup";


const MySchema = Yup.object({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile number is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters"),
  })

  export default MySchema;