import { Trash2 } from "lucide-react";
import { Wallet } from "./WalletGenerator";
import { Button } from "./ui/button";
import { copyToClipboard } from "@/lib/utils";

interface WalletProps {
  wallets: Wallet[];
  deleteWallet: (index: number) => void;
  deleteAllWallets: () => void;
  addWallet: (index: number) => void;
}

const Wallets = ({
  wallets,
  deleteWallet,
  deleteAllWallets,
  addWallet,
}: WalletProps) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
          Your Wallets
        </h1>
        <div className="flex flex-row gap-2">
          <Button
            className="cursor-pointer"
            onClick={() => {
              addWallet(wallets.length);
            }}
          >
            Add Wallet</Button>
          <Button
            variant={"destructive"}
            className="cursor-pointer"
            onClick={() => {
              deleteAllWallets();
            }}
          >
            Clear Wallets
          </Button>
        </div>
      </div>
      {wallets.map((wallet, index) => (
        <div
          key={index}
          className="w-full bg-foreground/5 p-4 rounded-md my-4 p-6"
        >
          <div className="flex justify-between items-center">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 mb-2">
              Wallet {index + 1}
            </h2>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="cursor-pointer"
              onClick={() => deleteWallet(index)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-4 w-full">
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tighter">
                Public Key
              </span>
              <p
                className="truncate w-full overflow-hidden whitespace-nowrap text-primary/80 font-medium cursor-pointer hover:text-primary transition-all duration-300"
                onClick={() => copyToClipboard(wallet.publicKey)}
              >
                {wallet.publicKey}
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tighter">
                Private Key
              </span>
              <p
                className="truncate w-full overflow-hidden whitespace-nowrap text-primary/80 font-medium cursor-pointer hover:text-primary transition-all duration-300"
                onClick={() => copyToClipboard(wallet.privateKey)}
              >
                {wallet.privateKey}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wallets;
