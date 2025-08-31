// components/Application/recommendations/ProfileSummary.jsx
import { useContext } from 'react';
import { ApplicationContext } from '@/context/ApplicationContext';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

function ProfileSummary() {
  const { userData } = useContext(ApplicationContext);

  return (
    <Card className="border-blue-200 bg-blue-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <FileText className="h-5 w-5" />
          Your Profile Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Name:</strong> {userData.name}
          </div>
          <div>
            <strong>Current Level:</strong> {userData.currentEducation}
          </div>
          <div>
            <strong>Field of Study:</strong> {userData.fieldOfStudy}
          </div>
          <div>
            <strong>English Level:</strong> {userData.englishLevel}
          </div>
          <div>
            <strong>Preferred Level:</strong> {userData.studyLevel}
          </div>
          <div>
            <strong>Start Date:</strong> {userData.startDate}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProfileSummary;