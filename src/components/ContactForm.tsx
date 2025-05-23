import React from "react";
import type { ContactInfo } from "../types/contact";

interface ContactFormProps {
  data: ContactInfo;
}

const ContactForm: React.FC<ContactFormProps> = ({ data }) => {
  return (
    <section className="h-screen relative z-10 overflow-hidden bg-white py-20  lg:py-[120px] px-4">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          {/* Left Side - Info */}
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="mb-4 block text-base font-semibold text-primary">
                {data.brieftitle}
              </span>
              <h2 className="mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                {data.title}
              </h2>
              <p className="mb-9 text-base leading-relaxed text-body-color ">
                {data.description}
              </p>
              {data.items.map((item, idx) => (
                <div key={idx} className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/5 text-primary sm:h-[70px] sm:w-[70px]">
                    <img src={item.imgUrl} alt={item.name} className="w-6 h-6" />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold ">
                      {item.name}
                    </h4>
                    <p className="text-base text-body-color ">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12 focus:border-blue-200">
              <form>
                <ContactInputBox type="text" name="firstname" placeholder="Your First Name" />
                <ContactInputBox type="text" name="lastname" placeholder="Your Last Name" />
                <ContactInputBox type="email" name="email" placeholder="Your Email" />
                <ContactInputBox type="tel" name="phone" placeholder="Your Phone" />
                <ContactTextArea row={6} placeholder="Your Message" name="details" defaultValue="" />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-max rounded border bg-black p-3 text-white font-semibold rounded-xl transition px-5"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

const ContactTextArea = ({
  row,
  placeholder,
  name,
  defaultValue,
}: {
  row: number;
  placeholder: string;
  name: string;
  defaultValue?: string;
}) => (
  <div className="mb-6">
    <textarea
      rows={row}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-400 "
    />
  </div>
);


const ContactInputBox = ({
  type,
  placeholder,
  name,
}: {
  type: string;
  placeholder: string;
  name: string;
}) => (
  <div className="mb-6">
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-400 "
    />
  </div>
);

