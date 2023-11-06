import MainLayout from "@/components/MainLayout";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <MainLayout>
      <Navbar />
      <div className=" min-h-[100vh] overflow-auto">
        <div className=" h-[400px]  py-[56px] text-4xl" id="home">
          hola
        </div>
        <div className=" h-[400px]  py-[56px] text-4xl" id="promotion">
          Promotion
        </div>
        <div className=" h-[400px]  py-[56px] text-4xl" id="services">
          Services
        </div>
        <div className=" h-[400px]  py-[56px] text-4xl" id="news">
          News
        </div>
      </div>
    </MainLayout>
  );
}
