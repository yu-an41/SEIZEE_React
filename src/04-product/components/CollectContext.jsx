import { useState, useEffect, createContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

const CollectContext = createContext([]);
export default CollectContext;

export const CollectContextProvider = ({ children }) => {
  let initCollect = {
    p_sis: 1,
    m_sid: 0,
  };

  //收藏列表
  const [collectList, setCollectList] = useState([initCollect]);
  //收藏狀態
  const [collection, setCollection] = useState(false);
  //收藏商品編號
  const [collectionNum, setCollectionNum] = useState([]);

  //localStorage得到member_sid
  const member_sid = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth")).member_sid
    : "尚未登入";

  //抓收藏清單
  const getCollection = async () => {
    if (member_sid === "尚未登入") {
      console.log("未登入！無法加入收藏");
      return;
    }

    const response = await axios.get(
      `http://localhost:3002/product/collection?member_sid=${member_sid}`
    );
    //console.log(response)
    const collectData = response.data.collection_rows;
    const collect = collectData.map((collection, i) => {
      return {
        p_sid: collection.food_product_sid,
        m_sid: collection.member_sid,
        collect: true,
      };
    });

    setCollection(collect);
    console.log(collection);

    //把商品sid從object撈出來
    let collectNum = [];
    for (let i = 0; i < collect.length; i++) {
      collectNum.push(collect[i].p_sid);
    }
    setCollectionNum(collectNum);
    // console.log(collectNum)
  };

  //加入收藏
  const addCollect = async (food_product_sid) => {
    if (member_sid === "尚未登入") {
      console.log("未登入！無法加入收藏");
      return;
    }

    const response = await axios.get(
      `http://localhost:3002/product/add?sid=${food_product_sid}&member_sid=${member_sid}`
    );

  //建立新的收藏清單並更新狀態
    const newCollect = [
      ...collection,
      { p_sid: food_product_sid, m_sid: member_sid, collect: true },
    ];
    setCollectList(newCollect);
    setCollection(true);
  };

  //移除收藏
  const delCollect = async (food_product_sid, index) => {
    if (member_sid === "尚未登入") {
      console.log("未登入！無法加入收藏");
      return;
    }

  //判斷收藏清單新增和移除
    const response = await axios.get(
      `http://localhost:3002/product/delect?sid=${food_product_sid}&member_sid=${member_sid}`
    );
    const collect1 = collectList.slice(0, index);
    const collect2 = collectList.slice(index + 1);
    const newCollect = collect1.concat(collect2);
    setCollectList(newCollect);
    setCollection(false);
  };

  //判斷商品sid新增和移除
  const handleClick = async (sid) => {
    const index = collectList.indexOf(sid);
    if (index === -1) {
      addCollect(sid);
      setCollectionNum([...collectionNum, sid]);
    } else {
      delCollect(sid, index);
      const collect1 = collectionNum.slice(0, index);
      const collect2 = collectionNum.slice(index + 1);
      const newCollectNum = collect1.concat(collect2);
      setCollectionNum(newCollectNum);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <CollectContext.Provider
      value={{
        collection,
        setCollection,
        collectList,
        setCollectList,
        collectionNum,
        setCollectionNum,
        addCollect,
        delCollect,
        handleClick,
      }}
    >
      {children}
    </CollectContext.Provider>
  );
};
