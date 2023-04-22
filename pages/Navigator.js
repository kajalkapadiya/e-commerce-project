import { useState } from "react";

const Navigator = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phnNum: "",
  });

  let name, value;
  const dataHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, email, phnNum } = data;
    if (name && email && phnNum) {
      const response = await fetch(
        "https://react-http-fd1b8-default-rtdb.firebaseio.com/data.json",
        {
          method: "POST",
          body: JSON.stringify({ name, email, phnNum }),
          headers: { "content-type": "application/json" },
        }
      );

      if (response) {
        console.log(response);
        setData({
          name: "",
          email: "",
          phnNum: "",
        });
      } else {
        alert("fill");
      }
    } else {
      alert("fill the data");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={dataHandler}
        />
        <label>email id:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={dataHandler}
        />
        <label>phone number:</label>
        <input
          type="number"
          name="phnNum"
          value={data.phnNum}
          onChange={dataHandler}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Navigator;
