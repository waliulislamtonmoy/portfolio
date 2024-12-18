import React from "react";
import tonmoy from "../../assets/images/tonmoy.png";

const Hero = () => {
  return (
    <div>
      <header>
        {/* Hero Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="flex flex-col">
              <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-6 lg:mb-6">
                I A'm
              </p>
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Md.Waliul Islam Tonmoy
              </h1>
              <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
                Let's collaborate to build efficient, user-friendly solutions. I
                deliver quality, timely results tailored to meet your unique
                project goals.
              </p>

              <div className="flex items-center">
                <a
                  href="https://drive.google.com/file/d/1YA_X5qAdOCpeavptrNUBJRa90QMNGdEA/view?usp=sharing"
                  className="mr-5 items-center rounded-md bg-black px-6 py-3 font-semibold text-white md:mr-6 lg:mr-8
                  "
                  target="_blank"
                >
                  Download Cv
                </a>
                <div>
                  <div class=" w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap r">
                    <a
                      href="https://www.facebook.com/tonmoykhan21/"
                      target="_blank"
                    >
                      <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                        <svg
                          class="transition-all duration-300 group-hover:scale-110"
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 72 72"
                          fill="none"
                        >
                          <path
                            d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                            fill="#337FFF"
                          />
                        </svg>
                      </button>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/waliulislam-tonmoy-2659a5251/"
                      target="_blank"
                    >
                      <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                        <svg
                          class="rounded-md transition-all duration-300 group-hover:scale-110"
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 72 72"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.6975 11C12.6561 11 11 12.6057 11 14.5838V57.4474C11 59.4257 12.6563 61.03 14.6975 61.03H57.3325C59.3747 61.03 61.03 59.4255 61.03 57.4468V14.5838C61.03 12.6057 59.3747 11 57.3325 11H14.6975ZM26.2032 30.345V52.8686H18.7167V30.345H26.2032ZM26.6967 23.3793C26.6967 25.5407 25.0717 27.2703 22.4615 27.2703L22.4609 27.2701H22.4124C19.8998 27.2701 18.2754 25.5405 18.2754 23.3791C18.2754 21.1686 19.9489 19.4873 22.5111 19.4873C25.0717 19.4873 26.6478 21.1686 26.6967 23.3793ZM37.833 52.8686H30.3471L30.3469 52.8694C30.3469 52.8694 30.4452 32.4588 30.3475 30.3458H37.8336V33.5339C38.8288 31.9995 40.6098 29.8169 44.5808 29.8169C49.5062 29.8169 53.1991 33.0363 53.1991 39.9543V52.8686H45.7133V40.8204C45.7133 37.7922 44.6293 35.7269 41.921 35.7269C39.8524 35.7269 38.6206 37.1198 38.0796 38.4653C37.8819 38.9455 37.833 39.6195 37.833 40.2918V52.8686Z"
                            fill="#006699"
                          />
                        </svg>
                      </button>
                    </a>

                    <a
                      href="https://www.facebook.com/tonmoykhan21/"
                      target="_blank"
                    >
                      <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                        <svg
                          class="rounded-md transition-all duration-300 group-hover:scale-110"
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 72 72"
                          fill="none"
                        >
                          <path
                            d="M35.9042 13C23.0034 13 13 22.4537 13 35.2171C13 41.8936 15.737 47.6655 20.1919 51.6508C20.5641 51.9829 20.7931 52.4525 20.8046 52.9563L20.9306 57.0333C20.9397 57.3333 21.0225 57.6264 21.1714 57.8869C21.3204 58.1474 21.5311 58.3674 21.785 58.5274C22.0389 58.6874 22.3282 58.7826 22.6275 58.8047C22.9268 58.8267 23.227 58.7749 23.5016 58.6538L28.048 56.6496C28.4317 56.4779 28.8669 56.4492 29.2734 56.558C31.3634 57.1306 33.5851 57.4398 35.9042 57.4398C48.805 57.4398 58.8084 47.9861 58.8084 35.2228C58.8084 22.4594 48.805 13 35.9042 13Z"
                            fill="url(#paint0_radial_7092_54580)"
                          />
                          <path
                            d="M22.1502 41.7161L28.8783 31.0428C29.1314 30.6409 29.4651 30.2959 29.8583 30.0295C30.2514 29.7631 30.6955 29.5812 31.1626 29.4951C31.6296 29.409 32.1094 29.4206 32.5717 29.5293C33.034 29.638 33.4688 29.8414 33.8485 30.1266L39.2024 34.1406C39.4414 34.3195 39.7322 34.4157 40.0308 34.4147C40.3293 34.4137 40.6194 34.3154 40.8572 34.1348L48.0835 28.6493C49.0455 27.9163 50.3052 29.073 49.6639 30.098L42.93 40.7656C42.6769 41.1674 42.3433 41.5124 41.9501 41.7788C41.5569 42.0452 41.1128 42.2272 40.6458 42.3133C40.1787 42.3994 39.6989 42.3877 39.2366 42.279C38.7743 42.1703 38.3396 41.967 37.9598 41.6818L32.606 37.6678C32.367 37.4889 32.0762 37.3926 31.7776 37.3937C31.479 37.3947 31.1889 37.4929 30.9512 37.6735L23.7249 43.1591C22.7629 43.892 21.5032 42.7411 22.1502 41.7161Z"
                            fill="white"
                          />
                          <defs>
                            <radialGradient
                              id="paint0_radial_7092_54580"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(20.6729 58.8084) scale(50.3892 50.3892)"
                            >
                              <stop stop-color="#0099FF" />
                              <stop offset="0.6" stop-color="#A033FF" />
                              <stop offset="0.9" stop-color="#FF5280" />
                              <stop offset="1" stop-color="#FF7061" />
                            </radialGradient>
                          </defs>
                        </svg>
                      </button>
                    </a>

                    <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                      <svg
                        class="rounded-md transition-all duration-300 group-hover:scale-110"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 72 72"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M61.03 36.015C61.03 49.8304 49.8304 61.03 36.015 61.03C22.1996 61.03 11 49.8304 11 36.015C11 22.1996 22.1996 11 36.015 11C49.8304 11 61.03 22.1996 61.03 36.015ZM38.4121 28.3392C34.1147 30.1955 21.7235 35.4671 21.7235 35.4671C18.7869 36.6551 20.5058 37.7688 20.5058 37.7688C20.5058 37.7688 23.0127 38.6599 25.1615 39.328C27.3103 39.9963 28.4563 39.2538 28.4563 39.2538C28.4563 39.2538 33.47 35.8384 38.5554 32.2002C42.1366 29.6757 41.2772 31.7547 40.4176 32.6457C38.5554 34.5762 35.4755 37.6204 32.897 40.0706C31.751 41.1101 32.324 42.001 32.8254 42.4465C34.2836 43.7256 37.718 46.0518 39.2773 47.1079C39.7093 47.4005 39.9974 47.5956 40.0596 47.6439C40.4176 47.941 42.4232 49.2774 43.6408 48.9804C44.8584 48.6834 45.0017 46.9757 45.0017 46.9757C45.0017 46.9757 45.9328 40.8873 46.7923 35.3186C46.9515 34.2252 47.1107 33.1548 47.2592 32.1567C47.645 29.5623 47.9582 27.4565 48.0099 26.7058C48.2248 24.1814 45.6463 25.2208 45.6463 25.2208C45.6463 25.2208 40.0596 27.5968 38.4121 28.3392Z"
                          fill="#34AADF"
                        />
                      </svg>
                    </button>

                    <a href="https://Facebook.com" target="_Blank">
                      <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                        <svg
                          class="rounded-md transition-all duration-300 group-hover:scale-110"
                          width="28"
                          height="28"
                          viewBox="0 0 72 72"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0065 56.1236H21.4893V35.5227L9.37109 26.4341V52.4881C9.37109 54.4997 11.001 56.1236 13.0065 56.1236Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M50.5732 56.1236H59.056C61.0676 56.1236 62.6914 54.4937 62.6914 52.4881V26.4341L50.5732 35.5227"
                            fill="#34A853"
                          />
                          <path
                            d="M50.5732 19.7693V35.5229L62.6914 26.4343V21.587C62.6914 17.0912 57.5594 14.5282 53.9663 17.2245"
                            fill="#FBBC04"
                          />
                          <path
                            d="M21.4893 35.5227V19.769L36.0311 30.6754L50.5729 19.769V35.5227L36.0311 46.429"
                            fill="#EA4335"
                          />
                          <path
                            d="M9.37109 21.587V26.4343L21.4893 35.5229V19.7693L18.0962 17.2245C14.4971 14.5282 9.37109 17.0912 9.37109 21.587Z"
                            fill="#C5221F"
                          />
                        </svg>
                      </button>
                    </a>

                    <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
                      <svg
                        class="rounded-md transition-all duration-300 group-hover:scale-110"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 72 72"
                        fill="none"
                      >
                        <path
                          d="M61.1026 23.7185C60.5048 21.471 58.7363 19.6981 56.4863 19.0904C52.4181 18 36.0951 18 36.0951 18C36.0951 18 19.7805 18 15.7039 19.0904C13.4622 19.6897 11.6937 21.4627 11.0876 23.7185C10 27.7971 10 36.3124 10 36.3124C10 36.3124 10 44.8276 11.0876 48.9063C11.6854 51.1537 13.4539 52.9267 15.7039 53.5343C19.7805 54.6247 36.0951 54.6247 36.0951 54.6247C36.0951 54.6247 52.4181 54.6247 56.4863 53.5343C58.728 52.935 60.4965 51.162 61.1026 48.9063C62.1902 44.8276 62.1902 36.3124 62.1902 36.3124C62.1902 36.3124 62.1902 27.7971 61.1026 23.7185Z"
                          fill="#FF3000"
                        />
                        <path
                          d="M30.8811 44.1617L44.4392 36.3124L30.8811 28.463V44.1617Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero Image */}
            <img
              src={tonmoy}
              alt="tonmoy"
              className="inline-block h-full w-full max-w-2xl rounded rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
