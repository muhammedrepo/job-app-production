const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;

// const FormRow = ({ type, name, value, handleChange, labelText }) => {
//   return (
//     <div className="mb-4">
//       <label
//         htmlFor={name}
//         className="block text-base mb-2 capitalize tracking-wider"
//       >
//         {labelText || name}
//       </label>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={handleChange}
//         className="w-full py-1.5 px-3 h-9 rounded-sm bg-grey-50 border border-solid border-grey-200"
//       />
//     </div>
//   );
// };

// export default FormRow;
