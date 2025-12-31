import React from 'react';
import Register from './Auth/Register';
import { useAuth } from './Auth/AuthContext';
import { useForm } from 'react-hook-form';

const AddProperty = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const propertyData = {
      ...data,
      userEmail: user?.email,
      userName: user?.displayName,
      createdAt: new Date(),
    };

    console.log("Property Data:", propertyData);

    // TODO: send propertyData to backend
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-100 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Add Property</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Property Name */}
        <div>
          <label className="label">Property Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("propertyName", { required: "Property name is required" })}
          />
          {errors.propertyName && (
            <p className="text-red-500 text-sm">{errors.propertyName.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="label">Description</label>
          <textarea
            className="textarea textarea-bordered w-full"
            rows={4}
            {...register("description", { required: "Description is required" })}
          />
        </div>

        {/* Category */}
        <div>
          <label className="label">Category</label>
          <select
            className="select select-bordered w-full"
            {...register("category", { required: true })}
          >
            <option value="">Select Category</option>
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="label">Price</label>
          <input
            type="number"
            className="input input-bordered w-full"
            {...register("price", {
              required: "Price is required",
              min: { value: 1, message: "Price must be positive" },
            })}
          />
        </div>

        {/* Location */}
        <div>
          <label className="label">Location</label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("location", { required: true })}
          />
        </div>

        {/* Image Link */}
        <div>
          <label className="label">Image Link</label>
          <input
            type="url"
            className="input input-bordered w-full"
            {...register("image", { required: "Image URL is required" })}
          />
        </div>

        {/* User Email (Read-only) */}
        <div>
          <label className="label">User Email</label>
          <input
            type="email"
            className="input input-bordered w-full bg-gray-100"
            value={user?.email || ""}
            readOnly
          />
        </div>

        {/* User Name (Read-only) */}
        <div>
          <label className="label">User Name</label>
          <input
            type="text"
            className="input input-bordered w-full bg-gray-100"
            value={user?.displayName || ""}
            readOnly
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
