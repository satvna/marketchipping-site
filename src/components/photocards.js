import choerry from '../images/ARTMS_Birth_visuals_Choerry_2.webp';
import pearlheart from '../images/deco/pearlheart.png';
import flower1 from '../images/deco/flo18.png';
import flower2 from '../images/deco/flo20.png';
import sando from '../images/deco/sando.gif';
import hologif from '../images/deco/hologif.gif';

function Photocards(props) {
    return (
    <div className='photocards'>
       <img id = "pearlheart1" src={pearlheart}></img>
        <img id = "pearlheart2" src={pearlheart}></img>
        <img id = "flower1" src={flower1}></img>
        <img id = "flower2" src={flower2}></img>
        <img id = "sando" src={sando}></img>
        <div className="photocard-container">
            <div className='hologif'></div>
            <div className='biasName'>Chuu</div>
            {/* <img className = "hologif" src={hologif}></img> */}
            <img className = 'photocard' src='https://hywfhpjrxseqlrzqyghg.supabase.co/storage/v1/object/public/watermarked/cmjfk6as5004ijr04qanem62p-front-1766311354823.webp' alt='chuu photocard'></img>
            
        </div>
        <div className="photocard-container">
            <div className='hologif'></div>
            <div className='biasName'>Choerry</div>
            <img className = 'photocard' src={choerry} alt = 'choerry photocard'></img>
        </div>
      </div>
    );
  }

  export default Photocards;