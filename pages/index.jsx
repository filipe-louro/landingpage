import Features from "../components/features";
import Header from "../components/header";
import Welcome from "../components/welcome";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="{styles.container}">
      <Header />
      <Welcome />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
