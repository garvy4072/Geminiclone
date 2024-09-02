import { createContext, useContext, useState } from "react";
import run from "../Config/Gemini.jsx";

export const Context = createContext();

export function ContextProvider({children}){
const [input , setinput ]= useState("")
const [recentprompt , setrecentprompt ]= useState("")
const [privous , setprivous] = useState([])
const [showresult , setshowresult] = useState(false)
const [loading , setlodaing ]= useState(false)
const [resultdata , setresultdata] = useState(" ")


const delaypara=(indexno ,nextword)=>{
setTimeout(() => {
    setresultdata((pre)=>pre+nextword)
}, 75*indexno);
}
const newchat = ()=>{
    setlodaing(false)
    setshowresult(false)
setinput("")
}
const onSent = async (prompt)=>{
    setresultdata("")
    setlodaing(true)
    setshowresult(true)
    let responses ;

    if(prompt !== undefined){
        setrecentprompt(prompt)
        responses = await run(prompt)

    }
    else{
        setprivous((pre)=>[...pre , input])
        setrecentprompt(input)
        responses= await run(input)
    }
   
let responseArray2 = responses.split("**")
let responseArray = responseArray2.map((item)=>{
    return item.replace("##" ," ")
})
let newarray=" " ;
for (let i = 0; i<responseArray.length ;i++){
    if(i ===0 || i%2 !== 1) {
        newarray +=responseArray[i]
    }
    else{
        newarray += "<b>"+responseArray[i]+"</b>"
    }
}
let newres = newarray.split("*").join("</br>")


let newrss= newres.split(" ")
for(let i = 0; i<newrss.length;i++){
    const arr = newrss[i]
    delaypara(i, arr+" ")
}


setlodaing(false)
setinput(" ")

    }
    
 const ContextValue = {
privous , 
setprivous , 
onSent , 
setrecentprompt ,
recentprompt , 
showresult , 
loading, 
resultdata ,
setresultdata , 
input , 
setinput , 
setshowresult, 
setlodaing,
newchat, 
 }

    return <Context.Provider value={ContextValue} >{children}</Context.Provider>
}

