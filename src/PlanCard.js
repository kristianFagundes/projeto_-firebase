import { useState } from "react"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "@fontsource/saira";
import "@fontsource/saira-stencil-one";
import EditRoundedIcon from '@mui/icons-material/EditRounded';



export default function PlanCard({ p }) {

    const [mouseHover, setMouseHover] = useState(false)

    return (

        <div onMouseEnter={() => { setMouseHover(true) }}
            onMouseLeave={() => { setMouseHover(false) }}
            style={{

                display: 'flex',
                flexDirection: 'column',
                width: '20em',
                backgroundColor: '#beb6b642',
                boxShadow: '0px 2px 1px rgb(140, 23, 194)',
                marginTop: '0',

            }}>
            <div style={{
                display: 'flex',
                flexDirection:'row',
                justifyContent: 'space-evenly',
                gap:'6px',
                width: '300px',
                height: '200px',
                position: 'absolute',
                marginTop: '6px',
                opacity: mouseHover ? 1 : 0, transition: ' all 0.3s ease', pointerEvents: mouseHover ? "auto" : "none",
            }}>

                <a  href={"/Config/" + p.id} style={{ width: '100%', height: ' 100%'}}><button style={{marginLeft:'8px', width: '30%', height: ' 15%', backgroundColor:'rgba(140, 23, 194, 0.69)' }}><EditRoundedIcon style={{ color: 'white' }} /></button></a>
                
                    <button  style={{ width: '50%', height: ' 15%', color: 'white', backgroundColor: 'rgba(140, 23, 194, 0.83)' }}>Assinar</button>
                
                


            </div>



            <div style={{ width: "100%", height: "200px", }}>
                <img style={{ width: "100%", height: "200px", }} src={`${p.img}`} />
            </div>
            <p style={{ marginTop: '0px', marginBottom: '15px', fontSize: ' 2em', paddingLeft: '1em', textTransform: 'uppercase', color: '#2e2b2b', fontFamily:"Saira Stencil One" }}>{p.nome}</p>
            <ul style={{fontFamily:"Saira", marginTop: '0px', marginBottom: '5px', color: ' #2e2b2b', paddingBottom: '2em', marginRight: '5px' }}>
                {p.descricao.map((d) => {
                    return (
                        <li>{d}</li>
                    )
                })}
            </ul>
            <div style={{ fontFamily:"Saira Stencil One", display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '200%' }}>

                {p.valorAtual != p.valorOriginal &&
                    <p style={{
                        justifyContent: 'center', height: '1em', marginTop: 'auto', fontFamily: "Saira Stencil One", color: 'rgb(151, 28, 7)', textDecoration: 'line-through', display: 'flex', fontSize:'1.5em'
                    }} >
                        {"R$ " + p.valorOriginal + ",00"} </p>}



                <p style={{
                    alignItems: 'center', justifyContent: 'center', height: '2em', backgroundColor: 'rgba(140, 23, 194, 0.2)', margin: '10px 0 0 0', fontFamily: 'verdana', fontWeight: 'bolder', color: 'rgb(77, 6, 110)', display: 'flex',
                }}>{"R$" + p.valorAtual + ",00"}

                    <div style={{ width: "20px" }} />

                    <div style={{ color: "red" }} > {(100 - (100 / p.valorOriginal) * p.valorAtual) + " %OFF"}</div></p>


            </div>

        </div>

    )

}