import React, {useState, useRef} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import {logDOM} from "@testing-library/react";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

    const [posts,setPosts] = useState([
        {id: 1, title: 'ааа', body: 'ббб'},
        {id: 2, title: 'ввв', body: 'ааа'},
        {id: 3, title: 'ггг', body: 'ллл'},
    ])

    const [selectedSort, setSelectedSort] = useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
       setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPost = (sort) =>{
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b)=> a[sort].localeCompare(b[sort])))
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
            <MySelect
                value={selectedSort}
                onChange={sortPost}
                defaultValue="Сортировка по"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
        {posts.length !==0
            ? <PostList remove={removePost} posts={posts} title='Посты про JS'/>
            : <h1 style={{textAlign: 'center'}}>Посты не были найдены</h1>
        }
    </div>
  );
}

export default App;
