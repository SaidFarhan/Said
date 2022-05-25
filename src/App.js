import "./App.css";
import List from "./List";
import {useState} from "react";
import {uid} from "uid";

function App() {
  const [contacts, setContacts] = useState([
  //   {
  //     id : 1,
  //     name: "Saifal",
  //     telp: "08838748927",
  // },
  // {
  //   id : 2,
  //   name: "Muslem",
  //   telp: "08838748927",
  // },
 ]); 

const [IsUpdate, setIsUpdate] = useState({id: null, status: false});

const[formData, setFormData] = useState({
  name: "",
  telp: "",
})

function handleChange(e){
  let data = {...formData};
  data[e.target.name] = e.target.value;
  setFormData(data);
}

function handleSubmit(e){
  e.preventDefault();
alert("Data telah tersimpan");
let data = [...contacts];
if(formData.name === ""){
  return false;

}
if(formData.telp === ""){
  return false;

}

if (IsUpdate.status){
  data.forEach((contacts)=>{
    if(contacts.id === IsUpdate.id){
    contacts.name = formData.name;
    contacts.telp = formData.telp;
    }
  });
} else {
  data.push({id: uid(), name: formData.name, telp: formData.telp});
}

//menambahkan kontak 
setIsUpdate({ id:null, status: false});
setContacts(data);
setFormData({name:"",telp:""});

}

function handleEdit(id){
  let data = [...contacts];
  let foundData = data.find((contacts)=> contacts.id === id);
  setFormData({name: foundData.name, telp: foundData.telp});
  setIsUpdate({id:id, status:true});
}

function handleDelete(id){
let Data = [...contacts];
let filteredData = Data.filter(contact => contact.id !== id);
setContacts(filteredData);
}

  return (

    <div className="App border p-3">
      <h1 className="px-3 py-3 text-center">KONTAK SAYA</h1>

      <form onSubmit={handleSubmit} className="px-3 py-4">
        <div className="form-group">
          <label htmlFor="">Nama</label>
          <input 
          type="text" 
          className="form-control" 
          onChange={handleChange}
          value={formData.name} 
          name="name" 
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">No. Telp</label>
          <input 
          type="text" 
          className="form-control"
          onChange={handleChange}
          value={formData.telp} 
          name="telp" 
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Simpan
          </button>
        </div>
      </form>

      <List handleDelete={handleDelete} handleEdit={handleEdit} data={contacts} />
      
    </div>
  );
}

export default App;
