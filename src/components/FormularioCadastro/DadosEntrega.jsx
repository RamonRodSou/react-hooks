import { Button, TextField } from "@material-ui/core";
import React from "react";
export default function DadosEntrega () {

    return (
        <form>
            <TextField 
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField 
                id="endereco"
                label="Endereco"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <TextField 
                id="numero"
                label="Numero"
                type="number"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField 
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField 
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