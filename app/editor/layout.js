import EditorSidebar from "@/components/custom/sidebar";

function EditorLayout({ children }) {
  return (
    <div className="container flex flex-1 h-screen w-screen overflow-hidden p-0 m-0">
      <aside className="w-72 bg-slate-900 text-white p-4">
        <EditorSidebar />
      </aside>
      <main className=" flex w-full flex-1 p-4">{children}</main>
    </div>
  );
}

export default EditorLayout;
