import React, { Fragment } from 'react';
import '../styles/Footer.css';

const Footer = () => {
	return (
		<Fragment>
			<footer className='footer_container'>
				<section className='footer_foundon_section'>
					<p className='footer_foundon_title'>Found On:</p>
					<ul className='footer_foundon_links'>
						<li className='footer_foundon_icons'>
							<a
								className='footer_foundon_link'
								href='https://www.tiktok.com/@baytakes'
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fab fa-tiktok' />
							</a>
						</li>
						<li className='footer_foundon_icons'>
							<a
								className='footer_foundon_link'
								href='https://www.youtube.com/channel/UClZLb-7v3CEMGp7BmOa50nQ'
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fab fa-youtube' />
							</a>
						</li>
						<li className='footer_foundon_icons'>
							<div
								className='footer_foundon_link'
								onClick={async () => {
									await navigator.clipboard.writeText(
										'283podcast@gmail.com'
									);
									alert('Successfully Copied Email to Clipboard');
								}}
							>
								<i className='fas fa-inbox' />
							</div>
						</li>
						<li className='footer_foundon_icons'>
							<a
								className='footer_foundon_link'
								href='https://github.com/bilal-abraham/baytakes'
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fab fa-github' />
							</a>
						</li>
					</ul>
				</section>
				<hr className='footer_line' />
				<section className='footer_copyright_section'>
					<p className='footer_copyright_title'>Bay Takes 2022 ©</p>
				</section>
			</footer>
		</Fragment>
	);
};

export default Footer;
