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
            Passion for Data Analytics & Insight Generation
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
                I'm a Data Analyst skilled in SQL, Python, Excel, Power BI, and Machine Learning. 
                I specialize in data cleaning, feature engineering, exploratory data analysis (EDA), 
                and time series forecasting. With hands-on experience at Cognifyz Technologies, 
                I developed regression models on 200,000+ rows and delivered pricing strategy 
                recommendations that improved fare prediction accuracy by 42%.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I hold a B.Tech in Computer Science from Gandhi Engineering College (CGPA: 7.6/10) 
                and am certified by Google and IBM in Data Analytics and Machine Learning. 
                I'm passionate about building interactive dashboards and generating actionable 
                insights that support data-driven business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  <a
                    href="/AkashKumarNayak_Data_Analyst_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Data Analyst Resume
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary hover:bg-primary/10"
                >
                  <a
                    href="/Akash_Kumar_Nayak_DataScientist_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Data Scientist Resume
                  </a>
                </Button>
              </div>
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
