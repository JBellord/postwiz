import EditorHeader from "@/components/custom/editorheader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

function Editor() {
  return (
    <div className="flex flex-col h-full w-full bg-slate-100 pt-4">
      <EditorHeader />
      <div className="relative w-full h-full px-4 pt-4 flex justify-center items-center">
        <div className="absolute bottom-0 w-[60%] rounded-t-3xl h-[90%] px-2 py-2 bg-slate-200">
          <div className="relative h-20 flex items-center p-3">
            <Avatar className="h-14 w-14">
              <AvatarImage src="https://pbs.twimg.com/profile_images/1509994781476376586/s_iiM2YN_400x400.jpg" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
          </div>
          <div className="py-3 px-6">
            <Textarea placeholder="Write your tweets!" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
