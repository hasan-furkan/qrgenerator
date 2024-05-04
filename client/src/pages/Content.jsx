import { useState } from "react";
import { postQr } from "../../services/qr";
import { errorToast, successToast } from "../../components/toastify";

export const Content = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postQr(url);
    if (response) {
      successToast("QR Code generated successfully");
    } else {
      errorToast("Failed to generate QR Code");
    }
  };

  return (
    <form className="max-w-xl mx-auto">
      <div className="mb-5 flex items-center gap-6 mt-2">
        <label
          for="large-input"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Url
        </label>
        <input
          type="text"
          id="large-input"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full px-4 py-2 text-base font-medium text-white bg-blue-500 border border-transparent rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};
