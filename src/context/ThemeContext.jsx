import React, { createContext, useState } from 'react'
const themProvider= createContext()
const ThemeContext = () => {
    const[theme,setTheme]= useState('light')
    const toggleTheme=()=>{
        setTheme((prvs)=>(prvs==='light'?'light':'dark'))
    }
  return (
    <div>
      
    </div>
  )
}

export default ThemeContext

// sendEmail(formData); // Pass formData to sendEmail function
// setFormData({
//   name: '',
//   email: '',
//   message: ''
// })
// alert("Message Sent Successfully")
// };
// // EmailJS code

// const sendEmail = async (formData) => {
// const templateParams = {
//   from_name: formData.name,
//   from_email: formData.email,
//   message: formData.message
// };

// try {
//   const response = await emailjs.send(
//     "service_lkd103l", // EmailJS service ID
//     "template_76ystg8", // EmailJS template ID
//     templateParams,
//     "mxULau1NOUGo0S1xx" // EmailJS user ID
//   );
//   console.log('SUCCESS!', response.status, response.text, response);
// } catch (error) {
//   console.error('FAILED...', error);
// }
// };