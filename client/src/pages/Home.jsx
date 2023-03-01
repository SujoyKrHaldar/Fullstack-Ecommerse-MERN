import Landing from "../components/home/Landing";
import { Helmet } from "react-helmet";
import Shop from "../components/home/Shop";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome to justshop - your one stop clothing store</title>
        <link rel="canonical" href="" />
      </Helmet>
      <Landing />
      <Shop/>
    </>
  );
}

export default Home;
