import { Button } from "@heroui/react";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaWhatsapp, FaLine } from "react-icons/fa";

export const ContactFooter = (props: {
  title: string;
  description: string;
  className?: string;
}) => {
  const { title, description, className } = props;
  return (
    <section className={`py-16 bg-blue-600 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 text-blue-100">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="text-2xl mb-2 w-full flex justify-center">
              <FaEnvelope className="text-3xl" />
            </div>
            <p className="font-semibold">Email</p>
            <p className="text-blue-100">kam.phuket@gmail.com</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2 w-full flex justify-center">
              <FaPhone className="text-3xl" />
            </div>
            <p className="font-semibold">Mobile</p>
            <p className="text-blue-100">+66 81 537 2657</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2 w-full flex justify-center">
              <FaWhatsapp className="text-3xl" />
            </div>
            <p className="font-semibold">WhatsApp</p>
            <p className="text-blue-100">+66 81 537 2657</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2 w-full flex justify-center">
              <FaLine className="text-3xl" />
            </div>
            <p className="font-semibold">Line ID</p>
            <p className="text-blue-100">kampanart-travel</p>
          </div>
        </div>

        <Button
          as={Link}
          href="/contact"
          size="lg"
          color="warning"
          variant="solid"
          className="font-semibold">
          Contact Us Now
        </Button>
      </div>
    </section>
  );
};
