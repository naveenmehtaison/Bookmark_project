import React from "react"
const Onscreen=(props)=>{
    const deletehandler=(ele1,item1)=>{
        props.ondelete(ele1,item1)

    }
    const edithandler=(ele1,item1)=>{
        props.onedit(ele1,item1)
    }
    console.log(props.props)
    return(
        <div>
            <h2>All Bookmarks</h2>
            {props.props.map((ele,item)=>(
                <div>
                    <p>{ele.Name}</p>
                    <a href={ele.Url}>{ele.Url}</a>
                    <button onClick={()=>deletehandler(ele,item)}>Delete</button>
                    <button onClick={()=>edithandler(ele,item)}>Edit</button>
                </div>
            ))}

        </div>
    )

}
export default Onscreen