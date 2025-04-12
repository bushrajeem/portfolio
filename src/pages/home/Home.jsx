import App from "../../App";
import Layout from "../../layout";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Connect from "./components/Connect";
import { Experience } from "./components/Experience";
import Services from "./components/Services";
import Works from "./components/Works";

export const Home =()=>{
  return (
    <Layout>
      <Banner />
      <Services />
      <Experience />
      <Works />
      <Blog />
      <Connect />
      <App />
    </Layout>
  );
}


