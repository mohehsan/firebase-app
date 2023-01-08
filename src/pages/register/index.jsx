import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import Button from "../../components/button";
import Input from "../../components/input";

// redux
import { auth, createUserWithEmailAndPassword } from "../../config/firebase";
// import { useDispatch } from "react-redux";
// import { registerUserAPI } from "../../config/redux/action";
// import { connect } from "react-redux";
// import { actionUserName, registerUserAPI } from "../../config/redux/action";

export default function Register() {
  const [state, setState] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  // const dispatch = useDispatch()

  const handleChangeText = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // dispatch(registerUserAPI(reduxDispatch))
    const { email, password } = state;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Register Success", user);
        setState({ email: "", password: "" });
        navigate('/login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="p-4 border-2 rounded-xl shadow-xl">
        <p className="font-bold text-2xl text-[#2196f3] mb-4 text-center">
          Register Page
        </p>
        <div className="space-y-4">
          <Input
            placeholder="Enter Email"
            type="email"
            id="email"
            onChange={handleChangeText}
            value={state.email}
          />
          <Input
            placeholder="Enter Password"
            type="password"
            id="password"
            onChange={handleChangeText}
            value={state.password}
          />
        </div>
        <Button onClick={handleSubmit} title="Register" />
      </div>
    </div>
  );
}

// class Register extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChangeText = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value,
//     });
//   };

//   handleSubmit = () => {
//     const { email, password } = this.state;
//     this.props.registerAPI({ emaionst reduxState = (state) => ({
//   popupProps: state.popup,
//   userName: state.user,
//   isLoading: state.isLoading,
// });

// const reduxDispatch = (dispatch) => ({
//   changeUserName: () => dispatch(actionUserName()),
//   registerAPI: (email, password) => dispatch(registerUserAPI(email, password)),
// });

// export default connect(reduxState, rl, password });
//     this.setState({
//       email: '',
//       password: '',
//     });
//   };

//   changeUser = () => {
//     this.props.changeUserName();
//   };

//   render() {
//     return (
//       <div className="flex justify-center items-center w-full h-[100vh]">
//         <div className="p-4 border-2 rounded-xl shadow-xl">
//           <p className="font-bold text-2xl text-[#2196f3] mb-4 text-center">
//             Register Page
//           </p>
//           <div className="space-y-4">
//             <Input
//               placeholder="Enter Email"
//               type="email"
//               id="email"
//               onChange={this.handleChangeText}
//               value={this.state.email}
//             />
//             <Input
//               placeholder="Enter Password"
//               type="password"
//               id="password"
//               onChange={this.handleChangeText}
//               value={this.state.password}
//             />
//           </div>
//           <Button
//             onClick={this.handleSubmit}
//             title="Register"
//             loading={this.props.isLoading}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// const reduxState = (state) => ({
//   popupProps: state.popup,
//   userName: state.user,
//   isLoading: state.isLoading,
// });

// const reduxDispatch = (dispatch) => ({
//   registerAPI: (email, password) => dispatch(registerUserAPI(email, password)),
// });

// export default connect(reduxState, reduxDispatch)(Register);
