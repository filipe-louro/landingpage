import Features from "../components/features";
import Header from "../components/header";
import Welcome from "../components/welcome";

export default function Home() {
  return (
    <div className="{styles.container}">
      <Header />
      <Welcome />
      <Features />
    </div>
  );
}
