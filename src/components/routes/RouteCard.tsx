
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface RouteCardProps {
  id: string;
  title: string;
  description: string;
  progress: number;
  completedActivities: number;
  totalActivities: number;
  image?: string;
  pointsEarned: number;
  techniques: string[];
}

const RouteCard = ({
  id,
  title,
  description,
  progress,
  completedActivities,
  totalActivities,
  image,
  pointsEarned,
  techniques
}: RouteCardProps) => {
  return (
    <Link to={`/routes/${id}`}>
      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow border border-gray-200">
        <CardHeader className="p-0">
          <div className="h-40 bg-gradient-to-r from-purple-400 to-blue-500 relative">
            {image && (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover opacity-30"
              />
            )}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">{description}</p>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            <div className="flex justify-between">
              <div className="text-sm">
                <span className="text-gray-600">Activities: </span>
                <span className="font-medium">{completedActivities}/{totalActivities}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">Points: </span>
                <span className="font-medium text-quanttun-purple">{pointsEarned}</span>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="px-4 py-3 bg-gray-50 border-t border-gray-100">
          <div className="w-full flex flex-wrap gap-2">
            {techniques.slice(0, 3).map((technique, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-purple-100 text-quanttun-purple rounded-full"
              >
                {technique}
              </span>
            ))}
            {techniques.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                +{techniques.length - 3}
              </span>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RouteCard;
