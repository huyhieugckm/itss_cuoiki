import logo from './logo.svg';
import './App.css';
import Cshook from "./Cshook";
function App() {
  const arrayList = ["Huyen","Long","Manh","Hieu"];
  const [insertName,onSubmit,name,arrData] = Cshook(arrayList)
return (
  <div>
     <div>
         学生一覧：[Huyen,Long,Manh,Hieu]
     </div>
      <div>
          追加する名前を入力してください。
      </div>
      <input onChange={insertName}/>
      <button onClick={()=>onSubmit()}>
          確定
      </button>
      <div>
          追加する名前:{name}
      </div>
      <div>
          新しい一覧：{arrData.map((i,key)=>{
          if(key ==0)
          {
              return(
                  <span>
                   [{i},
               </span>
              )} else if(key == arrData.length -1){
              return(
                  <span>{i}]</span>
              )
          } else{
              return(
                  <span>{i},</span>
              )
          }
      } )}
      </div>
  </div>
);
}

export default App;
