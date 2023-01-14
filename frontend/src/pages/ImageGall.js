import {useEffect, useState} from 'react'
import ImageGallery from 'react-image-gallery';
import useTravelContext from "../hooks/useTravelContext"
import Footer from '../components/Footer'

export default function ImageGall(){
  const {travelContent} = useTravelContext()
  const {state, allImages, setAllImages} = useImageContext()
  const [image, setImage] = useState();

  const {user} = useAuthContext();

  const formData = new FormData()
  formData.append('image', image)
  formData.append('item_id', travelContent[0]._id)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`/api/image/`, {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
    })
    const json = await response.json()

    if(state){
      await setAllImages(`http://localhost:3000/api/image/${state[0].item_id}/${json.imgUrl.split('\\')[1]}`)
    }
  }
>>>>>>> cba330e8ce50c471cbae5ea5a48ba242a3ffbd25

  useEffect(() => {
    console.log(`http://localhost:4000/api/image/photo-gallery-1.jpg`)
    // setAllImages('https://cdn-icons-png.flaticon.com/512/5762/5762943.png')
      if(travelContent[0]._id){
        setAllImages(`http://localhost:4000/api/image/${travelContent[0].imgUrl.split('\\')[1]}`)
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
