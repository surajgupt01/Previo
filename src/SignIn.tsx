import { SignIn } from '@clerk/clerk-react';


export default function Signin(){
    return(

        <div className='w-full h-screen bg-neutral-900 flex justify-center items-center'>

          <SignIn afterSignOutUrl={'/'}/>


        </div>




    )
}