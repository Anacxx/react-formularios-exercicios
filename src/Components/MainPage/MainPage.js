import React from 'react'
import { MainContainer, Form, Input } from './styles'
import useForm from '../../Hooks/useForm'
function MainPage() {
  const {form,onChangeInputs,limparInputs} = useForm({nome:"",numeroModulos:"",tecnologias:"",responsavel:""})
  const cadastrar = (event) =>{
    event.preventDefault()
    console.log(form)
    limparInputs()
  }
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={cadastrar}>

        <label htmlFor="nome">Nome do Curso:</label>
        <Input
          value={form.nome}
          onChange={onChangeInputs}
          name='nome'
          id="nome"
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input
          value={form.numeroModulos}
          onChange={onChangeInputs}
          name='numeroModulos'
          id="modulos"
          
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          value={form.tecnologias}
          onChange={onChangeInputs}
          name='tecnologias'
          id="tecnologias"
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input
          value={form.responsavel}
          onChange={onChangeInputs}
          name='responsavel'
          id="responsavel"
          pattern='^.{4,}$'
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
