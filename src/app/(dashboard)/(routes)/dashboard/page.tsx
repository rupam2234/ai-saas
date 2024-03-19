import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons"

const DashboardPage = () => {
  return (
    <Button disabled size={"sm"}>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin"></ReloadIcon>
        Please Wait
    </Button>
  );
}

export default DashboardPage;
