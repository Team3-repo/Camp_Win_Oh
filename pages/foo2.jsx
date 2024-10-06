import React from 'react';

const DataExporter = () => {
  const fetchData = async () => {
    const response = await fetch('http://localhost:3099/users');
    const data = await response.json();
    return data;
  };

  const filterAndExportData = async () => {
    const data = await fetchData();

    // Example filter: Only include users with age greater than 20
    const filteredData = data.filter(user => user.is_deleted === 0);

    // Convert the filtered data to a JSON string
    const jsonString = JSON.stringify(filteredData, null, 2);

    // Create a Blob from the JSON string
    const blob = new Blob([jsonString], { type: 'application/json' });

    // Create a link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'filteredData.json'; // Specify the name of the file

    // Append the link to the document
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up: remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={filterAndExportData}>Export Filtered Data</button>
    </div>
  );
};

export default DataExporter;
