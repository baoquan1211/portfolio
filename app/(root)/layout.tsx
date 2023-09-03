import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <NavBar />
      <main className="pt-16 h-full">{children}</main>
    </div>
  );
};

export default RootLayout;
