import React, { useState, useEffect } from "react";
import { fetchThreads } from "../services/api";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ForumList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetchThreads()
      .then((res) => setThreads(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Discussion Forum</h2>
      {threads.length > 0 ? (
        threads.map((thread) => (
          <Card
            key={thread._id}
            className="mb-4 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <CardHeader>
              <CardTitle>
                <Link to={`/forum/${thread._id}`} className="hover:underline">
                  {thread.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {thread.description || "No description provided."}
              </p>
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="text-center text-gray-500">No threads available.</p>
      )}
    </div>
  );
};

export default ForumList;
