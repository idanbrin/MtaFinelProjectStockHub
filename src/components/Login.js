import React, { useState } from 'react'
import "./css/Login.css"

export const Login = () => {

    const [userName,setUserName]=useState('');
    const [userPassword,setuserPassword]=useState('');

    function GetUserFromDataBase(){
        console.log(userName);
        console.log(userPassword);
    }

  return (
    <div className='container-login-page'>

        <div className='login-animation'>

            <img src="https://th.bing.com/th/id/OIP.TKaUFxDz8t2louvtN75DTgHaE7?rs=1&pid=ImgDetMain" alt="login page"/>

        </div>

        <div className='login-form-container'>
            
            <div className='login-form'>

                <image>LOGO</image>
                <div className='login-form-input'>
                <input type='text' placeholder='username or email' onChange={(e)=>setUserName(e.target.value)}></input>
                </div>
                <div className='login-form-input'>
                <input type='text' placeholder='Password' onChange={(e)=>setuserPassword(e.target.value)}></input>
                </div>

                <div className='Login-btn' onClick={()=>GetUserFromDataBase()}><button>Log-in</button></div>
                <div className='forgot-btn'><button>forgot-password?</button></div>
                

                <div className='Sign-up'>
                    <div className='Sign-up-text'>Don't have an account? </div>
                    <button className='Sign-up-button'>Sign up</button>
                </div>

            </div>

        </div>

    </div>
  )
}
