import josh from '../images/josh.gif';



function Josh(props) {
    console.log("props josh", props.josh)
    return (
      <img className={props.josh ? 'fadeIn':'fadeOut'} src = {josh} id = "josh"></img>
    );
  }

  export default Josh;