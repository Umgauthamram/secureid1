import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
  import { Fingerprint, Menu, X, UserCircle, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Identity", path: "/identity" },
  { name: "Verification", path: "/verification" },
  { name: "Documents", path: "/documents" },
  { name: "Settings", path: "/settings" },
];

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-subtle"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Fingerprint className="h-8 w-8 text-primary" />
              <span className="hidden font-mono font-semibold text-lg sm:inline-block">
                SecureID
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Bell className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <UserCircle className="h-5 w-5" />
            </Button>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                  <div className="flex flex-col h-full py-6">
                    <div className="flex items-center mb-8">
                      <Fingerprint className="h-8 w-8 text-primary mr-2" />
                      <span className="font-mono font-semibold text-lg">SecureID</span>
                    </div>
                    
                    <nav className="flex flex-col space-y-1">
                      {navItems.map((item) => (
                        <Link key={item.path} to={item.path}>
                          <Button
                            variant="ghost"
                            className={cn(
                              "justify-start w-full",
                              location.pathname === item.path
                                ? "bg-accent text-accent-foreground font-medium"
                                : "text-muted-foreground"
                            )}
                          >
                            {item.name}
                          </Button>
                        </Link>
                      ))}
                    </nav>
                    
                    <div className="mt-auto">
                      <Button variant="outline" className="w-full">
                        Log Out
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
