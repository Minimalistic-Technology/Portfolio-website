"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  details: string;
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post("http://localhost:5000/api/contact", data);
      console.log("Server Response:", response.data);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-400">Contact Me</h2>
        <p className="text-gray-400 mt-2">
          Cultivating Connections: Reach Out And Connect With Me
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <input
            {...register("name", { required: "Please fill name" })}
            placeholder="Name"
            disabled={isSubmitting}
            className="bg-[#1e1e1e] p-4 rounded-md text-white w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <input
            {...register("email", {
              required: "Please fill email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            disabled={isSubmitting}
            className="bg-[#1e1e1e] p-4 rounded-md text-white w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <input
            {...register("phone", { required: "Please fill phone number" })}
            placeholder="Phone Number"
            disabled={isSubmitting}
            className="bg-[#1e1e1e] p-4 rounded-md text-white w-full"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Service */}
        <div className="flex flex-col gap-2">
          <select
            {...register("service", { required: "Please select a service" })}
            disabled={isSubmitting}
            className="bg-[#1e1e1e] p-4 rounded-md text-white w-full"
          >
            <option value="">Service Of Interest</option>
            <option value="web">Web Design</option>
            <option value="mobile">Mobile App</option>
            <option value="branding">Branding</option>
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm">{errors.service.message}</p>
          )}
        </div>

        {/* Project Details */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <textarea
            {...register("details", { required: "Please add project details" })}
            placeholder="Project Details..."
            rows={4}
            disabled={isSubmitting}
            className="bg-[#1e1e1e] p-4 rounded-md text-white w-full"
          />
          {errors.details && (
            <p className="text-red-500 text-sm">{errors.details.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-end mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
              isSubmitting
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 text-black"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Send"}
          </button>
        </div>
      </form>
    </section>
  );
}
