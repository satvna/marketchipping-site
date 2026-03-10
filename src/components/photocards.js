import images from "../images";

function Photocards(props) {
    return (
    <div className='photocards'>
       <img id = "pearlheart1" src={images.pearlheart.url}></img>
        <img id = "pearlheart2" src={images.pearlheart.url}></img>
        <img id = "flower1" src={images.flower1.url}></img>
        <img id = "flower2" src={images.flower2.url}></img>
        <img id = "sando" src={images.sando.url}></img>
        <div className="photocard-container">
            <div className='hologif'></div>
            <div className='biasName'>Chuu</div>
            {/* <img className = "hologif" src={hologif}></img> */}
            <img className = 'photocard' src='https://hywfhpjrxseqlrzqyghg.supabase.co/storage/v1/object/public/watermarked/cmjfk6as5004ijr04qanem62p-front-1766311354823.webp' alt='chuu photocard'></img>
            
        </div>
        <div className="photocard-container">
            <div className='hologif'></div>
            <div className='biasName'>Choerry</div>
            <img className = 'photocard' src={images.choerry.url} alt = 'choerry photocard'></img>
        </div>
      </div>
    );
  }

  export default Photocards;