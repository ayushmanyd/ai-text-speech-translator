import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: AuthLayoutProps): React.JSX.Element {
  return (
    <main className="m-10 p-10 flex items-center justify-center">
      {children}
    </main>
  );
}
