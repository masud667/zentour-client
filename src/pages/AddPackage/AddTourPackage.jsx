import React, { use } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const AddTourPackage = () => {
  const { register, handleSubmit, reset } = useForm();

  const { user } = use(AuthContext);
 
  const onSubmit = async (formDataObj) => {
    try {
      // Create FormData object for form entries
      const formData = new FormData();
      for (let key in formDataObj) {
        formData.append(key, formDataObj[key]);
      }

      // Add guide info from Firebase Auth
      formData.append("guideName", user?.displayName || "N/A");
      formData.append("guideEmail", user?.email || "N/A");
      formData.append("guidePhoto", user?.photoURL || "");

      // Convert formData to a plain object before sending to backend
      const plainData = {};
      formData.forEach((value, key) => {
        plainData[key] = value;
      });

      // Send to backend using Axios
      const res = await axios.post(
        "http://localhost:3000/Packages",
        plainData
      );

      if (res.data.insertedId || res.data.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Package added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Add Tour Package</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          {...register("tourName")}
          placeholder="Tour Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          {...register("image")}
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          {...register("duration")}
          placeholder="Duration (e.g., 3 Days 2 Nights)"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          {...register("departureLocation")}
          placeholder="Departure Location"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          {...register("destination")}
          placeholder="Destination"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          {...register("price")}
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />
        <input
          type="date"
          {...register("departureDate")}
          className="input input-bordered w-full"
          required
        />
        <textarea
          {...register("packageDetails")}
          placeholder="Package Details"
          className="textarea textarea-bordered w-full"
          required
        />
        <input
          type="text"
          {...register("contactNo")}
          placeholder="Contact No."
          className="input input-bordered w-full"
          required
        />

        {/* Guide info inputs (auto-filled, disabled) */}
        <input
          type="text"
          value={user?.displayName || "N/A"}
          className="input input-bordered w-full bg-gray-100"
          disabled
        />

        <input
          type="email"
          value={user?.email || "N/A"}
          className="input input-bordered w-full bg-gray-100"
          disabled
        />

        {user?.photoURL && (
          <div className="flex items-center gap-4 mt-2">
            <img
              src={user.photoURL}
              alt="Guide"
              className="w-16 h-16 rounded-full border"
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary w-full">
          Add Package
        </button>
      </form>
    </div>
  );
};

export default AddTourPackage;
