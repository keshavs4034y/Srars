// Your API Key
const apiKey = "d176e6667dff62e31814d7a603448e2a";

// SMM Galaxy API Base URL
const baseUrl = "https://smmgalaxy.com/api/v2";

// Fetch services from SMM Galaxy API
document.getElementById('fetchServices').addEventListener('click', () => {
    const endpoint = `${baseUrl}/services`;

    // Parameters
    const params = new URLSearchParams({
        key: apiKey
    });

    // Display loading text
    document.getElementById('responseOutput').textContent = "Fetching data, please wait...";

    // API Call
    fetch(`${endpoint}?${params}`, {
        method: "GET"
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Display response in a formatted manner
        document.getElementById('responseOutput').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        // Display error message
        document.getElementById('responseOutput').textContent = `Error: ${error.message}`;
    });
});
