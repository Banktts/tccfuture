import { Provider } from "react-redux";
import App from 'next/app'
import Head from 'next/head'
import { makeStore, } from "../store/store.js"

import "../styles/mystyle.sass"



class MyApp extends App {
    
  
    render() {
        const { Component, pageProps } = this.props;
         
        return (
        
            <Provider store={makeStore}>
            {}
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                <Head>
                    <title>tccfuture</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                        key="viewport"
                    />
                </Head>
                <Head>
                    <meta
                        name="viewport"
                        content="initial-scale=1.2, width=device-width"
                        key="viewport"
                    />
                
                </Head>
               
                <Component {...pageProps} />
               
            </Provider>

        );
    }
}


export default MyApp


