import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav} from './1-nav/nav';
import { Hero } from './2-hero/hero';
import { Section } from './3-section/section';
import { Blog } from './4-blog/blog';
import { Footer } from './5-footer/footer';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Nav, Hero, Section, Blog, Footer],
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-site');
}