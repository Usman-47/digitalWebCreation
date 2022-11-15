import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import "../App.css";
const SERVICE_ID = "service_wo3wwhj";
const TEMPLATE_ID = "template_lp4flwg";
const USER_ID = "FbBrYI8AW11NRniNQ";
const App = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          name='email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
          className='field'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          name='name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
          className='field'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          name='msg'
          placeholder='Message…'
          required
          className='field'
        />
        <Button
          type='submit'
          color='green'
          className='btnSub'
          style={{ backgroundColor: "#4efd93", borderRadius: "15px" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default App;

// import React from "react";
// import Btn from "./Btn";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Box, Button, TextareaAutosize, TextField } from "@mui/material";
// import useStyles from "../styles";
// import emailjs from "emailjs-com";
// import Swal from "sweetalert2";
// const SERVICE_ID = "service_sry7y5o";
// const TEMPLATE_ID = "template_vjx6gnq";
// const USER_ID = "tva6ditiKq5DHVfJX";
// const ContactComp = () => {
//   const classes = useStyles();
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is Required field"),
//     }),
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
//       (result) => {
//         console.log(result.text);
//         Swal.fire({
//           icon: "success",
//           title: "Message Sent Successfully",
//         });
//       },
//       (error) => {
//         console.log(error.text);
//         Swal.fire({
//           icon: "error",
//           title: "Ooops, something went wrong",
//           text: error.text,
//         });
//       }
//     );
//     e.target.reset();
//   };

//   return (
//     <>
//       <form onSubmit={(sendEmail, formik.handleSubmit)}>
//         <Box
//           sx={{
//             width: { lg: "500px", md: "500px", sm: "500px", xs: "320px" },
//             maxWidth: { lg: "100%", md: "100%", sm: "100%", xs: "100%" },
//             // color: "white",
//             // borderRadius: "20px",
//             // alignItems: "center",
//             // alignText: "center",
//           }}
//         >
//           <TextField
//             fullWidth
//             placeholder='Name'
//             id='fullWidth'
//             className='textfield'
//             name='user_name'
//             sx={{
//               backgroundColor: "#04212b",
//               border: "none !important",
//               borderColor: "transparent",
//               // borderRadius: "20px",
//               marginBottom: "20px",
//               width: { md: "100%", sm: "80%", xs: "100%" },
//               "& .MuiInputBase-root": {
//                 color: "#9c9d9d",
//               },
//             }}
//           />
//           <TextField
//             fullWidth
//             placeholder='Email'
//             id='fullWidth'
//             name='user_email'
//             type='email'
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//             className={classes.input}
//             sx={{
//               backgroundColor: "#04212b",

//               marginBottom: "20px",
//               width: { md: "100%", sm: "80%", xs: "100%" },
//               "& .MuiInputBase-root": {
//                 color: "#9c9d9d",
//               },
//             }}
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <div
//               style={{ color: "red", textAlign: "left", marginLeft: "10px" }}
//             >
//               {formik.errors.email}
//             </div>
//           ) : null}
//           <TextField
//             placeholder='Message'
//             multiline
//             rows={3}
//             maxRows={4}
//             className={classes.input}
//             name='user_message'
//             sx={{
//               backgroundColor: "#04212b",
//               width: { md: "100%", sm: "80%", xs: "100%" },
//               "& .MuiInputBase-root": {
//                 color: "#9c9d9d",
//                 border: "transparent",
//               },
//             }}
//           />
//           {/* <TextareaAutosize
//             aria-label='minimum height'
//             minRows={3}
//             placeholder='Message'
//             style={{
//               width: "100%",
//               height: "100px",
//               backgroundColor: "#04212b",
//               color: "#fff",
//             }}
//           /> */}
//           <Button
//             sx={{
//               backgroundColor: "#4efd93",
//               padding: "18px",
//               width: { md: "100%", sm: "80%", xs: "70%" },
//               borderRadius: "16px",

//               fontWeight: "bold",
//               mt: "110px",
//               color: "white",
//               "&:hover": {
//                 //you want this to be the same as the backgroundColor above
//                 backgroundColor: "#4efd93",
//               },
//             }}
//             variant='contained'
//           >
//             SEND MESSAGE
//           </Button>
//         </Box>
//       </form>
//       {/* <form
//         onSubmit={formik.handleSubmit}
//         style={{ display: "flex", flexDirection: "column" }}
//       >
//         <input
//           placeholder='Name'
//           style={{
//             width: "70% ",
//             backgroundColor: "#04212b",
//             borderRadius: "15px",
//             border: "none",
//             padding: "20px",
//             marginBottom: "10px",
//             color: "#fff",
//           }}
//         />
//         <input
//           placeholder='Email'
//           id='email'
//           name='email'
//           type='email'
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//           style={{
//             width: "70% ",
//             backgroundColor: "#04212b",
//             borderRadius: "15px",
//             border: "none",
//             padding: "20px",
//             marginBottom: "10px",
//             color: "#fff",
//           }}
//         />
//         {formik.touched.email && formik.errors.email ? (
//           <div style={{ color: "red" }}>{formik.errors.email}</div>
//         ) : null}
//         <input
//           placeholder='Message'
//           style={{
//             width: "400px",
//             backgroundColor: "#04212b",
//             borderRadius: "15px",
//             border: "none",
//             padding: "20px",
//             height: "100px",
//             marginBottom: "-85px",
//             color: "#fff",
//           }}
//         />
//         <Btn title='SEND MESSAGE' type='submit' />
//       </form> */}
//     </>
//   );
// };

// export default ContactComp;
