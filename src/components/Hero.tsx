import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import akashImage from '@/assets/akash.png';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
            >
              <span className="block text-foreground">Hi, I'm Akash Kumar Nayak</span>
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                📊 Junior Data Scientist
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              Junior Data Scientist skilled in SQL, Python, Excel, Power BI, and Machine Learning.
              Experienced in data cleaning, feature engineering, exploratory data analysis (EDA), 
              and time series forecasting. Proficient in building interactive dashboards and data 
              visualizations to generate actionable insights and support data-driven business decisions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                Get in touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="border-primary hover:bg-primary/10"
              >
                View my work
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-30 blur-2xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-4 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full opacity-50"
              />
              <img
                src={akashImage}
                alt="Akash - Data Scientist"
                className="absolute top-12 bottom-4 left-8 right-8 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-primary shadow-lg shadow-primary/50"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
