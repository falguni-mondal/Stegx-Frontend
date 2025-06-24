import React, {useState, useEffect, useRef} from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios";
import imgIcon from "../../../assets/image.png"
import selectedImg from '../../../assets/image2.png'


const Steg = ({setLoad}) => {

    const { register, handleSubmit, setValue } = useForm();
    const actionRef = useRef("");
    const imgInputRef = useRef(null);
    const [img, setImg] = useState(null);
    const [data, setData] = useState(null);

    const handleUploadClick = () => {
        if (data) {
            const link = document.createElement("a");
            link.href = data.image;
            link.download = "encrypted.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        else {
            imgInputRef.current.click();
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const allowedTypes = ["image/png"];
            if (!allowedTypes.includes(file.type)) {
                alert("Only PNG files are allowed.");
                return;
            }
            setValue('image', e.target.files);
            setImg(file);
        }
    }

    const submitHandler = async (data) => {
        if (!img || data.text.trim() === "") {
            alert("Image is missing!");
            return;
        }
        setLoad(true);
        const formData = new FormData();

        formData.append('image', img);
        formData.append('text', data.text);
        formData.append('action', actionRef.current);

        const baseUrl = import.meta.env.VITE_BACKEND_API;

        try {
            const response = await axios.post(`${baseUrl}/stegx`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            if (response.data !== data) {
                setLoad(false);
            }
            setData(response.data);
        } catch (err) {
            alert('Upload Failed');
            setLoad(false);
        }
    }

    useEffect(() => {
        if (data) {
            const txt = document.getElementById("text-area");
            if (actionRef.current === "encrypt") {
                txt.value = `Key : ${data.text}`;
            }
            else txt.value = `Message : ${data.text}`;
        }
    }, [data]);


    return (
        <div className="service-container neue-txt lg:col-span-2">
            <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col items-center'>
                <div className="img-upload-bg whiteglow-hover duration-500 transition-all w-[200px] h-[200px] border-2 border-[#dedede] border-dashed rounded-3xl mt-8 text-[#dedede] mb-10 flex justify-center items-center relative">
                    <img src={img ? selectedImg : imgIcon} className='w-[90%] h-[90%] object-cover' alt="" />
                    <span className={`flex justify-center absolute rounded-full ${img ? "bg-[#0000003a] w-[8rem]" : "bg-[#ffffff31] w-[10rem]"} backdrop-blur-md left-[50%] bottom-[20px] -translate-x-[50%] py-2`}>{data ? "Download" : img ? "Selected" : "Select Image"}</span>

                    <div onClick={handleUploadClick} className="img-overlay w-full h-full absolute top-0 left-0 cursor-pointer"></div>

                    <input onChange={(e) => handleFileChange(e)} ref={imgInputRef} accept="image/*" className='img-input hidden' type="file" />

                </div>

                <textarea id='text-area' {...register('text', { required: true })} className='w-full bg-[#0000002c] backdrop-blur-lg border-b-2 border-zinc-500 outline-none p-3 resize-none rounded-[5px_5px_0px_0px] text-[#dedede]' rows={5} placeholder='Write your message🤫 / key🔑 here!' autoFocus required></textarea>

                <div className="actions mt-5 flex lg:block">
                    <button onClick={() => (actionRef.current = 'decrypt')} type='submit' className='py-2.5 w-[10rem] rounded-lg bg-[#b3b3b3] shadow-2xl shadow-[#8a8a8a] font-medium text-black mr-3'>Retrieve Message</button>
                    <button onClick={() => (actionRef.current = 'encrypt')} type='submit' className='py-2.5 w-[10rem] rounded-lg bg-[#7220ff] shadow-2xl shadow-[#491cb3] font-medium text-[#dedede]'>Hide Message</button>
                </div>
            </form>
        </div>
    )
}

export default Steg