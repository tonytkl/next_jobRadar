"use client";
import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setHide: () => void;
  title: string;
  // buttonText?: string[]
  // buttonAction?: (() => void)[]
};

// Logic of modal is based on WindUI.
// Details: https://wind-ui.com/components/modals/
const Modal = ({
  children,
  isOpen,
  setHide,
  title,
}: // buttonText,
// buttonAction,
Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setHide();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, isOpen, setHide]);

  useEffect(() => {
    const html = document.querySelector("html");
    const modal = document.querySelector("#modal"); // select the modal by it's id
    if (html && modal) {
      if (isOpen && html) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const firstFocusableElement = modal.querySelectorAll(
          focusableElements
        )[0] as HTMLElement; // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements);

        const lastFocusableElement = focusableContent[
          focusableContent.length - 1
        ] as HTMLElement; // get last element to be focused inside modal

        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape") {
            setHide();
          }

          const isTabPressed = e.key === "Tab";

          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) {
            // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus(); // add focus for the last focusable element
              e.preventDefault();
            }
          } else {
            // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
              // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus(); // add focus for the first focusable element
              e.preventDefault();
            }
          }
        });

        firstFocusableElement.focus();
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isOpen, setHide]);

  return (
    <>
      {isOpen && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="header-2a content-2a"
              aria-modal="true"
              tabIndex={-1}
              role="dialog"
            >
              {/*    <!-- Modal --> */}
              <div
                className="flex max-h-[90vh] w-11/12 max-w-md flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                ref={wrapperRef}
                id="modal"
                role="document"
              >
                {/*        <!-- Modal header --> */}
                <header id="header-2a" className="flex items-center gap-4">
                  <h3 className="flex-1 text-xl font-medium text-slate-700">
                    {title}
                  </h3>
                  <button
                    onClick={() => setHide()}
                    className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                    aria-label="close dialog"
                  >
                    <span className="relative only:-mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-79 desc-79"
                      >
                        <title id="title-79">Icon title</title>
                        <desc id="desc-79">
                          A more detailed description of the icon
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </header>
                {/*        <!-- Modal body --> */}
                {children}
                {/*        <!-- Modal actions --> */}
                {/* {buttonText &&
                                  buttonAction &&
                                  buttonText?.length > 0 && (
                                      
                                  )} */}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
};

export default Modal;
