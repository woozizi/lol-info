import { Item } from "@/types/Items";
import { SERVER_URL, VERSION } from "@/app/constants/constants";
import Image from "next/image";
import React from "react";

const ItemCard = ({ itemKey, item }: { itemKey: string; item: Item }) => {
  return (
    <div>
      <div className="flex h-auto flex-col items-center justify-center rounded-2xl border p-8">
        <Image
          src={`${SERVER_URL}/${VERSION}/img/item/${itemKey}.png`}
          alt={item.name}
          width={50}
          height={50}
        />
        <h2 className="mt-2 font-semibold">{item.name}</h2>
        <p className="text-sm">가격 : {item.gold.base}</p>
        <p className="text-sm">팔때 : {item.gold.sell}</p>
        <p className="text-sm">{item.plaintext}</p>
        <p></p>
      </div>
    </div>
  );
};

export default ItemCard;
