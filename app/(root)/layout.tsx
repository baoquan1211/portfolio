import Footer from "@/components/footer";
import NavBar from "@/components/header";
import Header from "@/components/header";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
