
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// função importada do firebase


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// firebaseConfig recebe as configurações de acesso ao banco de dados

const app = initializeApp(firebaseConfig);

// app recebe a função de inicialização do firebase com a const firebaseConfig (que é um objeto) como parametro.
// a função chamada do firebase usa as informações do objeto para autenticar o acesso ao banco


export const db = getFirestore(app);
// disponibiliza o banco de dados para outros arquivos do projeto
export const auth = getAuth(app);
// inicializa o serviço de autenticação usando a mesma configuração Firebase já utilizada pelo projeto. 