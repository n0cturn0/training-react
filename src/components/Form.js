import { useState } from "react";
function Form(){
    function cadastraUsuario(e){
        e.preventDefault()
        console.log(` Usuario ${name} foi cadastrado com a senha ${password}`)
        console.log('Cadastrou o usuario')
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();


    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastraUsuario}>
                <div>
                <label htmlFor="name"></label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                />
                </div>

                <div>
                <label htmlFor="password"></label>
                <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Digite uma senha"
                onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div>
                <input type="submit" value="Cadastrar" />
                </div>
                
            </form>
        </div>
    );
}
export default Form