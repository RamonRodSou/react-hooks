import React, { useEffect, useState } from "react";
import DadosPessoas from "./DadosPessoas";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validacoes}) {
const [etapaAtual, setEtapaAtual] = useState(0)
const [dadosColetados, setDados] = useState({})

useEffect(()=> {
  if (etapaAtual === formularios.length-1){
    aoEnviar(dadosColetados)
  }
})

const formularios = [ 
  <DadosUsuarios aoEnviar={coletarDados}/>,
  <DadosPessoas aoEnviar={coletarDados} />,
  <DadosEntrega aoEnviar={coletarDados}/>,
  <Typography variant="h5">Obrigado pelo Cadastro!</Typography>

]

function coletarDados (dados){
  setDados({...dadosColetados, ...dados})
  proximo()
}

function proximo () {
  setEtapaAtual(etapaAtual + 1)
}
  // function formularioAtual (etapa){
  //   switch (etapa){ 
  //     case 0:
  //       return <DadosUsuarios aoEnviar={proximo}/>
  //     case 1:
  //       return <DadosPessoas aoEnviar={proximo}/>
  //     case 2:
  //       return <DadosEntrega aoEnviar={aoEnviar}/>
  //     default:
  //       return <Typography>Erro ao selecionar formulário</Typography>
  //   }
  // }

    return <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalizacao</StepLabel></Step>
      </Stepper>
    {formularios[etapaAtual]} </>
}

export default FormularioCadastro;
