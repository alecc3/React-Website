import React, {Component} from 'react'

export default class Skills extends Component{
    render(){
        return(
            <pColor>
            <section class="colorlib-services" data-section="services">
            <div class="colorlib-narrow-content">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <h2 class="colorlib-heading">My Expertise</h2>
                    </div>
                </div>
                <div class="row row-pt-md">
                    <div class="col-md-4 text-center animate-box">
                        <div class="services color-4">
                            <span class="icon">
                                <i class="icon-layers2"></i>
                            </span>
                            <div class="desc">
                                <h3>Full Stack Development</h3>
                                <p> Java, Python, C++, Javascript, Ruby</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center animate-box">
                        <div class="services color-5">
                            <span class="icon">
                                <i class="icon-calculator"></i>
                            </span>
                            <div class="desc">
                                <h3>Algorithms</h3>
                                <p> Competitive Programming (IEEE 13.0)</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center animate-box">
                        <div class="services color-6">
                            <span class="icon">
                                <i class="icon-cloud-storage"></i>
                            </span>
                            <div class="desc">
                                <h3>Technologies</h3>
                                <p>
                                React, MongoDB, Flask, jQuery, Node.js
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </pColor>
        )
    }
}