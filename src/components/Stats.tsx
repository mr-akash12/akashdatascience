import { motion } from 'framer-motion';
import { Award, CheckCircle, Users, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const stats = [
  {
    icon: Award,
    value: 'Fresher',
    label: 'Experience',
    color: 'text-primary',
  },
  {
    icon: CheckCircle,
    value: '15+',
    label: 'Completed Projects',
    color: 'text-primary',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Connections',
    color: 'text-primary',
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-card/80 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div>
                        <h3 className={`text-4xl md:text-5xl font-bold ${stat.color} mb-1`}>
                          {stat.value}
                        </h3>
                        <p className="text-lg text-muted-foreground font-medium">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
