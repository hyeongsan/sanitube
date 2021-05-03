import styles from './search_header.module.css'
import React, { memo, useRef } from 'react';
import logo from '../../images/logo.png';
import search from '../../images/search.png';

const Searchheader = memo(({onSearch}) => {

    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }

    const onClick = () => {
        handleSearch();
    };

    const onkeyPress = (event) => {
       if(event.key === 'Enter'){
           handleSearch();
       }
    }
    console.log("sna");
    return (
<header className={styles.header}>
    <div className={styles.logo}>
    <img className={styles.img} src={logo} alt="logo"/>
    <h1 className={styles.title}>Santube</h1>
    </div>
    <input className={styles.input} type="search" placeholder="Search..." onKeyPress={onkeyPress} ref={inputRef}/>
    <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.buttonImg} src={search} alt="search"/>
    </button>
</header>
    
    )
});
            
    

export default Searchheader;