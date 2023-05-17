

function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }
  
  function validarSenha(senha){
    if(senha.length < 4 || senha.length > 72){
      return {valido:false, texto:"senha deve ter 4 e 72 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }
  
  function validarNome(nome){
    if(nome.length < 4 || nome.length > 72){
      return {valido:false, texto:"senha deve ter 4 e 72 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }

  export {

    validarCPF,
    validarSenha,
    validarNome
  }