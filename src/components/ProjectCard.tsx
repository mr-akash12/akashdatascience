import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Globe } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  website?: string;
  tags: string[];
  category: string;
  color: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  website,
  tags,
  category,
  color,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card
        className={`group overflow-hidden h-full transition-all duration-300 ${color} hover:shadow-xl hover:shadow-accent/20`}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <Badge className="absolute top-4 right-4 backdrop-blur-sm">
            {category}
          </Badge>
        </div>

        <CardHeader>
          <CardTitle className="text-xl group-hover:text-accent transition-colors">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <CardDescription className="line-clamp-3">{description}</CardDescription>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              asChild
              className="flex-1"
              variant="default"
            >
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            {website && (
              <Button
                asChild
                variant="outline"
                className="group/web"
              >
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4 group-hover/web:text-accent transition-colors" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
