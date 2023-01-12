import {useState} from 'react'
import ImageGallery from 'react-image-gallery';
import useTravelContext from "../hooks/useTravelContext"
import { useAuthContext } from "../hooks/useAuthContext";
import useImageContext from "../hooks/useImageContext";
import Footer from '../components/Footer'

export default function ImageGall(){
  const {travelContent} = useTravelContext()
  const {imageContent} = useImageContext()
  const [image, setImage] = useState();
  const {user} = useAuthContext();
  // const imagePath = imageContent[0].imgUrl.split('\\')[1]

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
    console.log(json)
  }

  const images = [
    // {
      // original: `http://localhost:3000/api/travelDiary/${imageContent[0].item_id}/${imagePath}`,
      // thumbnail: `http://localhost:3000/api/travelDiary/${imageContent[0].item_id}/${imagePath}`,
    // },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  return(
    <>
    {travelContent &&
    <div className="row imageGall-custom">
      <div className='col-9'>
        <form encType="multipart/form-data" onSubmit={handleSubmit} className="uploadform-custom d-flex flex-column flex-md-row">
            <input
            type="file"
            title="Upload your memories"
            accept=".png, .jpg, .jpeg"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="form-control form-custom shadow p-3 mb-5 bg-body-tertiary rounded"
            />
            <button type="submit" className="uploadbutton-custom btn btn-outline-info fw-bolder ms-2 text-secondary" disabled={!image}>Upload</button>
        </form>
      </div>
      <div className="images-custom col-12">
        <div className="d-flex flex-column flex-sm-row">
          <div className="description-custom me-5">
            <h2 className="text-center text-secondary">{travelContent[0].name}</h2>
            <p className="text-center text-secondary mb-2">Visited: {travelContent[0].date.split('T')[0]} <br></br>Entry Date: {travelContent[0].createdAt.split('T')[0]}</p>
            <p>{travelContent[0].description}</p>
          </div>
          <ImageGallery items={images}/>
        </div>
      </div>
    </div>
    }
    <Footer/>
    </>
  )
}