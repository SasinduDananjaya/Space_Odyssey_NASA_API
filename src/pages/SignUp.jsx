import { SignUp } from "@clerk/clerk-react";
import '../index.css'

const SignUpPage = () => {
  return (
    <div className="background-image-user">
      <div className="flex justify-center items-center translate-y-[15%]">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
