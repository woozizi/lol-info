import DataList from "@/components/DataList";
import ItemCard from "@/components/ItemCard";
import { fetchItemList } from "@/utils/serverApi";

const ItemsListPage = async () => {
  const data = await fetchItemList();

  return (
    <DataList title={"아이템 목록"}>
      {Object.entries(data).map(([itemKey, item]) => (
        <ItemCard key={itemKey} itemKey={itemKey} item={item} />
      ))}
    </DataList>
  );
};

export default ItemsListPage;
