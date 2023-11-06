import Navbar from "./Navbar";
import { Inter, Poppins } from "next/font/google";
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
      className={`  min-h-screen  overflow-hidden  pb-4  ${poppins.className}`}
    >
      {children}
    </div>
  );
};

export default MainLayout;
