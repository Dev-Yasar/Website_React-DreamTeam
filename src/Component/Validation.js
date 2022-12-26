import * as yup from 'yup';
import { toast ,ToastContainer} from "react-toastify";


export const CilentValidation =yup.object().shape({

        name: yup.string().required("name is required"),
        email: yup.string().email("email is required"),
        phone: yup.number().max(10).min(10).required("invaild number"),
        service: yup.string().required("plse chosee service")
 

});

// return CilentValidation
//   .validate(x, { abortEarly: false })
//   .then((result) => {
//     console.log({ result });
//   })
//   .catch((err) => {

//   });


  