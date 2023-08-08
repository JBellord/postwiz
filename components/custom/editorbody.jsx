import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Twitter } from "lucide-react";

function EditorBody() {
  return (
    <div className="absolute bottom-0 w-[64%] rounded-t-3xl h-[90%] p-2 border">
      <div className="relative h-20 flex items-center space-x-3 p-3">
        <Avatar className="h-14 w-14">
          <AvatarImage src="https://pbs.twimg.com/profile_images/1509994781476376586/s_iiM2YN_400x400.jpg" />
          <AvatarFallback>JB</AvatarFallback>
        </Avatar>
        <div className="flex items-center text-sm font-medium">
          <span>JIO</span>
          <span className="text-slate-400">@GalacticJio</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center text-white rounded-3xl px-4 py-2 text-xs font-medium bg-sky-400">
            <Twitter className="mr-2 h-3 w-3 fill-white" />
            <span> Twitter</span>
          </div>
          <div className="flex items-center text-white rounded-3xl px-4 py-2 text-xs font-medium bg-blue-700">
            <Linkedin className="mr-2 h-3 w-3 fill-white" />
            <span> LinkedIn</span>
          </div>
        </div>
      </div>
      <div className="py-3 px-6">
        <Textarea placeholder="Write your tweets!" />
      </div>
    </div>
  );
}

export default EditorBody;
