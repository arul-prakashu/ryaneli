import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  selectedLeague: any;

  leagues = [
    {
      country: "Argentina",
      league: "Copa de Liga",
      matches: [
        { home: "River Plate", away: "Boca Juniors", date: "2025-02-20", home_score: 1, away_score: 1 }
      ]
    },
    {
      country: "Belgium",
      league: "Pro League",
      matches: []
    },
    {
      country: "Brazil",
      league: "Campeonato Brasileiro Série A",
      matches: []
    },
    {
      country: "England",
      league: "Premier League",
      matches: [
        { home: "Manchester City", away: "Manchester United", date: "2025-01-22", home_score: 4, away_score: 2 },
        { home: "Chelsea", away: "Liverpool", date: "2025-02-14", home_score: 1, away_score: 1 }
      ]
    },
    {
      country: "Spain",
      league: "La Liga",
      matches: [
        { home: "Real Madrid", away: "Barcelona", date: "2025-01-30", home_score: 2, away_score: 2 },
        { home: "Atlético Madrid", away: "Sevilla", date: "2025-02-07", home_score: 3, away_score: 1 }
      ]
    },
    {
      country: "France",
      league: "Ligue 1",
      matches: []
    },
    {
      country: "Italy",
      league: "Serie A",
      matches: []
    },
    {
      country: "Germany",
      league: "Bundesliga",
      matches: [
        { home: "Bayern Munich", away: "Borussia Dortmund", date: "2025-01-16", home_score: 3, away_score: 1 }
      ]
    },
    {
      country: "Netherlands",
      league: "Eredivisie",
      matches: [
        { home: "Ajax", away: "PSV Eindhoven", date: "2025-01-25", home_score: 4, away_score: 1 }
      ]
    }
  ];

  getMatchStyle(match: any) {
    if (match.home_score > match.away_score) {
      return { 'background-color': 'lightblue' };  // Home team win
    } else if (match.home_score < match.away_score) {
      return { 'background-color': 'lightblue' };  // Away team win
    } else {
      return { 'background-color': 'lightblue' };  // Draw
    }
  }
}
