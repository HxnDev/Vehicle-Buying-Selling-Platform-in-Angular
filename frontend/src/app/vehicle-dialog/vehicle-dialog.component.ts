import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import { VEHICLE } from '../app.component';

@Component({
  selector: 'app-vehicle-dialog',
  templateUrl: './vehicle-dialog.component.html',
  styleUrls: ['./vehicle-dialog.component.css']
})

export class VehicleDialogComponent implements OnInit {
  public vehicle: VEHICLE;

  constructor(
    private dialogRef: MatDialogRef<VehicleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {

      this.vehicle = data.vehicle
    }

  ngOnInit() {}


  close() {
    this.dialogRef.close();
  }

}

