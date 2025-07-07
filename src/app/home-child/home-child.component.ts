import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <p>
        This is a child component of Home Component: {{ message }}
      </p>
      <button (click)="sendMessage()">Send Message to Parent</button>
    </section>
  `,
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent {
  @Input() message: string = '';

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from Child!');
  }
}
