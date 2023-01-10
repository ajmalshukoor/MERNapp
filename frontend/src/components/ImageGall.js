import ImageGallery from 'react-image-gallery';

export default function ImageGall(){
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
      <div className="images-custom">
      <h2 className="text-center text-secondary mb-3">Kolukkumalai</h2>
        <ImageGallery items={images}/>
      </div>
    </div>
  )
}