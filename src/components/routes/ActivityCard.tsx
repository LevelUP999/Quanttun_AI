
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Award } from 'lucide-react';

export interface ActivityProps {
  id: string;
  title: string;
  description: string;
  duration: number; // minutes
  points: number;
  completed: boolean;
  techniques: string[];
}

interface ActivityCardProps {
  activity: ActivityProps;
  onComplete: (id: string) => void;
}

const ActivityCard = ({ activity, onComplete }: ActivityCardProps) => {
  const handleComplete = () => {
    onComplete(activity.id);
  };

  return (
    <Card className={`overflow-hidden border ${activity.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
      <CardHeader className="p-4 border-b bg-gray-50">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{activity.title}</h3>
            <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{activity.duration} min</span>
              </div>
              <div className="flex items-center gap-1">
                <Award size={16} />
                <span>{activity.points} pontos</span>
              </div>
            </div>
          </div>
          
          {activity.completed && (
            <Badge className="bg-green-500">
              <CheckCircle size={14} className="mr-1" />
              Completo
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <p className="text-gray-600 mb-4">{activity.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {activity.techniques.map((technique, index) => (
            <Badge key={index} variant="outline" className="bg-purple-50 text-quanttun-purple border-purple-200">
              {technique}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 bg-gray-50 border-t">
        {!activity.completed ? (
          <Button 
            onClick={handleComplete} 
            className="bg-quanttun-purple text-white hover:bg-quanttun-darkPurple w-full"
          >
            Marcar como concluído
          </Button>
        ) : (
          <Button 
            variant="outline" 
            className="text-green-600 border-green-200 hover:bg-green-50 w-full"
            disabled
          >
            <CheckCircle size={16} className="mr-2" />
            Atividade concluída
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ActivityCard;
