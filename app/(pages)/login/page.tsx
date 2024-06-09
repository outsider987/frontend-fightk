"use client";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();
  const onGoogleLogin = () => {
    router.push(`${process.env.NEXTAUTH_URL}/auth/google`);
  };
  return (
    <div className="flex w-full">
      <div className="m-auto font-bold flex flex-[7] text-center items-center justify-center text-4xl">
        K Moment
      </div>
      <div className="bg-white w-full flex flex-col items-center justify-center flex-[3]">
        <div className="">
          <AccountCircleIcon className="text-blue w-20 h-20" />
        </div>
        <Button onClick={onGoogleLogin} className="text-xl font-bold">
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
