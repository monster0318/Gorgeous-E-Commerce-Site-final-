import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = () => {
  return (
    <>
      <Breadcrumb title={"Blog Details"} pages={["blog details"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[750px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="rounded-[10px] overflow-hidden mb-7.5">
            <Image
              className="rounded-[10px]"
              src="/images/blog/blog-details-01.jpg"
              alt="details"
              width={750}
              height={477}
            />
          </div>

          <div>
            <span className="flex items-center gap-3 mb-4">
              <a href="#" className="ease-out duration-200 hover:text-blue">
                Mar 27, 2022
              </a>

              {/* <!-- divider --> */}
              <span className="block w-px h-4 bg-gray-4"></span>

              <a href="#" className="ease-out duration-200 hover:text-blue">
                300k Views
              </a>
            </span>

            <h2 className="font-medium text-dark text-xl lg:text-2xl xl:text-custom-4xl mb-4">
              What information is needed for shipping?
            </h2>

            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sit amet eros ac ipsum egestas dapibus. Vivamus gravida, ex non
              placerat tincidunt, lorem felis facilisis tellus, vitae bibendum
              purus felis eget tellus. In non rutrum ipsum. Morbi ut dui ante.
            </p>

            <p className="mb-6">
              Nunc faucibus libero sem, quis placerat nisl pellentesque eget.
              Morbi porta velit ut leo sollicitudin, a faucibus purus faucibus.
              Maecenas mollis dui nec metus euismod, sed aliquam risus luctus.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              enim lobortis scelerisque fermentum. Neque sodales ut etiam sit
              amet. Ligula ullamcorper malesuada proin libero nunc consequat
              interdum varius. Quam pellentesque nec nam aliquam sem et tortor
              consequat.
            </p>

            <div className="mt-7.5">
              <h3 className="font-medium text-dark text-lg xl:text-[26px] xl:leading-[34px] mb-6">
                Digital marketplace for Ui/Ux designers.
              </h3>

              <ul className="list-disc pl-6">
                <li>Consectetur adipiscing elit in voluptate velit.</li>
                <li>Mattis vulputate cupidatat.</li>
                <li>
                  Vulputate enim nulla aliquet porttitor odio pellentesque
                </li>
                <li>Ligula ullamcorper malesuada proin</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white pt-7.5 pb-6 px-4 sm:px-7.5 my-7.5">
              <p className="italic text-dark text-center">
                ‘‘Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod incididunt utionals labore et dolore magna aliqua
                quis fermentum,,
              </p>

              <a
                href="#"
                className="flex items-center justify-center gap-3 mt-5.5"
              >
                <div className="flex w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/users/user-04.jpg"
                    alt="user"
                    width={48}
                    height={48}
                  />
                </div>

                <div>
                  <h4 className="text-dark text-custom-sm">Jhon Drineo</h4>
                  <p className="text-custom-xs">Entroprenor</p>
                </div>
              </a>
            </div>

            <p className="mb-6">
              consectetur adipiscing elit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate
              cupidatat.
            </p>

            <p className="mb-6">
              Nunc faucibus libero sem, quis placerat nisl pellentesque eget.
              Morbi porta velit ut leo sollicitudin, a faucibus purus faucibus.
              Maecenas mollis dui nec metus euismod, sed aliquam risus luctus.
            </p>

            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              enim lobortis scelerisque fermentum. Neque sodales ut etiam sit
              amet. Ligula ullamcorper malesuada proin libero nunc consequat
              interdum varius. Quam pellentesque nec nam aliquam sem et tortor
              consequat.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sit amet eros ac ipsum egestas dapibus. Vivamus gravida, ex non
              placerat tincidunt, lorem felis facilisis tellus, vitae bibendum
              purus felis eget tellus. In non rutrum ipsum. Morbi ut dui ante.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-10 mt-10">
              <div className="flex flex-wrap items-center gap-5">
                <p>Popular Tags :</p>

                <ul className="flex flex-wrap items-center gap-3.5">
                  <li>
                    <a
                      className="inline-flex hover:text-white border border-gray-3 bg-white py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                      href="#"
                    >
                      Desktop
                    </a>
                  </li>

                  <li>
                    <a
                      className="inline-flex hover:text-white border border-gray-3 bg-white py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                      href="#"
                    >
                      Macbook
                    </a>
                  </li>

                  <li>
                    <a
                      className="inline-flex hover:text-white border border-gray-3 bg-white py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                      href="#"
                    >
                      PC
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Social Links start --> */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#BD081C] ease-in duration-200 hover:bg-opacity-95"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_190_5507)">
                      <path
                        d="M0.47827 8.52675C0.531395 10.9971 1.67359 13.4674 3.61264 14.9549C4.22357 15.4064 4.88764 15.6721 5.57826 15.9642C5.28607 14.0783 6.00326 12.1924 6.4017 10.333C6.45482 10.1471 6.48139 9.93456 6.48139 9.72206C6.48139 9.42987 6.37514 9.13769 6.29545 8.8455C6.21576 8.36737 6.26889 7.86269 6.48139 7.41112C6.77357 6.80019 7.4642 6.32206 8.07514 6.56112C8.63295 6.77362 8.84545 7.51737 8.7392 8.10175C8.63295 8.71269 8.3142 9.24394 8.15482 9.82831C7.96889 10.4127 7.99545 11.1299 8.42045 11.5283C8.81889 11.9002 9.45639 11.9267 9.96107 11.7142C10.7048 11.3955 11.1829 10.6517 11.4751 9.908C12.0064 8.52675 11.9001 6.77362 10.8111 5.76425C10.3595 5.31269 9.72201 5.0205 9.03139 4.91425C7.86264 4.72831 6.58764 5.07362 5.7642 5.92362C4.94076 6.77362 4.56889 8.07519 4.9142 9.19081C5.02045 9.56269 5.23295 9.93456 5.31264 10.3064C5.39232 10.6783 5.36576 11.1564 5.10014 11.4221C5.07358 11.4486 5.04701 11.4752 4.99389 11.5017C4.94076 11.5283 4.86107 11.4752 4.80795 11.4486C4.30326 11.1299 3.90482 10.6252 3.66576 10.0939C2.92201 8.47362 3.29389 6.45487 4.46264 5.12675C5.63139 3.79862 7.51732 3.16112 9.27045 3.40019C10.9173 3.61269 12.5376 4.5955 13.2283 6.10956C13.6533 7.01269 13.7329 8.04862 13.5736 9.03144C13.4142 10.0408 13.0158 10.9971 12.3517 11.7674C11.6876 12.5377 10.7314 13.0689 9.72201 13.1221C8.89857 13.1752 8.02201 12.883 7.59701 12.1924C7.33139 13.6267 6.8267 15.0346 6.08295 16.283C6.05639 16.3361 7.78295 16.708 7.94232 16.708C9.90795 16.8674 12.0064 16.0971 13.547 14.8752C17.797 11.5017 17.3454 5.04706 13.1486 1.85957C10.9704 0.186128 8.39389 -0.132622 5.84389 0.770504C5.07357 1.03613 4.35639 1.48769 3.69232 1.96582C2.62983 2.76269 1.77983 3.79862 1.22202 4.99394C0.664207 6.083 0.451707 7.30487 0.47827 8.52675Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_190_5507">
                        <rect width="17" height="17" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#0376A8] ease-in duration-200 hover:bg-opacity-95"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.3442 0H1.12455C0.499798 0 0 0.497491 0 1.11936V14.3029C0 14.8999 0.499798 15.4222 1.12455 15.4222H14.2942C14.919 15.4222 15.4188 14.9247 15.4188 14.3029V1.09448C15.4688 0.497491 14.969 0 14.3442 0ZM4.57316 13.1089H2.29907V5.7709H4.57316V13.1089ZM3.42362 4.75104C2.67392 4.75104 2.09915 4.15405 2.09915 3.43269C2.09915 2.71133 2.69891 2.11434 3.42362 2.11434C4.14833 2.11434 4.74809 2.71133 4.74809 3.43269C4.74809 4.15405 4.19831 4.75104 3.42362 4.75104ZM13.1947 13.1089H10.9206V9.55183C10.9206 8.7061 10.8956 7.58674 9.72108 7.58674C8.52156 7.58674 8.34663 8.53198 8.34663 9.47721V13.1089H6.07255V5.7709H8.29665V6.79076H8.32164C8.64651 6.19377 9.37122 5.59678 10.4958 5.59678C12.8198 5.59678 13.2447 7.08925 13.2447 9.12897V13.1089H13.1947Z"
                      fill="white"
                    ></path>
                  </svg>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#00ACEE] ease-in duration-200 hover:bg-opacity-95"
                >
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5524 2.26027L16.625 1.0274C16.9355 0.693493 17.0202 0.436644 17.0484 0.308219C16.2016 0.770548 15.4113 0.924658 14.9032 0.924658H14.7056L14.5927 0.821918C13.9153 0.282534 13.0685 0 12.1653 0C10.1895 0 8.6371 1.48973 8.6371 3.21062C8.6371 3.31336 8.6371 3.46747 8.66532 3.57021L8.75 4.0839L8.15726 4.05822C4.54435 3.95548 1.58065 1.13014 1.10081 0.642123C0.310484 1.92637 0.762097 3.15925 1.24194 3.92979L2.20161 5.36815L0.677419 4.5976C0.705645 5.67637 1.15726 6.52397 2.03226 7.14041L2.79435 7.65411L2.03226 7.93665C2.5121 9.24658 3.58468 9.78596 4.375 9.99144L5.41935 10.2483L4.43145 10.8647C2.85081 11.8921 0.875 11.8151 0 11.738C1.77823 12.8682 3.89516 13.125 5.3629 13.125C6.46371 13.125 7.28226 13.0223 7.47984 12.9452C15.3831 11.25 15.75 4.82877 15.75 3.54452V3.36473L15.9194 3.26199C16.879 2.44007 17.2742 2.00342 17.5 1.74658C17.4153 1.77226 17.3024 1.82363 17.1895 1.84932L15.5524 2.26027Z"
                      fill="white"
                    ></path>
                  </svg>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#1877F2] ease-in duration-200 hover:bg-opacity-95"
                >
                  <svg
                    width="9"
                    height="18"
                    viewBox="0 0 9 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z"
                      fill="white"
                    ></path>
                  </svg>
                </a>
              </div>
              {/* <!-- Social Links end --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
