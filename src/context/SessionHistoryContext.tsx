"use client";

import * as React from "react";

// Hook to persist state to local storage
function useLocalStorage<T>(key: string, initialValue: T) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = React.useState<T>(initialValue);
    const [isLoaded, setIsLoaded] = React.useState(false);

    // Initialize state from local storage (client-side only)
    React.useEffect(() => {
        try {
            if (typeof window !== "undefined") {
                const item = window.localStorage.getItem(key);
                if (item) {
                    setStoredValue(JSON.parse(item));
                }
            }
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
        } finally {
            setIsLoaded(true);
        }
    }, [key]);

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = React.useCallback((value: T | ((val: T) => T)) => {
        try {
            // Allow value to be a function so we have same API as useState
            setStoredValue((oldValue) => {
                const valueToStore = value instanceof Function ? value(oldValue) : value;
                // Save to local storage
                if (typeof window !== "undefined") {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                }
                return valueToStore;
            });
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    }, [key]);

    return [storedValue, setValue, isLoaded] as const;
}

interface SessionHistoryContextType {
    seenQuestionIds: string[];
    markQuestionsAsSeen: (ids: string[]) => void;
    resetHistory: () => void;
    isLoaded: boolean;
}

const SessionHistoryContext = React.createContext<SessionHistoryContextType | undefined>(undefined);

export function SessionHistoryProvider({ children }: { children: React.ReactNode }) {
    const [seenQuestionIds, setSeenQuestionIds, isLoaded] = useLocalStorage<string[]>("aws-prep-seen-questions", []);

    const markQuestionsAsSeen = React.useCallback((ids: string[]) => {
        setSeenQuestionIds((prev) => {
            // Use Set to ensure uniqueness
            const newSet = new Set([...prev, ...ids]);
            return Array.from(newSet);
        });
    }, [setSeenQuestionIds]); // Added dependency

    const resetHistory = React.useCallback(() => {
        setSeenQuestionIds([]);
    }, [setSeenQuestionIds]); // Added dependency

    return (
        <SessionHistoryContext.Provider value={{ seenQuestionIds, markQuestionsAsSeen, resetHistory, isLoaded }}>
            {children}
        </SessionHistoryContext.Provider>
    );
}

export function useSessionHistory() {
    const context = React.useContext(SessionHistoryContext);
    if (context === undefined) {
        throw new Error("useSessionHistory must be used within a SessionHistoryProvider");
    }
    return context;
}
