import React from "react";
import "./signInUpPage.scss";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

export default function SignInUpPage() {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
}
