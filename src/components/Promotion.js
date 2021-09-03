import React from "react";
import Button from "../components/core/Button";
import { Transition } from "@headlessui/react";

const Promotion = ({ children, action, link }) => {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <Transition
        appear
        show={show}
        enter="transition-transform transform -translate-y-full duration-500"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition-transform transform translate-y-0 duration-500"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <div className="w-100 bg-blue-400 md:px-8 px-4 py-4 flex items-center">
          <div className="relative ">
            <div className="rounded-md bg-blue-600 text-white p-3 relative">
              <i class="fas fa-bullhorn text-xl"></i>
            </div>
            <span class=" h-3 w-3 flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
            </span>
          </div>
          {children}
          <Button
            className="ml-auto md:mr-10 sm:mr-5"
            variant="outline"
            bg="white"
            size="sm"
            href={link}
            node="a"
          >
            {action}
          </Button>
          <div className="hidden sm:block">
            <i
              className="fas fa-times text-white text-xl cursor-pointer"
              onClick={e => setShow(!show)}
            ></i>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Promotion;
