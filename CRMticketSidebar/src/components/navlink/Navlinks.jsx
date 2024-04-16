import { NavLink } from "react-router-dom"



const MyNavlinks=(props)=>{
  return(

    <NavLink to={props.to}>
      {props.icon} {props.sidelinks}
    </NavLink>
  )
}


export default MyNavlinks