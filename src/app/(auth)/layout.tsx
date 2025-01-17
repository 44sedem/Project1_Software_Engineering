import { FC, ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface AuthLayoutProps {
    children: ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
  return (
    <div className="bg-slate-200 p-10 rounded-md">
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;


