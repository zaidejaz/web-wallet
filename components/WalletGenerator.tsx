import { useState } from "react";
import { Button } from "./ui/button";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { Keypair } from "@solana/web3.js";
import { derivePath } from "ed25519-hd-key";
import bs58 from "bs58";
import Mnemonic from "./Mnemonic";
import Wallets from "./Wallets";
import { toast } from "sonner";

export interface Wallet {
  publicKey: string;
  privateKey: string;
}

const WalletGenerator = () => {
  const [mnemonics, setMnemonics] = useState<string[]>([]);
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [seed, setSeed] = useState<Buffer>(Buffer.alloc(0));

  const deleteWallet = (index: number) => {
    const newWallets = [...wallets];
    newWallets.splice(index, 1);
    setWallets(newWallets);
    toast.success("Wallet deleted");
  };

  const deleteAllWallets = () => {
    setWallets([]);
    setMnemonics([]);
    toast.success("All wallets deleted");
  };

  const addWallet = (index: number) => {
    const path = `m/44'/501'/${index}'/0'`;
    const derivedPath = derivePath(path, seed.toString("hex"));
    const keypair = Keypair.fromSeed(derivedPath.key);
    const encodedPrivateKey = bs58.encode(keypair.secretKey);
    const encodedPublicKey = keypair.publicKey.toBase58();
    const wallet = {
      publicKey: encodedPublicKey,
      privateKey: encodedPrivateKey,
    };
    setWallets([...wallets, wallet]);
  };

  const generateWallet = () => {
    const generatedMnemonics = generateMnemonic();
    setMnemonics(generatedMnemonics.split(" "));
    const generatedSeed = mnemonicToSeedSync(mnemonics.toString());
    setSeed(generatedSeed);
    const path = "m/44'/501'/0'/0'";
    const derivedSeed = derivePath(path, seed.toString("hex"));
    const keypair = Keypair.fromSeed(derivedSeed.key);
    const encodedPrivateKey = bs58.encode(keypair.secretKey);
    const encodedPublicKey = keypair.publicKey.toBase58();
    const wallet = {
      publicKey: encodedPublicKey,
      privateKey: encodedPrivateKey,
    };
    setWallets([...wallets, wallet]);
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        {wallets.length == 0 && (
          <div className="flex flex-col space-y-4">
            <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight text-balance">
              Create a new Solana Wallet
            </h1>
            <Button className="w-45" onClick={generateWallet}>Generate Wallet</Button>
          </div>
        )}
        {wallets.length > 0 && (
          <div className="">
            <Mnemonic mnemonics={mnemonics} />
            <Wallets
              wallets={wallets}
              deleteWallet={deleteWallet}
              deleteAllWallets={deleteAllWallets}
              addWallet={addWallet}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletGenerator;
