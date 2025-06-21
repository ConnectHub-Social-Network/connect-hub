import {Link , useNavigate} from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { LogOut } from "lucide-react";
import { LogoutUser } from "../store/Slices/AuthSlices"

const Header = () => {
const dispatch = useDispatch();
const navigate = useNavigate()
const {status , isAuthenticated , User} = useSelector((state) => state.auth)
    return(
        
        <div className='flex flex-row justify-between bg-white shadow-md fixed w-full '>
            
         <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center font-bold rounded
          ">C</div>
         <h1 className="text-xl font-bold  ">ConnectHub</h1>
         <div className="text-sm font-semibold text-gray-700 flex flex-row space-x-5 mx-25">
         {/* put user image here */}
            <span> Jordan Martinez </span>
            <Link to="/signinForm"><LogOut className="h-5 w-5"/></Link>
        </div>
       </div>
        
    )
}

export default Header;