"use client";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $getRoot, $getSelection } from "lexical";
import { BeautifulMentionsPlugin } from "lexical-beautiful-mentions";
import { forwardRef } from "react";

const theme = {};

const onError = (error) => {
  console.error(error);
};

function onChange(state) {
  state.read(() => {
    const root = $getRoot();
    console.log(root.getTextContent());
  });
}

function MainEditor() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  const mentionItems = {
    "@": ["Ali", "Akbar", "Christina"],
    "#": ["jim", "buildspace"],
  };

  const CustomMenu = forwardRef(({ open, loading, ...props }, ref) => (
    <ul className="m-0 mt-6" {...props} ref={ref} />
  ));

  const CustomMenuItem = forwardRef(
    ({ selected, label, itemValue, ...props }, ref) => (
      <li
        className={`m-0 flex ... ${
          selected ? "bg-gray-100 ..." : "bg-white ..."
        }`}
        {...props}
        ref={ref}
      />
    )
  );

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={
          <ContentEditable className="relative min-h-in h-24 p-3 rounded-2xl w-full" />
        }
        placeholder={<div className="absolute top-3 left-11">Hello...</div>}
      />
      <HistoryPlugin />
      <BeautifulMentionsPlugin
        menuComponent={CustomMenu}
        menuItemComponent={CustomMenuItem}
        items={mentionItems}
      />
      <OnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
}

export default MainEditor;
