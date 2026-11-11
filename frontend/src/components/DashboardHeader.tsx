import type {Greeting, StudyStats} from "../types.ts"
import "./DashboardHeader.css"

type DashboardHeaderProps = {
     name: string;
     greeting: Greeting;
     stats: StudyStats;
};

function DashboardHeader({
    name,
    greeting,
    stats
}: DashboardHeaderProps){
    return(
        <div className="dashboard-header">
            <div className="header-text">
                <h1>
                    👋 {greeting}, {name}
                </h1>
                <p> Ready to beat your weekly record?</p>
            </div>
            
            <div className="stats-container">
                <div className="stat-card">
                    <h3>🔥{stats.streak}</h3>
                    <p>Day Streak</p>
                </div>
                
                <div className="stat-card">
                    <h3>🏆{stats.weeklyRecord}</h3>
                    <p>Weekly Record</p>
                </div>

                <div className="stat-card">
                    <h3>🎯{stats.currentProgress}/{stats.weeklyGoal}</h3>
                    <p>Weekly Goal</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardHeader;