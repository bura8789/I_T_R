import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config";
import "./components.css";

const Сars = () => {
  const [data, setData] = useState([]);
  const products = collection(db, "cars");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(products);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  });

  console.log(data);
  return (
    <section className="Container">
      {data.map((item) => (
        <div className="Card">
          <div>
            <img className="Image" src={item.img} alt="" />
            <div className="Card1">
              <div className="Text">
                <h6 className="Text1">{item.name}</h6>
                <p className="p"> Day - {item.day} $</p>
                <p className="p">Week - {item.week} $</p>
                <p className="p">Month - {item.month} $</p>
              </div>
              <button className="Button">Ijaraga olish</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Сars;
