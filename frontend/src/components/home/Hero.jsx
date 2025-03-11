import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const heroVariants = {
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
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-white to-secondary/30 dark:from-gray-900 dark:to-gray-900/95">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] max-w-none">
          <svg
            width="100%"
            height="442"
            viewBox="0 0 1440 442"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary/5"
          >
            <path d="M-293 442L-1 0L1441 442H-293Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-2/3 max-w-none">
          <svg
            width="100%"
            height="442"
            viewBox="0 0 1440 442"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary/5 opacity-70"
          >
            <path d="M-293 0L-1 442L1441 0H-293Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge
              variant="outline"
              className="mb-5 px-3 py-1 text-xs bg-white dark:bg-gray-800 shadow-subtle border-slate-200 dark:border-slate-700"
            >
              <span className="text-primary font-medium">NEW</span> — Decentralized Identity System
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight md:leading-tight lg:leading-tight mb-6"
          >
            Your Identity,{" "}
            <span className="relative inline-block">
              Secured
              <span className="absolute inset-x-0 bottom-2 h-3 bg-primary/10"></span>
            </span>{" "}
            by Blockchain
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance"
          >
            Take control of your digital identity with SecureID's decentralized authentication system. 
            Secure, private, and always under your control.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" className="w-full sm:w-auto text-lg  hover:bg-black hover:text-blue-500 hover:font-semibold hover:text-lg " onClick={() => navigate('/get-started')}>
              Get Started
              <ArrowRight className=" h-4 w-4" />
            </Button>
            

          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mx-auto w-full max-w-2xl relative overflow-hidden rounded-xl border bg-white/50 dark:bg-gray-800/50 shadow-xl backdrop-blur-sm"
          >
            <div className="relative aspect-[16/9] bg-secondary/50 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-primary"
                    >
                      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-1">Decentralized Identity Showcase</h3>
                  <p className="text-sm text-muted-foreground">
                    An interactive demonstration of our blockchain identity system
                  </p>
                </div>
              </div>
              
             
              <svg 
                width="90" 
                height="90" 
                viewBox="0 0 90 90" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-4 left-4 text-primary/10"
              >
                <circle cx="45" cy="45" r="45" fill="currentColor" />
              </svg>
              
              <svg 
                width="60" 
                height="60" 
                viewBox="0 0 60 60" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-8 right-10 text-primary/10"
              >
                <circle cx="30" cy="30" r="30" fill="currentColor" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;