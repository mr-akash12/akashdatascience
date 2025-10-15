import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: '🧑‍💼 Employee Attrition Analysis & Prediction',
    description: 'A full-stack data science project that uncovers key drivers of employee turnover and predicts attrition risk using Python, Power BI, and Streamlit—empowering HR teams with actionable insights for better retention strategies.',
    image: 'https://interimexecs.com/wp-content/uploads/2022/09/CEO_Turnover_social.png',
    link: 'https://github.com/mr-akash12/Employee-Attrition-Prediction-App.git',
    website: 'https://quantum-flight-path.lovable.app/',
    category: 'Python',
    tags: ['Pandas', 'Scikit-learn', 'Matplotlib / Seaborn / Power BI', 'Streamlit'],
    color: 'border-primary'
  },
  {
    title: '🚕 Uber Fare Prediction',
    description: 'The Uber Fare Prediction project uses machine learning to estimate ride prices based on trip details like distance, time, and location—helping optimize pricing and improve user experience. 🚕',
    image: 'https://i.ytimg.com/vi/nimhvNKZlsI/maxresdefault.jpg',
    link: 'https://github.com/mr-akash12/Uber-Fare-Prediction-Machine-Learning-Regression-Model',
    category: 'Python',
    tags: ['Pandas', 'Matplotlib / Seaborn', 'Scikit-learn'],
    color: 'border-secondary'
  },
  {
    title: '🛍️ Customer Segmentation Analysis',
    description: 'This project demonstrates how unsupervised learning techniques can uncover hidden customer segments from raw behavioral data. By applying KMeans clustering and Principal Component Analysis (PCA), we identify distinct customer groups that can inform targeted marketing.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.ydmg3d3TXoC7Y0WkW7ILrQHaEK?pid=Api&P=0&h=180',
    link: 'https://github.com/mr-akash12/Customer-Segmentation-Using-KMeans-PCA.git',
    category: 'Python',
    tags: ['Pandas/Numpy', 'Matplotlib / Seaborn', 'K_means', 'Streamlit'],
    color: 'border-accent'
  },
  {
    title: 'Credit Risk Analysis - Loan Approval Prediction',
    description: 'Applicants with high income, low loan amount requests, and a strong credit history are significantly more likely to be approved for loans.',
    image: 'https://daxg39y63pxwu.cloudfront.net/images/blog/loan-prediction-using-machine-learning-project-source-code/Loan_Prediction_using__Machine_Learning_Project.png',
    link: 'https://github.com/mr-akash12/Credit-Risk-Analysis-Loan-Approval-Prediction.git',
    category: 'Python',
    tags: ['Pandas', 'Matplotlib / Seaborn', 'Scikit-learn', 'Streamlit'],
    color: 'border-chart-4'
  },
  {
    title: '🛒 Regional Sales Analysis – USA',
    description: 'In this project, I analyzed regional sales data across the USA to uncover performance trends, identify high-growth areas, and provide actionable insights for strategic business planning.',
    image: 'https://leanexcelsolutions.com/wp-content/uploads/2022/11/Sales-Dashboard-in-Excel-Violet.png',
    link: 'https://github.com/mr-akash12/Regional_-Sales_-Analysis-_IN_-USA.git',
    category: 'Python',
    tags: ['Pandas', 'Matplotlib / Seaborn', 'Power BI'],
    color: 'border-primary'
  },
  {
    title: 'Movie Recommendation System',
    description: 'A content-based movie recommendation system that suggests similar movies based on user preferences.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*gqhGG2pghvvPQ3aSVz2Qfw.png',
    link: 'https://github.com/mr-akash12',
    category: 'Python',
    tags: ['Pandas', 'Scikit-learn', 'NLP'],
    color: 'border-secondary'
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase mb-2">
            My Work
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Featured Projects
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of the data analysis projects I've worked on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`overflow-hidden bg-card/50 backdrop-blur border-2 ${project.color} hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group h-full flex flex-col`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className={`flex gap-2 ${project.website ? '' : ''}`}>
                      {project.website && (
                        <Button
                          asChild
                          variant="default"
                          className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                        >
                          <a href={project.website} target="_blank" rel="noopener noreferrer">
                            Website <Globe className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      <Button
                        asChild
                        variant="outline"
                        className={`${project.website ? 'flex-1' : 'w-full'} border-primary hover:bg-primary/10 group-hover:border-accent`}
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          GitHub <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
          >
            {showAll ? (
              <>View Less Projects <ChevronUp className="ml-2 h-5 w-5" /></>
            ) : (
              <>View All Projects <ChevronDown className="ml-2 h-5 w-5" /></>
            )}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
