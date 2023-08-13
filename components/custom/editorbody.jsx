"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Twitter, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import MainEditor from "./maineditor";

function Pill({ name, icon, color }) {
  return (
    <div
      className={`group transition-all duration-300 ease-in-out flex items-center text-white rounded-3xl px-4 py-2 text-xs font-medium ${color} hover:delay-300 hover:cursor-pointer active:delay-300`}
    >
      {icon}
      <span>{name}</span>
      <Button
        className="transition-all ease-in-out ml-0 h-4 w-0 p-0 group-hover:delay-150 group-hover:ml-2 group-hover:w-4"
        size="icon"
        variant="ghost"
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
}

function EditorBody() {
  const [value, setValue] = useState("");

  return (
    // shadow-md rounded-t-3xl border
    <div className="absolute bottom-0 w-[65%] h-[100%] py-3 px-5">
      <div className="relative h-20 flex justify-between items-center space-x-3 p-4">
        <div className="flex justify-start space-x-3 p-2 items-center">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://pbs.twimg.com/profile_images/1509994781476376586/s_iiM2YN_400x400.jpg" />
            <AvatarFallback>JB</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center text-sm font-medium space-x-1">
              <span>JIO</span>
              <span className="text-slate-400">@GalacticJio</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 px-3">
          <Pill
            icon={<Twitter className="mr-1.5 h-3 w-3 fill-white" />}
            name={"Twitter"}
            color={"bg-black"}
          />
          <Pill
            icon={<Linkedin className="mr-1.5 h-3 w-3 fill-white" />}
            name={"LinkedIn"}
            color={"bg-sky-800"}
          />
          <Pill
            icon={<Instagram className="mr-1.5 h-3 w-3" />}
            name={"Instagram"}
            color={
              "bg-gradient-to-tr from-yellow-500 from-5% via-red-500 via-30% to-purple-600 to-90%"
            }
          />
        </div>
      </div>
      <div className="relative py-0 px-8">
        <MainEditor />
        <div className="w-full mt-2 p-2 flex justify-end items-center space-x-2">
          <Button
            size="sm"
            className="px-5 hover:bg-rose-400"
            variant="outline"
          >
            Save Draft
          </Button>
          <Button
            onClick={() => {
              console.log(value);
            }}
            className="px-6"
            size="sm"
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditorBody;
