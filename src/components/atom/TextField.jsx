import { useId } from "react";

/**
 * TextField is an input field with a label !
 *
 * @param props All props that a common input or textarea take !
 * @param label Label of the input field
 * @param component Component of the input field (textarea or input)
 * @returns {JSX.Element}
 * @constructor
 */
export const TextField = ({ label, component, ...props }) => {
  const id = useId();

  const Component = component || "input";

  return (
    <div className="relative">
      <label
        className="block text-xs font-medium md:text-sm text-skin-secondary"
        htmlFor={id}
      >
        {label}
      </label>

      <Component
        className="w-full p-3 mt-1 text-sm text-black border-2 border-opacity-50 rounded focus:border-opacity-100"
        id={id}
        {...props}
      />
    </div>
  );
};
