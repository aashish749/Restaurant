import React from "react";

const InputComponents = ({ name, inputtype, placeholder, options = [] }) => {
  return (
    <div className="mb-3 text-sm">
      {inputtype === "text" ? (
        <div>
          <label
            htmlFor={name}
            className="mx-1 text-dark font-semibold block mb-2"
          >
            {name}
          </label>
          <input
            type="text"
            required
            placeholder={placeholder}
            className="border-[1.5px] shadow-sm  px-3 py-2 rounded border-black/40 w-full "
          />
        </div>
      ) : //date
      inputtype === "date" ? (
        <div className="mb-4">
          <label
            htmlFor={name}
            className="mx-1 text-dark font-semibold block mb-2"
          >
            {name}
          </label>
          <input
            type="date"
            required
            min="2026-03-14"
            className="border-[1.5px] shadow-sm  px-3 py-2 rounded border-black/40 w-full "
          />
        </div>
      ) : inputtype === "select" ? (
        <div>
          <label
            htmlFor={name}
            className="mx-1 text-dark font-semibold block mb-2"
          >
            {" "}
            {name}
          </label>
          <select
            required
            name={name}
            id={name}
            className="border-[1.5px] shadow-sm  px-3 py-2 rounded border-black/40 w-full "
          >
            <option value="" disabled selected>
              {placeholder}
            </option>
            {options.map((item, index) => {
              return (
                <option value={item} className="w-full">
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      ) : inputtype === "textarea" ? (
        <div>
          <label
            htmlFor={name}
            className="mx-1 text-dark font-semibold block mb-2"
          >
            {name}
          </label>
          <textarea
            rows="4"
            type="text"
            placeholder={placeholder}
            className="border-[1.5px] shadow-sm  px-3 py-2 rounded border-black/40 w-full "
          />
        </div>
      ) : (
        <div>
          <label
            htmlFor={name}
            className="mx-1 text-dark font-semibold block mb-2"
          >
            {name}
          </label>
          <input
            type={inputtype}
            required
            placeholder={placeholder}
            className="border-[1.5px] shadow-sm  px-3 py-2 rounded border-black/40 w-full "
          />
        </div>
      )}
    </div>
  );
};

export default InputComponents;
