import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [CommonModule, FormsModule,RouterModule],
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  selectedLeague: any;

  leagues = [
    {
      country: "Argentina",
      league: "Copa de Liga",
      showMatches: true,
      matches: [
        { home: "River Plate", away: "Boca Juniors", date: "2025-02-20", home_score: 1, away_score: 1 },
        { home: "Independiente", away: "Racing Club", date: "2025-02-21", home_score: 2, away_score: 2 }
      ]
    },
    {
      country: "Belgium",
      league: "Pro League",
      showMatches: true,
      matches: [
        { home: "Club Brugge", away: "Anderlecht", date: "2025-02-19", home_score: 3, away_score: 0 },
        { home: "KRC Genk", away: "Standard Liège", date: "2025-02-22", home_score: 2, away_score: 1 }
      ]
    },
    {
      country: "Brazil",
      league: "Campeonato Brasileiro Série A",
      showMatches: true,
      matches: [
        { home: "Flamengo", away: "São Paulo", date: "2025-02-18", home_score: 3, away_score: 1 },
        { home: "Palmeiras", away: "Corinthians", date: "2025-02-25", home_score: 0, away_score: 2 }
      ]
    },
    {
      country: "England",
      league: "Premier League",
      showMatches: true,
      matches: [
        { home: "Manchester City", away: "Manchester United", date: "2025-01-22", home_score: 4, away_score: 2 },
        { home: "Chelsea", away: "Liverpool", date: "2025-02-14", home_score: 1, away_score: 1 },
        { home: "Arsenal", away: "Tottenham Hotspur", date: "2025-02-28", home_score: 2, away_score: 0 }
      ]
    },
    {
      country: "Spain",
      league: "La Liga",
      showMatches: true,
      matches: [
        { home: "Real Madrid", away: "Barcelona", date: "2025-01-30", home_score: 2, away_score: 2 },
        { home: "Atlético Madrid", away: "Sevilla", date: "2025-02-07", home_score: 3, away_score: 1 },
        { home: "Valencia", away: "Real Sociedad", date: "2025-02-25", home_score: 1, away_score: 0 }
      ]
    },
    {
      country: "France",
      league: "Ligue 1",
      showMatches: true,
      matches: [
        { home: "Paris Saint-Germain", away: "Marseille", date: "2025-02-17", home_score: 2, away_score: 1 },
        { home: "Lyon", away: "Monaco", date: "2025-02-21", home_score: 1, away_score: 1 }
      ]
    },
    {
      country: "Italy",
      league: "Serie A",
      showMatches: true,
      matches: [
        { home: "Juventus", away: "AC Milan", date: "2025-02-10", home_score: 1, away_score: 1 },
        { home: "Inter Milan", away: "Napoli", date: "2025-02-15", home_score: 2, away_score: 2 }
      ]
    },
    {
      country: "Germany",
      league: "Bundesliga",
      showMatches: true,
      matches: [
        { home: "Bayern Munich", away: "Borussia Dortmund", date: "2025-01-16", home_score: 3, away_score: 1 },
        { home: "RB Leipzig", away: "Bayer Leverkusen", date: "2025-01-22", home_score: 2, away_score: 2 }
      ]
    },
    {
      country: "Netherlands",
      league: "Eredivisie",
      showMatches: true,
      matches: [
        { home: "Ajax", away: "PSV Eindhoven", date: "2025-01-25", home_score: 4, away_score: 1 },
        { home: "Feyenoord", away: "AZ Alkmaar", date: "2025-02-01", home_score: 3, away_score: 1 }
      ]
    }
  ];
  
  // Toggle dropdown visibility
  toggleDropdown(league: { showMatches: boolean; }) {
    league.showMatches = !league.showMatches;
  }
  
}
