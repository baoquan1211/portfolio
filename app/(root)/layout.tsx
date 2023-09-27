import Footer from "@/components/footer";
import Header from "@/components/header";
import CustomCursor from "@/components/custom-cursor";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CustomCursor />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
