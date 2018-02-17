import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'searcher',
	templateUrl: 'searcher.html',
	styleUrls: ['searcher.scss']
})

export class SearcherComponent {

	constructor() { }

	@Output() changeSearch = new EventEmitter<boolean>();
	actualSearch: string;

	newSearch(text: boolean): void {
	    this.changeSearch.emit(text);
	};

}