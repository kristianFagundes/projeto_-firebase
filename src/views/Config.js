import TextField from '@mui/material/TextField';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import "@fontsource/saira-stencil-one";
import { BrowserRouter, Route, Routes, useParams } from 'react-router';



export default function Config() {

    const { id } = useParams();


    const [nome, setNome] = useState("");
    const [valorOriginal, setValorOriginal] = useState("");
    const [valorAtual, setValorAtual] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState("");


    return (


        <div style={{
            backgroundColor: ' rgb(140, 23, 194)',
            height: '776px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '7px',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "Saira Stencil One",


        }}>
            <h1 style={{
                width: '30%',
                fontSize: '2.4em',
                letterSpacing: '0.5em',
                color: 'white',
                paddingRight: '200px',
                fontFamily: "Saira Stencil One",


            }}>Configurações</h1>
            <div style={{

                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                gap: '3px',
                alignItems: 'center',
                justifyContent: 'center'

            }}>
                <TextField sx={{ backgroundColor: '#ccc', width: '40%' }} label="Nome" variant="filled" value={nome} oncChange={(e) => { setNome(e.target.value) }} />
                <Button sx={{ color: 'white' }}><EditRoundedIcon /></Button>
                <Button sx={{ color: 'white' }} ><AddCircleIcon /></Button>
            </div>
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                gap: '3px',
                alignItems: 'center',
                justifyContent: 'center'

            }} >
                <TextField sx={{ backgroundColor: '#ccc', width: '40%' }} label="Valor Original" variant="filled" value={valorOriginal} oncChange={(e) => { setValorOriginal(e.target.value) }} />
                <Button sx={{ color: 'white' }}><EditRoundedIcon /></Button>
                <Button sx={{ color: 'white' }}><AddCircleIcon /></Button>
            </div>

            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                gap: '3px',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TextField sx={{ backgroundColor: '#ccc', width: '40%' }} label="Valor Atual" variant="filled" value={valorAtual} oncChange={(e) => { setValorAtual(e.target.value) }} />
                <Button sx={{ color: 'white' }}><EditRoundedIcon /></Button>
                <Button sx={{ color: 'white' }}><AddCircleIcon /></Button>
            </div>
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                gap: '3px',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TextField sx={{ backgroundColor: '#ccc', width: '40%' }} label="Descrição" variant="filled" value={descricao} oncChange={(e) => { setDescricao(e.target.value) }} />
                <Button sx={{ color: 'white' }}><EditRoundedIcon /></Button>
                <Button sx={{ color: 'white' }}><AddCircleIcon /></Button>
            </div>
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                gap: '3px',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TextField sx={{ backgroundColor: '#ccc', width: '40%' }} label="Imagem" variant="filled" value={imagem} oncChange={(e) => { setImagem(e.target.value) }} />
                <Button sx={{ color: 'white' }}><EditRoundedIcon /></Button>
                <Button sx={{ color: 'white' }}><AddAPhotoIcon /></Button>
            </div>
        </div>
    )

}
