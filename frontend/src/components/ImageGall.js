import ImageGallery from 'react-image-gallery';
import useTravelContext from "../hooks/useTravelContext"

export default function ImageGall(){
  const {travelContent} = useTravelContext()

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
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
    <div className="row">
      <div className='col-9'>
        <form encType="multipart/form-data" className="uploadform-custom d-flex flex-row">
            <input
            type="file"
            title="Upload your memories"
            accept=".png, .jpg, .jpeg"
            name="photo"
            className="form-control form-custom shadow p-3 mb-5 bg-body-tertiary rounded"
            />
            <button type="submit" className="uploadbutton-custom btn btn-outline-info fw-bolder ms-2 text-secondary">Upload</button>
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
  )
}