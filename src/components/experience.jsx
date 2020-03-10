import React, {Component} from 'react'

class Collapsible extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel(e){
        this.setState({open: !this.state.open})
    }
    render(){
        return(
            <div>
                <div onClick= {(e)=> this.togglePanel(e)} className="collapsible">
                    <h1>{this.props.title}</h1>
                </div>
                {this.state.open ?
                (<div className="collapsibleContent">{this.props.children}</div>) : null
                }
            </div>
        )
    }
}

class Quote extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div class="quotes">
                    "{this.props.children}"
                </div>
                <p>
                ― {this.props.author}
                </p>
            </div>
        )
    }
}

export default class Experience extends Component{

    render(){
        return(
			<section class="colorlib-experience" data-section="experience">
                <div class="colorlib-narrow-content">
                <span class="heading-meta">Thoughts (Click to Expand) </span>

                
                <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInBottom">
                <Collapsible title="Progamer to Programmer">
                    <pColor>
                    <p>
                        I used to be a Challenger League of Legends player (at my peak rating, I was ranked around 24 which is the top 0.013% of the ladder).
                        
                        I wasn’t naturally good - I initially started at the lowest rank and slowly developed my ability by deliberate practice. I downloaded videos of professional play and reviewed them, idealizing and visualizing
                        the "ideal play" or ways in which I would have played the respective scenario.
                        This in turn led to rapid improvement, allowing me to reach the top echelons of a ranked player base of over 2 million. 
                        My talent, dedication, and work ethic caught the attention of top eSports organizations and eventually led to a contract as a paid professional. 
                        While playing for these teams, I experienced obstacles in the form of grueling scrim (practice) blocks, which consisted of 
                        competing against players in the main roster who were often significantly more skilled, experienced, and cohesive. Despite being consistently beaten, I used this adversity as a learning experience to improve my play, and my skills became well-known amongst the top professional players.
                        I developed my skill by dedicating myself to improvement, and this philosophy and work ethic is something I wish to translate towards all my passions.
                        I have an innately strong drive and appetite for success, and I want to apply this ambition and passion to software engineering and my career.
                        In fact, my passion for competitive gaming played a large role in my decision to attend UCI, one of the first schools to have an eSports scholarship program!
                    </p>
                    <p>
                        <div class="quotes">
                        Team Liquid 2016
                        </div>
                    </p>
                    <p>
                        <div class="quotes">
                        Cloud9 Challenger 2016
                        </div>
                    </p>
                    </pColor>
                </Collapsible>
                </div>
                
                <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInBottom">
                <Collapsible title="Quotes">
                    <pColor>
                        <Quote author="Dieter Rams">Less, but better.</Quote>
                        <Quote author="Walter Gropius">The mind is like an umbrella. It's most useful when open.</Quote>
                        <Quote author="Steve Jobs">Design is not just what it looks like and feels like. Design is how it works.</Quote>
                        <Quote author="Yohji Yamamoto">I think perfection is ugly. Somewhere in the things humans make, I want to see scars, failure, disorder, distortion.</Quote>
                        <Quote author="Alexander McQueen">You can only go forward by making mistakes.</Quote>
                        <Quote author="Greta Thunberg">I'm not that special. I can't convince everyone. I'm just going to do what I want to do and what will have the most impact.</Quote>
                    </pColor>
                </Collapsible>
                </div>

                {/*

                <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                    <div class="blog-entry">
                        <a href="https://www.google.com" class="blog-img">
                            <img src="images/author.jpg" class="img-responsive"></img>
                        </a>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                    <div class="blog-entry">
                        <a href="https://www.google.com" class="blog-img">
                            <img src="images/author.jpg" class="img-responsive"></img>
                        </a>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                    <div class="blog-entry">
                        <a href="https://www.google.com" class="blog-img">
                            <img src="images/author.jpg" class="img-responsive"></img>
                        </a>
                    </div>
                </div>
                */}

                </div>
            </section>
        )
    }
}