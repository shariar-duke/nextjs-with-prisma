"use client";
import { useState } from "react";
import { createPin } from "../actions"; // Ensure this imports from the correct file path

export default function AddPin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");

  // Handle form submission by invoking the server action
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("type", type);
    formData.append("content", content);

    try {
      // Call the server-side action directly
      const pin = await createPin(formData);

      // Handle successful creation
      console.log("Pin created successfully:", pin);

      // Optionally reset form fields
      setTitle("");
      setDescription("");
      setType("");
      setContent("");
    } catch (error) {
      console.error("Error creating pin:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">
        Add a New Pin
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter the title"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter the description"
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-gray-700">
            Type
          </label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter the type"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter the content"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-md mt-4 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
