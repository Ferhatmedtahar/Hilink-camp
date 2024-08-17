import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  children: React.ReactNode;
  icon?: string;
  variant:
    | "btn_dark_green"
    | "btn_green"
    | "btn_white"
    | "btn_white_text"
    | "btn_dark_green_outline";
  full?: boolean;
};
export default function Button({
  type,
  children,
  icon,
  variant,
  full,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`cursor-pointer ${variant} flexCenter bold-16 gap-2 rounded-full border ${full && "w-full"}`}
    >
      {icon && (
        <Image src={`${icon}`} alt="icon of a button" height={20} width={20} />
      )}
      {children}
    </button>
  );
}
