import React, { useState } from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';

const login = () => {
    const [formdata, setFormdata] = useState({});
    const [submitStatus, setSubmitStatus] = useState(false);
    const router = useRouter();
    // const baseurl = process.env.BASE_URL;

    const loginFn = async () => {
        console.log('formdata', formdata, process.env.BASE_URL);
        const url =  'http://localhost:3000/' + 'api/users/login';
        try{
            const response = await axios.post(url, formdata);
            console.log(response.data);
            if(response.data.userid) {
                router.push('/products');
            }
        }
        catch{
            setSubmitStatus(true);
        }
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        let tempObj = {};
        tempObj[e.target.name] = e.target.value;
        setFormdata({...formdata, ...tempObj});
    }

  return (
    <div>

      {submitStatus && (
            <div class="alert alert-danger" role="alert">
                This is a danger alert—check it out!
                </div>
        )}
        Email: <input type="email" name="email" onChange={handleChange}/>
        <br></br>
        Password: <input type="password" name="password" onChange={handleChange}/>
        <br></br>
        <button onClick={loginFn}>Submit</button>

    </div>
  )
}

export default login