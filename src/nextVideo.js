import { useParams } from "react-router-dom"

const NextVideo =()=>{
    const {id}=useParams()
    const embedUrl="https://www.youtube.com/embed/"
    return <div className="n-v">
         <iframe  width="900" height="515" src={embedUrl+id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
}
export default NextVideo;