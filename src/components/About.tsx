import { motion } from 'framer-motion';
import { Database, TrendingUp, Brain, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Database,
    title: 'Data Expertise',
    description: 'Extensive experience with large datasets, ETL processes, and data warehousing solutions.',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    icon: TrendingUp,
    title: 'Visual Storytelling',
    description: 'Transforming complex data into intuitive visualizations that tell compelling stories.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10'
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Implementing predictive models and machine learning algorithms to uncover patterns.',
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with stakeholders to understand business needs and deliver solutions.',
    color: 'text-chart-4',
    bgColor: 'bg-chart-4/10'
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase mb-2">
            About Me
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-foreground">
            Passion for Data Analytics and 👨‍💻 Data Science
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300">
              <h3 className="text-3xl font-bold text-foreground mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I'm a junior data scientist with a strong foundation in Python, machine learning, 
                and data visualization. I thrive on analytical challenges — whether it's fine-tuning 
                models, interpreting metrics, or crafting dashboards that speak to stakeholders. 
                My journey blends hands-on experimentation with a love for storytelling through data.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Currently, I'm building projects that span regression, classification, clustering, 
                and dashboarding — with a focus on real-world impact. I believe in learning by doing, 
                visualizing by design, and communicating insights that drive action.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                <a
                  href="https://drive.google.com/file/d/1Ps0NCjZBmsDZe3RQjIL8ysl9Qx615ZEW/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
            </Card>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-card/50 backdrop-blur border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                    <div className={`${feature.bgColor} ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
