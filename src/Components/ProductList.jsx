import { useEffect, useState } from "react";
import EditProductForm from "./EditProductForm";
import SideBar from './SideBar';

function ProductList({ products, setProducts }) {
  const [editingProduct, setEditingProduct] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/products/`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, [setProducts]);

  const handleDelete = (sku) => {
    fetch(`${apiUrl}/api/products/${sku}`, {
      method: "DELETE",
    })
      .then(() => {
        setProducts(products.filter((product) => product.sku !== sku));
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleUpdate = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.sku === updatedProduct.sku ? updatedProduct : product
      )
    );
    setEditingProduct(null);
  };

  return (
    <div className=" px-4 mb-6 flex flex-row lg:h-screen ml-60">
        <SideBar />
      {/* <h2 className="text-2xl font-bold">Product List</h2> */}

      <table className="min-w-full mt-4 table-auto border-separate border-spacing-y-2">
        <thead>
          <tr className="text-left bg-blue-600 text-white rounded-md ">
            <th className="py-2 px-4">SKU</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Stock Amount</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Cost</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.sku} className="bg-white shadow-sm rounded-md">
              <td className="py-2 px-4 border-b">{product.sku}</td>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.description}</td>
              <td className="py-2 px-4 border-b">{product.stock_amount}</td>
              <td className="py-2 px-4 border-b">{product.price}</td>
              <td className="py-2 px-4 border-b">{product.cost}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleEdit(product)}
                  className="text-blue-600 hover:text-blue-800 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.sku)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
