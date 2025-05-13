import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [products, setProducts] = useState([]);

  const createProduct = () => {
    if (!productName.trim() || !productPrice.trim() || !productUrl.trim()) {
      toast.error("🦄 Error!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else {
      const newProduct = {
        id: Date.now(),
        img: productUrl,
        name: productName,
        price: productPrice,
      };

      const result = [...products, newProduct];
      localStorage.setItem("product", JSON.stringify(result));
      setProducts(result);

      setProductName("");
      setProductPrice("");
      setProductUrl("");
      sacMesage()
    }
  };
  const deleteProduct = (id) => {
    let del = products.filter((el) => el.id !== id);
    setProducts(del);
    localStorage.setItem("product", JSON.stringify(del));
  };
  const sacMesage = () => {
    toast.success("🦄 Успешно!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }; 

  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    setProducts(res);
  }, []);

  return (
    <div id="hero">
      <div className="container">
        <div className="flex items-center justify-center flex-col mt-[40px] ">
          <div className="w-[600px] flex items-center justify-center flex-col mt-[40px] gap-[30px]">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="product_name"
                className="block py-2.5 px-0 w-full  text-black text-sm   bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <label
                htmlFor="product_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Product Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                id="product_price"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
              <label
                htmlFor="product_price"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Product Price
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="product_url"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
              />
              <label
                htmlFor="product_url"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Product Url
              </label>
            </div>

            <button
              onClick={createProduct}
              type="button"
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((el) => (
                <tr
                  key={el.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="p-4">
                    <img
                      src={el.img}
                      alt={el.name}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {el.name}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${el.price}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      onClick={() => deleteProduct(el.id)}
                    >
                      Remove
                    </a>
                  </td>
                </tr>
                
              ))}
            </tbody>
          </table>
          <ToastContainer />
        </div>
      </div>
    </div>

  );
};


export default Home;
