import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { usePopper } from "react-popper";

const Dropdown = ({ children, button }) => {
  let [referenceElement, setReferenceElement] = React.useState();
  let [popperElement, setPopperElement] = React.useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
  });
  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className="hover:bg-gray-300 bg-opacity-10 w-8 h-8 rounded-full transition ease-in-out duration-100 focus:outline-none flex justify-center items-center"
        ref={setReferenceElement}
      >
        {button}
      </Menu.Button>

      <Menu.Items
        as="ul"
        className="bg-white absolute rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-3 cursor-pointer z-50"
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {React.Children.map(children, child => {
          return (
            <Menu.Item
              as="li"
              className="hover:bg-gray-300 block whitespace-nowrap px-10"
            >
              {React.cloneElement(child, {
                ...child.props,
              })}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
