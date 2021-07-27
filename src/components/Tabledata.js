import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function Tabledata({ data, onDelete, onEdit }) {
  const [editable, seteditable] = useState(false);

  const [updatedValue, setupdatedValue] = useState({
    item: data.item,
    units: data.units,
    unitPrice: data.unitPrice,
  });

  const handle = (e, fieldName) => {
      const number = parseInt(e.target.innerText)?parseInt(e.target.innerText):e.target.innerText
    setupdatedValue({ ...updatedValue, [fieldName]: number });
    
  };

  return (
    <>
      <tr>

        <td contentEditable={editable} onBlur={(e) => handle(e, "item")}>
            
          {data.item}
          
        </td>
        <td contentEditable={editable} onBlur={(e) => handle(e, "units")}>
          {data.units}
        </td>
        <td contentEditable={editable} onBlur={(e) => handle(e, "unitPrice")}>
          {data.unitPrice}
        </td>
        <td>&#8377;{updatedValue.units * updatedValue.unitPrice}</td>
        {!editable ? (
          <td>
            <span>
              <DeleteIcon onClick={() => onDelete(data.id)} />
            </span>
            <span>
              <EditIcon onClick={() => seteditable(true)} />
            </span>
          </td>
        ) : (
          <td>
            
            <button
              onClick={() => {
                seteditable(false);
                
                onEdit(data.id, updatedValue);
                
              }}
            >
              
              Save
            </button>
          </td>
        )}
      </tr>
    </>
  );
}