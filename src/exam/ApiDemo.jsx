import React, { useEffect, useState } from "react";
import axios from "axios";

function ApiDemo() {

  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get("https://dummy-json.mock.beeceptor.com/posts")
      .then((res) => {
        setData(res.data);
      });

  }, []);

  return (

    <div style={{ textAlign: "center", marginTop: "20px" }}>

      <h2>API Data</h2>

      <table border="1" cellPadding="10" cellSpacing="0" style={{ margin: "auto" }}>

        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>

          {data.map((user) => (

            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.body}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default ApiDemo;