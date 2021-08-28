import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'DetalhesWebPartStrings';
import Detalhes from './components/Detalhes';
import { IDetalhesProps } from './components/IDetalhesProps';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';


export interface IDetalhesWebPartProps {
  description: string;
  list: string;
}

export default class DetalhesWebPart extends BaseClientSideWebPart<IDetalhesWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDetalhesProps> = React.createElement(
      Detalhes,
      {
        description: this.properties.description,
        list: this.properties.list
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyFieldListPicker('list', {
                  label: 'Select a list',
                  selectedList: this.properties.list,
                  includeHidden: false,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'listPickerFieldId'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
