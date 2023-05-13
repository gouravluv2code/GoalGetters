import React, { useState, useEffect } from 'react';
import ResourceCard from '../components/ResourceCard';
interface Resource {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    url: string;
  }
  
const Resources: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    // Fetch resources from API and update state
    const fetchResources = async () => {
      const response = await fetch('/api/resources');
      const data = await response.json();
      setResources(data);
    };
    fetchResources();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Educational Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default Resources;
