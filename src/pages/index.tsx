import NavbarComponent from "./components/navbar/NavbarComponent"

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  bg-[#2A47F7]`}
    >
      <NavbarComponent />
    </main>
  );
}
