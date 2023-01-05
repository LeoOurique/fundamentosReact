import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';
import styles from './components/App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return ( 
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
        author="Leonardo Ourique"
        content="lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio aliquam voluptate recusandae,"
      />
    <Post
    author="Iury de Moraes"
    content="Um novo post muito legal"
    />
        </main>
      </div>
    </div>
  
  )
}

export default App
