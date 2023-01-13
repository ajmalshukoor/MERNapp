

// export default function ImageGall(){
//     const {travelContent} = useTravelContext()

//     const formData = new FormData()
//     formData.append('image', image)
//     formData.append('item_id', travelContent[0]._id)
    
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const response = await fetch(`/api/image/`, {
//           method: 'POST',
//           body: formData,
//           headers: {
//             'Authorization': `Bearer ${user.token}`
//           },
//         })
//         const json = await response.json()
//         setImage('')
//     }

//     return(
//         <form encType="multipart/form-data" onSubmit={handleSubmit} className="uploadform-custom d-flex flex-column flex-md-row">
//             <input
//             type="file"
//             title="Upload your memories"
//             accept=".png, .jpg, .jpeg"
//             name="image"
//             onChange={(e) => setImage(e.target.files[0])}
//             className="form-control form-custom shadow p-3 mb-5 bg-body-tertiary rounded"
//             />
//             <button type="submit" className="uploadbutton-custom btn btn-outline-info fw-bolder ms-2 text-secondary" disabled={!image}>Upload</button>
//         </form>
//     )
// }