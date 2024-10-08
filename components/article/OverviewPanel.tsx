import Image from "next/image";
import overview1 from "@/public/images/overview-1.png";
import overview2 from "@/public/images/overview-2.png";
import overview3 from "@/public/images/overview-3.png";
import overview4 from "@/public/images/overview-4.png";
import overview5 from "@/public/images/overview-5.png";
import overview6 from "@/public/images/overview-6.png";
import PanelTitle from "./PanelTitle";

const OverviewPanel = () => {
  return (
    <div className="flex flex-col border bg-white outline outline-[14px] outline-white max-w-[260px] float-right mb-2 ml-4 p-1.5 gap-2">
      <h3 className="mx-auto">Cat</h3>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Image
            src={overview1}
            alt="Cat lying down"
            className="grow w-[55%] object-cover hover:cursor-pointer"
          />
          <Image
            src={overview2}
            alt="Sitting cat looking over shoulder"
            className="grow w-[20%] object-cover hover:cursor-pointer"
          />
        </div>

        <div className="flex gap-2">
          <Image
            src={overview3}
            alt="Sitting cat facing forward"
            className="grow w-[40%] object-cover hover:cursor-pointer"
          />
          <Image
            src={overview4}
            alt="Regal cat"
            className="grow w-[45%] object-cover hover:cursor-pointer"
          />
        </div>

        <div className="flex gap-2">
          <Image
            src={overview5}
            alt="Cautious kitty"
            className="grow w-[40%] object-cover hover:cursor-pointer"
          />
          <Image
            src={overview6}
            alt="Cat photoshoot"
            className="grow w-[20%] object-cover hover:cursor-pointer"
          />
        </div>
      </div>
      <span className="text-sm mx-auto">Various types of cat</span>
      <PanelTitle>Temporal Range</PanelTitle>
      <p>9,500 years ago - present</p>
      <PanelTitle>Conservation Status</PanelTitle>
      <p>Domesticated</p>
      <PanelTitle>Scientific Classification</PanelTitle>
      <div className="flex justify-between">
        <p>Domain:</p>
        <a>Eukaryota</a>
      </div>
      <div className="flex justify-between">
        <p>Kingdom:</p>
        <a>Animalia</a>
      </div>
      <div className="flex justify-between">
        <p>Class:</p>
        <a>Mammalia</a>
      </div>
    </div>
  );
};

export default OverviewPanel;
