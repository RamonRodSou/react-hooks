import { Button, TextField } from "@material-ui/core";
import React from "react";


export default function DadosUsuarios ({aoEnviar}) {

    return (
        <form onSubmit={(evento)=> {
            aoEnviar()
        }}>
            <TextField 
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <TextField 
                id="senha"
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                 Próximo
            </Button> 
        </form>
    )
}