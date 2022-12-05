import { useState, useEffect, createContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

const CollectContext = createContext([]);
export default CollectContext;

export const CollectContextProvider = ({ children }) => {
  const initCollect = {
    p_sid: 1,
    mb_sid: 0,
  };
  const location = useLocation()
  //收藏列表
  const [collectList, setCollectList] = useState([initCollect]);
  //收藏狀態（用true & false判斷）
  const [collection, setCollection] = useState(false);
  //收藏商品編號
  const [collectionNum, setCollectionNum] = useState([]);

  //localStorage得到member_sid
  const mb_sid = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth")).mb_sid
    : "尚未登入";
    // console.log(mb_sid);

  //抓收藏清單
  const getCollectList = async () => {
    if (mb_sid === "尚未登入") {
      console.log("未登入！無法加入收藏");
      return;
    }
    const response = await axios.get(
      `http://localhost:3004/product/collection?mb_sid=${mb_sid}`
    );
    const collectData = response.data.collection_rows;

    const collect = collectData.map((collection, i) => {
      return {
        p_sid: collection.food_product_sid,
        mb_sid: collection.mb_sid,
        collect: true,
      };
    });
    setCollectList(collect); //object

     //把商品sid從object撈出來
     let collectNum = [];
     for (let i = 0; i < collect.length; i++) {
       collectNum.push(collect[i].p_sid);
     }
     console.log({collectNum});
     setCollectionNum(collectNum);
     // console.log(collectNum)
   };

  //加入收藏
  const addCollect = async (food_product_sid) => {
    console.log('addCollect');
    if (mb_sid === "尚未登入") {
      console.log("未登入！無法加入收藏");
      return;
    }
    const response = await axios.get(
      `http://localhost:3004/product/add?sid=${food_product_sid}&mb_sid=${mb_sid}`
    );

  //建立新的收藏清單
    setCollectionNum([...collectionNum,food_product_sid])
  };

  //移除收藏
  const delCollect = async (food_product_sid, index) => {
    if (mb_sid === "尚未登入") {
      console.log("未登入！無法加入收藏");
      return;
    }
    // console.log(food_product_sid)
    const response = await axios.get(
      `http://localhost:3004/product/delete?sid=${food_product_sid}&mb_sid=${mb_sid}`
    );
    const a = collectionNum.filter((e)=> e !== food_product_sid)
    // console.log(a)
    setCollectionNum(a)
    // setCollectList(newcollection);
    //更新收藏狀態
    // setCollection(false);
  };

    //確定清單裡商品的sid有沒有重複
    const checkList = async (food_product_sid) => {
      const listIndex = collectionNum.indexOf(food_product_sid)
        if (listIndex === -1) {
          addCollect(food_product_sid)
          setCollectionNum([...collectionNum, food_product_sid])
        } else {
          delCollect(food_product_sid, listIndex)
          const a = collectionNum.filter((e)=> e !== food_product_sid)
          setCollectionNum(a)
          console.log(a);
        }
    }

  //把狀態無限傳給小孩（商品細節頁需要）
  const handleClick = isHeart => { setCollection(isHeart) }

  useEffect(() => {
    getCollectList();
  }, [collection, mb_sid,location]);

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
        checkList,
        handleClick,
      }}
    >
      {children}
    </CollectContext.Provider>
  );
};