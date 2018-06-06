import React from 'react';
import './styles/about.css';

function About(props) {
	return(
		<section className="about">
			<h3 className="about-header">Welcome to Story Time</h3>
			<div>
				<p>
					Story time is a platform for writers who want to expand their skill set,
					and share their work with an audience. The purpose of Story Time is to foster confidence
					and a community of authors and readers who are passionate about writing.
				</p>
				<p>
					As a visitor of our site, we want to provide the best possible user experience for you. That being said,
					there are a couple of rules to abide by when engaging with the community.
				</p>
				<ul className="about-list">
					<li>1. Be respectful</li>
					<li>2. Be willing to give and recieve constructive feedback</li>
					<li>3. Do not copy and or claim any original works as your own</li>
					<li>4. Blah, Blah, Blah...</li>
				</ul>
				<p>So, Are you ready?</p>
			</div>
		</section>
	);
}

export default About;