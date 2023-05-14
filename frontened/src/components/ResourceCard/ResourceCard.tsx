import React from 'react';
interface Resource {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    url: string;
  }
  
interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className="bg-white shadow rounded-md p-4">
      <img src={resource.imageUrl} alt={resource.title} className="w-full h-32 object-cover rounded-md" />
      <div className="pt-2 pb-4">
        <h3 className="text-lg font-medium">{resource.title}</h3>
        <p className="text-gray-500">{resource.description}</p>
      </div>
      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="block text-center text-blue-600 font-medium">Read More</a>
    </div>
  );
};

export default ResourceCard;
