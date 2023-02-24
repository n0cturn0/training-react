import Button from "./Button";

function Evento({numero}){

function meuEvento(){
    console.log(`Ativando o Primeiro EVento`)
}
function segundoEvento(){
    console.log(`Ativando o segundo EVento`)
}

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
            {/* <button onClick={meuEvento}>Clicar</button>  Aula anterior*/}
        </div>
    );
}
export default Evento