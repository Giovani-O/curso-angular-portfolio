import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: '/assets/icons/knowledge/react.svg',
      alt: 'Logo do React',
    },
    {
      src: '/assets/icons/knowledge/html5.svg',
      alt: 'Logo do HTML',
    },
    {
      src: '/assets/icons/knowledge/css3.svg',
      alt: 'Logo do CSS',
    },
    {
      src: '/assets/icons/knowledge/javascript.svg',
      alt: 'Logo do Javascript',
    },
    {
      src: '/assets/icons/knowledge/angular.svg',
      alt: 'Logo do Angular',
    },
  ]);
}
