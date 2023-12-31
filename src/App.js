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
import MyModal from "./components/UI/MyModal/MyModal";
import Loader from "./components/UI/Loader/Loader";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts,setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearhedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
    })

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }



    const removePost = (post) => {
       setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <MyButton onClick={fetchPosts}>Get posts</MyButton>
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
            Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>

        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        {
            postError &&
            <h1>Произошла ошибка ${postError}</h1>
        }
        {isPostsLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            : <PostList remove={removePost} posts={sortedAndSearhedPosts} title='Посты про JS'/>
        }

    </div>
  );
}

export default App;
