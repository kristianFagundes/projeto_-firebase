
import { useState, useEffect } from "react"
import { collection, query, getDocs } from 'firebase/firestore';
import { db, auth } from './firebase';
import { signOut } from "firebase/auth";
import PlanCard from "./PlanCard";
import { useAuth } from "./AuthContext";
import Login from "./views/Login";


export default function Tela() {

    const { user, loading } = useAuth();
    const isAdmin = user?.uid === "0HZE9nYKvCVlknKTRxAuKPioumW2";
    // identifica o admin através do UID gerado no firebase quando criei um usuario para autenticar
    const [loginOpen, setLoginOpen] = useState(false);
    // Essa variável terá duas funções:
    //- loginOpen: informa se a sidebar está aberta (true) ou fechada (false).
    //- setLoginOpen: altera esse estado.

    async function handleLogout() {
        await signOut(auth);
        //Quando signOut(auth) terminar, o onAuthStateChanged, que já temos no AuthContext, perceberá que não existe mais usuário conectado e atualizará o estado.
    }

    const descricao1 = 'Área de Musculação';
    const descricao2 = 'Cadeira de Massagem';
    const descricao3 = 'Acesso à todas as Unidades';
    const descricao4 = 'Pagamento anual parcelado em até 12x no cartão';

    const [planos, setPlanos] = useState([])
    // planos guarda a lista de planos. 
    // setPlanos atualiza essa lista.
    // Quando setPlanos é executado, o React atualiza a interface.
    const planosTemp = [
        {
            img: 'https://s2-oglobo.glbimg.com/tCi4YPIy6K0HBPMLGnt00WSvbrQ=/0x0:4000x2667/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/c/a/O7y1EGRAelLLVURwHeqQ/strong-man-training-gym.jpg',
            id: 1,
            nome: "Essencial",
            valorOriginal: 200,
            valorAtual: 150,
            descricao: [descricao1]


        },
        {
            img: 'https://blog.meupersonalvirtual.com.br/wp-content/uploads/2019/12/313233-quais-treinos-de-academia-sao-recomendados-para-voce-1200x675.jpg',
            id: 2,
            nome: "Avançado",
            valorOriginal: 250,
            valorAtual: 200,
            descricao: [descricao1, descricao2]
        },
        {
            img: "https://invexo.com.br/blog/wp-content/uploads/2022/12/smartfit-academias-na-barra-da-tijuca-rio-de-janeiro-1024x576.jpg",
            id: 3,
            nome: "Supreme",
            valorOriginal: 350,
            valorAtual: 245,
            descricao: [descricao1, descricao2, descricao3, descricao4]
        },
    ];

    async function fetchData() {
        const q = query(collection(db, "itens"))
        const qSnap = await getDocs(q)
        let listaTemporaria = []
        qSnap.docs.map(doc => listaTemporaria.push({ ...doc.data(), "id": doc.id }))

        setPlanos(listaTemporaria)

        console.log(listaTemporaria)
    }


    useEffect(() => {
        fetchData()
    }, []);

    const onRemove = () => {
        fetchData();
    }
    //Depois de uma exclusão, o componente consulta novamente o Firestore para atualizar a listagem.

    return (

        <box
        >
            <header
                style={{

                    display: 'flex',
                    minHeight: '8em',
                    backgroundColor: ' rgba(99, 10, 139, 0.1)',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: '0 5px 10px -2px #000',
                    zIndex: 2,
                    position: "relative"

                }}>
                <h1 style={{


                    fontSize: '4em',
                    margin: '0 0 0 2em',
                    color: '#5e5c5cf8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.6em',

                }}> MyFit</h1>
                <nav style={{

                    marginRight: '10em',
                }}>
                    <ul style={{
                        display: 'flex',
                        gap: '2em',
                        color: ' white',
                        listStyle: 'none',
                        alignItems: 'center',
                        justifyContent: 'space-between',



                    }}>
                        {!loading && (
                            isAdmin ? (
                                <>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5em',
                                        color: 'rgb(140, 23, 194)',
                                        fontSize: '0.85em',

                                    }}>
                                        <span style={{
                                            width: '9px',
                                            height: '9px',
                                            borderRadius: '50%',
                                            backgroundColor: '#2e9d50',
                                            boxShadow: '0 0 5px rgba(46, 157, 80, 0.5)'
                                        }} />
                                        Admin conectado
                                    </li>
                                    <li>
                                        <a href="/insert">
                                            <button style={{
                                                backgroundColor: 'rgb(140, 23, 194)',
                                                boxShadow: '1px 2px 1px rgb(183, 160, 194)',
                                                borderRadius: '30% 10%',
                                                color: 'white',
                                                width: '6em',
                                                height: '4em',
                                                fontSize: '1em'
                                            }}>
                                                Adicionar
                                            </button>
                                        </a>
                                    </li>


                                </>
                            ) : (
                                <li>

                                    <button
                                        onClick={() => setLoginOpen(true)}
                                        // setLoginOpen já inicia como false (fechado), quando o usuario clica no botão login essa variavel se torna true (aberto) e mostra o sidebar de login
                                        style={{
                                            backgroundColor: 'rgb(140, 23, 194)',
                                            boxShadow: '1px 2px 1px rgb(183, 160, 194)',
                                            borderRadius: '30% 10%',
                                            color: 'white',
                                            width: '6em',
                                            height: '4em',
                                            fontSize: '1em'
                                        }}>
                                        Login
                                    </button>

                                </li>
                            )
                        )}


                        <li><button style={{
                            backgroundColor: ' rgb(140, 23, 194)',

                            boxShadow: '1px 2px 1px rgb(183, 160, 194)',
                            borderRadius: '30% 10%', color: 'white', width: '6em', height: '4em', fontSize: '1em'
                        }}>Contato</button></li>

                        {!loading && isAdmin && (
                            <li>
                                <button
                                    onClick={handleLogout}
                                    //Quando o usuário clicar no botão, o React executará a função handleLogout, que criamos anteriormente.
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: '1px solid rgb(140, 23, 194)',
                                        color: 'rgb(140, 23, 194)',
                                        borderRadius: '8px',
                                        padding: '0.5em 1em',
                                        fontSize: '0.85em',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Sair
                                </button>
                            </li>
                        )}


                    </ul>
                </nav>

            </header>
            <Login
                open={loginOpen}
                onClose={() => setLoginOpen(false)}
            />


            <main style={{

                backgroundColor: ' rgb(183, 160, 194)',
                backgroundSize: 'cover',
                width: '100%',
                paddingTop: '1em',
                paddingBottom: '4em'


            }}>




                <div style={{


                    display: 'flex',
                    gap: '1em',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    marginTop: '3em',



                }}

                >
                    {
                        planos.map((p) => {
                            return (
                               <PlanCard p={p} onRemove={onRemove} isAdmin={isAdmin} />
                            )
                        }

                        )
                    }

                </div>

            </main>
        </box>
    )
}



