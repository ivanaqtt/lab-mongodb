// Get elements from HTML
const fetchBtn = document.querySelector('.fetch-btn');
const dataContainer = document.querySelector('.data-container');

// Function to fetch API data
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Event listener for fetch button
fetchBtn.addEventListener('click', async () => {
    // Set API URL (change this to your desired API)
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    // Clear existing data
    dataContainer.innerHTML = '';

    // Fetch data and display it
    const data = await fetchData(apiUrl);
    if (data) {
        // Create a list to display data
        const dataList = document.createElement('ul');
        data.forEach((post) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${post.title} (${post.id})`;
            dataList.appendChild(listItem);
        });

        // Display data
        dataContainer.appendChild(dataList);
    }
});
