export const FileUpload = async (file) => {

  const urlCloudinary = "https://api.cloudinary.com/v1_1/dz8on44po/upload"

  const  formData = new FormData()
  // donde la voy a conectar o enviar
  formData.append("upload_preset", "blockMaster")
  //lo que quiero enviar o subir
  formData.append("file", file)

  const response = await fetch(urlCloudinary, {
    method: 'POST',
    body: formData
  })

  const data = await response.json()

  return data.secure_url
}