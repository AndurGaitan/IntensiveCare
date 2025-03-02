import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronDown, Save } from "lucide-react";

export const ClinicalEvaluation = () => {
  const [activeTab, setActiveTab] = useState("mrc");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Clinical Evaluation</h1>
      <div className="bg-white rounded-lg shadow">
        <div className="border-b">
          <nav className="flex -mb-px">
            <TabButton active={activeTab === "mrc"} onClick={() => setActiveTab("mrc")} label="MRC Score" />
            <TabButton active={activeTab === "ims"} onClick={() => setActiveTab("ims")} label="IMS Scale" />
            <TabButton active={activeTab === "rass"} onClick={() => setActiveTab("rass")} label="RASS Scale" />
            <TabButton active={activeTab === "ventilation"} onClick={() => setActiveTab("ventilation")} label="Ventilation" />
          </nav>
        </div>
        <div className="p-6">
          {activeTab === "mrc" && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">MRC Score Assessment</h2>
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700">Right Side</h3>
                <MuscleGroup register={register} name="rightShoulder" label="Shoulder Flexion" />
                <MuscleGroup register={register} name="rightElbow" label="Elbow Flexion" />
                <MuscleGroup register={register} name="rightWrist" label="Wrist Extension" />
                <MuscleGroup register={register} name="rightHip" label="Hip Flexion" />
                <MuscleGroup register={register} name="rightKnee" label="Knee Extension" />
                <MuscleGroup register={register} name="rightAnkle" label="Ankle Dorsiflexion" />
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700">Left Side</h3>
                <MuscleGroup register={register} name="leftShoulder" label="Shoulder Flexion" />
                <MuscleGroup register={register} name="leftElbow" label="Elbow Flexion" />
                <MuscleGroup register={register} name="leftWrist" label="Wrist Extension" />
                <MuscleGroup register={register} name="leftHip" label="Hip Flexion" />
                <MuscleGroup register={register} name="leftKnee" label="Knee Extension" />
                <MuscleGroup register={register} name="leftAnkle" label="Ankle Dorsiflexion" />
              </div>
              <button type="submit" className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                <Save className="w-5 h-5 mr-2" /> Save Assessment
              </button>
            </form>
          )}
          {activeTab === "ventilation" && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Ventilation Parameters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <VentilationParameter register={register} name="mode" label="Ventilation Mode" type="select" options={["SIMV", "CPAP", "ASV", "PSV"]} />
                <VentilationParameter register={register} name="tidalVolume" label="Tidal Volume (mL)" type="number" />
                <VentilationParameter register={register} name="respiratoryRate" label="Respiratory Rate (bpm)" type="number" />
                <VentilationParameter register={register} name="peep" label="PEEP (cmH₂O)" type="number" />
                <VentilationParameter register={register} name="fio2" label="FiO₂ (%)" type="number" />
                <VentilationParameter register={register} name="pressureSupport" label="Pressure Support (cmH₂O)" type="number" />
              </div>
              <button type="submit" className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                <Save className="w-5 h-5 mr-2" /> Save Parameters
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, label }) => (
  <button onClick={onClick} className={`px-4 py-2 border-b-2 text-sm font-medium ${active ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}>
    {label}
  </button>
);

const MuscleGroup = ({ register, name, label }) => (
  <div className="flex items-center justify-between">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <select {...register(name)} className="ml-3 block w-32 rounded-md border-gray-300 shadow-sm">
      <option value="">Select...</option>
      <option value="0">0 - No contraction</option>
      <option value="1">1 - Flicker</option>
      <option value="2">2 - Movement without gravity</option>
      <option value="3">3 - Movement against gravity</option>
      <option value="4">4 - Movement against resistance</option>
      <option value="5">5 - Normal power</option>
    </select>
  </div>
);

const VentilationParameter = ({ register, name, label, type, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    {type === "select" ? (
      <select {...register(name)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    ) : (
      <input type="number" {...register(name)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
    )}
  </div>
);
