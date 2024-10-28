import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

export interface Appointment {
  doctorName: string;
  doctorProfile: string; // URL for doctor avatar
  specialty: string;
  patientName: string;
  patientProfile: string; // URL for patient avatar
  appointmentTime: string;
  amount: number;
}

const ELEMENT_DATA: Appointment[] = [
  {
    doctorName: 'Dr. John Doe',
    doctorProfile: 'https://picsum.photos/seed/1/40/40',
    specialty: 'Cardiology',
    patientName: 'Alice Smith',
    patientProfile: 'https://picsum.photos/seed/2/40/40',
    appointmentTime: '2024-10-30 10:00 AM',
    amount: 100,
  },
  {
    doctorName: 'Dr. Jane Roe',
    doctorProfile: 'https://picsum.photos/seed/3/40/40',
    specialty: 'Neurology',
    patientName: 'Bob Johnson',
    patientProfile: 'https://picsum.photos/seed/4/40/40',
    appointmentTime: '2024-10-30 11:00 AM',
    amount: 150,
  },
  {
    doctorName: 'Dr. Emily Davis',
    doctorProfile: 'https://picsum.photos/seed/5/40/40',
    specialty: 'Pediatrics',
    patientName: 'Charlie Brown',
    patientProfile: 'https://picsum.photos/seed/6/40/40',
    appointmentTime: '2024-10-30 12:00 PM',
    amount: 200,
  },
  {
    doctorName: 'Dr. Michael Lee',
    doctorProfile: 'https://picsum.photos/seed/7/40/40',
    specialty: 'Orthopedics',
    patientName: 'Daisy Adams',
    patientProfile: 'https://picsum.photos/seed/8/40/40',
    appointmentTime: '2024-10-30 01:00 PM',
    amount: 250,
  },
];

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginator, MatSort], // Added imports
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  displayedColumns: string[] = ['doctor', 'specialty', 'patient', 'appointmentTime', 'amount'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator; // Declare paginator
  @ViewChild(MatSort)
  sort!: MatSort; // Declare sort

  ngOnInit() {
    this.dataSource.paginator = this.paginator; // Set paginator
    this.dataSource.sort = this.sort; // Set sort
  }
}
