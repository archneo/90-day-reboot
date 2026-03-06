import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Data Types
export interface UserProfile {
    uid: string;
    name: string | null;
    email: string | null;
    quitDate: Date;
    programDay: number;
}

export interface Craving {
    intensity: number;
    trigger: string;
    actionTaken: string;
    notes?: string;
}

export interface DailyLog {
    mood: number;
    sleepQuality: number;
    exercise: boolean;
    journalNotes: string;
    cravingsCount: number;
}

// Functions to interact with Firestore
export const logCraving = (userId: string, craving: Craving) => {
    return addDoc(collection(db, 'users', userId, 'cravings'), {
        ...craving,
        timestamp: serverTimestamp(),
    });
};

export const logDailyCheckin = (userId: string, log: DailyLog) => {
    return addDoc(collection(db, 'users', userId, 'logs'), {
        ...log,
        timestamp: serverTimestamp(),
    });
};