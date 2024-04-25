'use client';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getTokenStorage, setTokenStorage } from "@/app/utils/storage";

interface IGlobalContext {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  token: {
    acessToken: string;
    refreshToken: string;
  };
  setToken: Dispatch<
    SetStateAction<{ acessToken: string; refreshToken: string }>
  >;
}
const GlobalContext = createContext<IGlobalContext>({
  openSidebar: false,
  setOpenSidebar: () => {},
  files: [],
  setFiles: () => {},
  isLoading: false,
  setIsLoading: () => {},
  token: {
    acessToken: "",
    refreshToken: "",
  },
  setToken: () => {},
});

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const [token, setToken] = useState<{
    acessToken: string;
    refreshToken: string;
  }>({ acessToken: "", refreshToken: "" });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const token = getTokenStorage();
    setToken(token);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
        isLoading,
        setIsLoading,
        files,
        setFiles,
        token,
        setToken: (data: any) => {
          setToken(data);
          setTokenStorage({
            accessToken: data.acessToken,
            refreshToken: data.refreshToken,
          });
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContextProvider;
