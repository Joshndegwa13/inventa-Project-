// Frontend - React code for Subscription Payment Page
import React, { useState } from "react";

function PaymentPage() {
  const [formData, setFormData] = useState({
    email: "",
    plan: "",
    annualPlan: false,
  });
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${baseUrl}/subscription`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(`Error: ${data.error}`);
        } else {
          alert("Subscription successfully created.");
        }
      })
      .catch((error) => console.error("Error creating subscription:", error));
  };

  const renderPrice = (plan) => {
    if (plan === "ANNUAL_PLAN_ID") {
      return formData.annualPlan ? "$480 (Annual)" : "$50 (Monthly)";
    } else if (plan === "ADVANCED_PLAN_ID") {
      return formData.annualPlan ? "$960 (Annual)" : "$100 (Monthly)";
    }
  };

  return (
    <div className="payment-page p-8">
      <h2 className="text-3xl font-bold mb-6">Subscription Payment</h2>
      <div className="toggle-annual-plan mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="annualPlan"
            checked={formData.annualPlan}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-lg">Toggle Annual Plan</span>
        </label>
      </div>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <div className="plan-cards grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="plan-card border border-gray-300 p-4 rounded shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">Basic Plan</h3>
            <p className="mb-4">Price: {renderPrice("ANNUAL_PLAN_ID")}</p>
            <button
              type="submit"
              onClick={() =>
                setFormData({ ...formData, plan: "MONTHLY_PLAN_ID" })
              }
              className="btn bg-blue-500 text-white py-2 px-4 rounded"
            >
              Select Plan
            </button>
          </div>
          <div className="plan-card border border-gray-300 p-4 rounded shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">Advanced Plan</h3>
            <p className="mb-4">Price: {renderPrice("ADVANCED_PLAN_ID")}</p>
            <button
              type="submit"
              onClick={() =>
                setFormData({ ...formData, plan: "ADVANCED_PLAN_ID" })
              }
              className="btn bg-blue-500 text-white py-2 px-4 rounded"
            >
              Select Plan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentPage;
