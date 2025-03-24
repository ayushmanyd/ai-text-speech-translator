import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function AuthComponent() {
  return (
    <div className="flex justify-center items-center">
      <SignedOut>
        <div className="px-4 py-1 text-base font-medium border-2 border-[#ff0080] hover:bg-[#ff0080] rounded-md">
          <SignInButton />
        </div>
        {/* <SignUpButton /> */}
      </SignedOut>
      <div className="flex justify-center items-center h-16">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
