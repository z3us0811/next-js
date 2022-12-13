import React, { useState } from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';

const registration = () => {

    // const initilObj = {
    //     name: '',
    //     email: '',
    //     mobile: '',
    //     password: ''
    // }
    const [formdata, setFormdata] = useState({});
    const [submitStatus, setSubmitStatus] = useState(false);
    const router = useRouter();
    // const baseurl = process.env.BASE_URL;

    const registerFn = async () => {
        console.log('formdata', formdata, process.env.BASE_URL);
        const url =  'http://localhost:3000/' + 'api/users/register'
        const response = await axios.post(url, formdata);
        console.log(response.data);
        if(response.status === 201) {
            setSubmitStatus(true);
            //setFormdata(initilObj);
            router.push('/login');
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
            <div class="alert alert-success" role="alert">
                Form submitted.
            </div>
        )}
        {/* <form action="api/login">
            input elements
            <button type='submit'></button>
        </form> */}
        Name: <input type="text" name="name" onChange={handleChange}/>
        <br></br>
        Email: <input type="email" name="email" onChange={handleChange}/>
        <br></br>
        Mobile: <input type="text" name="mobile" onChange={handleChange}/>
        <br></br>
        Password: <input type="password" name="password" onChange={handleChange}/>
        <br></br>
        <button onClick={registerFn}>Submit</button>


    </div>
  )
}

export default registration