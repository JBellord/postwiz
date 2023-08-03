import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bell, HelpCircle, Settings } from "lucide-react";

function SidebarItem({ icon, name }) {
  return (
    <Link
      href="/"
      className="group w-full pl-6 py-3 flex justify-start items-center space-x-2 hover:transition-all hover:scale-102 hover:bg-rose-100/10 hover:rounded-3xl hover:cursor-pointer"
    >
      {icon}
      <span className="text-sm font-semibold group-hover:text-rose-500">
        {name}
      </span>
    </Link>
  );
}

function EditorSidebar() {
  return (
    <div className="w-full h-full p-3 flex flex-col justify-between items-center flex-nowrap overflow-hidden">
      <div className="w-full mb-4 px-3 flex justify-start items-center space-x-3">
        <Avatar>
          <AvatarImage src="https://pbs.twimg.com/profile_images/1509994781476376586/s_iiM2YN_400x400.jpg" />
          <AvatarFallback>JB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-start">
          <span className="font-medium text-xs">Welcome back</span>
          <span className="font-semibold text-sm">JIO</span>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start">Hello</div>
      <div className="w-full grid items-start gap-1">
        <SidebarItem
          icon={<Bell className="h-5 w-5 group-hover:stroke-rose-500" />}
          name={"Notification"}
        />
        <SidebarItem
          icon={<HelpCircle className="h-5 w-5 group-hover:stroke-rose-500" />}
          name={"Help"}
        />
        <SidebarItem
          icon={<Settings className="h-5 w-5 group-hover:stroke-rose-500" />}
          name={"Settings"}
        />
      </div>
    </div>
  );
}

export default EditorSidebar;