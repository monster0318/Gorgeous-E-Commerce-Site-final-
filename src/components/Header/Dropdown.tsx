import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Dropdown = ({ menuItem, stickyMenu }) => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const pathUrl = usePathname();

  return (
    <li
      onClick={() => setDropdownToggler(!dropdownToggler)}
      className="group">
      <div className={`relative before:w-0 before:h-[3px] before:bg-blue before:absolute before:left before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full ${
          pathUrl.includes(menuItem.title) && "before:!w-full"}`}>
        <a
          href="#"
          className={`hover:text-blue text-custom-xs font-medium text-dark flex items-center gap-1.5 capitalize ${
            stickyMenu ? "xl:py-4" : "xl:py-6"
          } ${pathUrl.includes(menuItem.title) && "!text-blue"}`}
        >
          {menuItem.title}
          <svg
            className="fill-current cursor-pointer"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.95363 5.67461C3.13334 5.46495 3.44899 5.44067 3.65866 5.62038L7.99993 9.34147L12.3412 5.62038C12.5509 5.44067 12.8665 5.46495 13.0462 5.67461C13.2259 5.88428 13.2017 6.19993 12.992 6.37964L8.32532 10.3796C8.13808 10.5401 7.86178 10.5401 7.67453 10.3796L3.00787 6.37964C2.7982 6.19993 2.77392 5.88428 2.95363 5.67461Z"
              fill=""
            />
          </svg>
        </a>
      </div>

      {/* <!-- Dropdown Start --> */}
      <ul
        className={` left-0 w-full xl:w-[1170px] dropdown xl:flex-row xl:items-start xl:justify-around gap-2 xl:gap-4 pb-6 ${dropdownToggler && "flex"} ${
          stickyMenu
            ? "xl:group-hover:translate-y-0"
            : "xl:group-hover:translate-y-0"
        }`}
      >
        {menuItem.submenu.map((item, i) => (
          <li key={i} className="group flex flex-col items-left gap-4 xl:gap-6">
            <Link
              href={item.path}
              className={`text-custom-sm flex-1 font-bold text-justify hover:text-blue hover:bg-gray-1 py-[4px] px-4.5 ${
                pathUrl === item.path && "text-blue bg-gray-1"
              }  relative after:w-0 after:h-[3px] after:bg-blue after:absolute after:left-0 after:bottom-0 after:rounded-b-[3px] after:ease-out after:duration-200 hover:after:w-full`}
            >
              {item.title}
            </Link>
            {
              item?.items?.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className={`hover:text-blue text-custom-xs text-gray-6 font-medium flex xl:group-hover:translate-y-0 px-6 xl:px-1`}
                >
                  {item.title}
                </Link>
              ))
            }
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;
