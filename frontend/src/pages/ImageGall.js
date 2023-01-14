import {useEffect, useState} from 'react'
import ImageGallery from 'react-image-gallery';
import useTravelContext from "../hooks/useTravelContext"
import Footer from '../components/Footer'

export default function ImageGall(){
  const {travelContent} = useTravelContext()
  const [allImages, setAllImages] = useState()

  useEffect(() => {
    setAllImages('https://cdn-icons-png.flaticon.com/512/5762/5762943.png')
      if(travelContent[0]._id){
        setAllImages(`http://localhost:3000/api/image/${travelContent[0].imgUrl.split('\\')[1]}`)
        return 
      } 
  },[travelContent])

  return(
    <>
    {travelContent &&
    <div className="row imageGall-custom">
      <div className="images-custom col-12">
        <div className="d-flex flex-column flex-sm-row">
          <div className="description-custom me-5">
            <h2 className="text-center text-secondary">{travelContent[0].name}</h2>
            <p className="text-center text-secondary mb-2">Visited: {travelContent[0].date.split('T')[0]} <br></br>Entry Date: {travelContent[0].createdAt.split('T')[0]}</p>
            <p>{travelContent[0].description}</p>
          </div>
          {/* <ImageGallery items={allImages}/> */}
          <img src={allImages} className="imageGall-custom w-50 border border-info"></img>
        </div>
      </div>
    </div>
    }
    {/* <Footer/> */}
    </>
  )
}