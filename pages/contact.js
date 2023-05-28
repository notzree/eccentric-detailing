/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { Switch } from "@headlessui/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-hot-toast";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberRegex = /^\d{10}$/;
  return phoneNumberRegex.test(phoneNumber);
};

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [showprivacy, setShowprivacy] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (!validateEmail(form.current.email.value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
    if (!validatePhoneNumber(form.current.number.value)) {
      setPhoneNumberError("Please enter a valid phone number.");
    } else {
      setPhoneNumberError("");
    }
    
    if (validateEmail(email) != "" || validatePhoneNumber(number) != "" || agreed != true) {
      return;
    }
    
    emailjs
      .sendForm(
        "service_u19sc2k",
        "template_1uxs1h9",
        form.current,
        "Z5DyMj3sSjF5qB6aO"
      )
      .then(
        (result) => {
            toast.success('Message sent successfully!');
        },
        (error) => {
            toast.error('Something Broke, Please try again later');
        }
      );
  };

  useEffect(() => {
    if (showprivacy) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [showprivacy]);
  return (
    <>
      <Header />
      <div className="bg-black">
        <div className="flex flex-col items-center justify-center mx-auto max-w-7xl py-10 sm:px-6 sm:py-32 lg:px-8">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl">
            Get in Touch.
          </h2>

          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="isolate bg-white px-6 py-20 lg:px-8 md:w-1/2">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          ></div>
          <div className="mx-auto max-w-2xl text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Contact Us
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            ref={form}
            className="mx-auto mt-5 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  First Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white border-2 border-black px-3.5 py-2 text-black focus:shadow-xl placeholder:text-white sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Last Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white border-2 border-black px-3.5 py-2 text-black focus:shadow-xl placeholder:text-white sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  {emailError && (
                    <span className="text-error">{emailError}</span>
                  )}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="block w-full rounded-md bg-white border-2 border-black px-3.5 py-2 text-black focus:shadow-xl placeholder:text-white sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Phone Number
                </label>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="h-full rounded-md border-0 bg-transparent bg-none py-0 px-4 text-black focus:ring-0 focus:ring-none sm:text-sm"
                    >
                      <option>US</option>
                      <option>CA</option>
                    </select>
                  </div>
                  {phoneNumberError && (
                    <span className="text-error">{phoneNumberError}</span>
                  )}
                  <input
                    type="tel"
                    name="number"
                    id="number"
                    autoComplete="tel"
                    className=" pl-20  block w-full rounded-md bg-white border-2 border-black px-3.5 py-2 text-black focus:shadow-xl placeholder:text-white sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Car Make and Model (if known)
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="car-make"
                    id="car-make"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white border-2 border-black px-3.5 py-2 text-black focus:shadow-xl placeholder:text-white sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md bg-white border-2 border-black px-3.5 py-2 text-black focus:shadow-xl placeholder:text-white sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
              <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? "bg-red-400" : "bg-gray-200",
                      "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? "translate-x-3.5" : "translate-x-0",
                        "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                      )}
                    />
                  </Switch>
                </div>
                <Switch.Label className="text-sm leading-6 text-black">
                  By selecting this, you agree to our{" "}
                  <button
                    onClick={() => setShowprivacy(!showprivacy)}
                    className="font-semibold text-red-400"
                  >
                    privacy&nbsp;policy
                  </button>
                  .
                </Switch.Label>
              </Switch.Group>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:black"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
        <div className="isolate bg-white px-6 py-20 lg:px-8 md:w-1/2">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          ></div>
          <div className="mx-auto max-w-2xl text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              FAQ
            </h2>
          </div>
          <div className="mx-auto mt-5 max-w-xl sm:mt-20 flex flex-col gap-5">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border-black border-2 bg-white rounded-md"
            >
              <div className="collapse-title text-xl text-black font-medium">
                How safe will my car be?
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border-black border-2 bg-white rounded-md"
            >
              <div className="collapse-title text-xl text-black font-medium">
                How safe will my car be?
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border-black border-2 bg-white rounded-md"
            >
              <div className="collapse-title text-xl text-black font-medium">
                How safe will my car be?
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
          </div>
          {/* Need to do: fix Z-index of googlemaps component so the modal shows over it.  */}
          {showprivacy && (
            <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20">
              <div class="absolute bg-white rounded-lg shadow-lg p-6 max-h-full overflow-y-auto w-1/2">
                <p class="text-gray-800">
                  We respect your privacy and are committed to protecting your
                  personal information. This privacy policy explains how we
                  collect, use, and disclose personal information that we
                  collect when you submit a form on our website.
                </p>

                <br class="my-8" />

                <p class="text-gray-800 font-bold text-xl">
                  <strong>Information we collect:</strong>
                </p>
                <p class="text-gray-800">
                  When you submit a form on our website, we may collect the
                  following information:
                </p>

                <ul>
                  <li class="text-gray-800">Your name</li>
                  <li class="text-gray-800">Your email address</li>
                  <li class="text-gray-800">Your phone number</li>
                  <li class="text-gray-800">
                    Other information that you choose to provide in the form,
                    such as your address or message
                  </li>
                </ul>

                <p class="text-gray-800">
                  We use this information to respond to your inquiry, provide
                  you with the information or service that you requested, and to
                  improve our website and services.
                </p>

                <br class="my-8" />

                <p class="text-gray-800 font-bold text-xl">
                  <strong>Use of cookies:</strong>
                </p>

                <p class="text-gray-800">
                  Our website may use cookies and similar technologies to
                  collect information about your device, such as your IP
                  address, browser type, and operating system. We use this
                  information to analyze how visitors use our website, to
                  improve our website and services, and to personalize your
                  experience on our website.
                </p>

                <br class="my-8" />

                <p class="text-gray-800 font-bold text-xl">
                  <strong>Disclosure of information:</strong>
                </p>

                <p class="text-gray-800">
                  We do not sell or rent your personal information to third
                  parties. We may disclose your personal information to our
                  service providers who assist us in providing our services, but
                  only to the extent necessary for them to provide their
                  services to us.
                </p>

                <p class="text-gray-800">
                  We may also disclose your personal information if required by
                  law or in connection with a legal proceeding.
                </p>

                <br class="my-8" />

                <p class="text-gray-800 font-bold text-xl">
                  <strong>Security:</strong>
                </p>

                <p class="text-gray-800">
                  We take reasonable measures to protect your personal
                  information from unauthorized access, use, or disclosure.
                  However, no method of transmission over the Internet or
                  electronic storage is completely secure, and we cannot
                  guarantee the absolute security of your personal information.
                </p>

                <br class="my-8" />

                <p class="text-gray-800 font-bold text-xl">
                  <strong>Your rights:</strong>
                </p>

                <p class="text-gray-800">
                  You have the right to request access to and correction of your
                  personal information that we hold. You may also have the right
                  to request that we delete your personal information. To
                  exercise these rights, please contact us using the contact
                  information provided on our website.
                </p>

                <br class="my-8" />

                <p class="text-gray-800 font-bold text-xl">
                  <strong>Updates to this privacy policy:</strong>
                </p>

                <p class="text-gray-800">
                  We may update this privacy policy from time to time to reflect
                  changes in our practices or to comply with legal requirements.
                  We will post the updated privacy policy on our website, and
                  the updated policy will be effective as of the date it is
                  posted.
                </p>

                <br class="my-8" />

                <p class="text-gray-800 font-bold text-xl">
                  <strong>Contact us:</strong>
                </p>

                <p class="text-gray-800">
                  If you have any questions or concerns about our privacy
                  policy, please contact us using the contact information
                  provided on our website.
                </p>

                <button
                  onClick={() => setShowprivacy(!showprivacy)}
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 float-right"
                >
                  I understand
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
