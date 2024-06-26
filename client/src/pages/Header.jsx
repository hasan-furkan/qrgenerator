import { useState } from "react";
import { LoginModal } from "../components/LoginModal";
import { useEffect } from "react";

export const Header = ({ username, setUsername }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalId = "default-modal";
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {}, [username]);

  return (
    <nav className="w-full bg-white dark:bg-slate-900 flex p-4  items-center justify-between">
      <div className="inline-flex space-x-2">
        <div className="h-8 w-auto">
          <svg
            width="32"
            height="32"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_355_2996"
              maskUnits="userSpaceOnUse"
              x="0"
              y="20"
              width="43"
              height="44"
            >
              <path
                d="M0 20.6841H42.4212V63.1383H0V20.6841Z"
                fill="white"
              ></path>
            </mask>
            <g mask="url(#mask0_355_2996)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.03937 26.9694L6.1608 22.846C8.87543 20.1275 13.3267 20.1275 16.0414 22.846L40.2557 47.0875C42.9723 49.8041 42.9723 54.2651 40.2557 56.9817L36.1382 61.1012C33.4177 63.8236 28.9664 63.8236 26.2557 61.1012L2.03937 36.8655C-0.67914 34.1431 -0.67914 29.6918 2.03937 26.9694Z"
                fill="#E11D48"
              ></path>
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.0574 11.5954L27.9458 1.70125C30.2063 -0.567084 33.9067 -0.567084 36.1731 1.70125L46.0575 11.5954C48.3259 13.8637 48.3259 17.5738 46.0575 19.8382L36.1731 29.7305C33.9067 31.9968 30.2063 31.9968 27.9458 29.7305L18.0574 19.8382C15.793 17.5738 15.793 13.8637 18.0574 11.5954Z"
              fill="#2563EB"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M37.2442 33.2776L49.5949 20.9075C51.2307 19.2795 53.8949 19.2795 55.5229 20.9075L62.7761 28.1685C64.408 29.7985 64.408 32.4724 62.7761 34.1042L50.4215 46.4705C48.7896 48.1004 46.1216 48.1004 44.4897 46.4705L37.2442 39.2153C35.6123 37.5834 35.6123 34.9095 37.2442 33.2776Z"
              fill="#4F46E5"
            ></path>
          </svg>
        </div>
        <span className="hidden md:block text-slate-900 dark:text-slate-100 font-bold text-2xl">
          QR Code Generator
        </span>
      </div>
      {username ? (
        <div className="flex items-center space-x-2">
          <span className="hidden md:flex text-slate-900 dark:text-slate-100 font-bold text-lg">
            {username}
          </span>
          <button
            className="rounded-full bg-blue-500 text-white p-2"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <ul className="hidden md:flex space-x-4 dark:text-slate-100 text-slate-900">
          <li className="bg-blue-500 hover:cursor-pointer rounded-md text-slate-100 px-4 py-2">
            Register
          </li>
          <li className="px-4 py-2 hover:cursor-pointer">
            <button
              onClick={openModal}
              data-modal-target={modalId}
              data-modal-toggle={modalId}
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Login
            </button>
          </li>
        </ul>
      )}
      <button className="rounded-full bg-blue-500 p-2 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-6 w-6 dark:text-slate-900 text-slate-100"
        >
          <path
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {isModalOpen && (
        <LoginModal
          closeModal={closeModal}
          modalId={modalId}
          isModalOpen={isModalOpen}
          setUsername={setUsername}
        />
      )}
    </nav>
  );
};
