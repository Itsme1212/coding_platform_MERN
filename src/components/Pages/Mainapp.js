import React from "react";

import styles from "./App.module.css";
import Card from "./Card";
import posts from "./Posts";
import NavBar from '../NavBar'
import Chat from './Chat'
export const Mainapp = () => {
  return (
    
    <>

<NavBar/>

<div>
<br/>

      <section className={styles.container}>
        <div className={styles.layout}>
          {posts.map((element, index) => (
          <Card
              key={index}
              title={element.title}
              likes={element.likes}
              order={index + 1}
              image={element.image}
              link={element.link}
            
            />
            
          ))}

          <br/>
        </div>
      </section>

    </div>
    
    <Chat/>

    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

<br/>
    </>
  );
};


