import EditorHeader from "@/components/custom/editorheader";
import EditorBody from "@/components/custom/editorbody";

function Editor() {
  return (
    <div className="flex flex-col h-full w-full pt-4">
      <EditorHeader />
      <div className="relative w-full h-full px-4 pt-4 flex justify-center items-center">
        <EditorBody />
      </div>
    </div>
  );
}

export default Editor;
