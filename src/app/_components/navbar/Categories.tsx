"use client";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    lable: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach.",
  },
  {
    lable: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills.",
  },
  {
    lable: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern.",
  },
  {
    lable: "Country Side",
    icon: TbMountain,
    description: "This property is in the country side.",
  },
  {
    lable: "Pools",
    icon: TbPool,
    description: "This property has pools.",
  },
  {
    lable: "Island",
    icon: GiIsland,
    description: "This property is on Island.",
  },
  {
    lable: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to the lake.",
  },
  {
    lable: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing places nearby.",
  },
  {
    lable: "Castles",
    icon: GiCastle,
    description: "This property is a castle.",
  },
  {
    lable: "Camping",
    icon: GiForestCamp,
    description: "This property has camping places nearby.",
  },
  {
    lable: "Arctic",
    icon: BsSnow,
    description: "This property is in the Arctic.",
  },
  {
    lable: "Cave",
    icon: GiCaveEntrance,
    description: "This property has caves nearby.",
  },
  {
    lable: "Desert",
    icon: GiCactus,
    description: "This property is in the desert.",
  },
  {
    lable: "Barns",
    icon: GiBarn,
    description: "This property is in the barn.",
  },
  {
    lable: "Luxury",
    icon: IoDiamond,
    description: "This property is luxurious.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");

  const pathName = usePathname();
  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item, index) => (
          <CategoryBox
            key={index}
            label={item.lable}
            description={item.description}
            icon={item.icon}
            selected={category === item.lable}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
