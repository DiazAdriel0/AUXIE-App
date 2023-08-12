// import { auth, provider } from "../../config/firebase-config";
// import { signInWithPopup } from "firebase/auth";
// import "./Auth.css";
// import Cookies from "universal-cookie"; 

// const cookies = new Cookies();

// export const Auth = ({ setIsAuth }) => {
//   const signInWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       cookies.set("auth-token", result.user.refreshToken);
//       setIsAuth(true);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <div className="auth">
//       <p> Sign In With Google To Continue </p>
//       <button onClick={signInWithGoogle}> Sign In With Google </button>
//     </div>
//   );
// };
