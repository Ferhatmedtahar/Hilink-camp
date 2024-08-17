import Image from "next/image";
import { PEOPLE_URL } from "../_constants";

type CampImageProps = {
  backgroundImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
};
export default function CampImage({
  backgroundImage,
  title,
  subTitle,
  peopleJoined,
}: CampImageProps) {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subTitle}</p>
          </div>
        </div>
        {/* peopleJoined */}
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4">
            {PEOPLE_URL.map((person, i) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={person}
                alt="person image"
                key={i}
                width={40}
                height={40}
              />
            ))}
          </span>
          <p className="bold-20 text-white"> {peopleJoined}</p>
        </div>
      </div>
    </div>
  );
}
