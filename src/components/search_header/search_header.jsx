import styles from './search_header.module.css'
import React from 'react';
import logo from '../../images/logo.png';
import search from '../../images/search.png';

const Searchheader = props => {
    
    return (
<header className={styles.header}>
    <div className={styles.logo}>
    <img className={styles.img} src={logo} alt="logo"/>
    <h1 className={styles.title}>Santube</h1>
    </div>
    <input className={styles.input} type="search" paceholder="Search..."/>
    <button className={styles.button} type="submit">
        <img className={styles.buttonImg} src={search} alt="search"/>
    </button>
</header>
    
    )
}
            
    

export default Searchheader;