
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
        <h1 className='text-3xl text-center font-semibold my-7'>Signup</h1>
        <form className='flex flex-col gap-4 w-1/2 mx-auto'>
            <input type="text" placeholder='First Name' className='border p-2  rounded-lg '/>
            <input type="text" placeholder='Last Name' className='border p-2  rounded-lg'/>
            <input type="email" placeholder='Email' className='border p-2  rounded-lg'/>
            <input type="password" placeholder='Password' className='border p-2  rounded-lg'/>
            <button className='bg-blue-500 text-white p-2 rounded-lg hover:opacity-75 cursor-pointer'>Signup</button>
        </form>
        <div className='flex gap-2 mt-5 text-center justify-center'>
            <p>Have an account?</p>
            <Link to={"/"} className='text-blue-500'>Sign in</Link>
        </div>
    </div>
  )
}

export default Signup;