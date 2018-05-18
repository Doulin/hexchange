import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  staffHexChange: any[] = [
    {
      name: 'Vũ Chí Kiên',
      image: 'assets/kien.jpg',
      position: 'Systems Enginner',
      email: 'kienvc@gmail.com '
    },
    {
      name: 'Hoàng Văn Phi',
      image: 'assets/phi.jpg',
      position: 'Sercurity Expert',
      email: 'phihv@gmail.com'
    },
    {
      name: 'Đỗ Duy Linh',
      image: 'assets/linh.JPG',
      position: 'Web Development',
      email: 'linhdd@gmail.com'
    }
  ];

  ngOnInit() {}
}
