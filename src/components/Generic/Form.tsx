import React from "react";
import { Text } from "./Text";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./Button";
import { send } from "@emailjs/browser";

export const Form = () => {
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries()); // Convert FormData to a plain object
    const apiKey = process.env["REACT_APP_API_KEY"] as string;
    const templateId = process.env["REACT_APP_TEMPLATE_ID"] as string;
    const serviceId = process.env["REACT_APP_SERVICE_ID"] as string;
    const template = {
      from_name: values.name,
      from_email: values.email,
      to_name: "Nico",
      message: values.message,
    };
    try {
      await send(serviceId, templateId, template, apiKey);
      toast.success("Email sent successfully!");
    } catch (e) {
      toast.error("Something went wrong with sending the email");
    }
  };
  const fields = [
    {
      placeholder: "Full Name",
      type: "text",
      id: "name",
    },
    {
      placeholder: "Email Address",
      type: "email",
      id: "email",
    },
  ];
  const Input = ({
    placeholder,
    type,
    id,
  }: Record<"id" | "placeholder" | "type", string>) => {
    return (
      <>
        <input
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
        />
      </>
    );
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 space-y-4 text-left"
      >
        <Text
          text={"Send me an email! \uD83E\uDD20"}
          className="text-2xl sm:text-3xl md:text-4xl font-medium"
        />
        {fields.map((field) => (
          <Input {...field} />
        ))}
        <textarea
          id="message"
          name="message"
          rows={8}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Write your message..."
          required
        ></textarea>
        <Button
          key={"submitButton"}
          isActive={false}
          label={"Send!"}
          type={"submit"}
        />
      </form>
    </div>
  );
};
