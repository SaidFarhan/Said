import React from "react";
export default function List({data, handleEdit, handleDelete}) {
  return (

    <div className="list-group">
      {
        data.map((contact)=> {
          return (
            <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{contact.name}</h5>
              <div>
                <button onClick={()=> handleEdit(contact.id)} 
                className="btn btn-sm btn-info m-1 text-white"
                >
                  Ubah
                </button>

                <button onClick={() => handleDelete(contact.id)} 
                className="btn btn-sm btn-danger"
                >
                  Hapus
                </button>
              </div>
            </div>
            <p className="mb-1">{contact.telp}</p>
          </div>
          )
        })
      }

    </div>
  );
}
