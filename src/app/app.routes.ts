import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { SpecialitiesComponent } from './pages/specialities/specialities.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { PatientsComponent } from './pages/patients/patients.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'appointments', component: AppointmentComponent },
  { path: 'specialties', component: SpecialitiesComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'patients', component: PatientsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
