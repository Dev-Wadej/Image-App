import React from 'react';
import "../styles/title.css"
const Title= (props)=>{

 const headerName =()=>{
    return console.log(props.titleName)
    props.titleNames.map((titleName)=>{
        console.log(titleName)
    })
    
    
}
return (
    <div className="containerAnimate">
        {props.titleNames.split('').map((titleName)=>{
            return <span key={Math.random()}> {titleName.toUpperCase()}</span>
                
        })
    }
      
    </div>
)

}
export default Title;