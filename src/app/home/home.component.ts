import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  public districts: string[] = [];

  public listOfFruits = [
    'orange',
    'watermelon',
    'strawbery',
    'pineapple',
    'apple',
  ];
  public fruitStore = [
    {
      name: 'Orange',
      price: 10,
      from: 'VN',
      sale: true,
    },
    {
      name: 'Watermelon',
      price: 12,
      from: 'US',
      sale: false,
    },
    {
      name: 'Apple',
      price: 7.5,
      from: 'China',
      sale: true,
    },
    {
      name: 'Strawberry',
      price: 18,
      from: 'USA',
      sale: false,
    },
    {
      name: 'Melon',
      price: 9,
      from: 'Korea',
      sale: true,
    },
  ];
  public VietNam = [
    { city: 'Chon Thanh Pho', district: [] },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
  ];
  ngOnInit(): void {
    // console.log('cities', this.VietNam);
  }

  public changeCity(event: any): void {
    // console.log('event', event);
    const city = event.target.value;
    // console.log(city);
    if (!city) {
      return;
    }
    //c1
    const search = this.VietNam.filter((data) => data.city === city);
    // console.log('search', search);
    if (search && search.length > 0) {
      this.districts = search[0].district;
    }

    //c2
    this.districts =
      this.VietNam.find((data) => data.city === city)?.district || [];
  }
}
