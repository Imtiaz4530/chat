import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../../api/axiosInstance";
import { AuthContext } from "../../context/AuthContext";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);

  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);

      try {
        const res = await axiosInstance.get(`/api/users`, {
          headers: { token },
        });

        if (res.status === 200) {
          setConversation(res?.data);
        } else {
          throw new Error("Please login again.");
        }
      } catch (e) {
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);
  console.log("conversation ----> ", conversation);

  return {
    loading,
    conversation,
  };
};

export default useGetConversation;
