function Button(props){
    // Uma linha só não necessita dos ()
    return <button onClick={props.event}>{props.text}</button>
}
export default Button