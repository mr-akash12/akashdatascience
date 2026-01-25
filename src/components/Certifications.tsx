import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const certifications = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    description: 'Comprehensive training in data analysis, visualization, and SQL using real-world datasets.',
    skills: ['Data Analysis', 'SQL', 'R Programming', 'Tableau', 'Data Visualization'],
    color: 'from-blue-500 to-green-500',
    logo: '🔵',
  },
  {
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM',
    description: 'In-depth training in data science methodologies, Python, machine learning, and AI.',
    skills: ['Python', 'Machine Learning', 'Data Science', 'SQL', 'Data Visualization'],
    color: 'from-blue-600 to-blue-800',
    logo: '🔷',
  },
  {
    title: 'IBM Machine Learning Professional Certificate',
    issuer: 'IBM',
    description: 'Advanced machine learning techniques including supervised, unsupervised learning and deep learning.',
    skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Scikit-learn', 'TensorFlow'],
    color: 'from-indigo-500 to-purple-600',
    logo: '🔷',
  },
  {
    title: 'Google Advanced Data Analytics Certificate',
    issuer: 'Google',
    description: 'Advanced analytics including statistical analysis, regression models, and machine learning.',
    skills: ['Statistical Analysis', 'Regression', 'Python', 'Machine Learning', 'Predictive Analytics'],
    color: 'from-yellow-500 to-red-500',
    logo: '🔵',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase mb-2">
            Certifications
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Professional Credentials
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications from leading tech companies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{cert.logo}</span>
                      <span className="text-sm font-medium text-muted-foreground">{cert.issuer}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
