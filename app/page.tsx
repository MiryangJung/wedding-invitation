import Accounts from "./components/accounts";
import Divider from "./components/divider";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Info from "./components/info";
import Location from "./components/location";
import SplineLove from "./components/spline-love";
import Title from "./components/title";
import { container } from "./page.css";

export default function Home() {
  return (
    <main className={container}>
      <Title />
      <SplineLove />
      <Info />

      <Divider />
      <Location />

      <Divider />
      <Accounts />

      <Divider />
      <Gallery />

      <Footer />
    </main>
  );
}
