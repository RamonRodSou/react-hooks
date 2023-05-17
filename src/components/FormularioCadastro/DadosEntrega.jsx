import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function DadosEntrega (aoEnviar) {

    const [cep, setCep]= useState ("")
    const [endereco, setEndereco]= useState ("")
    const [numero, setNumero]= useState ("")
    const [estado, setEstado]= useState ("")
    const [cidade, setCidade]= useState ("")

    return (
        <form onSubmit={(evento) => {
            evento.preventDefault()
            aoEnviar({cep, endereco, numero, estado, cidade})
        }}>
            <TextField 
                value={(cep)}
                onChange={(evento)=> { setCep(evento.target.value)}}
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField 
                value={(endereco)}
                onChange={(evento)=> { setEndereco(evento.target.value)}}
                id="endereco"
                label="Endereco"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <TextField 
                value={(numero)}
                onChange={(evento)=> { setNumero(evento.target.value)}}
                id="numero"
                label="Numero"
                type="number"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField
                value={(estado)}
                onChange={(evento)=> { setEstado(evento.target.value)}}
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField 
                value={(cidade)}
                onChange={(evento)=> { setCidade(evento.target.value)}}
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                required
            />
            <Button type="submit" variant="contained" color="primary">
                 Voltar
            </Button>   
            <Button type="submit" variant="contained" color="primary">
                 Finalizar Cadastro
            </Button> 
</form>
    )
}