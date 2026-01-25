import { motion } from 'framer-motion';
import { Code, PieChart, Cloud, Cpu, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming & Querying',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    skills: [
      { name: 'SQL', level: 95 },
      { name: 'Python', level: 90 },
    ]
  },
  {
    icon: PieChart,
    title: 'Data Visualization Tools',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    skills: [
      { name: 'Advanced MS Excel', level: 90 },
      { name: 'Power BI', level: 90 },
      { name: 'Tableau', level: 85 },
    ]
  },
  {
    icon: Cloud,
    title: 'Machine Learning',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    skills: [
      { name: 'Supervised Learning', level: 95 },
      { name: 'Unsupervised Learning', level: 95 },
      { name: 'Model Evaluation', level: 95 },
      { name: 'Regression & Classification', level: 90 },
    ]
  },
  {
    icon: Brain,
    title: 'Deep Learning',
    color: 'text-chart-4',
    bgColor: 'bg-chart-4/10',
    skills: [
      { name: 'ANN (Artificial Neural Networks)', level: 85 },
      { name: 'RNN (Recurrent Neural Networks)', level: 80 },
      { name: 'LSTM', level: 80 },
      { name: 'Transformers', level: 75 },
      { name: 'Basic LLM', level: 70 },
    ]
  },
];

const additionalSkills = [
  { icon: Cpu, title: 'Data Cleaning', description: 'Data preprocessing & wrangling', color: 'text-primary' },
  { icon: Code, title: 'EDA & Feature Engineering', description: 'Exploratory analysis & feature creation', color: 'text-secondary' },
  { icon: Cloud, title: 'Insight Generation', description: 'Descriptive statistics & analysis', color: 'text-chart-4' },
  { icon: PieChart, title: 'Time Series Forecasting', description: 'Predictive analytics & forecasting', color: 'text-accent' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase mb-2">
            Skills & Tools
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            My Technical Arsenal
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of skills and tools to tackle any data challenge
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <div className={`${category.bgColor} ${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-6">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-card/50 backdrop-blur border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                  <Icon className={`${skill.color} w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                  <h4 className="font-medium text-lg mb-1 text-foreground">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
