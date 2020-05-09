import { createStore, combineReducers } from "redux";
import th from "../thData.json"
const dataStore = {
    dataLauguage: th
}
const navBarStore = {
    navbar_burger: "navbar-burger burger",
    navbar_menu: "navbar-menu",
    home: "navbar-item",
    aboutUs: "navbar-item",
    productAndService: "navbar-item",
    news: "navbar-item",
    contact: "navbar-item",
    margin: "10px"
}

const reducerLauguage = (state = dataStore, action) => {
    switch (action.type) {
        case "changeLauguage":
            state = {
                ...state,
                tmp: state.tmp = action.payload,

            }
            break;
        case "SUBTRACT":
            state -= action.payload;
            break;
        default:
    }
    return state;
}

const reducerNavBar = (state = navBarStore, action) => {
    switch (action.type) {
        case "mobileBar":
            state = {
                ...state,
                navbar_burger: state.navbar_burger = (state.navbar_burger === "navbar-burger burger") ? "navbar-burger burger is-active" : "navbar-burger burger",
                navbar_menu: state.navbar_menu = (state.navbar_menu === "navbar-menu") ? "navbar-menu is-active" : "navbar-menu"

            }
            break;
        case "aboutUs":
            state = {
                ...state,
                aboutUs: state.aboutUs = "navbar-item is-active"

            }
            break;
        case "productAndService":
            state = {
                ...state,
                productAndService: state.productAndService = "navbar-item is-active"

            }
            break;
        case "news":
            state = {
                ...state,
                news: state.news = "navbar-item is-active"
            }
            break;
        case "contact":
            state = {
                ...state,
                contact: state.contact = "navbar-item is-active"

            }
            break;
        case "home":
            state = {
                ...state,
                home: state.home = "navbar-item is-active"

            }
            break;
        case "clear":
            state = {
                ...state,
                home: state.home = "navbar-item",
                contact: state.contact = "navbar-item",
                news: state.news = "navbar-item",
                productAndService: state.productAndService = "navbar-item",
                aboutUs: state.aboutUs = "navbar-item",
            }
            break;
        case "marginMobile":
            state = {
                ...state,
                margin: state.margin = "10px"
            }
            break;
        case "marginDesktop":
            state = {
                ...state,
                margin: state.margin = "50px"
            }
            break;
        default:
    }
    return state;
}

const makeStore = createStore(combineReducers({ dataStore: reducerLauguage, navBar: reducerNavBar }))
const mapStatetoProps = (state) => {
    return {
        ...state,
        navbar_burger: state.navBar.navbar_burger,
        navbar_menu: state.navBar.navbar_menu,
        navbar_lauguage: state.dataStore.dataLauguage.nav,
        home: state.navBar.home,
        aboutUs: state.navBar.aboutUs,
        contact: state.navBar.contact,
        news: state.navBar.news,
        productAndService: state.navBar.productAndService,
        margin: state.navBar.margin
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        mobileBar: (size) => {
            console.log(size)
            if (size < 1024) {
                dispatch({
                    type: "mobileBar",
                })
                dispatch({
                    type: "marginMobile",
                })

            } else {
                dispatch({
                    type: "marginDesktop",
                })
            }


        },
        setNavbarMargin: (size)=>{
            console.log(size)
            if (size < 1024) {
                
                dispatch({
                    type: "marginMobile",
                })

            } else {
                dispatch({
                    type: "marginDesktop",
                })
            }
        },

        handleCurrentPath: (path) => {
            var tmp = path.split("/")
            tmp.shift()
            console.log(tmp)

            dispatch({
                type: "clear",
            })

            if (tmp.length === 0) {

            }
            for (var i in tmp) {
                console.log(i)
                switch (tmp[i]) {

                    case 'aboutUs':

                        dispatch({
                            type: "aboutUs",

                        })
                        break;
                    case "productAndService":
                        dispatch({
                            type: "productAndService",

                        })
                        break;
                    case "news":
                        dispatch({
                            type: "news",

                        })
                        break;
                    case "contact":
                        dispatch({
                            type: "contact",

                        })
                        break;
                    default:
                        dispatch({
                            type: "home",

                        })



                }
            }
        }

    }
}

export {
    makeStore,
    mapStatetoProps,
    mapDispatchtoProps
}

