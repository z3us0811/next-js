import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const getStaticProps = () => {
  let url = process.env.BASE_URL;
  return {
    props: {
      baseurl: url
    }
  }
}

const Registration = (props) => {
  // const initilObj = {
  //     name: '',
  //     email: '',
  //     mobile: '',
  //     password: ''
  // }
  const [formdata, setFormdata] = useState({});
  const [errorformdata, setErrorFormdata] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);
  const router = useRouter();
  const { baseurl } = props;
  console.log('baseurl', baseurl);
  // const baseurl = process.env.BASE_URL;

  const registerFn = async () => {
    const validationStatus = validate();
    if (validationStatus) {
      console.log("formdata", formdata, process.env.BASE_URL);
      const url = baseurl + "api/users/register";
      try{
        const response = await axios.post(url, formdata);
        console.log(response.data);
        if (response.status === 201) {
            setSubmitStatus(true);
            //setFormdata(initilObj);
            router.push("/login");
        }
      }
      catch{

      }
    }
  };

  const validate = () => {
    if(formdata.mobile){
        if (formdata.mobile.length > 5) {
            return true;
          } else {
            let tempObj = {}
            tempObj['mobile'] = 'Mobile Length not sufficent';
            setErrorFormdata({...errorformdata, ...tempObj});
            return false;
          }
    }
    else{
        let tempObj = {}
        tempObj['mobile'] = 'Mobile can not be empty';
        setErrorFormdata({...errorformdata, ...tempObj});
        return false;
    }
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    let tempObj = {};
    tempObj[e.target.name] = e.target.value;
    setFormdata({ ...formdata, ...tempObj });
  };

  useEffect(() => {
    console.log('errors', errorformdata);
  })

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
      Name: <input type="text" name="name" onChange={handleChange} />
      <span className="text-danger">{errorformdata.name}</span>
      <br></br>
      Email: <input type="email" name="email" onChange={handleChange} />
      <span className="text-danger">{errorformdata.email}</span>
      <br></br>
      Mobile: <input type="text" name="mobile" onChange={handleChange} />
      <span className="text-danger">{errorformdata.mobile}</span>
      <br></br>
      Password:{" "}
      <input type="password" name="password" onChange={handleChange} />
      <span className="text-danger">{errorformdata.password}</span>
      <br></br>
      <button onClick={registerFn}>Submit</button>
    </div>
  );
};

export default Registration;
