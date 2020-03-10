import React, {Component} from 'react'

export default class Sidebar extends Component{
    render(){
        return(
            <div>
            <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
            <aside id="colorlib-aside" role="complementary" class="border js-fullheight">
                <div class="text-center">
                    <div class="author-img" style={{backgroundImage: "url(images/bg2.png)"}}></div>
                    <h1 id="colorlib-logo"><a href="index.html">Alec Chen</a></h1>
                    <span class="position"><a href="https://medium.com/gender-inclusivit/why-i-put-pronouns-on-my-email-signature-and-linkedin-profile-and-you-should-too-d3dc942c8743" target="_blank" rel="noopener">
                    (He/him) </a> 
                    <pColor>CS @ UCI</pColor></span>
                </div>
                <nav id="colorlib-main-menu" role="navigation" class="navbar">
                    <div id="navbar" class="collapse">
                        <ul>
                            <li class="active"><a href="#" data-nav-section="home">Home</a></li>
                            <li><a href="#" data-nav-section="about">About</a></li>
                            <li><a href="#" data-nav-section="services">Skills</a></li>
                            {/*<li><a href="#" data-nav-section="experience">Blog</a></li>*/}
                            {/*<li><a href="#" data-nav-section="blog">Music</a></li>*/}
                        </ul>
                    </div>
                    <div id="navbar-link" class="collapse">
                        <ul>
                            <li><a href="https://drive.google.com/file/d/1oBpsVckVRECZekqjlVhhip8zJTsiE7qb/view" target="_blank" rel="noopener">Resume</a></li>
                        </ul>
                    </div>
                </nav>
                <pColor>
                Let's connect!
                </pColor>
                <div class="icon-bar">
                    <a href="https://www.instagram.com/chen_alec/" target="_blank" rel="noopener"><i class="icon-instagram"></i></a>
                    {<a href="https://www.facebook.com/alec.chen.35" target="_blank" rel="noopener"><i class="icon-facebook2"></i></a>}
                    <a href="https://www.github.com/alecc3" target="_blank" rel="noopener"><i class="icon-github"></i></a>
                    <a href="https://www.linkedin.com/in/alecc3" target="_blank" rel="noopener"><i class="icon-linkedin2"></i></a>
                </div>

                <div class="colorlib-footer">
                    <p><small>
                    Copyright &copy; 2019 <a href="https://colorlib.com" target="_blank"><pColor>Colorlib</pColor></a>
                    </small></p>
                </div>
            </aside>
            </div>
        )
    }
}
