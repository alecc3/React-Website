import React, {Component} from 'react'

export default class Intro extends Component{
    render(){
        return(
		<div id="colorlib-main">
        <section id="colorlib-hero" class="js-fullheight" data-section="home">
            <div class="flexslider js-fullheight">
                <ul class="slides">
                   <li style={{backgroundImage: "url(images/irvine.jpg)"}}>
                       <div class="overlay"></div>
                       <div class="container-fluid">
                           <div class="row">
                               <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                   <div class="slider-text-inner js-fullheight">
                                       <div class="pull-right">
                                       
                                        </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>
                  </ul>
              </div>
              <p></p>
              <cap>Donald Bren Hall - Irvine, CA</cap>
              
              <p>
              <copyright>
                <pColor>© Kevin Loc</pColor>
              </copyright>
              </p>
        </section>
        </div>
        )
    }
}