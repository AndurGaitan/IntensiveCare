import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar, Clock, Save } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockProgressData = [
  { date: "Mon", ims: 2, strength: 30 },
  { date: "Tue", ims: 3, strength: 35 },
  { date: "Wed", ims: 3, strength: 38 },
  { date: "Thu", ims: 4, strength: 42 },
  { date: "Fri", ims: 5, strength: 45 },
];

const DigitalRecords = () => {
  const [activeTab, setActiveTab] = useState("session");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Digital Records</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">New Session Record</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Session Type</label>
                <select {...register("sessionType")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                  <option value="">Select type...</option>
                  <option value="passive">Passive Mobilization</option>
                  <option value="active">Active Mobilization</option>
                  <option value="respiratory">Respiratory Therapy</option>
                  <option value="neuromuscular">Neuromuscular Training</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Patient Response</label>
                <select {...register("patientResponse")} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                  <option value="">Select response...</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Progress Notes</label>
                <textarea {...register("notes")} rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Enter session notes..." />
              </div>
              <button type="submit" className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Save className="w-5 h-5 mr-2" /> Save Session
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Patient Progress</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="ims" stroke="#8884d8" name="IMS Score" />
                <Line yAxisId="right" type="monotone" dataKey="strength" stroke="#82ca9d" name="Strength Score" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Sessions</h2>
        <div className="space-y-4">
          <SessionCard type="Respiratory Therapy" date="Today" time="09:30 AM" response="Good" notes="Patient showed improved breathing patterns" />
          <SessionCard type="Active Mobilization" date="Yesterday" time="02:15 PM" response="Excellent" notes="Achieved standing position with minimal support" />
          <SessionCard type="Neuromuscular Training" date="2 days ago" time="11:00 AM" response="Fair" notes="Focus on upper limb strengthening" />
        </div>
      </div>
    </div>
  );
};

const SessionCard = ({ type, date, time, response, notes }) => (
  <div className="border rounded-lg p-4 hover:bg-gray-50">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-sm font-medium text-gray-900">{type}</h3>
        <div className="mt-1 flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-1" /> {date}
          <Clock className="w-4 h-4 ml-3 mr-1" /> {time}
        </div>
      </div>
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${response === "Excellent" ? "bg-green-100 text-green-800" : response === "Good" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}`}>
        {response}
      </span>
    </div>
    <p className="mt-2 text-sm text-gray-600">{notes}</p>
  </div>
);

export default DigitalRecords;
