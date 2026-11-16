import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Drawer from "@mui/material/Drawer";

export default function Login({ open, onClose }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleLogin(e) {
        e.preventDefault();

        setError("");
        try {
            await signInWithEmailAndPassword(auth, email, password);
            //signInWithEmailAndPassword: função do Firebase que tenta autenticar o usuário usando e-mail e senha.

            //await: aguarda o Firebase responder antes de continuar a execução da função.
            setEmail("");
            setPassword("");
            onClose();
            // limpa os campos e fecha o drawer ( sidebar)

        } catch (erro) {
            setError("E-mail ou senha incorretos.");

        }

    }


    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
        >
            <div style={{
                width: "350px",
                minHeight: "100vh",
                boxSizing: "border-box",
                padding: "2.5em 2em",
                backgroundColor: "rgb(183, 160, 194)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "-5px 0 15px rgba(0, 0, 0, 0.2)"
            }}>

                <h1 style={{
                    color: "#5e5c5cf8",
                    textTransform: "uppercase",
                    textAlign: "center",
                    letterSpacing: "0.12em",
                    marginBottom: "1.5em"
                }}>
                    Login MyFit
                </h1>

                <form
                    onSubmit={handleLogin}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.8em"
                    }}
                >

                    {error && (
                        <p style={{
                            color: "#a00000",
                            backgroundColor: "rgba(255,255,255,0.5)",
                            padding: "0.7em",
                            borderRadius: "8px",
                            textAlign: "center"
                        }}>
                            {error}
                        </p>
                    )}

                    <label htmlFor="email" style={{
                        color: "#5e5c5c",
                        fontWeight: "bold"
                    }}>
                        E-mail
                    </label>

                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            padding: "0.9em",
                            border: "1px solid rgb(140, 23, 194)",
                            borderRadius: "10px",
                            outline: "none",
                            fontSize: "1em"
                        }}
                    />

                    <label htmlFor="password" style={{
                        color: "#5e5c5c",
                        fontWeight: "bold"
                    }}>
                        Senha
                    </label>

                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            padding: "0.9em",
                            border: "1px solid rgb(140, 23, 194)",
                            borderRadius: "10px",
                            outline: "none",
                            fontSize: "1em"
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            width: "min-content",
                            marginTop: "1em",
                            marginLeft: "6em",
                            padding: ".5em",
                            color: "white",
                            backgroundColor: "rgb(140, 23, 194)",
                            border: "none",
                            borderRadius: "10% 10%",
                            boxShadow: "3px 3px 7px rgb(54, 54, 54)",
                            fontSize: "1em",
                            textTransform: "uppercase",
                            cursor: "pointer"
                        }}
                    >
                        Entrar
                    </button>

                </form>
            </div>
        </Drawer>
    );


}