import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BuscoExtraService } from '../../services/buscoExtra.service';

@Component({
	templateUrl: 'detail.html',
	styleUrls: ['detail.scss']
})

export class DetailComponent implements OnInit {

	constructor(private buscoExtraService: BuscoExtraService, private router: Router, private activatedRoute: ActivatedRoute) { }

	list: Object[] = [];
	actualImage: Object;
	noImage: boolean = false;

	ngOnInit(): void {

		this.activatedRoute.params.subscribe((params: Params) => {
	        let imageId = params['id'];
			
	        this.buscoExtraService.getImages()
			.subscribe(
		        images => {

		        	this.list = images;

		        	for (let i = 0; i < this.list.length; i++) {
						if (this.list[i]['id'] == imageId) {
							this.actualImage = this.list[i];
						}
					}

					if (!this.actualImage) {
						this.router.navigate(['/']);
					}

		        },
		        error => console.error('Error al cargar las imágenes')
	      	);

	    });

	};

}