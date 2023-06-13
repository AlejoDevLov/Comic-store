import { Link } from "react-router-dom"

export const IconsNavbar = ({ classCarDiv,totalElemetnsCar,handleCarList, setIconHelp }) => {

  
  return (
    <>
    <div className="icons">
        <div className="home"><Link to='/home' title='Home'><img src="../../icons/Home.svg" alt="home icon" height="50%"/></Link></div>
        <div className="car">
            <img src="../../icons/ShoppingCart.svg" alt="icon car" height="50%" onClick={handleCarList}/>
            <div className={classCarDiv} >{totalElemetnsCar}</div>
        </div>
        <div className="account"><img src="../../icons/help-circle-outline.svg" alt="user-icon" height="50%" onClick={setIconHelp}/></div>
    </div>
    </>
  )
}
