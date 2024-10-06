import {LifeBuoy, Settings2, SquareTerminal, SquareUser,} from "lucide-react";

import {Button} from "../components/ui/button";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "../components/ui/tooltip";
import {TopNav} from "../components/widget/topNav";

export default function HomeLayout() {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col">
        <TopNav expand={false} />
        <div className="flex min-h-screen w-full">
          <aside className="flex inset-y sticky  left-0 top-16 z-20 w-16 h-[calc(100vh-4rem)] flex-col border-r">
            <nav className="grid gap-4 p-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg bg-muted"
                    aria-label="Playground"
                  >
                    <SquareTerminal className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Playground
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    aria-label="Settings"
                  >
                    <Settings2 className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Settings
                </TooltipContent>
              </Tooltip>
            </nav>
            <nav className="mt-auto grid gap-4 p-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mt-auto rounded-lg"
                    aria-label="Help"
                  >
                    <LifeBuoy className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Help
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mt-auto rounded-lg"
                    aria-label="Account"
                  >
                    <SquareUser className="size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Account
                </TooltipContent>
              </Tooltip>
            </nav>
          </aside>
          <main className="flex w-full gap-4 h-screen p-4 md:gap-8 md:p-8">
            content
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
