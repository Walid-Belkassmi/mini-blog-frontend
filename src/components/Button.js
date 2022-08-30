const Button = ({ type, text, disabled }) => {
  return (
    <button
      type={type}
      className=" inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out disabled:opacity-75 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
