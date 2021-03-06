import React from 'react'
import config from '../../utils/config';
import './styles.css'

const renderSocials = socials =>
	socials.map(({ link, title }, i) => {
		return (
			<a className="social" key={i} href={link} target="_blank">
				<li><i className={`fa fa-${title}`} href={link}></i>
			</li></a>
		);
	})

export default ({ id, name, description, image, releases, socials }) => (
	<div className="person">
		<div className="row">
			<div className="col-md-5 col-xs-12">
				<div className="person-image">
					<img src={config.static + image} alt={name} />
				</div>
			</div>
			<div className="col-md-7 col-xs-12">
				<div className="person-content">
					<div className="name">
						<h2>{name}</h2>
						<ul className="person-socials">
							{renderSocials(socials)}
						</ul>
					</div>
					<p className="primary">
						{description}
					</p>
				</div>
			</div>
		</div>
	</div>
);