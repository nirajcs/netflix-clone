import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import Youtube from 'react-youtube'
import './RowPost.css'
import { API_KEY, imageUrl } from '../../constants/constants'

function RowPost(props) {
    const [originals, setOriginals] = useState([])
    const [urlId, setUrlId] = useState('')
    const [trailerScreen, setTrailerScreen] = useState(false)

    useEffect(() => {
      axios.get(props.url).then((response)=>{
        console.log(response.data)
        setOriginals(response.data.results)
      }).catch((err)=>{
        console.log(err);
      })
    }, [props.url])


    const showTrailer = (id)=>{
      console.log(id)
      axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
        console.log(response.data.results)
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0])
          setTrailerScreen(true)
        }else{
          console.log("Array Empty");
        }
      })
    }


    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
     
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    originals.map((show)=>
                        <img key={show.id} onClick={()=>{showTrailer(show.id)}} className={props.isSmall ? 'small_poster' : 'poster'} alt='poster' src={`${imageUrl+show.backdrop_path}`} />
                    )
                }
            </div>
            {trailerScreen && (
              <div className="overlay">
                <div style={{width:'80%'}}>
                  <Youtube opts={opts} videoId={urlId.key}/>
                  <button className='close-button' onClick={()=>{setTrailerScreen(false)}}>Close</button>
                </div>
              </div>
            )}
        </div>
    )
}


export default RowPost