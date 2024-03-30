import { useState } from "react";
import Onscreen from "./Onscreen";
const Form=()=>{
    const [data,setentereddata]=useState([])
    const handleFormSubmit=(event)=>{
        event.preventDefault()
        const form_data= {
            Name:event.target.elements.name.value,
            Url:event.target.elements.url.value
        }
        setentereddata([form_data,...data])

    }
    const deleteHandler=(ele1,item1)=>{
        setentereddata(data.filter((_,i)=>i!==item1))
    }
    const edithandler=(ele1,item1)=>{
        console.log('hiii')
        setentereddata(data.filter((_,i)=>i!==item1))
        const t = document.getElementById('name')
        const l=document.getElementById('url')
        l.value=ele1.Url
        t.value=ele1.Name

    }
    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <h1 align="center">Bookmarks Website</h1>
                <label htmlFor="name">Name</label>
                <input id='name' type='text'></input>
                <label htmlFor="url">URL</label>
                <input type='url' id='url'></input>
                <button type="submit">Submit</button>
            </form>
            <Onscreen props={data} ondelete={deleteHandler} onedit={edithandler}/>
        </div>
    )

}
export default Form