import React, {useMemo ,useState, useRef} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import {logDOM} from "@testing-library/react";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {

    const [posts,setPosts] = useState([
        {id: 1, title: 'ааа', body: 'ббб'},
        {id: 2, title: 'ввв', body: 'ааа'},
        {id: 3, title: 'ггг', body: 'ллл'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(()=>{
        if(filter.sort){
            return [...posts].sort((a, b)=> a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearhedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
       setPosts(posts.filter(p => p.id !== post.id))
    }



  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        <PostList remove={removePost} posts={sortedAndSearhedPosts} title='Посты про JS'/>
    </div>
  );
}

export default App;
