import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Create your digital identity",
    description: "Register and establish your unique decentralized identifier (DID) on the blockchain.",
    color: "bg-blue-50 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400",
  },
  {
    number: "02",
    title: "Secure with zero-knowledge proofs",
    description: "Set up authentication using advanced cryptography that protects your privacy.",
    color: "bg-purple-50 text-purple-500 dark:bg-purple-900/20 dark:text-purple-400",
  },
  {
    number: "03",
    title: "Verify and validate",
    description: "Complete identity verification through our trusted partner network.",
    color: "bg-emerald-50 text-emerald-500 dark:bg-emerald-900/20 dark:text-emerald-400",
  },
  {
    number: "04",
    title: "Manage your credentials",
    description: "Control who has access to your identity data and for what purpose.",
    color: "bg-amber-50 text-amber-500 dark:bg-amber-900/20 dark:text-amber-400",
  },
];

const HowItWorks = () => {
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
    <section className="py-20 bg-gradient-to-b from-secondary/50 to-white dark:from-gray-800/50 dark:to-gray-900">
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
            How It Works
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            A simple, secure process for taking control of your digital identity.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              className="relative"
            >
              <div className="relative rounded-xl border p-6 h-full bg-card">
                <div className={cn("inline-flex items-center justify-center rounded-full w-10 h-10 mb-4", step.color)}>
                  <span className="font-mono text-sm font-medium">{step.number}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-4">
                    <div className="absolute right-0 -top-1.5 h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;