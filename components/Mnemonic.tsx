import { CopyIcon } from "lucide-react";
import { Button } from "./ui/button";
import { copyToClipboard } from "@/lib/utils";

const Mnemonic = ({ mnemonics }: { mnemonics: string[] }) => {
  return (
    <div className="text-lg bg-foreground/5 p-4 rounded-md my-10">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Your Seed Phrase
      </h2>
      <div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 mt-4 cursor-pointer"
        onClick={() => copyToClipboard(mnemonics.join(" "))}
      >
        {mnemonics.map((mnemonic, index) => (
          <div key={index} className="bg-foreground/5 p-4 rounded-md">
            {mnemonic}
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center gap-2 mt-4">
        <Button
          className="flex flex-row items-center gap-2 mt-4 cursor-pointer"
          onClick={() => {
            copyToClipboard(mnemonics.join(" "));
          }}
        >
          <CopyIcon className="w-4 h-4" />
          <p className="text-sm">Copy Phrase</p>
        </Button>
      </div>
    </div>
  );
};

export default Mnemonic;
