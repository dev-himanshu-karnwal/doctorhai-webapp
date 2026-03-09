"use client";

import { useState, useEffect } from "react";

/**
 * Hook to format a date string as a "Time Ago" string.
 * Automatically updates every minute to keep the relative time accurate.
 *
 * @param dateStr The date string to format
 * @returns Formatted "time ago" string
 */
export const useTimeAgo = (dateStr: string | undefined): string => {
  const [timeAgo, setTimeAgo] = useState<string>("Just now");

  useEffect(() => {
    const calculateTimeAgo = () => {
      if (!dateStr) {
        setTimeAgo("Just now");
        return;
      }

      try {
        const date = new Date(dateStr);
        const now = new Date();
        const diffInSeconds = Math.floor(
          (now.getTime() - date.getTime()) / 1000
        );

        if (diffInSeconds < 60) {
          setTimeAgo("Just now");
          return;
        }

        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) {
          setTimeAgo(`${diffInMinutes} min${diffInMinutes > 1 ? "s" : ""} ago`);
          return;
        }

        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
          setTimeAgo(`${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`);
          return;
        }

        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays < 7) {
          setTimeAgo(`${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`);
          return;
        }

        setTimeAgo(date.toLocaleDateString());
      } catch (_e) {
        setTimeAgo("Just now");
      }
    };

    calculateTimeAgo();

    // Update every minute (60,000ms)
    const interval = setInterval(calculateTimeAgo, 60000);

    return () => clearInterval(interval);
  }, [dateStr]);

  return timeAgo;
};
