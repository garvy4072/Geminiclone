/** @format */

import React, { useContext, useState } from 'react';
import '../Main/Main2.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { CiCompass1 } from 'react-icons/ci';
import { FaRegLightbulb } from 'react-icons/fa6';
import { FaRegFileCode } from 'react-icons/fa6';
import { RiMessage2Line } from 'react-icons/ri';
import { FcGallery } from 'react-icons/fc';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { BsSend } from 'react-icons/bs';
import { Context } from '../../Context/Context';
import gemini from '../../assets/gemini.png';

function Main() {
	const {
		onSent,
		recentprompt,
		showresult,
		loading,
		resultdata,
		newchat,
		setinput,
		setlodaing,
		setresultdata,
		privous,
		setshowresult,
		input,
	} = useContext(Context);
	const handleChange = (text) => {
		setinput(text);
	};

	return (
		<div className='main'>
			<div className='nav'>
				<p
					style={{ cursor: 'pointer' }}
					onClick={() => {
						newchat();
					}}>
					ChatBot
				</p>
				<FaRegUserCircle className='img' />
			</div>
			<div className='main-container'>
				{!showresult ? (
					<>
						<div className='greet'>
							<p>
								<span>Hello, User </span>
								<p>How can i help you today </p>
							</p>
						</div>
						<div className='cards'>
							<div
								className='card'
								onClick={() => {
									setinput('Suggest Beautifut places');
								}}>
								<p>Suggest Beautifut places</p>
								<CiCompass1 className='img' />
							</div>
							<div
								className='card'
								onClick={() => {
									setinput('Briefly summarize this Concepts : Urban Planning');
								}}>
								<p>Briefly summarize this Concepts : Urban Planning</p>
								<FaRegLightbulb className='img' />
							</div>
							<div
								className='card'
								onClick={() => {
									setinput(
										'Brainstrom team bonding activites for our work retreat'
									);
								}}>
								<p>Brainstrom team bonding activites for our work retreat</p>
								<RiMessage2Line className='img' />
							</div>
							<div
								className='card'
								onClick={() => {
									setinput('Improve the readability of the following code ');
								}}>
								<p>Improve the readability of the following code </p>
								<FaRegFileCode className='img' />
							</div>
						</div>
					</>
				) : (
					<div className='result'>
						<div className='result-title'>
							<FaRegUserCircle className='img' />
							<p>{recentprompt}</p>
						</div>
						<div className='result-data'>
							<img
								src={gemini}
								alt=''
								className={`img ${loading ? ' animation' : ''}`}
							/>
							{!loading ? (
								<p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
							) : (
								<div className='loader'>
									<hr />
									<hr />
									<hr />
								</div>
							)}
						</div>
					</div>
				)}

				<div className='main-bottom'>
					<div className='searchbox'>
						<input
							type='text'
							onChange={(e) => {
								handleChange(e.target.value);
							}}
							value={input}
							placeholder='Enter prompt here '
						/>
						<div className=''>
							<BsSend
								className='img'
								onClick={() => {
									onSent();
								}}
							/>
						</div>
					</div>
					<p className='bottom-info'>
						<p>dolores aut sunt</p>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Main;
