import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const CTA = () => {
    const navigate = useNavigate();
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
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Take Control of Your Digital Identity
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-primary-foreground/80 mb-8"
          >
            Join thousands of users who have already secured their digital presence with our blockchain-powered identity system.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button onClick={() => navigate('/get-started')} size="lg" variant="secondary" className="w-full sm:w-auto hover:bg-black hover:text-white ">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;