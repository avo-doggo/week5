// Array holding blog post data (manually update with new posts)
const blogPosts = [
    {
        title: 'New Art Piece: Bill',
        image: 'images/Bill.png',
        content: 'Gravity falls character.',
        date: '2024-10-06'
    },
    {
        title: 'New Art Piece: Augustus',
        image: 'images/Augy.png',
        content: 'An oc.',
        date: '2024-10-06'
    },
    {
        title: 'New Art Piece: Old Art',
        image: 'images/Old_Artwork1.png',
        content: 'An old artwork of mine, redrawn.',
        date: '2024-10-06'
    }
];

// Function to update featured art on the homepage
function updateFeaturedArt() {
    const featuredArtContainer = document.getElementById('featured-art');

    // Clear any existing content
    featuredArtContainer.innerHTML = '';

    // Get the 3 most recent posts
    const recentPosts = blogPosts.slice(0, 3);

    recentPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('featured-item');

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <img src="${post.image}" alt="${post.title}">
            <p>${post.content}</p>
            <small>Posted on: ${new Date(post.date).toLocaleDateString()}</small>
        `;

        featuredArtContainer.appendChild(postElement);
    });
}

// Call the function to update featured art on page load
if (document.getElementById('featured-art')) {
    updateFeaturedArt();
}
