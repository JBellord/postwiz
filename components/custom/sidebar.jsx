import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bell, HelpCircle, Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TabItems from "./tabitems";

function SidebarItem({ icon, link, name }) {
  return (
    <Link
      href={link}
      className="bg-slate-900 rounded-3xl group w-[92%] pl-6 py-2 flex justify-start items-center space-x-2 hover:transition-all hover:scale-102 hover:bg-rose-100/10 hover:rounded-3xl hover:cursor-pointer"
    >
      {icon}
      <span className="text-xs font-medium group-hover:text-rose-500">
        {name}
      </span>
    </Link>
  );
}

function EditorSidebar() {
  return (
    <div className="relative w-full h-full p-2 space-y-2 overflow-hidden">
      <div className="w-full mb-6 px-3 flex justify-start items-center space-x-3">
        <Avatar>
          <AvatarImage src="https://pbs.twimg.com/profile_images/1509994781476376586/s_iiM2YN_400x400.jpg" />
          <AvatarFallback>JB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-start">
          <span className="font-medium text-xs">Welcome back</span>
          <span className="font-semibold text-sm">JIO</span>
        </div>
      </div>
      <Tabs defaultValue="drafts" className="w-64 h-96">
        <TabsList className="grid w-full grid-cols-2 bg-slate-800">
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="posted">Posted</TabsTrigger>
        </TabsList>
        <TabsContent
          className="bg-slate-950 overflow-hidden h-full"
          value="drafts"
        >
          <TabItems />
        </TabsContent>
        <TabsContent className="bg-slate-950 rounded-2xl" value="posted">
          Posted 1
        </TabsContent>
      </Tabs>
      <div className="w-full absolute bottom-0  grid items-start gap-2">
        <SidebarItem
          icon={<Bell className="h-4 w-4 group-hover:stroke-rose-500" />}
          name={"Notification"}
          link={"/editor/settings"}
        />
        <SidebarItem
          icon={<HelpCircle className="h-4 w-4 group-hover:stroke-rose-500" />}
          name={"Help"}
          link={"/editor/settings"}
        />
        <SidebarItem
          icon={<Settings className="h-4 w-4 group-hover:stroke-rose-500" />}
          name={"Settings"}
          link={"/editor/settings"}
        />
      </div>
    </div>
  );
}

export default EditorSidebar;
