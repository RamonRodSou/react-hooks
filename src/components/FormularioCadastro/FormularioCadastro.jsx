import React, { useState } from "react";
import DadosPessoas from "./DadosPessoas";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({aoEnviar, validarCPF}) {
const [etapaAtual, setEtapaAtual] = useState(0)

const formularios = [ 
<DadosUsuarios aoEnviar={proximo} />,
<DadosPessoas aoEnviar={proximo}  validarCPF={validarCPF}/>,
<DadosEntrega aoEnviar={aoEnviar} />,

]

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

    return <> {formularios[etapaAtual]} </>
}

export default FormularioCadastro;
