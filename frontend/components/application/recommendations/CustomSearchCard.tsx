// components/Application/recommendations/CustomSearchCard.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function CustomSearchCard() {
  const handleCustomSearch = () => {
    alert("Custom search functionality would be implemented here");
  };

  return (
    <Card className="border-dashed border-2 border-gray-300">
      <CardContent className="p-6 text-center">
        <h4 className="font-semibold text-gray-700 mb-2">Don't see what you're looking for?</h4>
        <p className="text-gray-600 mb-4">Browse all universities and programs manually</p>
        <Button variant="outline" onClick={handleCustomSearch}>
          Browse All Options
        </Button>
      </CardContent>
    </Card>
  );
}

export default CustomSearchCard;