import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from './app.service';
import { Project } from '../../interface/interface';
import { NewComponent } from './new/new.component';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  displayedColumns = ['project', 'task', 'assignedTo', 'from', 'to', 'status', 'update', 'delete'];
  dataSource = new MatTableDataSource<Project>();
  dataArray: any;

  constructor(private appService: AppService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.appService.readAll().subscribe((res) => {
      this.dataArray = res;
      this.dataSource = new MatTableDataSource<Project>(this.dataArray)
    });
  }

  applyFilter(event: Event) {
    var filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  edit(element: any) {
    console.log(element);

  }

  delete(element: any) {
    console.log(element);

  }

  openDialog(){
    const dialogRef = this.dialog.open(NewComponent, {
      width: '1000px',
      height: '1000px',
    });

    dialogRef.afterClosed().subscribe((res)=>{
      console.log('The dialog closed');
    });
  }
}