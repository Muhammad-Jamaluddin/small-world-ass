import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'image'];
  dataSource = new MatTableDataSource<Client>([]);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  pageNumber: number = 0;
  pageSize: number = 5;
  length: number = 0;

  constructor(private clientService: ClientService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients(this.pageNumber + 1, this.pageSize)
      .subscribe((res) => {
        if (res && res['data']) {
          this.length = res['total'];
          this.dataSource = new MatTableDataSource(res['data']);
        }
      });
  }

  handlePageEvent(e: any) {
    console.log(e);
    this.pageNumber = e.pageIndex;
    this.pageSize = e.pageSize;

    this.getClients();
  }
}

export interface Client {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
