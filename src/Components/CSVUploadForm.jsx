import React, { useState } from "react";

function CSVUploadForm() {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:5555/api/products/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Products updated successfully.");
        // Optionally refresh the product list
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Update Products via CSV</h2>
      <div className="mt-4">
        <input
          type="file"
          accept=".csv"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full text-sm text-gray-500"
          required
        />
        <button type="submit" className="btn mt-4">
          Upload CSV
        </button>
      </div>
    </form>
  );
}

export default CSVUploadForm;
