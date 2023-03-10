import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/LeoOurique.png" />
          <div className={styles.authorInfo}>
            <strong>Leonardo Ourique</strong>
            <span>Front End</span>
          </div>
        </div>

        <time title="11 de Maio ร s 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado hรก 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa ๐</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐
        </p>
        <p>
          ๐ <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um Comentario" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
