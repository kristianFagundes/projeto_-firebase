import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {

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

        } catch (erro) {
            setError("E-mail ou senha incorretos.");

        }

    }

    return (
        <div>
            <h1>Login MyFit</h1>

            <form onSubmit={handleLogin}>
                {/* onSubmit É um evento do React que é disparado quando o formulário é enviado.
                 Ao clicar no botão Entrar, o formulário chamará handleLogin
                 */}

                {error && <p>{error}</p>}


                {/* 
                    error: verifica se existe alguma mensagem de erro.
                    
&&: significa E em JavaScript, mas aqui também funciona como uma forma de exibição condicional.

<p>{error}</p>: mostra a mensagem dentro de um parágrafo.     
                 
                 
                 */}
                <label htmlFor="email">E-mail</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    //value={email}: define que o valor do campo vem do estado email.
                    onChange={(e) => setEmail(e.target.value)}
                //executa uma função sempre que o usuário altera o campo.
                />

                <label htmlFor="password">Senha</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                // onChange é uma propriedade que permite informar ao React qual função deve ser executada quando o valor de um campo muda.

                // setPassword() atualiza com o valor do e.target.value

                //e.target.value é o valor digitado pelo usuario
                />

                <button type="submit">Entrar</button>
            </form>
        </div>
    );

}