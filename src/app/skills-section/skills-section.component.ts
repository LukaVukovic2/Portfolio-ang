import { Component, OnInit } from '@angular/core';
import { SkillCategory } from '../models/skill-category.model';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent {
  skills: SkillCategory[] = [
    {
      icon: 'html.gif',
      title: 'Web Development',
      description: 'I try to implement intuitive design and logic in my work',
      list: {
        title: 'Tech stack',
        items: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Bootstrap', 'Firebase', 'MySQL', 'Figma', 'Git']},
    },
    {
      icon: 'idea.gif',
      title: 'Soft skills',
      description: 'I put great emphasis on myself, taking enough time to improve every aspect of my life',
      list: {
        title: 'My qualities',
        items: ['Problem solving', 'Desire to learn', 'Focus on details', 'Vision', 'Work-ethic', 'Motivation', 'Multitasking', 'Resilience'],
      },
    },{
      icon: 'online-learning.gif',
      title: 'Continuous learning',
      description: 'Besides formal education, I find necessary to do some extra work in order to achieve personal goals',
      list: {
        title: 'Finished courses',
        items: ['Infinum React Academy (2024)', 'Online: Web Development Masterclass', 'Online: Angular - The Complete Guide (2023 Edition)']
      },
    },
  ];
}