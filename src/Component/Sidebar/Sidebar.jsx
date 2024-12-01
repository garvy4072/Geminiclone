/** @format */

import React, { useState } from 'react';
import '../Sidebar/Sidebar.css';
import gemini from '../../assets/gemini.png';
import { IoIosAdd } from 'react-icons/io';
import { FiAlignJustify } from 'react-icons/fi';
import { RiMessage2Line } from 'react-icons/ri';
import { FaQuestion } from 'react-icons/fa6';
import { FaHistory } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { useContext } from 'react';
import { Context } from '../../Context/Context.jsx';

function Sidebar() {
	const [extended, setextexnded] = useState(false);
	const { onSent, privous, setrecentprompt, setinput, newchat } =
		useContext(Context);
	const loadprompt = async (prompt) => {
		await onSent(prompt);
	};

	return (
		<div className={`Sidebar`}>
			<div className='top'>
				<FiAlignJustify
					className='menu img'
					onClick={() => {
						setextexnded(!extended);
					}}
				/>
				<div
					onClick={() => {
						newchat();
					}}
					className='new-chat'>
					<IoIosAdd className='img' />
					{extended ? <p>New Chat</p> : null}
				</div>
				{extended ? (
					<div className='recent'>
						<p className='recent-title'>Recent</p>
						{privous.map((item, i) => {
							return (
								<div
									onClick={() => {
										loadprompt(item);
									}}
									className='recent-Entry'>
									<RiMessage2Line className='img' />
									{extended ? <p key={i}>{item.slice(0, 18)}...</p> : null}
								</div>
							);
						})}
					</div>
				) : null}
			</div>
			<div className='bottom'>
				{/* <div className='bottom-item recent-Entry '>
					<FaQuestion className='img' />
					{extended ? <p>Help</p> : null}
				</div>
				<div className='bottom-item recent-Entry '>
					<FaHistory className='img' />
					{extended ? <p>Your Acivity </p> : null}
				</div>
				<div className='bottom-item recent-Entry '>
					<IoMdSettings className='img' />
					{extended ? <p>Settings</p> : null}
				</div> */}
			</div>
		</div>
	);
}

export default Sidebar;
