"use client";
import { FcReadingEbook } from "react-icons/fc";
import M from "../../../../Theme/Mode/page";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TfiMenuAlt } from "react-icons/tfi";
import { useSearchParams } from "next/navigation";

const SHEET_SIDES = ["left"];

export default function SheetSide() {
  const search = useSearchParams();
  let k = search.get("teacher");
  let navItems;
  // if (k) {
  //   navItems = [
  //     { label: "Home", href: "/" },
  //     // { label: "Exam Details", href: "/Components/Dashboard/Instructions" },
  //     // { label: "Quiz", href: "/Components/Dashboard/ExamQuiz" },
  //     {
  //       label: "Admin Dashboard",
  //       href: "/Components/Dashboard/AdminDashboard",
  //     },
  //     { label: "Exam Result", href: "/Components/Dashboard/Results" },
  //     { label: "About", href: "/Components/Dashboard/About" },
  //     { label: "Logout", href: "/Login/AdminLogin" },
  //   ];
  // }
  // else{
  //   navItems = [
  //     { label: "Home", href: "/" },
  //     { label: "Exam Details", href: "/Components/Dashboard/Instructions" },
  //     { label: "Quiz", href: "/Components/Dashboard/ExamQuiz" },
  //     // {
  //     //   label: "Admin Dashboard",
  //     //   href: "/Components/Dashboard/AdminDashboard",
  //     // },
  //     // { label: "Exam Result", href: "/Components/Dashboard/Results" },
  //     { label: "About", href: "/Components/Dashboard/About" },
  //     { label: "Logout", href: "/Login/Form" },
  //   ];
  // }
  // }
  if (k) {
    navItems = [
      { label: "Home", href: "/" },
      // { label: "Exam Details", href: "/Components/Dashboard/Instructions" },
      // { label: "Quiz", href: "/Components/Dashboard/ExamQuiz" },
      // {
      //   // label: "Admin Dashboard",
      //   href: "/Components/Dashboard/AdminDashboard",
      // },
      { label: "Exam Result", href: "/Components/Dashboard/Results" },
      { label: "About", href: "/Components/Dashboard/About" },

      { label: "Logout", href: "/Login/AdminLogin" },
    ];
  }
  else{
    navItems = [
      { label: "Home", href: "/" },
      { label: "Exam Details", href: "/Components/Dashboard/Instructions" },
      { label: "Quiz", href: "/Components/Dashboard/ExamQuiz" },
      // {
      //   label: "Admin Dashboard",
      //   href: "/Components/Dashboard/AdminDashboard",
      // },
      // { label: "Exam Result", href: "/Components/Dashboard/Results" },
      { label: "About", href: "/Components/Dashboard/About" },
      { label: "Logout", href: "/Login/Form" },

    ];
  }
  return (
    <div className="  ">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="">
            <Button variant="outline" className=" ">
              <TfiMenuAlt />
            </Button>
          </SheetTrigger>

          <SheetContent side={side}>
            <div className="flex-1 flex-col  gap-10 h-screen bg-blac overflow-auto top-0 ">
              <div>
                <M />
                <Link href="/">
                  <h1 className="text-3xl font-signature flex items-center gap-1 md:static md:py-6 py-9 cursor-pointer ">
                    Portal
                    <FcReadingEbook className="text-3xl " />
                  </h1>
                </Link>
              </div>
              {navItems && (
                <ol className="flex flex-col items-start gap-9 w-full">
                  {navItems.map((item, index) => (
                    <li key={index} className="flex mr-6">
                      <Link href={`${item.href}`}>
                        <p className="relative hover:left-1 flex items-center gap-2">
                          <IoIosArrowForward />
                          {item.label}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
