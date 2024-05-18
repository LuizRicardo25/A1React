import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Welcome from './Welcome';

function App() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', content: '' });

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const createPost = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/posts', newPost);
            setPosts([...posts, response.data]);
            setNewPost({ title: '', content: '' });
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${id}`);
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <center>
            <div>
                <h1>AULA REACT UNISAGRADO</h1>
                <Welcome name="Alice" />
                <Welcome name="Bob" />
                <Welcome name="Charlie" />
                <h1>Welcome to my app</h1>
                <div>
                    <h2>Posts</h2>
                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                                <button onClick={() => deletePost(post.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Create New Post</h2>
                    <input
                        type="text"
                        placeholder="Title"
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    />
                    <textarea
                        placeholder="Content"
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    />
                    <button onClick={createPost}>Create Post</button>
                </div>
            </div>
        </center>
    );
}

export default App;



