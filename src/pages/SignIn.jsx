import { SignIn } from "@clerk/clerk-react";
import '../index.css'

const SignInPage = () => {
  return (
    <div className="background-image-user">
      <div className="flex justify-center items-center translate-y-[25%]">
        <SignIn/>
      </div>
    </div>
  );
};

export default SignInPage;
