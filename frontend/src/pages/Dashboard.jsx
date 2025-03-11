
import { useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import IdentitySummary from "@/components/dashboard/IdentitySummary";
import BlockchainAddress from "@/components/dashboard/BlockchainAddress";
import IdentityTokenCard from "@/components/dashboard/IdentityTokenCard";
import RecentActivity from "@/components/dashboard/RecentActivity";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | SecureID";
  }, []);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="flex flex-col space-y-2 mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Manage your decentralized identity</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <IdentitySummary className="lg:col-span-2" />
          <BlockchainAddress />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <IdentityTokenCard className="lg:col-span-1" />
          <RecentActivity className="lg:col-span-2" />
        </div>
      </div>
    </PageTransition>
  );
};

export default Dashboard;
