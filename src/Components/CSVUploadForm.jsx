import React, { useState } from "react";
import SideBar from "./SideBar";
import { useAlerts } from "../context/AlertContext";

function CSVUploadForm() {
  const [file, setFile] = useState(null);
  const { addAlert } = useAlerts(); // To display alerts after successful or failed uploads
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5555";

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      addAlert("Please select a CSV file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${apiUrl}/api/products/upload-csv`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to upload CSV file.");
      }

      addAlert("CSV file successfully processed and products added.");
      setFile(null); // Clear the file input after successful upload
    } catch (error) {
      console.error("Error uploading CSV:", error);
      addAlert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="csv-upload-page p-8 flex flex-row ml-60">
      <SideBar />
      <div className="pl-80">
        {/* <h2 className="text-3xl font-bold mb-6 text-center">
          Upload Product CSV
        </h2> */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md mb-8"
          encType="multipart/form-data"
        >
          <div className="mb-4">
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              required
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
          >
            Upload CSV
          </button>
        </form>
      </div>
    </div>
  );
}

export default CSVUploadForm;
