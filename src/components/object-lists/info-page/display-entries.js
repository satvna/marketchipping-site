

function DisplayEntries(props) {
     const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
        };

    return (
        
            <div className={props.isBanner?"display-entries-banner":"display-entries"}>
                <div className={props.isBanner?"page-hidden":"display-entries-title"}>
                    <p>{props.title}</p>
                </div>
                <p className={props.isBanner?"page-hidden":"display-entries-subtitle"}>{props.subtitle}</p>
                
                <img onClick={()=>openInNewTab(props.url)} src={`${props.thumbnail}`}></img>
                <a className={props.isBanner?"page-hidden":"display-entries-subtitle"} href={props.url} target="_blank" rel="noopener noreferrer">Go to link ---{'>'}</a>
                
            </div>
    );
  }

  export default DisplayEntries;