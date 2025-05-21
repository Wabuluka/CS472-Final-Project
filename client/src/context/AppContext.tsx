import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

type ApplicationContextType = {
  products: object[];
  getProducts: (url: string) => Promise<void>;
};

const ApplicationContext = createContext<ApplicationContextType>(
  {} as ApplicationContextType
);

export default function AppContext({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<object[]>([]);

  async function getProducts(url: string) {
    try {
      setProducts([]);
      console.log(url);
      const results = await axios.get(url);
      setProducts(results.data);
      console.log(results.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <ApplicationContext.Provider value={{ products, getProducts }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export const useApplicationContext = () => useContext(ApplicationContext);
