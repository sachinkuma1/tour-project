import logo from './logo.svg';
import './App.css';
import url from "./Config.js";
import { useState , useEffect} from 'react';
import List from "./List";

function App() {
 
  const [data, setData]=useState([]);
 const fetchfunc= async()=>{
  const temp=await fetch(url);
  const json=await temp.json();
  setData(json);
  console.log(json);
 }

 useEffect(()=>{
  fetchfunc();
 }, []);

 const remove=(id)=>{
  const newdata=data.filter((dat)=>dat.id!=id);
  setData(newdata);
 }



 if(data.length==0) return <div>loading...</div>
 else{
  return (
    <div className="App">
      <List  data={data } remove={remove}/>
    </div>
  );
 }
}

export default App;
