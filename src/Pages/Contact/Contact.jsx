import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yqcuqs9", "template_n9ca46e", form.current, {
        publicKey: "FOMWDQ5s2LdE1crT1",
      })
      .then(
        () => {
          alert("Email Send SuccessFully Done .Thanks");
          window.location.reload();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <section id="Contact">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-20">
          <h2 className="text-3xl font-bold md:text-5xl mt-16">Contact</h2>
          <p className="mx-auto mb-8 mt-4 max-w-lg text-gray-500 md:mb-12 lg:mb-16">
            Let's collaborate to build efficient, user-friendly solutions. I
            deliver quality, timely results tailored to meet your unique project
            goals.
          </p>

          <form
            name="wf-form-name"
            method="get"
            className="mx-auto mb-4 text-left sm:px-4 md:px-20"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="mb-4 grid w-full grid-cols-2 gap-6">
              <div>
                <label htmlfor="name1" className="mb-1 font-medium">
                  First Name
                </label>
                <input
                  name="name1"
                  type="text"
                  className=" block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
                  placeholder
                  required
                />
              </div>
              <div>
                <label htmlfor="name2" className="mb-1 font-medium">
                  Last Name
                </label>
                <input
                  name="name2"
                  type="text"
                  className=" block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
                  placeholder
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlfor="field" className="mb-1 font-medium">
                Company Website
              </label>
              <input
                name="companeywebsite"
                type="text"
                className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlfor="field" className="mb-1 font-medium">
                Email
              </label>
              <input
                name="email"
                type="text"
                className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
              />
            </div>
            <div className="mb-5 md:mb-6 lg:mb-8">
              <label htmlfor="field" className="mb-1 font-medium">
                Message
              </label>
              <textarea
                placeholder
                maxLength={5000}
                name="message"
                className="mb-2.5 block h-auto min-h-44 w-full rounded-md border border-solid border-black px-3 py-2 text-sm text-black"
                defaultValue={""}
              />
            </div>

            <input
              type="submit"
              defaultValue="Join Flowspark"
              className="inline-block w-full rounded-md cursor-pointer bg-black px-6 py-3 text-center font-semibold text-white"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
