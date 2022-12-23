import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const getStaticProps = () => {
  let url = process.env.BASE_URL;
  return {
    props: {
      baseurl: url,
    },
  };
};

const Login = (props) => {
  const [formdata, setFormdata] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);
  const router = useRouter();
  const { baseurl } = props;
  console.log("baseurl", baseurl);
  // const baseurl = process.env.BASE_URL;

  const loginFn = async () => {
    console.log("formdata", formdata, process.env.BASE_URL);
    const url = baseurl + "api/users/login";
    try {
      const response = await axios.post(url, formdata);
      console.log(response.data);
      if (response.data.userid) {
        localStorage.removeItem('loginStatus',true);
        localStorage.removeItem('name',response.data.name);
        localStorage.removeItem('username',response.data.email);
        router.push("/products");
      }
    } catch {
      setSubmitStatus(true);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    let tempObj = {};
    tempObj[e.target.name] = e.target.value;
    setFormdata({ ...formdata, ...tempObj });
  };

  return (
    <div>
      {submitStatus && (
        <div class="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div>
      )}
      Email: <input type="email" name="email" onChange={handleChange} />
      <br></br>
      Password:{" "}
      <input type="password" name="password" onChange={handleChange} />
      <br></br>
      <button onClick={loginFn}>Submit</button>
    </div>
  );
};

export default Login;
