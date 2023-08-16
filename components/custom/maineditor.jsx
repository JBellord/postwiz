"use client";

import Editor from "@draft-js-plugins/editor";
import { useCallback, useEffect, useMemo, useState } from "react";
import { EditorState } from "draft-js";
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from "@draft-js-plugins/mention";
import mentions from "./mentions";
import mentionStyle from "./Mention.module.css";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function Entry(props) {
  const { mention, theme, searchValue, isFocused, ...parentProps } = props;
  return (
    <div {...parentProps}>
      <div
        className={`w-64 py-2 px-3 my-1 flex justify-items-start items-center rounded-3xl ${
          isFocused ? "bg-slate-100" : "bg-white"
        }`}
      >
        <div className="w-12">
          <Avatar className="w-9 h-9">
            <AvatarFallback>KD</AvatarFallback>
            <AvatarImage src={mention.avatar} />
          </Avatar>
        </div>
        <div className="flex w-full flex-1 flex-col justify-start">
          <span className="text-sm font-semibold">{mention.name}</span>
          <span className="text-xs font-normal text-slate-600">
            {mention.link}
          </span>
        </div>
      </div>
    </div>
  );
}

function MainEditor() {
  const [editorState, setEditorState] = useState();

  useEffect(() => {
    setEditorState(EditorState.createEmpty());
  }, []);

  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(mentions);

  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin({
      mentionPrefix: "@",
      theme: mentionStyle,
    });
    const { MentionSuggestions } = mentionPlugin;
    const plugins = [mentionPlugin];
    return { plugins, MentionSuggestions };
  }, []);

  const onOpenChange = useCallback((_open) => {
    setOpen(_open);
  }, []);

  const onSearchChange = useCallback(({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  }, []);

  return (
    <div>
      {editorState && (
        <div>
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            plugins={plugins}
          ></Editor>
          <MentionSuggestions
            open={open}
            onOpenChange={onOpenChange}
            suggestions={suggestions}
            onSearchChange={onSearchChange}
            entryComponent={Entry}
            popoverContainer={({ children }) => <div>{children}</div>}
          />
        </div>
      )}
    </div>
  );
}

export default MainEditor;
