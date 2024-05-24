import uploadFile from "./cloudinary";


const HandleFile = async (file) => {
    try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const res = await uploadFile(buffer);

        return res;
    } catch (error) {
        console.log(error.message)
    }
}

export default HandleFile