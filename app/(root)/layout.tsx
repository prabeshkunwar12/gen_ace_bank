import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedInUser = {firstName: 'Prabesh', lastName: 'Kunwar'}

  return (
    <main className="flex h-screen w-full font-inter">
        <SideBar user={loggedInUser} />
        {children}
    </main>
  );
}