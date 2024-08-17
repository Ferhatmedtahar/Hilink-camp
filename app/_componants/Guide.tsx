import Image from "next/image";

export default function Guide() {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container relative w-full pb-24">
        <Image src="/camp.svg" alt="camp emoji" width={50} height={50} />
        <p className="regular-18 -mt-1 mb-3 uppercase text-green-50">
          we are here for you{" "}
        </p>
        <div className="flex flex-col flex-wrap justify-between gap-5 lg:gap-10 xl:flex-row">
          <h2 className="bold-40 lg:bold-64 capitalize xl:max-w-[420px]">
            guide you to easy path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          width={1440}
          height={580}
          className="w-full object-cover object-top 2xl:rounded-5xl"
          alt="orange boat in middle of sea"
        />
        <div className="absolute flex gap-3 rounded-3xl border bg-white py-8 pl-5 pr-7 shadow-md md:left-[5%] lg:top-20">
          <Image src="/meter.svg" alt="meter" width={25} height={25} />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>

              <p className="bold-20 mt-2">Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
