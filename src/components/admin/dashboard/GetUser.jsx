import axios from "axios";
import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import { Spin } from "antd";

export default function GetUser() {
  const [user, setUser] = useState(null); // Initialize user as null
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://20a76c55-2483-4303-a815-1239cadede20.mock.pstmn.io/GetUser"
        );
        setUser(response.data); // Set user to the received data
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false on error
      }
    };

    const debouncedFetchData = debounce(fetchData, 500);
    debouncedFetchData();

    return () => {
      debouncedFetchData.cancel();
    };
  }, []);

  return (
    <>
      <div>GetUser</div>
      <h2>User Data</h2>
      {loading ? ( // Render loading indicator if loading is true
        <Spin size="large" />
      ) : user ? ( // Render user data if user is available
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        // Render message if user is not available
        <p>No user data available</p>
      )}
    </>
  );
}
