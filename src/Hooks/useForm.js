import { useState } from "react";
const useForm = (initialState) =>{
    const [form,setForm] = useState(initialState)
    const onChangeInputs = (event) =>{
        setForm({...form,[event.target.name]: event.target.value})
    }
    const limparInputs = () =>{
        setForm(initialState)
    }
    return {form,onChangeInputs,limparInputs}
}
export default useForm