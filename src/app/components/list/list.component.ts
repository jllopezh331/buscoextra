import { Component, OnInit } from '@angular/core';
import { BuscoExtraService } from '../../services/buscoExtra.service';
import { Router } from '@angular/router';

@Component({
	templateUrl: 'list.html',
	styleUrls: ['list.scss']
})

export class ListComponent implements OnInit {

	constructor(private buscoExtraService: BuscoExtraService, private router: Router) { }

	list: Object[] = [];
	searchList: Object[] = [];

	ngOnInit(): void {

		this.buscoExtraService.getImages()
		.subscribe(
	        images => {
	        	this.list = images;
	        	this.searchList = images;
	        },
	        error => console.error('Error al cargar las imágenes')
      	);

	};

	newSearch(text: string): void {

		if (text) {
			let auxList: Object[] = [];
			
			for (let i = 0; i < this.list.length; i++) {
				if (~this.list[i]['title'].toLowerCase().indexOf(text.toLowerCase())) {
					auxList.push(this.list[i]);
				}
			}

			this.searchList = auxList;
		}
		else {
			this.searchList = this.list;
		}

	};

}