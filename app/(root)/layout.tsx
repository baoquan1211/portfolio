import Footer from "@/components/footer";
import Header from "@/components/header";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
