import React from "react";
import { ApplicationProvider } from '@/context/ApplicationContext';
import Application from "@/components/application/Application";



// ✅ Wrap everything here
export default function PageWrapper() {
  return (
    <ApplicationProvider>
      <Application />
    </ApplicationProvider>
  );
}