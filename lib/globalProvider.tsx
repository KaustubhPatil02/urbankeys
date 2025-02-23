import { createContext } from "react";

interface User {
    $id: string;
    name: string;
    email: string;
    avatar: string;
}
interface GlobalContextType {
    isLoggedIn: boolean;
    user: User | null;
    loading: boolean;
}



const GlobalContext = createContext<GlobalContextType | undefined>(undefined)
export default GlobalContext