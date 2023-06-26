/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import './New.scss'
import { useState } from 'react';


const New = ({inputs,title}) => {
  const [file,setFile]=useState("")
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
      <Navbar/>
      <div className="top">
        <h1>
          {title}
        </h1>
      </div>
      <div className="bottom">
        <div className="left">
        <img src={file ? URL.createObjectURL(file) :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
        </div>
        <div className="right">
         <form >
          <div className="formInput">
            <label htmlFor='file'>
            Image:<DriveFolderUploadOutlinedIcon className='icon'/>
            </label>
            <input style={{display:"none"}} type='file' id='file' onChange={(e)=>setFile(e.target.files[0])} />
          </div>
        {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
           ))}
          <button type='submit'>Send</button>
         </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default New