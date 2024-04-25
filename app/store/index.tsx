import GlobalContextProvider from "./Global";
type RootContextProviderProps = {
  children?: React.ReactNode;
};
const RootContextProvider: React.FC<RootContextProviderProps> = ({
  children,
}) => {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
};
export default RootContextProvider;
