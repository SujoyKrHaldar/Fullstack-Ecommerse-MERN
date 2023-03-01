import { Helmet } from "react-helmet";
import LoginUser from "../components/auth/LoginUser";

function Login() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login to your account - Justshop</title>
        <link rel="canonical" href="" />
      </Helmet>
      <LoginUser />
    </>
  );
}

export default Login;
