import { ExternalLink, MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

function TabItem() {
  return (
    <>
      <div className="group w-full pl-1 h-9 flex items-center rounded-3xl bg-opacity-80 text-xs font-normal hover:cursor-pointer">
        <div className="relative flex items-center h-full w-full justify-start">
          <span className="pl-2">Entropy: Necessary Chaos</span>
          <div className="hidden absolute items-center rounded-r-3xl end-0 h-full pl-1 space-x-1 bg-slate-950 group-hover:flex group-hover:bg-opacity-100">
            <Button
              className="p-1 h-6 w-6 hover:bg-opacity-10 hover:bg-rose-50 hover:text-rose-600"
              size="icon"
              variant="ghost"
            >
              <MoreHorizontal className="h-3 w-3" />
            </Button>
            <Button
              className="p-1 h-6 w-6 hover:bg-opacity-10 hover:bg-rose-50 hover:text-rose-600"
              size="icon"
              variant="ghost"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button
              className="p-1 h-6 w-6 hover:bg-opacity-10 hover:bg-rose-50 hover:text-rose-600"
              size="icon"
              variant="ghost"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <Separator className="opacity-10 rounded-3xl" />
    </>
  );
}

function TabItems() {
  return (
    <ScrollArea className="h-full w-full p-1 grid gap-1 overflow-y-auto overflow-x-hidden">
      <Separator className="opacity-10 rounded-3xl" /> <TabItem />
      <TabItem />
      <TabItem />
      <TabItem />
      <TabItem />
    </ScrollArea>
  );
}

export default TabItems;
