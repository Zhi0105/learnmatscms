import {FaAngleDown} from 'react-icons/fa'

export const DropDown = ({
  ariaPlaceHolder,
  value,
  onChange,
  required,
  data = [],
  disabled,
  className
}) => {
  return (
    <div className="select-container relative w-full">
      <select
        className={className}
        value={value}
        onChange={onChange}
        autoComplete="autocomplete_off_hack_xfr4!k"
        aria-controls="multiselect-options"
        aria-expanded="false"
        aria-labelledby="assist"
        role="combobox"
        id="underlined_dropdown"
        required={required}
        disabled={disabled}
      >
        <option value="" hidden>
          {value ? value : ariaPlaceHolder}
        </option>
        {data.length ? (
          data.map(
            (item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              );
            }
          )
        ) : (
          <option value="" disabled>
            The list is empty
          </option>
        )}
      </select>
      <div className='absolute -inset-y-0 right-0 flex items-center pointer-events-none px-4'>
        <FaAngleDown width={10} height={10} className="text-gray-400" />       
      </div>
    </div>
  );
};