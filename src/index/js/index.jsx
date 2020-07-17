
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import '../scss/index.scss';

// class App extends Component {
//     render () {
//         return (
//             <div>
//                 <h1>OMG-CLI</h1>
//                 <h1>123123123</h1>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById( 'root' )
// );

import '../scss/index.scss';
import 'rrweb-player/dist/style.css';
import rrwebPlayer from 'rrweb-player';
import * as rrweb from 'rrweb';
import axios from 'axios';

axios.get( 'http://127.0.0.1:7001/web/record/getLog', {
    params: {
        uuid: '641ad3e4-3c45-4f92-8d93-9316b6a3e686'
    }
} )
    .then( ( res ) => {
        if ( res.status == 200 && res.data.code == 200 ) {
            // new rrwebPlayer( {
            //     target: document.body, // 可以自定义 DOM 元素
            //     data: {
            //         events: res.data.data
            //     }
            // } );
            const replayer = new rrweb.Replayer(res.data.data, {
                speed: 0.2,
                root: document.body
            });
            replayer.play();
        }
    } )
    .catch( ( err ) => { console.log( err ) } )
