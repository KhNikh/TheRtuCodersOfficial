import React,{useState} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./FooterStyles.css"
import MailIcon from '@material-ui/icons/Mail';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
const Footer = () => {
  const [data,setData] = useState({
    name:"",
    email:"",
    message:"",
  })

  const {name,email,message}=data

  const handleChange = e => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('https://v1.nocodeapi.com/bhupat2000/google_sheets/UcSbiPeEGhbCFKRS?tabId=Sheet1',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify([[name,email,message,new Date().toLocaleDateString()]])
      })
      await response.json();
      setData({...data, name:"",email:"",message:""});
    }catch(err){
      console.log(err);
    }
  }
  return (
    <TableContainer component={Paper} style = {{width:'100vw',bottom: 0}}>
      <Table  aria-label="simple table">
        
        <TableBody  style={{backgroundColor:"black"}}>
            <TableRow>
              <TableCell style={{color:"white"}} align="center">
                <h2><b>Social</b></h2>
                
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook style={{color:"white", paddingRight:"10px"}} size={36} />
                </a>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram style={{color:"white", paddingRight:"10px"}} size={36} />
                </a>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube style={{color:"white", paddingRight:"10px"}} size={36} />
                </a>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin style={{color:"white", paddingRight:"10px"}} size={36} />
                </a>
              </TableCell>
              <TableCell style={{color:"white"}} align="center">
                <h3><b>About Us</b></h3>
                
                <p> bhupatjangid@gmail.com(+91 9672338519)</p>
                <p> nipun@gmail.com(+91 9672338519)</p>
                <p style={{textAlign: "center",paddingTop: "24px",opacity: "0.3",fontSize: "13px",marginBottom: 0}}>© Copyright 2021 The RTU Coders</p>
                
              </TableCell>
              <TableCell style={{color:"white"}} align="center">
              <form className="w-full flex flex-wrap mx-0 md:px-10 md:w-1/3 text-center flex-col justify-start items-center" onSubmit={handleSubmit}>
              <h3 className="uppercase text-xl mb-4 font-bold">Contact Us</h3>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={handleChange}
                />
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleChange}
                />
                <br />
                
                <input
                  
                  type="text"
                  name="message"
                  placeholder="Message"
                  value={message}
                  onChange={handleChange}
                />
              </div>

              <button>
                Send
              </button>
            </form>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Footer;


