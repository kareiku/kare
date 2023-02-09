function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function (rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function (cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}

createTable([
    ["Curry Rice", "Curry Sauce", "Basmati Rice", "Chicken/Turkey"],
    ["Curry Sauce", "Mayonaise (Olive)", "Curry", "Olive Oil", "Salt", "Basil"],
    ["Tea Cakes", "Flour"],
    ["Tortilla de Patata", "Potato", "Eggs", "Olive Oil", "Salt", "Pour some oil on a pan"],
    ["Fried Rice", "Basmati Rice", "Olive Oil", "Salt"]
]);