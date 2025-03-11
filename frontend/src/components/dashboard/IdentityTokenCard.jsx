
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const IdentityTokenCard = ({ className }) => {
  // Mock data for identity token
  const token = {
    id: "#35829",
    status: "Active",
    issuedAt: "2023-04-15T14:32:21Z",
    expiresAt: "2025-04-15T14:32:21Z",
    tokenType: "NFT-DID",
    verifications: 6,
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card className={cn("shadow-subtle", className)}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold">Identity Token</CardTitle>
            <CardDescription>NFT-based decentralized identity</CardDescription>
          </div>
          <Badge 
            variant="outline" 
            className="bg-emerald-50 text-emerald-500 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800/30"
          >
            {token.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="relative overflow-hidden">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Token ID</p>
            <p className="font-mono text-sm font-medium">{token.id}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Type</p>
            <p className="font-mono text-sm font-medium">{token.tokenType}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Issued</p>
            <p className="font-mono text-sm font-medium">{formatDate(token.issuedAt)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Expires</p>
            <p className="font-mono text-sm font-medium">{formatDate(token.expiresAt)}</p>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-xs text-muted-foreground mb-2">Verification count</p>
          <div className="flex items-center">
            <div className="w-full bg-secondary h-2 rounded-full">
              <motion.div 
                className="bg-primary h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(token.verifications * 10, 100)}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <span className="ml-2 text-xs font-medium">{token.verifications}</span>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
      </CardContent>
    </Card>
  );
};

export default IdentityTokenCard;
