import React from "react";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Calendar from "react-calendar";

export const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const snapshot = await db.collection("activities").get();
        const data = snapshot.docs.map((doc) => doc.data());
        setActivities(data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };
    fetchActivities();
  }, []);

  const pieData = [
    { name: "Web Design", value: 400 },
    { name: "Graphics Design", value: 300 },
    { name: "UX/UI Design", value: 200 },
    { name: "Brand Identity", value: 100 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f"];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user?.displayName || "User"}
      </h1>

      {/* Pie Chart */}
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Project Category</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        <Calendar />
      </div>

      {/* Activity Log */}
      <div className="mt-10 bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Activity Logs</h2>
        {activities.length > 0 ? (
          <ul className="space-y-2">
            {activities.map((act, index) => (
              <li key={index} className="text-gray-700">
                ✅ {act.message}{" "}
                <span className="text-sm text-gray-400">({act.timestamp})</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No activity logs available.</p>
        )}
      </div>
    </div>
  );
};
