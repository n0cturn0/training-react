function Evento({numero}){

function meuEvento(){
    console.log(`Fui Ativado ${numero}`)
}

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Clicar</button>
        </div>
    );
}
export default Evento