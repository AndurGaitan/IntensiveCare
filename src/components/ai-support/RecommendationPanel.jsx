import React from "react";
import { Brain, AlertTriangle, Stethoscope } from "lucide-react";

const RecommendationPanel = () => {
  return (
    <div className="space-y-4">
      <h3 className="flex items-center gap-2 font-medium">
        <Brain className="w-5 h-5 text-[#0A89FB]" /> AI Recommendations
      </h3>
      <div className="space-y-3">
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center gap-2 text-yellow-700 mb-1">
            <AlertTriangle className="w-4 h-4" />
            <h4 className="font-medium text-sm">Potential Interaction</h4>
          </div>
          <p className="text-sm text-yellow-800">Consider reviewing current medication combination for possible interactions.</p>
        </div>
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2 text-blue-700 mb-1">
            <Stethoscope className="w-4 h-4" />
            <h4 className="font-medium text-sm">Treatment Suggestion</h4>
          </div>
          <p className="text-sm text-blue-800">Based on recent vitals, consider adjusting oxygen flow rate.</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendationPanel;
