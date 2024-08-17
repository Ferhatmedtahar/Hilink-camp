import CampImage from "./CampImage";

export default function Camp() {
  return (
    <section className="2xl:max-container lg:20-py relative flex flex-col py-10 lg:mb-10 xl:mb-20">
      {/*  */}
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampImage
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subTitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampImage
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subTitle="Somewhere in the Wilderness"
          peopleJoined="100+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="relative flex flex-col gap-4 rounded-3xl bg-green-50 p-8 lg:w-[500px] lg:py-14 xl:py-16">
          <h2 className="regular-24 2xl:regular-40 lg:regular-32 text-white lg:pr-8">
            {" "}
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That&apos;s why we are here for those of you who want to start an
            adventure
          </p>
        </div>
      </div>
    </section>
  );
}
