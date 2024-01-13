import ModeToggle from "@/components/ui/modeToggle";

const Nav = () => {
  return (
    <nav className=" p-4 flex h-14 items-center justify-between supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <span className="font-bold">GenUI</span>
      <ModeToggle />
    </nav>
  );
};
export default Nav;
