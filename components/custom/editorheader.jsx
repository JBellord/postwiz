"use client";

import { Button } from "@/components/ui/button";
import { Bell, Linkedin, Twitter, Users } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

function EditorHeader() {
  return (
    <div className="w-full p-4 h-10 flex space-x-2 justify-between items-center">
      <div className="space-x-2">
        <Sheet className="bg-slate-950 text-white">
          <SheetTrigger asChild>
            <Button variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Your Socials
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-slate-950 text-white p-8">
            <SheetHeader>
              <SheetTitle className="text-white">Platforms</SheetTitle>
              <SheetDescription>
                Setup your social media platforms
              </SheetDescription>
            </SheetHeader>
            <div className="my-8 w-[75%] grid gap-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="twitter" className="flex items-center">
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Label>
                <Switch id="twitter" />
              </div>
              <div className="w-full flex justify-between items-center">
                <Label htmlFor="linkedin" className="flex items-center">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Label>
                <Switch id="linkedin" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex space-x-2 items-center">
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
    </div>
  );
}

export default EditorHeader;
