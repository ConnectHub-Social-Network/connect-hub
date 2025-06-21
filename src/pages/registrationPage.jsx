import {useForm} from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {useDispatch , useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import { registerUser } from "../store/Slices/AuthSlices";

  const registerSchema = z.object({
    username: z.string() .min(1,('username is required')),
    email: z.string() .email("invalid email address"),
    password: z.string() .min(6,("password must be at least six characters"))
     
})

 const  RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {error} = useSelector((state)=>state.auth)

  const {
     register, 
     handleSubmit , 
     formState:{errors}
    } = useForm({
      resolver: zodResolver(registerSchema)})

  const onRegister = async (data) => {
    try{
    await dispatch(registerUser(data)).unwrap();
    navigate("/signinForm")
    } catch(err) {
      console.log ("something went wrong", err)
    }
  };
  return (
    <div className="flex flex-col space-y-5">
      <div>
        <h1 className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center font-bold rounded
          ">c</h1>
          <span>ConnectHub</span>
          <p>Welcome back! sign Up to continue</p>
      </div>

    {error && (
      <div className="mb-4 rounded-md bg-red-50 text-red-600"> 
        {error}
      </div>
    )}
    <div className="bg-white rounded-sm w-80 h-120">
      <div className="flex mb-6 border-b border-gray-200">
      <button className= "flex-1 py-2 text-lg font-medium rounded-tl-lg text-white rounded-sm bg-blue-600 text-gray-500" 
      >Sign in</button>
      <button className="flex-1 py-2 text-lg font-medium rounded-tl-lg text-white rounded-sm bg-blue-600 text-gray-500">
        Sign Up </button>
     </div>
    <form onSubmit={handleSubmit(onRegister)} className="space-y-4">
      <div>
      <label htmlFor="username"
       className="block text-sm font-medium text-gray-700"
      >
       Username
      </label>
      <input type="username"
      id="username"
      placeholder="Username"
      {...register("username")}/>
       {errors.username &&(
        <p className="mt-1 text-sm text-red-600">
          {errors.username.message}
        </p>
       )}
       </div>

       <div>
      <label htmlFor="email"
       className="block text-sm font-medium text-gray-700"
      >
       Email
      </label>
      <input type="email"
      id="email"
      placeholder="your@email.com"
      {...register("email")}/>
       {errors.email &&(
        <p className="mt-1 text-sm text-red-600">
          {errors.email.message}
        </p>
       )}
       </div>

       <div>
      <label htmlFor="password"
       className="block text-sm font-medium text-gray-700"
      >
       Password
      </label>
      <input type="password"
      id="password"
      placeholder="......"
      {...register("password")}/>
       {errors.password &&(
        <p className="mt-1 text-sm text-red-600">
          {errors.password.message}
        </p>
       )}
       </div>
</form>
    </div>
    <button className="bg-blue-600 text-white w-full rounded-sm shadow-md px-4 py-2">Sign Up</button>
    </div>
  )
}
export default RegistrationPage;


