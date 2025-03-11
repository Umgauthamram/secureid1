
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const BlockchainAddress = ({ 
  address = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", 
  className 
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shortenAddress = (addr) => {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  return (
    <Card className={cn("shadow-subtle overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Ethereum Address</CardTitle>
        <CardDescription>Your blockchain identifier</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center">
              <div className="relative overflow-hidden max-w-full">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ 
                    x: copied ? [0, 10, -10, 0] : 0
                  }}
                  transition={{ 
                    duration: 0.5, 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 10 
                  }}
                >
                  <div className="bg-secondary/80 border px-3 py-2 rounded-md font-mono text-sm sm:text-base truncate max-w-[18rem] sm:max-w-xs">
                    <span className="hidden md:inline">{address}</span>
                    <span className="inline md:hidden">{shortenAddress(address)}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={copyToClipboard}
            >
              {copied ? (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                  <span className="text-xs">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span className="text-xs">Copy</span>
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => window.open(`https://etherscan.io/address/${address}`, '_blank')}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span className="text-xs">View</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlockchainAddress;
