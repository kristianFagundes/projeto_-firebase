import { useState, useEffect } from "react"
import React from 'react';
import { doc, deleteDoc, collection, addDoc, onSnapshot, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import PlanCard from "./PlanCard";






export default function Tela() {

    const descricao1 = 'Área de Musculação';
    const descricao2 = 'Cadeira de Massagem';
    const descricao3 = 'Acesso à todas as Unidades';
    const descricao4 = 'Pagamento anual parcelado em até 12x no cartão';

    const [planos, setPlanos] = useState([
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
    ])

    useEffect(() => {

        async function fetchData() {
            const q = query(collection(db, "itens"))
            const qSnap = await getDocs(q)
            console.log(qSnap.docs[0].data())
        }

        fetchData()
    }, []);

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


                        <li><button style={{
                            backgroundColor: ' rgb(140, 23, 194)',

                            boxShadow: '1px 2px 1px rgb(183, 160, 194)',
                            borderRadius: '30% 10%', color: 'white', width: '6em', height: '4em', fontSize: '1em'
                        }}>Home</button></li>
                        <li><button style={{
                            backgroundColor: ' rgb(140, 23, 194)',

                            boxShadow: '1px 2px 1px rgb(183, 160, 194)',
                            borderRadius: '30% 10%', color: 'white', width: '6em', height: '4em', fontSize: '1em'
                        }}>Planos</button></li>
                        <li><button style={{
                            backgroundColor: ' rgb(140, 23, 194)',

                            boxShadow: '1px 2px 1px rgb(183, 160, 194)',
                            borderRadius: '30% 10%', color: 'white', width: '6em', height: '4em', fontSize: '1em'
                        }}>Contato</button></li>

                    </ul>
                </nav>

            </header>
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
                            console.log("plano: ", p)

                            return (
                                <PlanCard p={p} />
                            )
                        }

                        )
                    }

                </div>

            </main>
        </box>
    )
}



