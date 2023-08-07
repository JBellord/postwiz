import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

function EditorHeader() {
  return (
    <div className="w-full p-4 h-10 flex space-x-2 justify-end items-center">
      <Button variant="ghost" size="icon">
        <Bell className="stroke-slate-900 h-5 w-5" />
      </Button>
      <Button
        size="sm"
        variant="destructive"
        className="bg-rose-500 px-6 hover:bg-red-600 hover:outline-2"
      >
        Logout
      </Button>
    </div>
  );
}

export default EditorHeader;
