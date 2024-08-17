import Image from "next/image";

type FeautreItemProps = {
  title: string;
  icon: string;
  variant: string;
  description: string;
};
export default function FeautreItem({
  title,
  icon,
  description,
  variant,
}: FeautreItemProps) {
  return (
    <li className={`flex w-full flex-1 flex-col items-start`}>
      <div className={`rounded-full ${variant} p-4 lg:p-7`}>
        <Image height={30} width={30} alt="feature icon" src={icon} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 lg:regular-20 mt-5 max-w-[600px] bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
}
