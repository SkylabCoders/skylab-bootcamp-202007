import React, { useState, useEffect } from 'react';
import store from '../store/store';
import { addEntryAction } from '../actions/userActions';
import { useHistory } from 'react-router-dom';
import {
	RadioGroup,
	Radio,
	FormLabel,
	FormControlLabel,
	TextareaAutosize,
	TextField,
	MenuItem,
	Select
} from '@material-ui/core';
import '../styles/addEntry.component.styles.scss';

function AddEntry() {
	const [speciality, setSpeciality] = useState('frontend');
	const [category, setCategory] = useState('junior');
	const [content, setContent] = useState('');
	const [company, setCompany] = useState('');
	const [isQuestion, setIsQestion] = useState(true);
	const [difficulty, setDificulty] = useState(1);
	const user = store.getUser();
	let history = useHistory();
	useEffect(() => {
		store.addChangeListener(onChange);

		return () => {
			return store.removeChangeListener(onChange);
		};
	}, []);

	function onChange() {
		return 0;
	}

	function handleCategory(event) {
		setCategory(event.target.value);
	}
	function handleSpeciality(event) {
		setSpeciality(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();

		let userId = user._id;
		addEntryAction({
			speciality,
			category,
			content,
			isQuestion,
			company,
			difficulty,
			userId
		});
		history.push('/list');
	}

	return (
		<>
			<div className="flex-col newEntry-container">
				<form onSubmit={handleSubmit} className="flex-col addEntry-holder">
					<h1>ADD NEW ENTRY </h1>
					<FormLabel className="addEntry-label" component="legend">
						Select one Category:
					</FormLabel>
					<RadioGroup
						aria-label="Category"
						name="category"
						value={category}
						onChange={handleCategory}
					>
						<FormControlLabel
							value="senior"
							control={<Radio />}
							label="SENIOR"
						/>
						<FormControlLabel
							value="junior"
							control={<Radio />}
							label="JUNIOR"
						/>
					</RadioGroup>
					<FormLabel className="addEntry-label" component="legend">
						Select one Speciality:
					</FormLabel>
					<RadioGroup
						aria-label="Speciality"
						name="speciality"
						value={speciality}
						onChange={handleSpeciality}
					>
						<FormControlLabel
							value="frontend"
							control={<Radio />}
							label="Front-End"
						/>
						<FormControlLabel
							value="backend"
							control={<Radio />}
							label="Back-End"
						/>
						<FormControlLabel
							value="fullstack"
							control={<Radio />}
							label="Full-Stack"
						/>
					</RadioGroup>
					<FormLabel className="addEntry-label" component="legend">
						Select the type:
					</FormLabel>
					<RadioGroup
						aria-label="Select One"
						name="isQuestion"
						value={isQuestion}
						onChange={() => setIsQestion(!isQuestion)}
					>
						<FormControlLabel
							value={true}
							control={<Radio />}
							label="Question"
						/>
						<FormControlLabel
							value={false}
							control={<Radio />}
							label="Tecnical test"
						/>
					</RadioGroup>
					<FormLabel className="addEntry-label" component="legend">
						Description
					</FormLabel>
					<TextareaAutosize
						rowsMin={4}
						aria-label="maximum height"
						name="content"
						placeholder="Enter the description here..."
						value={content}
						onChange={(event) => setContent(event.target.value)}
						required
					/>
					<FormLabel className="addEntry-label" component="legend">
						Company name:
					</FormLabel>

					<TextField
						label="Company name"
						value={company}
						name="company"
						onChange={(event) => setCompany(event.target.value)}
						margin="normal"
						variant="outlined"
						required
					/>
					<FormLabel className="addEntry-label" component="legend">
						Choose some difficlulty:
					</FormLabel>
					<Select
						id="difficulty"
						name="difficulty"
						value={difficulty}
						onChange={(event) => {
							setDificulty(event.target.value);
						}}
					>
						<MenuItem value={1}>So easy...</MenuItem>
						<MenuItem value={2}>Easy</MenuItem>
						<MenuItem value={3}>Normal</MenuItem>
						<MenuItem value={4}>Hard</MenuItem>
						<MenuItem value={5}>Too hard!</MenuItem>
					</Select>

					<button className="newEntry-submit_button" type="submit">
						Upload
					</button>
				</form>
			</div>
		</>
	);
}

export default AddEntry;
