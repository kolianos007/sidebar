import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useSidebarStore } from "@/store/sidebar-store";
import { BackgroundSidebar } from "./components/custom/BackgroundSidebar";

function App() {
  const { isOpen, open, close } = useSidebarStore();

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      open();
    } else {
      close();
    }
  };

  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">
        <Button
          size="pill"
          className="absolute cursor-pointer text-white"
          onClick={open}
        >
          Change background
        </Button>
      </div>

      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetContent
          side="right"
          className="bg-white px-5 pt-8 min-w-[400px] border-none"
        >
          <SheetTitle className="sr-only">Background Settings</SheetTitle>
          <BackgroundSidebar />
        </SheetContent>
      </Sheet>
    </>
  );
}

export default App;
