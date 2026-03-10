import gamesList from "../object-lists/info-page/games";
import graphicsList from "../object-lists/info-page/graphics";
import inspoList from "../object-lists/info-page/inspo";
import DisplayEntries from "../object-lists/info-page/display-entries";

function FavSites(props) {
    const listGames = gamesList.map(game => <DisplayEntries isBanner={false} title={game.title} subtitle={game.subtitle} thumbnail={game.thumbnail} url={game.url}/>);
    const listGraphics = graphicsList.map(game => <DisplayEntries isBanner={true} title={game.title} subtitle={game.subtitle} thumbnail={game.thumbnail} url={game.url}/>);
    const listInspo = inspoList.map(game => <DisplayEntries isBanner={true} title={game.title} subtitle={game.subtitle} thumbnail={game.thumbnail} url={game.url}/>);

    return (
       <div id = "fav-sites-wrapper" className= {props.favSites?'info-subpage-wrapper':'page-hidden'}> 
                 <div className="favorite-sites-wrapper">
                {/* CATEGORY 1 */}
                {/* <div className="category">
                    <div id="category-1-title" className="subheading">
                        <h3>My Neighborhood</h3>
                    </div>
                    <div className="subheadings-subheading">
                        <h3>Fun sites to see!</h3>
                    </div>
                </div> */}
                {/* CATEGORY 2 */}
                <div className="category">
                    <div id="games" className="subheading">
                        <h3>Games</h3>
                    </div>
                    <div className="subheadings-subheading">
                        <h3>Web games to play in your browser.</h3>
                    </div>
                    <div className="display-entries-wrapper">
                        {listGames}
                    </div>
                    
                </div>
                {/* CATEGORY 3 */}
                <div className="category">
                    <div id="graphics" className="subheading">
                        <h3>Graphics</h3>
                    </div>
                    <div className="subheadings-subheading">
                        <h3>Sites with graphics to add to your page.</h3>
                    </div>
                    <div className="display-entries-wrapper">
                        {listGraphics}
                    </div>
                </div>
                {/* CATEGORY 4 */}
                <div className="category">
                    <div  id="inspo" className="subheading">
                        <h3>Inspo</h3>
                    </div>
                    <div className="subheadings-subheading">
                        <h3>Sites I really admire!</h3>
                    </div>
                    <div className="display-entries-wrapper">
                        {listInspo}
                    </div>
                </div>
            </div>
       
       </div>
    );
  }

  export default FavSites;