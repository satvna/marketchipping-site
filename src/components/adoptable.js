function Adoptable(props) {
    return (
        <div className='adoptable'>
        <div id = 'adopt-details'>
          <p>dragons that need clicks to live</p>
        </div>
        <div id = 'adopt-container'>
          <div className='little-guy'>
            <a href="https://dragcave.net/view/9O9fC"><img src="https://dragcave.net/image/9O9fC.gif" style={{borderWidth: 0}} alt="Dragon Cave: Adopt one today!"/></a>
            <p>Gortholax the Destroyer</p>
            </div>
          <div className='little-guy'>
            <a href="https://dragcave.net/view/pPMpd"><img src="https://dragcave.net/image/pPMpd.gif" style={{borderWidth: 0}} alt="Dragon Cave: Adopt one today!"/></a>
            <p>2025 Hyundai Sonata</p>
          </div>
        </div>
      </div>
    );
  }

  export default Adoptable;