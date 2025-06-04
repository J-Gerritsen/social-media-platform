import supabase from "../lib/supabase-config";

const uploadFile = async (file) => {
  const { data, error } = await supabase
    .storage
    .from('learning-storage') 
    .upload(file.name, file)

  if (error) {
    console.error('Error uploading file:', JSON.stringify(error, null, 2));

  } else {
    console.log('File uploaded successfully:', data)
  }
}

export { uploadFile };