import WelcomeScreen from '../assets/Welcome_Screen.png';
import LoginScreen from '../assets/Login_Screen.png';

export const links = [{ title: 'portfolio', link: '#' },
	{ title: 'about', link: '#' },
	{ title: 'contact', link: '#'}]

export const images = [{ src: WelcomeScreen, alt: 'Welcome Screen' },
	{ src: LoginScreen, alt: 'Login Screen' },
	{src: WelcomeScreen, alt: 'Home Screen'},
	{src: LoginScreen, alt: 'Other Screen'}]

export const projectLinks = [{ name: 'Beer App', link: '#', type: 'React Native Mobile App' },
	{ name: 'First Website', link: 'http://verdantshades.com/', type: 'HTML, CSS, JS, JQuery' },
	{ name: 'Wireframes', link: '#', type: 'Figma'},
	{ name: 'Let\'s Collaborate', link: 'https://github.com/Geccles', type: 'This could be us'}]

export default {images, links, projectLinks}
