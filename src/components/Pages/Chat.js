import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import logo from './img.png'
const steps = [
	{
		id: '0',
		message: 'Hey coder!',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '1',
	}, 
	
	{
		id: '1',

		// This message appears in
		// the bot chat bubble
		message: 'Your good name please, ',
		trigger: '2'
	}, 
	
	{
		id: '2',

		// Here we want the user
		// to enter input
		user: true,
		trigger: '3',
	}, 
	
	{
		id: '3',
		message: " hi {previousValue}, how can I help you?",
		trigger: 4
	}, 
	
	{
		id: '4',
		options: [
			
			// When we need to show a number of
			// options to choose we create alist
			// like this
			{ value: 1, label: 'what is this website all about' },
			{ value: 2, label: 'how to helps for a computer engineer ?' },

		],
		trigger: 5
		// end: true
	},


	{
		id: '5',
		options: [
			
			// When we need to show a number of
			// options to choose we create alist
			// like this
			{value: 1, label: 'It is a simple self coding website where you can get your own code editor, courses, placement tip, and many more :)' },

		],
		// Here we want the user
		// to enter input
		// user: true,
		trigger: '6',
	}, 

	{
		id: '6',
		options: [
			
			// When we need to show a number of
			// options to choose we create alist
			// like this

		],
		end: true
	}

];

// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#16AFCF',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: logo,
	floating: true,
};

const Chat=()=> {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="Hello, Coder !"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default Chat;
