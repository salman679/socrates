"use client";
import logo from "../assets/Logo icon.svg";
import arrow from "../assets/icon=sidebar-left.svg";
import routing from "../assets/routing-2.svg";
import userImage from "../assets/Rectangle 1614425118.png";

import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FolderPlus, MessageSquarePlus, Search, Settings } from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <div
      className={`h-full absolute md:static flex flex-col pr-3 border-border bg-neutral-800 backdrop-blur ${
        isOpen ? "w-60" : "w-16"
      }`}
    >
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className="w-7 h-7"
          onClick={() => setIsOpen(!isOpen)}
        />
        <span
          className={`font-semibold text-lg ${isOpen ? "block" : "hidden"}`}
        >
          socrates
        </span>
        <div className="ml-auto flex items-center gap-1">
          <Button
            size="icon"
            className={`h-8 w-8 cursor-pointer ${isOpen ? "" : "hidden"}`}
          >
            <Search className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            className={`h-8 w-8 cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={arrow} alt="" />
          </Button>
        </div>
      </div>

      <div className="py-4 space-y-2">
        <Button
          variant="outline"
          className="w-full flex items-center justify-start gap-2 bg-neutral-800 rounded-full border-gray-400/20 hover:bg-gray-400/20 hover:text-white cursor-pointer"
        >
          <FolderPlus className="h-4 w-4" />
          {isOpen && <span> Add folder</span>}
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start gap-2 bg-neutral-800 rounded-full border-gray-400/20 hover:bg-gray-400/20 hover:text-white cursor-pointer"
        >
          <MessageSquarePlus className="h-4 w-4" />
          {isOpen && <span>Create chat</span>}
        </Button>
      </div>

      <div className="mt-auto">
        <div className={`py-4 border-border ${isOpen ? "" : "hidden"}`}>
          <div className="rounded-2xl bg-neutral-700 p-4 space-y-2">
            <div>
              <h3 className="font-medium">Upgrade to Premium</h3>
              <p className="text-xs text-zinc-500">
                Make the most of all features!
              </p>
            </div>
            <Button
              variant="outline"
              className="w-full rounded-full bg-neutral-700 border border-amber-500 hover:bg-amber-500/20 hover:text-white cursor-pointer"
            >
              Upgrade plan
            </Button>
          </div>
        </div>

        <div className="border-border">
          <div className="flex items-center gap-2">
            <Button size="icon" className="rounded-full h-8 w-8 bg-zinc-700">
              <img src={routing} alt="routing" />
            </Button>
            <span className={`text-sm ${isOpen ? "block" : "hidden"}`}>
              Flow AI Templates
            </span>
          </div>
        </div>

        <div className="pt-4 border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={userImage} alt="Jessica Mills" />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <span className={`text-sm ${isOpen ? "block" : "hidden"}`}>
                Jessica Mills
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-full cursor-pointer ${
                isOpen ? "" : "hidden"
              }`}
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
