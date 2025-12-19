import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard3D from '@/components/ProjectCard3D';
import emailSpamImage from '@/assets/email-spam.jpg';
import uberFareImage from '@/assets/uber-fare.png';

const projects = [
  {
    title: '🧑‍💼 Employee Attrition Analysis',
    description: 'Analyzed 14,999 employee records to uncover attrition drivers. Created a Random Forest classifier achieving 97% accuracy after balancing the dataset. Designed 8 dynamic KPIs in Power BI and deployed an interactive dashboard via Streamlit for real-time attrition monitoring.',
    image: 'https://interimexecs.com/wp-content/uploads/2022/09/CEO_Turnover_social.png',
    link: 'https://github.com/mr-akash12/Employee-Attrition-Prediction-App.git',
    website: 'https://lovable.dev/projects/514f8061-7362-4226-8ac3-14ea6e217b7b',
    category: 'Python | Power BI',
    tags: ['Python', 'XGBoost', 'Power BI', 'Streamlit'],
    color: 'border-primary'
  },
  {
    title: '🚕 Uber Fare Prediction',
    description: 'A machine learning regression model that predicts Uber fare prices based on various factors like distance, time, location, and weather conditions to provide accurate fare estimates.',
    image: uberFareImage,
    link: 'https://github.com/mr-akash12/Uber-Fare-Prediction-Machine-Learning-Regression-Model.git',
    category: 'Python',
    tags: ['Scikit-learn', 'Regression', 'Feature Engineering', 'ML'],
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
    title: '📧 Email Spam Detection using NLP',
    description: 'A Natural Language Processing project that classifies emails as spam or legitimate using machine learning techniques—helping filter out unwanted messages and enhance email security.',
    image: emailSpamImage,
    link: 'https://github.com/mr-akash12/email-spam-classifier-nlp.git',
    website: 'https://email-spam-classifier-nlp-op8tjqyeeu5o6cz8a6k2yu.streamlit.app/',
    category: 'Python',
    tags: ['NLP', 'Scikit-learn', 'Streamlit'],
    color: 'border-accent'
  },
  {
    title: '🛍️ USA Regional Sales Analysis',
    description: 'Processed 64K+ sales records across 5 regions by merging 6 Excel sheets. Cleaned and engineered 30+ columns. Created Power BI dashboard with 12+ KPIs and DAX measures. Insights improved budget alignment by 25% and reduced risk by 18%.',
    image: 'https://leanexcelsolutions.com/wp-content/uploads/2022/11/Sales-Dashboard-in-Excel-Violet.png',
    link: 'https://github.com/mr-akash12/Regional_-Sales_-Analysis-_IN_-USA.git',
    category: 'Python | Power BI',
    tags: ['Python', 'Pandas', 'Power BI', 'SQL'],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <ProjectCard3D {...project} />
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
