import { Component } from "react";
import { connect } from "react-redux";
import Router from 'next/router'
import { mapStatetoProps, mapDispatchtoProps } from "../store/store.js"
import logo from "../static/logo.png";
class Nav extends Component {
  constructor() {
    super();
    this.state = {
      WindowSize : 1024,
     

    }
    this.handleResize = this.handleResize.bind(this);
}
 
  componentDidMount(){
    this.props.handleCurrentPath(Router.pathname)
    {console.log("hi")}
    window.addEventListener("resize", this.setState({WindowSize: parseInt(window.innerWidth)}));
    this.props.setNavbarMargin(parseInt(window.innerWidth))
    window.addEventListener("resize", this.handleResize);
    
 }
 componentWillUnmount() {

  window.addEventListener("resize", null);
}
 handleResize(WindowSize, event) {
 
  this.setState({WindowSize: parseInt(window.innerWidth)})
  this.props.setNavbarMargin(parseInt(window.innerWidth))
}

 
  render() {

    return (
      <nav class="navbar is-light " role="navigation" aria-label="main navigation" >
        <div class="navbar-brand" style={{marginLeft:this.props.margin}}>
        <img className="image is-64x64" src="static/IMG_0772.png"   style={{margin:"10px"}}/>
          <a class="navbar-item" onClick={() => Router.push('/')} >
            
          
            <h3 style={{ fontWeight:"bold"}} class="title is-3">TCC<a style={{marginLeft:"10px",color:"#A0522D",fontWeight:"#800000"}}>FUTURE</a></h3>
            
          </a>
          <a role="button" onClick={() => this.props.mobileBar(this.state.WindowSize)} class={this.props.navbar_burger} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" onClick={()=>this.props.mobileBar(this.state.WindowSize)} class={this.props.navbar_menu}>
          <div class="navbar-start">
          
            <a class={this.props.home} onClick={() => Router.push('/')} >
              {this.props.navbar_lauguage.home}
            </a>


            <a class={this.props.aboutUs} onClick={() => Router.push('/aboutUs')}>
              {this.props.navbar_lauguage.aboutUs}
            </a>


            <a class={this.props.productAndService} onClick={() => Router.push('/productAndService')}>
              {this.props.navbar_lauguage.productAndService}
            </a>


            <a class={this.props.news} onClick={() => Router.push('/news')}>
              {this.props.navbar_lauguage.news}
            </a>


            <a class={this.props.contact} onClick={() => Router.push('/contact')}>
              {this.props.navbar_lauguage.contact}
            </a>

          </div>
        </div>
      </nav>

    )
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Nav);