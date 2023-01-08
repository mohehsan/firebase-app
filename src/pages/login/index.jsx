import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import Input from "../../components/input";
import Button from "../../components/button";
import { auth, signInWithEmailAndPassword } from "../../config/firebase";

//redux
// import { connect } from "react-redux";
// import { loginUserAPI } from "../../config/redux/action";

export default function Login() {
  const [state, setState] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChangeText = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = () => {
    const { email, password } = state;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login Success", user);
        setState({ email: "", password: "" });
        alert("Login Success")
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setState({...state, password:""})
        alert("Email / Password SALAH!!!");
      });
    // if (res) {
    //   console.log("login success");
    //   this.setState({
    //     email: "",
    //     password: "",
    //   });
    // } else {
    //   console.log("login failed");
    //   alert("Email / Password SALAH!!!");
    // }
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="p-4 border-2 rounded-xl shadow-xl">
        <p className="font-bold text-2xl text-[#2196f3] mb-4 text-center">
          Login Page
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
        <Button
          onClick={handleLogin}
          title="Login"
          // loading={this.props.isLoading}
        />
      </div>
    </div>
  );
}

// class Login extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChangeText = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value,
//     });
//   };

//   handleLogin = async () => {
//     const { email, password } = this.state;
//     const { history } = this.props;
//     const res = await this.props
//       .loginAPI({ email, password })
//       .catch((err) => err);
//     if (res) {
//       console.log("login success");
//       this.setState({
//         email: "",
//         password: "",
//       });
//       history.push('/');
//     } else {
//       console.log("login failed");
//       alert("Email / Password SALAH!!!");
//     }
//   };

//   render() {
//     return (
//       <div className="flex justify-center items-center w-full h-[100vh]">
//         <div className="p-4 border-2 rounded-xl shadow-xl">
//           <p className="font-bold text-2xl text-[#2196f3] mb-4 text-center">
//             Login Page
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
//             onClick={this.handleLogin}
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
//   isLoading: state.isLoading,
// });

// const reduxDispatch = (dispatch) => ({
//   loginAPI: (email, password) => dispatch(loginUserAPI(email, password)),
// });

// export default connect(reduxState, reduxDispatch)(Login);
