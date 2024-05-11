"use client"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@/app/components/Button";
const LoginPafge = () => {
  return (
    <div className="flex w-full">
      <div className="m-auto font-bold flex flex-[7] text-center items-center justify-center text-4xl">
        K Moment
      </div>
      <div className="bg-white w-full flex flex-col items-center justify-center flex-[3]">
        <div className="">
          <AccountCircleIcon className="text-blue w-20 h-20" />
        </div>
        <Button className="text-xl font-bold">Login</Button>
      </div>
    </div>
  );
};

export default LoginPafge;
