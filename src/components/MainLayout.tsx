import Navbar from "./Navbar";
import { Inter, Poppins } from "next/font/google";
import SmallNavbar from "./SmallNavbar";
import Footer from "./Footer";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div
      className={`${poppins.className} flex min-h-screen flex-col pt-[161px]`}
    >
      <Navbar />
      <SmallNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
