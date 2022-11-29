import React, { useState, useEffect } from "react";
import "./Select.scss";
import Option from "./Option";

const Select = React.forwardRef((props, ref) => {
  const { name, options, handleSelect, defaultOption } = props;

  const [option, setOption] = useState();
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (defaultOption) {
      setOption(defaultOption);
    } else {
      setOption(options[0]);
    }
  }, []);

  useEffect(() => {
    const closeOptions = function (e) {
      setShowOptions(false);
    };

    if (showOptions) {
      document.addEventListener("click", closeOptions);
    }

    return () => {
      document.removeEventListener("click", closeOptions);
    };
  }, [showOptions]);

  const handeToggleOptions = function (e) {
    e.stopPropagation();
    setShowOptions((cur) => !cur);
  };

  const handleClick = (option) => {
    setOption(option);
    // setShowOptions(false)
    if (handleSelect) handleSelect(option);
  };

  const handleChange = () => {};

  if (!options | !option) 
  return ;
  
  return (
    <>
        <div className="a-customSelect">
          <p className="a-curSelect" onClick={handeToggleOptions}>
            {option.text}
            <img src="/04-product/svg/triangle.svg" alt="" />
          </p>
          <input
            ref={ref}
            name={name}
            value={option.value}
            onChange={handleChange}
            hidden
          />
          {showOptions && (
            <ul className="options">
              {options.map((opt) => (
                <Option
                  key={opt.value}
                  content={opt.text}
                  handleClick={() => handleClick(opt)}
                />
              ))}
            </ul>
          )}
        </div>
    </>
  );
});

export default Select;
