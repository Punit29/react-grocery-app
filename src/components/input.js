import React, { useState } from "react";

export default function Input({ onadd }) {
  const [item, setitem] = useState("");
  const [units, setunits] = useState("");
  const [unitPrice, setunitPrice] = useState("");
  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => {
          setitem(e.target.value);
        }}
      />
      <input
        type="text"
        value={units}
        onChange={(e) => {
          setunits(e.target.value);
        }}
      />
      <input
        type="text"
        value={unitPrice}
        onChange={(e) => {
          setunitPrice(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          onadd(item, units, unitPrice);
          setitem("");
          setunits("");
          setunitPrice("");
        }}
      >
        Add Item
      </button>
    </div>
  );
}