
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check, ArrowRightLeft, Shield, Lock } from "lucide-react";

const RecentActivity = ({ className }) => {
  const activities = [
    {
      id: 1,
      type: "verification",
      title: "Identity Verified",
      description: "Your identity was verified by Service Provider",
      timestamp: "2 hours ago",
      icon: Check,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      id: 2,
      type: "transaction",
      title: "Document Signed",
      description: "You've cryptographically signed a document",
      timestamp: "Yesterday",
      icon: Lock,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: 3,
      type: "authentication",
      title: "Successful Auth",
      description: "Zero-knowledge authentication with DApp",
      timestamp: "3 days ago",
      icon: Shield,
      iconColor: "text-violet-500",
      iconBg: "bg-violet-50 dark:bg-violet-900/20",
    },
    {
      id: 4,
      type: "transaction",
      title: "Identity Updated",
      description: "You've updated your identity attributes",
      timestamp: "1 week ago",
      icon: ArrowRightLeft,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-50 dark:bg-amber-900/20",
    },
  ];

  return (
    <Card className={cn("shadow-subtle", className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex items-start space-x-3"
            >
              <div className={cn("flex-shrink-0 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center", activity.iconBg)}>
                <activity.icon className={cn("h-4 w-4", activity.iconColor)} />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                </div>
                <p className="text-xs text-muted-foreground">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
