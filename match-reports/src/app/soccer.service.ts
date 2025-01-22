// src/app/soccer.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoccerService {

  private leagues = [
    {
      name: "Premier League",
      country: "England",
      matches: [
        { id: '1', home: "Manchester United", away: "Liverpool", date: "2025-02-05", time: "20:00" },
        { id: '2', home: "Manchester City", away: "Chelsea", date: "2025-02-06", time: "18:30" }
      ]
    },
    {
      name: "La Liga",
      country: "Spain",
      matches: [
        { id: '3', home: "Barcelona", away: "Real Madrid", date: "2025-02-02", time: "21:00" },
        { id: '4', home: "Atletico Madrid", away: "Sevilla", date: "2025-02-03", time: "19:30" }
      ]
    },
    {
      name: "Serie A",
      country: "Italy",
      matches: [
        { id: '5', home: "Juventus", away: "AC Milan", date: "2025-02-07", time: "22:00" },
        { id: '6', home: "Inter Milan", away: "Roma", date: "2025-02-08", time: "21:30" }
      ]
    },
    {
      name: "Bundesliga",
      country: "Germany",
      matches: [
        { id: '7', home: "Bayern Munich", away: "Borussia Dortmund", date: "2025-02-09", time: "20:30" },
        { id: '8', home: "RB Leipzig", away: "Bayer Leverkusen", date: "2025-02-10", time: "19:00" }
      ]
    },
    {
      name: "Ligue 1",
      country: "France",
      matches: [
        { id: '9', home: "Paris Saint-Germain", away: "Marseille", date: "2025-02-11", time: "21:00" },
        { id: '10', home: "Lyon", away: "Monaco", date: "2025-02-12", time: "20:30" }
      ]
    },
    {
      name: "Copa de la Liga",
      country: "Argentina",
      matches: [
        { id: '11', home: "Boca Juniors", away: "River Plate", date: "2025-02-14", time: "22:00" },
        { id: '12', home: "Independiente", away: "Racing Club", date: "2025-02-15", time: "20:00" }
      ]
    },
    {
      name: "Brasileirão",
      country: "Brazil",
      matches: [
        { id: '13', home: "Flamengo", away: "Sao Paulo", date: "2025-02-20", time: "22:00" },
        { id: '14', home: "Palmeiras", away: "Vasco da Gama", date: "2025-02-21", time: "20:30" }
      ]
    },
    {
      name: "Major League Soccer",
      country: "USA",
      matches: [
        { id: '15', home: "Los Angeles Galaxy", away: "New York City FC", date: "2025-02-22", time: "19:00" },
        { id: '16', home: "Seattle Sounders", away: "Atlanta United", date: "2025-02-23", time: "21:00" }
      ]
    },
    {
      name: "A-League",
      country: "Australia",
      matches: [
        { id: '17', home: "Melbourne Victory", away: "Sydney FC", date: "2025-02-25", time: "20:30" },
        { id: '18', home: "Adelaide United", away: "Perth Glory", date: "2025-02-26", time: "19:00" }
      ]
    },
    {
      name: "Eredivisie",
      country: "Netherlands",
      matches: [
        { id: '19', home: "Ajax", away: "PSV Eindhoven", date: "2025-02-28", time: "22:00" },
        { id: '20', home: "Feyenoord", away: "AZ Alkmaar", date: "2025-03-01", time: "20:30" }
      ]
    },
    {
      name: "Primeira Liga",
      country: "Portugal",
      matches: [
        { id: '21', home: "Benfica", away: "Portimonense", date: "2025-03-02", time: "21:00" },
        { id: '22', home: "FC Porto", away: "Sporting CP", date: "2025-03-03", time: "19:30" }
      ]
    },
    {
      name: "Russian Premier League",
      country: "Russia",
      matches: [
        { id: '23', home: "Zenit St Petersburg", away: "Spartak Moscow", date: "2025-03-04", time: "21:00" },
        { id: '24', home: "CSKA Moscow", away: "Lokomotiv Moscow", date: "2025-03-05", time: "20:30" }
      ]
    },
    {
      name: "J1 League",
      country: "Japan",
      matches: [
        { id: '25', home: "Kashima Antlers", away: "Urawa Red Diamonds", date: "2025-03-07", time: "18:00" },
        { id: '26', home: "Yokohama F. Marinos", away: "Gamba Osaka", date: "2025-03-08", time: "19:30" }
      ]
    },
    {
      name: "Chinese Super League",
      country: "China",
      matches: [
        { id: '27', home: "Guangzhou Evergrande", away: "Shanghai SIPG", date: "2025-03-09", time: "20:00" },
        { id: '28', home: "Beijing Guoan", away: "Shandong Luneng", date: "2025-03-10", time: "18:30" }
      ]
    },
    {
      name: "Copa Libertadores",
      country: "South America",
      matches: [
        { id: '29', home: "Boca Juniors", away: "Fluminense", date: "2025-03-12", time: "22:00" },
        { id: '30', home: "Palmeiras", away: "Atlético Mineiro", date: "2025-03-13", time: "20:00" }
      ]
    },
    {
      name: "Copa Sudamericana",
      country: "South America",
      matches: [
        { id: '31', home: "Emelec", away: "Independiente del Valle", date: "2025-03-14", time: "22:00" },
        { id: '32', home: "Atlético Tucumán", away: "Club Libertad", date: "2025-03-15", time: "20:00" }
      ]
    },
    {
      name: "Egyptian Premier League",
      country: "Egypt",
      matches: [
        { id: '33', home: "Al Ahly", away: "Zamalek", date: "2025-03-17", time: "20:30" },
        { id: '34', home: "Pyramids FC", away: "Al Masry", date: "2025-03-18", time: "19:00" }
      ]
    },
    {
      name: "Turkish Süper Lig",
      country: "Turkey",
      matches: [
        { id: '35', home: "Galatasaray", away: "Fenerbahçe", date: "2025-03-19", time: "22:00" },
        { id: '36', home: "Besiktas", away: "Trabzonspor", date: "2025-03-20", time: "20:30" }
      ]
    }
  ];

  constructor() {}

  getLeagues() {
    return this.leagues;
  }

  getMatchById(id: string) {
    // Find the match by its ID across all leagues
    for (let league of this.leagues) {
      const match = league.matches.find(m => m.id === id);
      if (match) return match;
    }
    return null;  // If match not found
  }
}
