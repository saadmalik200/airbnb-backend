import { useContext, useEffect, useState } from "react";
import HeaderHost from "../becomehost/HostHeader";
import axios from "axios";
import { Context } from "../../context/Context";
import { MdDeleteForever } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
function Wishlist() {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "/users/wishlist/list/" + state.user._id
      );
      console.log("🚀 ~ getData ~ response", response);

      if (response.data.success) setWishlist([...response.data.houses]);
    }

    getData();
  }, []);

  const handleDelete = async (id) => {
    if (!state.user._id)
      return alert("You must be logged in to use the wishlist feature");

    const response = await axios.post("/users/wishlist/delete", {
      user: state.user._id,
      house: id,
    });
    console.log("🚀 ~ handleWishlist ~ response", response);

    if (response.data.success) {
      dispatch({
        type: "deleteFromWishlist",
        payload: response.data.wishlist,
      });

      const oldData = wishlist.filter((item) => item._id !== id);

      setWishlist([...oldData]);
    }
  };

  return (
    <div>
      <HeaderHost />
      <div className="flex items-center  justify-between w-full mt-[50px] bg-slate-50 flex-col gap-[20px]">
        <div className="w-[600px]  p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Wishlist
            </h5>
          </div>
          <div className="flow-root w-[550px]">
            <ul className=" divide-y divide-gray-200 dark:divide-gray-700">
              {wishlist.length ? (
                wishlist?.map((item, idx) => (
                  <li key={item._id} className="py-3">
                    <div className="w-full flex items-center justify-between  px-0 gap-1">
                      <div className="w-[100px] flex-shrink-0">
                        <img
                          className="w-[100px] h-[100px] rounded-md"
                          src={`${item.img1}`}
                          alt="img"
                        />
                      </div>
                      <div className="w-[350px]">
                        <p className="text-[16px] font-medium text-gray-900 truncate dark:text-white">
                          {item.housetitle} <span></span>
                        </p>
                        <p
                          className="text-[16px] 
                         text-gray-900 truncate dark:text-white"
                        >
                          {item.city},{item.country}
                        </p>
                        <p
                          className=" flex items-center gap-2 text-[16px] 
                         text-gray-900 truncate dark:text-white"
                        >
                          {item.superhost && (
                            <SlBadge className="fill-red-500" />
                          )}
                          {item.firstname}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-gray-900 dark:text-white text-[2rem]">
                        <p className="text-[16px] font-semibold m-5">
                          € {item.price}
                        </p>
                        <MdDeleteForever
                          className="text-red-600 hover:cursor-pointer "
                          onClick={() => handleDelete(item._id)}
                        />
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <p className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  Your wishlist is empty
                </p>
              )}
            </ul>
          </div>
        </div>
        <div>
          {" "}
          <button
            onClick={() => navigate("/home")}
            className="bg-black px-[19px]  py-[14px] w-[137.74px] z-40 rounded-full text-white h-[49.92px]"
            type="submit"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
