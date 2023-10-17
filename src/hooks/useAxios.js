import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const useAxios = () => {
  const { navigate } = useNavigate();
  const location = useLocation();
  const token = useSelector((state) => state.auth.user?.token);

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    navigate("/signin", { state: { from: location }, replace: true });
    return;
  }

  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState({});

  const fetchData = async (url, identifier = 0) => {
    setLoading(identifier, true);
    try {
      const response = await axios.get(url);
      setData(identifier, response.data);
    } catch (error) {
      setError(identifier, error);
    } finally {
      setLoading(identifier, false);
    }
  };

  const postData = async (url, payload, identifier = 0) => {
    setLoading(identifier, true);
    try {
      const response = await axios.post(url, payload);
      setData(identifier, response.data);
    } catch (error) {
      setError(identifier, error);
    } finally {
      setLoading(identifier, false);
    }
  };

  const postFormData = async (url, payload, identifier = 0) => {
    setLoading(identifier, true);
    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setData(identifier, response.data);
    } catch (error) {
      setError(identifier, error);
    } finally {
      setLoading(identifier, false);
    }
  };

  const deleteData = async (url, identifier = 0) => {
    setLoading(identifier, true);
    try {
      const response = await axios.delete(url);
      setData(identifier, response.data);
    } catch (error) {
      setError(identifier, error);
    } finally {
      setLoading(identifier, false);
    }
  };

  const putData = async (url, payload, identifier = 0) => {
    setLoading(identifier, true);
    try {
      const response = await axios.put(url, payload);
      setData(identifier, response.data);
    } catch (error) {
      setError(identifier, error);
    } finally {
      setLoading(identifier, false);
    }
  };

  return {
    data,
    error,
    loading,
    fetchData,
    postData,
    postFormData,
    deleteData,
    putData,
  };
};

export default useAxios;
