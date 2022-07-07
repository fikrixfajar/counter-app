import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0,
        // tags : ["tag1", "tag2", "tag3", "tag4"]
        tags : []

    };

    // styles = {
    //     fontSize : 70,
    //     fontWeight : "bold"

    // };

    randerTags () {
        if (this.state.tags.length === 0) 
            return <p>There Are No Tags!</p>
            return <ul>{this.state.tags.map ( tagnya => <li key={tagnya}> {tagnya} </li>)} </ul>
    }

    render() { 
        // ----------
        /* Membuat badge ganti warna ketika count zero atau angka lain */
        // let classes = "badge m-2 badge-";
        // {/* kemudian buat pengkondisian untuk change color */}
        // classes += (this.state.count === 0) ? "warning" : "primary";

        // code ini bisa di refactor lagi biar lebih singkat, caranya :
        // - blok 2 code di atas > klik kanan > pilih refactor / Ctrl+shift+R > pilih extract to methode in class "Counter" / lalu beri nama methodenya
        // ---------
        // ini dia hasilnya :
        // let classes = this.getBadgeClasses();



        return (
            <React.Fragment>
            {/* Untuk menghilangkan div kosong di atas, div nya diganti jadi React.Fragment */}
                
                {/* cara lain memasukan atribut: */}
                {/* <span style={this.styles} className='badge badge-primary m-2'>{this.formatCount ()}</span> */}
                {/* <span style={{fontSize:50}} className='badge badge-primary m-2'>{this.formatCount ()}</span> */}

        
                {/* <span className='badge badge-primary m-2'>{this.formatCount ()}</span>            */}
                
                {/* panggil dengan variabel clasess untuk ganti warna ketika count zero */}
                {/* <span className={classes}>{this.formatCount ()}</span>            */}

    {/* ==========
                <span className={this.getBadgeClasses()}>{this.formatCount ()}</span>         
                <button className='btn btn-secondary btn-sm'>Increment</button>
                <ul>{this.state.tags.map ( tagnya => <li key={tagnya}> {tagnya} </li>)} </ul>
    ========== */}

            {/* ======= CONDITIONAL RENDERING ======== */}
                {this.state.tags.length === 0 &&  "Please Create a New Tag!"}
                {this.randerTags()}
            </React.Fragment>
        );

        
    }



    // ========
    // hasil refactor
    // getBadgeClasses() {
    //     let classes = "badge m-2 badge-";
    //     classes += (this.state.count === 0) ? "warning" : "primary";
    //     return classes;
    // }
    // ------



    // formatCount () {
    //     // return this.state.count === 0 ? 'Zero' : this.state.count;
    //     // untuk mempersingkat penulisan code di atas bisa pake destructuring seperti dibawah ini

    //     const { count } = this.state;
    //     return count === 0 ? 'Zero' : count;
    // }


}
 
export default Counter;
