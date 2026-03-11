import images from '../images';



function Josh(props) {
    return (
      <img className={props.josh ? 'fadeIn':'fadeOut'} src = {images.josh.url} id = "josh"></img>
    );
  }

  export default Josh;