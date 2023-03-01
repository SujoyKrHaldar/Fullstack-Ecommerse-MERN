import { Helmet } from "react-helmet";
import RegisterUser from "../components/auth/RegisterUser";

function Register() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Join Justshop - your one stop clothing store</title>
        <link rel="canonical" href="" />
      </Helmet>
      <RegisterUser />
    </>
  );
}

export default Register;
