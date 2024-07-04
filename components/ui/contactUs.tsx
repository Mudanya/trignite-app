"use client";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function ContactUs() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required."),
    email: Yup.string().required("Email is required."),
    phoneNumber: Yup.string().required("Phone number is required."),
    subject: Yup.string().required("Subject is required."),
    message: Yup.string().required("Message is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async () => {
    const response = await fetch("");
  };

  return (
    <>
      <div id="contactus" className="mt-8 mb-6 ml-3 mr-3 p-2 flex  justify-center items-center h-64 font-bold text-5xl rounded-md ">
        Contact Us
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8 mb-10 px-8 lg:px-24">
        <div className="text-black bg-white font-bold py-4 md:py-14 lg:m-4 border-2 rounded-2xl flex flex-col justify-center items-center border-gray-200 px-2 hover:shadow-[0_5px_5px_rgba(0,0,0,0.2)]">
          <span className="text-2xl mb-2">
            <FaMapMarkerAlt />
          </span>
          <div className="text-2xl">Location</div>
          <span className="flex justify-center font-normal">
            12345 Fedha, Nairobi - Kenya
          </span>
        </div>
        <div className="text-black bg-white font-bold py-4 md:py-14 lg:m-4 border-2 rounded-2xl flex flex-col justify-center items-center border-gray-200 px-2 hover:shadow-[0_5px_5px_rgba(0,0,0,0.2)]">
          <span className="text-2xl mb-2">
            <FaPhoneAlt />
          </span>
          <div className="text-2xl">Contact Us</div>
          <span className="flex justify-center font-normal">0701000000</span>
        </div>
        <div className="text-black bg-white font-bold py-4 md:py-14 lg:m-4 border-2 rounded-2xl flex flex-col justify-center items-center border-gray-200 px-2 hover:shadow-[0_5px_5px_rgba(0,0,0,0.2)]">
          <span className="text-2xl mb-2">
            <FaEnvelope />
          </span>
          <div className="text-2xl">Email Us</div>
          <span className="flex justify-center font-normal">test@test.com</span>
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-8 lg:px-24">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-5 mt-4 border-0 border-gray-100 rounded-2xl"
        >
          <div className="w-full flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-1/2 ">
              <input
                {...register("name")}
                className="w-full bg-transparent py-3 pl-3 sm:text-sm sm:leading-6 bg-white rounded-md ring-1 ring-gray-300 focus:ring-gray-500"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>
            <div className="w-full md:w-1/2">
              <input
                {...register("email")}
                className="w-full border-0 bg-transparent py-3 pl-3 sm:text-sm sm:leading-6 bg-white rounded-md ring-1 ring-gray-300 focus:ring-gray-500"
                type="text"
                id="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 mt-5">
            <div className="w-full md:w-1/2">
              <input
                {...register("phoneNumber")}
                className="w-full border-0 bg-transparent py-3 pl-3 sm:text-sm sm:leading-6 bg-white rounded-md ring-1 ring-gray-300 focus:ring-gray-500"
                type="text"
                id="phoneNumber"
                placeholder="Enter your number"
              />
              {errors.phoneNumber && (
                <p className="text-red-600">{errors.phoneNumber.message}</p>
              )}
            </div>
            <div className="w-full md:w-1/2">
              <input
                {...register("subject")}
                className="w-full border-0 bg-transparent py-3 pl-3 sm:text-sm sm:leading-6 bg-white rounded-md ring-1 ring-gray-300 focus:ring-gray-500"
                type="text"
                id="subject"
                placeholder="Subject"
              />
              {errors.subject && (
                <p className="text-red-600">{errors.subject.message}</p>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 mt-5 h-36">
            <textarea
              {...register("message")}
              className="w-full bg-transparent py-3 pl-3 sm:text-sm sm:leading-6 bg-white rounded-md ring-1 ring-gray-300 focus:ring-gray-500"
              type="text"
              id="message"
              placeholder="Enter your message"
            ></textarea>
            {errors.message && (
              <p className="text-red-600">{errors.message.message}</p>
            )}
          </div>
          <div className="w-full mt-5 flex justify-center">
            <button className="w-full sm:w-auto md:w-1/3  px-4 py-3 text-white font-semibold bg-[#1048a0]/[0.7] rounded-md ">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
