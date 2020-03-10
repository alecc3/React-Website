import React, {Component} from 'react'

export default class About extends Component{
    render(){
        return(
			<section class="colorlib-about" data-section="about">
            <div class="colorlib-narrow-content">
                <div class="row">
                    <div class="col-md-12">
                        <span class="heading-meta">About Me</span>
                        <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div class="col-md-12">
                                <div class="about-desc">
                                    
                                    <h2 class="colorlib-heading">Student, Developer, Creative</h2>
                                    <pColor>
                                        <p>
                                        I'm a student from the Bay Area currently in my Junior year of studying Computer Science
                                        at the University of California, Irvine.
                                        I'm passionate about fintech and software/product development - I love bringing ideas
                                        to fruition and I have a strong understanding of customer-facing products.
                                        I am also a creative who enjoys music, design, sustainability, and fashion.
                                        When I'm not coding, I enjoy playing poker, going to the gym, consuming third wave coffee,
                                        and reading personal development books.
                                        </p>
                                    </pColor>

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <span class="heading-meta">My Interests</span>
                            <div class="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                <div class="services color-3">
                                    <span class="icon2"><i class="icon-data"></i></span>
                                    <h3>Software Engineering</h3>
                                </div>
                            </div>
                            <div class="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                <div class="services color-2">
                                    <span class="icon2"><i class="icon-code"></i></span>
                                    <h3>Web Design</h3>
                                </div>
                            </div>
                            <div class="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                <div class="services color-1">
                                    <span class="icon2"><i class="icon-coffee"></i></span>
                                    <h3>Coffee</h3>
                                </div>
                            </div>
                            <div class="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                <div class="services color-4">
                                    <span class="icon2"><i class="icon-soundcloud"></i></span>
                                    <h3>Music</h3>
                                </div>
                            </div>
                        </div>
                        <p><pColor>
                            <span class="heading-meta">
                            Societies and activities:
                            </span>
                            <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInRight">
                            <p>
                            Association of Computing Machinery @ UCI
                            </p>
                            <p>
                            Artificial Intelligence @ UCI
                            </p>
                            <p>
                            WICS
                            </p>
                            <p>
                            Poker @ UCI
                            </p>
                            <p>
                            Chinese Association
                            </p>
                            <p>
                            Korean American Student Association
                            </p>
                            </div>
                            
                        </pColor></p>
                        {
                        /*
                        <div class="row">
                            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div class="hire">
                                    <h2>Resume</h2>
                                    <a href="http://www.cashcarti.com/" class="btn-hire">Download</a>
                                </div>
                            </div>
                        </div>
                        */
                        }
                    </div>
                </div>
            </div>
        </section>
        )
    }
}