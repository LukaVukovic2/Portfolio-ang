import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-recent-projects-section',
  templateUrl: './recent-projects-section.component.html',
  styleUrl: './recent-projects-section.component.css'
})
export class RecentProjectsSectionComponent {
  projects: Project[] = [
    {
      description: "No new show ideas? No problem!",
      imageUrl: "assets/images/tvshows-app.png",
      technologies: 'React, Next.js, TypeScript, CSS, Chakra UI',
      url: "https://tv-shows-app-one.vercel.app"
    },
    {
      description: "Search and rate your favourite movies and actors",
      imageUrl: "assets/images/moviemix.png",
      technologies: 'JavaScript, RESTful API (TMDB)',
      url: "https://lukavukovic2.github.io/MovieMix/home.html"
    },
    {
      description: "Create and play quizzes. Beware of time limit!",
      imageUrl: "assets/images/quizquad.png",
      technologies: 'HTML, CSS, JS, Firebase',
      url: "https://lukavukovic2.github.io/JS-Quizzes/user-choice.html"
    },
    {
      description: "Browse the website, add to cart, and checkout*",
      imageUrl: "assets/images/webshop.png",
      technologies: 'Angular, TypeScript, Firebase',
      url: "https://angular-webshop-7ade4.web.app"
    }
  ];
}
