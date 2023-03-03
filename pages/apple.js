import React from "react";
import rarity333 from "../config/rarity333.json";
import rarity3333 from "../config/rarity3333.json";

const apple = () => {
  const steps333 = [118, 628, 1139, 1650, 2161, 2680];
  const steps3333 = [84, 263, 443, 662, 802, 982]

  const rarityOf333 = [];
  const rarityOf3333 = [];
  const obj333 = []
  const obj3333 = []

  rarity333.map((item) =>
    rarityOf333.push({
      rarity: item.Rarity,
      id: item.token_id,
    })
  );

  rarity3333.map((item) =>
    rarityOf3333.push({
        rarity: item.Rarity,
        id: item.token_id,
      })
  );

  function checkStage(item, startIndex, stopIndex, array) {
    if (item.rarity > array[startIndex] && item.rarity < array[stopIndex]) {
      return item;
    }
  }

  const result333 = rarityOf333.filter(item => checkStage(item, 0, 1, steps333));

  (result333.map(obj => (
    obj333.push(Number(obj.id))
  )));

  console.log(obj333)

  return <div>apple</div>;
};

export default apple;


