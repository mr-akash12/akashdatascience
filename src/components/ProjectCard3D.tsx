import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Globe } from 'lucide-react';

interface ProjectCard3DProps {
  title: string;
  description: string;
  image: string;
  link: string;
  website?: string;
  tags: string[];
  category: string;
  color: string;
}

export default function ProjectCard3D({
  title,
  description,
  image,
  link,
  website,
  tags,
  category,
  color,
}: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseXPos = (e.clientX - centerX) / (rect.width / 2);
    const mouseYPos = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={`group overflow-hidden h-full transition-all duration-300 ${color} ${
          isHovered ? 'shadow-2xl shadow-primary/30' : 'shadow-lg'
        }`}
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"
            animate={{
              opacity: isHovered ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          />
          <Badge
            className="absolute top-4 right-4 backdrop-blur-sm"
            style={{
              transform: 'translateZ(75px)',
            }}
          >
            {category}
          </Badge>
        </div>

        <CardHeader
          style={{
            transform: 'translateZ(60px)',
          }}
        >
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent
          className="space-y-4"
          style={{
            transform: 'translateZ(40px)',
          }}
        >
          <CardDescription className="line-clamp-3">{description}</CardDescription>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                style={{
                  transform: 'translateZ(30px)',
                }}
              >
                <Badge variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex gap-2"
            style={{
              transform: 'translateZ(70px)',
            }}
          >
            <Button
              asChild
              className="flex-1 group/btn relative overflow-hidden"
              variant="default"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <motion.span
                  className="flex items-center justify-center gap-2"
                  animate={{
                    x: isHovered ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/50 to-purple-500/50"
                  initial={{ x: '-100%' }}
                  animate={{ x: isHovered ? '0%' : '-100%' }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </Button>
            {website && (
              <Button
                asChild
                variant="outline"
                className="group/web"
              >
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4 group-hover/web:text-primary transition-colors" />
                </a>
              </Button>
            )}
          </motion.div>
        </CardContent>
      </Card>

      {/* Floating glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3), transparent 70%)`,
          filter: 'blur(20px)',
          opacity: isHovered ? 1 : 0,
          transform: 'translateZ(-10px)',
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}
