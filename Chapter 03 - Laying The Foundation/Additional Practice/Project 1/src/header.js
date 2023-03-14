import myImage from './assets/logo.png';

export function header( ){
    return(
        <div className="header">
                <ul>   
                     <li><img src={myImage} alt=""></img></li>
                     <li>Blog </li>
                     <li>Calm Playlist</li>
                     <li>Join Calm</li>
                </ul>
            
        
        </div>

        
    )



}


