// SalesPage Component with Tailwind CSS Styling
import React, { useState, useEffect } from "react";

function SalesPage() {
  const [sales, setSales] = useState([]);
  const [newSale, setNewSale] = useState({
    customer_name: "",
    stock_amount: "",
    sku: "",
  });
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/sales/`)
      .then((res) => res.json())
      .then((data) => setSales(data))
      .catch((error) => console.error("Error fetching sales:", error));
  }, []);

  const handleChange = (e) => {
    setNewSale({
      ...newSale,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${baseUrl}/sales/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSale),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.errors.join(", "));
          });
        }
        return res.json();
      })
      .then((data) => {
        setSales([...sales, data]);
        setNewSale({ customer_name: "", stock_amount: "", sku: "" });
      })
      .catch((error) => console.error("Error recording sale:", error));
  };

  return (
    <div className="sales-page p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Sales Page</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md mb-8"
      >
        <div className="mb-4">
          <input
            type="text"
            name="customer_name"
            placeholder="Customer Name"
            value={newSale.customer_name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            name="stock_amount"
            placeholder="Stock Amount"
            value={newSale.stock_amount}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="sku"
            placeholder="Product SKU"
            value={newSale.sku}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
        >
          Record Sale
        </button>
      </form>

      <h3 className="text-2xl font-bold mb-4">Sales History</h3>
      <ul className="bg-white p-6 rounded shadow-md">
        {sales.map((sale) => (
          <li key={sale.id} className="mb-4 border-b pb-4 last:border-none">
            <p className="font-semibold">
              {sale.customer_name} bought {sale.stock_amount} units of SKU{" "}
              {sale.sku} on {new Date(sale.sale_date).toLocaleDateString()}.
            </p>
            <p className="text-sm text-gray-600">
              Delivery Status: {sale.delivery_status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SalesPage;
