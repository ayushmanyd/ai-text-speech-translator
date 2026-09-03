import React from "react";
import {
  SignInButton,
  Show,
  UserButton,
} from "@clerk/nextjs";

export default function AuthComponent(): React.JSX.Element {
  return (
    <div className="flex justify-center items-center">
      <Show when="signed-out">
        <div className="px-4 py-1 text-base font-medium border-2 border-[#ff0080] hover:bg-[#ff0080] rounded-md">
          <SignInButton />
        </div>
      </Show>
      <div className="flex justify-center items-center h-16">
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </div>
  );
}
