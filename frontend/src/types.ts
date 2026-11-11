export type StudyDocument = {
    id: number;
    title: string;
    pages: number;
};

export type Greeting=
    |"Good Morning"
    |"Good Afternoon"
    |"Good Evening";

export type StudyStats={
    streak: number;
    weeklyRecord: number;
    currentProgress: number;
    weeklyGoal: number;
}