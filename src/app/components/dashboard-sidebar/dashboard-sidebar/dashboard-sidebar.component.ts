import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterLink],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent {
  @Input() open = true;
  selectedTab: string = 'Dashboard';

  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
    { label: 'Appointments', icon: 'calendar_today', link: '/appointments' },
    { label: 'Specialties', icon: 'category', link: '/specialties' },
    { label: 'Doctors', icon: 'people', link: '/doctors' },
    { label: 'Patients', icon: 'person', link: '/patients' },
  ];

  selectTab(label: string) {
    this.selectedTab = label;
  }
}
