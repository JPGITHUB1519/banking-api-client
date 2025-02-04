import { DOM } from './base';

// main function to return a datatable from json array data
export const getDatatableDomString = (data, tableHeaders) => {
  const tableHeaderDOMString = getDataTableHeadersDOMString(tableHeaders);
  const tableBodyDOMString = getDataTableBodyDOMString(data);

  const datatableDOMString = `
    ${tableHeaderDOMString}
    ${tableBodyDOMString}
  `;

  return datatableDOMString;
};

/*
  <thead>
    <tr>name</tr>
    <tr>lastname>/tr>
  </thead>
*/
export const getDataTableHeadersDOMString = (headers) => {
  const tableHeaderDomString = `
    <thead>
      <tr>
      <th></th>
       ${headers.map(header => {
        return `<th>${header}</th>`;
       }).join('')} 
       <th>Actions</th>
      </tr>
      
    </thead>
  `;

  return tableHeaderDomString;
};

/*
  <tr>
    <td>test name</td>
    <td>test lastname</td>
  </tr>
  <tr>
    <td>test name2 </td>
    <td>test lastname2</td>
  </tr>
*/
const getDatatableRowsDOMString = (data) => {
  const dataTableRowsDOMString = data.map(row => {
    const tdStrings = [];

    // checkboxes
    tdStrings.push(`<td><input type='checkbox' class='customer-crud-datatable__checkbox'></td>`);

    for (const property in row) {
      tdStrings.push(`<td>${row[property]}</td>`)
    }
    
    // adding action buttons domString
    const actionsButtonsDOMString = `
      <td>
        <button class="customer-crud-datatable__edit-button edit-button background-image-button"></button>
        <button class="customer-crud-datatable__delete-button delete-button background-image-button"></button>
        <button class="customer-crud-datatable__read-button read-button background-image-button"></button>
      </td>
    `;

    tdStrings.push(actionsButtonsDOMString);

    return `<tr data-id=${row.id}>${tdStrings.join('')}</tr>`;
  }).join('');

  return dataTableRowsDOMString;
}

export const getDataTableBodyDOMString = (data) => {
  const dataTableRowsDOMString = getDatatableRowsDOMString(data);

  const dataTableBody = `
    <tbody>
      ${dataTableRowsDOMString}
    </tbody>
  `;

  return dataTableBody;
};
