import Text from "./Text";
function Button({ onClick, icon }) {
  return (
    <div
      onClick={onClick}
      className={`
        ${icon && "flex gap-x-1.5 items-center justify-center"}
        cursor-pointer
        w-fit
        rounded shadow-2xl items-center
       bg-blue-500 text-white p-2`}
    >
      {icon && icon}
      <Text text={"Nouvelle Facture"} />
    </div>
  );
}

export default Button;
