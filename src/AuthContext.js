import { createContext, useContext, useEffect, useState } from "react";
// createContext: cria o contexto que compartilhará as informações de autenticação.
// useContext: permite que outros componentes consultem essas informações.
import { onAuthStateChanged } from "firebase/auth";
// onAuthStateChanged: função do Firebase que observa mudanças no estado de autenticação.
import { auth } from "./firebase";


const AuthContext = createContext();
// createContext(): função do React que cria o contexto.

export function AuthProvider({ children }) {
        // função que Fornece o contexto aos componentes filhos
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // onAuthStateChanged acessa a autenticação através do auth, identifica o usuário, esse usuário é armazenado como parametro na função de callback currentUser
            setUser(currentUser);
            // altera a constante user com o usuário recebido no currentUser
            setLoading(false);
            // indica pro código que a autenticação terminou

        });

        return () => unsubscribe();
        // Cancela a observação das mudanças de autenticação no Firebase.
    }, []);

    return (
        // value Define as informações compartilhadas pelo contexto
        <AuthContext.Provider value={{ user, loading }}>
        
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
    // useContext consulta o contexto AuthContext que contém os dados user e loading 
}