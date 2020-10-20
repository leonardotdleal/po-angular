import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { PoDynamicFormComponent, PoLanguageService } from '@po-ui/ng-components';

import { PoAdvancedFilterBaseComponent } from './po-advanced-filter-base.component';
import { PoPageDynamicSearchFilters } from '../po-page-dynamic-search-filters.interface';

/**
 * @docsPrivate
 *
 * @docsExtends PoAdvancedFilterBaseComponent
 *
 * @examplePrivate
 *
 * <example-private name="po-advanced-filter" title="PO Busca Avançada">
 *   <file name="sample-po-advanced-filter.component.html"> </file>
 *   <file name="sample-po-advanced-filter.component.ts"> </file>
 * </example-private>
 */
@Component({
  selector: 'po-advanced-filter',
  templateUrl: './po-advanced-filter.component.html'
})
export class PoAdvancedFilterComponent extends PoAdvancedFilterBaseComponent implements OnDestroy, OnInit {
  private _subscription = new Subscription();

  @ViewChild(PoDynamicFormComponent, { static: true }) poDynamicForm: PoDynamicFormComponent;

  constructor(languageService: PoLanguageService) {
    super(languageService);
  }

  ngOnInit() {
    this.objectValueSubscribe();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  open() {
    this.filter = this.keepFilters ? this.getInitialValuesFromFilter(this.filters) : {};

    this.poModal.open();
  }

  private objectValueSubscribe() {
    this._subscription.add(
      this.poDynamicForm.getObjectValue().subscribe(valueAsObject => {
        if (valueAsObject) {
          this.getOptionsServiceItem(valueAsObject);
        }
      })
    );
  }

  private getOptionsServiceItem(valueAsObject) {
    if (!this.optionsServiceChosenOptions.includes(valueAsObject)) {
      this.optionsServiceChosenOptions = [...this.optionsServiceChosenOptions, valueAsObject];
    }
  }

  private getInitialValuesFromFilter(filters: Array<PoPageDynamicSearchFilters>) {
    return filters.reduce((result, item) => Object.assign(result, { [item.property]: item.initValue }), {});
  }
}
