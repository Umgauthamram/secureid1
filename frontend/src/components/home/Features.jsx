import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  FileLock, 
  UserCheck, 
  Database, 
  Code, 
  Activity, 
  BrainCircuit 
} from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure by Design",
    description: "Built on blockchain technology to ensure tamper-proof identity verification and management."
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Zero-Knowledge Proofs",
    description: "Authenticate without revealing sensitive information using advanced cryptographic protocols."
  },
  {
    icon: <FileLock className="h-8 w-8" />,
    title: "Document Verification",
    description: "Securely store and verify important documents with decentralized cryptographic security."
  },
  {
    icon: <UserCheck className="h-8 w-8" />,
    title: "Verifiable Credentials",
    description: "Issue and manage verifiable credentials that are cryptographically secure and user-controlled."
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Decentralized Storage",
    description: "Store identity data on IPFS to eliminate central points of failure and enhance privacy."
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Smart Contract Integration",
    description: "Ethereum smart contracts power identity verification and management processes."
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Real-time Monitoring",
    description: "Track identity verification and authentication activities in real-time."
  },
  {
    icon: <BrainCircuit className="h-8 w-8" />,
    title: "AI-powered Protection",
    description: "Advanced AI algorithms detect and prevent fraudulent identity usage and impersonation attempts."
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Secure Identity Management
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            Our platform combines advanced blockchain technology with intuitive design to provide a seamless, secure identity experience.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              className="relative p-6 rounded-xl border bg-card hover:shadow-subtle transition-shadow"
            >
              <div className="absolute -top-3 -left-3 rounded-lg p-2 bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mt-6 mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;