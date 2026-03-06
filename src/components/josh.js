import josh from '../images/josh.gif';



function Josh(props) {
    return (
      <img className={props.josh ? 'fadeIn':'fadeOut'} src = {josh} id = "josh"></img>
    );
  }

  export default Josh;