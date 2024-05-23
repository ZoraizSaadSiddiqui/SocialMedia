import React, { useState, useEffect } from 'react';

const Posts = ({ isDarkMode }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const quotesResponse = await fetch('https://type.fit/api/quotes');
        if (!quotesResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const quotesData = await quotesResponse.json();
        const limitedQuotesData = quotesData.slice(0, 10);

        const imagePromises = limitedQuotesData.map((_, index) =>
          fetch(`https://picsum.photos/600/400?random=${index + 1}`)
        );
        const imageResponses = await Promise.all(imagePromises);
        const imageUrls = imageResponses.map(response => response.url);

        const combinedData = limitedQuotesData.map((quote, index) => ({
          ...quote,
          imageUrl: imageUrls[index],
        }));

        setPosts(combinedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ ...styles.container, backgroundColor: isDarkMode ? '#333' : '#f5f5f5', color: isDarkMode ? '#fff' : '#333' }}>
      <h2>Posts with Pictures</h2>
      <ul style={styles.list}>
        {posts.map((post, index) => (
          <li key={index} style={styles.listItem}>
            <img src={post.imageUrl} alt="Post" style={styles.image} />
            <blockquote style={styles.quote}>
              "{post.text}"
            </blockquote>
            <footer style={styles.footer}>
              — {post.author || "Unknown"}
            </footer>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    width: '60%', 
    margin: '0 auto',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '100%',
  },
  image: {
    width: '100%', 
    borderRadius: '5px',
    marginBottom: '10px',
  },
  quote: {
    fontStyle: 'italic',
    marginBottom: '10px',
  },
  footer: {
    textAlign: 'right',
    color: '#555',
  },
};

export default Posts;
