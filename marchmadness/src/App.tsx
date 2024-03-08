import React from "react";
import "./App.css";
import data from "./CollegeBasketballTeams.json";

interface TeamProps {
  School: string;
  Name: string;
  City: string;
  State: string;
}

function Team({ School, Name, City, State }: TeamProps) {
  return (
    <div className="card">
      <h2>{School}</h2>
      <p>
        <strong>Mascot:</strong> {Name}
      </p>
      <p>
        <strong>Location:</strong> {City}, {State}
      </p>
    </div>
  );
}

function TeamsList() {
  return (
    <div className="teams-list">
      {data.teams.map((team) => (
        <Team
          key={team.tid}
          School={team.school}
          Name={team.name}
          City={team.city}
          State={team.state}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div>
        <h3>
          Welcome to March Madness Central! Dive into the heart of NCAA
          Basketball excitement with our comprehensive website. Explore a
          treasure trove of information about your favorite college basketball
          teams, from their iconic school names and spirited mascots to their
          vibrant locations across the country. Get ready to immerse yourself in
          the thrilling world of collegiate hoops!
        </h3>
      </div>
      <div className="container">
        <TeamsList />
      </div>
    </div>
  );
}

export default App;
