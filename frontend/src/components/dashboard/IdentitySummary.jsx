
import { motion } from "framer-motion";
import { BadgeCheck, Shield, Lock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const IdentitySummary = ({ className }) => {
  const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const identityItems = [
    {
      title: "Verified Identity",
      value: "Active",
      icon: BadgeCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      title: "Security Level",
      value: "High",
      icon: Shield,
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Private Keys",
      value: "Secure",
      icon: Lock,
      color: "text-violet-500",
      bg: "bg-violet-50 dark:bg-violet-900/20",
    },
    {
      title: "Risk Alerts",
      value: "None",
      icon: AlertTriangle,
      color: "text-gray-400",
      bg: "bg-gray-50 dark:bg-gray-800/40",
    },
  ];

  return (
    <Card className={cn("shadow-subtle overflow-hidden", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Identity Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {identityItems.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
            >
              <div className="flex flex-col p-3 rounded-lg border bg-card">
                <div className={cn("rounded-full w-8 h-8 flex items-center justify-center mb-3", item.bg)}>
                  <item.icon className={cn("h-4 w-4", item.color)} />
                </div>
                <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
                <p className={cn("font-mono text-sm font-semibold mt-1", item.color)}>
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default IdentitySummary;
