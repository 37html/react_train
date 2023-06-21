import React, {useState, useRef} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import {logDOM} from "@testing-library/react";

function App() {

    const [posts,setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ])

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewPost = (e)=>{
        e.preventDefault()
        console.log(title, body)
    }

  return (
    <div className="App">
        <form action="">
            {/*Управляемый компонент*/}
            <MyInput
                value={title}
                type="text"
                placeholder="Название поста"
                onChange={e => setTitle( e.target.value)}
            />
            {/*Управляемый компонент*/}
            <MyInput
                value={body}
                type="text"
                placeholder="Описание поста"
                onChange={e => setBody(e.target.value)}
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title='Посты про JS'/>
    </div>
  );
}

export default App;
