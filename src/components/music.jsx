import React, {Component} from 'react'

export default class Music extends Component{
    render(){
        return(
            <section class="colorlib-blog" data-section="blog">
            <div class="colorlib-narrow-content">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <h2 class="colorlib-heading">GALLERY</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                        <div class="blog-entry">
                            <a href="https://www.google.com" class="blog-img"><img src="images/author.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"/></a>
                                <div class="desc">
                                    <span><small>December 31, 2019 </small> | <small> San Francisco </small> </span>
                                    <h3><a href="blog.html">San Francisco</a></h3>
                                    <p>texthere</p>
                                </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                        <div class="blog-entry">
                            <a href="https://www.google.com" class="blog-img"><img src="images/author2.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"/></a>
                                <div class="desc">
                                    <span><small>December 31, 2019 </small> | <small> San Francisco </small> </span>
                                    <h3><a href="blog.html">San Francisco</a></h3>
                                    <p>texthere</p>
                                </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                        <div class="blog-entry">
                            <a href="https://www.google.com" class="blog-img"><img src="images/author.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"/></a>
                                <div class="desc">
                                    <span><small>December 31, 2019 </small> | <small> San Francisco </small> </span>
                                    <h3><a href="blog.html">San Francisco</a></h3>
                                    <p>texthere</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}