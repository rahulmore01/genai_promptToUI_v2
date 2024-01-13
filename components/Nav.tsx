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
// import Link from "next/link";

// import { cn } from "@/lib/utils";
// import ModeToggle from "@/components/ui/modeToggle";

// const Nav = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
//   return (
//     <nav
//       className={cn(
//         "absolute w-screen flex justify-between space-x-4 lg:space-x-6 h-[70px] px-10",
//         className
//       )}
//       {...props}
//     >
//       <Link
//         href="/examples/dashboard"
//         className="text-lg font-bold transition-colors hover:text-primary"
//       >
//         GenUI
//       </Link>

//       <div>
//         <ModeToggle />
//       </div>
//     </nav>
//   );
// };
// export default Nav;
