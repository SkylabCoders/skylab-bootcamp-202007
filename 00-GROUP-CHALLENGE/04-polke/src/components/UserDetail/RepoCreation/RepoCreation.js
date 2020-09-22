import React, { useState } from 'react';
import landingStore from '../../../stores/landingStore';
import './RepoCreation.css';
import '../../../shared/generalStyles.css';
import { createRepo } from '../../../actions/userDetailActions';

function RepoCreation() {
	const [gitHubAccessToken] = useState(landingStore.getGitHubAccessToken());

	return (
		<div className="repocreation__container">
			<form className="repocreation__form">
				<div className="form__repo-info">
					<div className="form-section">
						<input
							type="text"
							name="repo-name"
							className="form__repo-name form__text-input"
							placeholder="Repo name..."
						/>
						<div className="form_access-container">
							<p> Repo Access: </p>
							<select className="form__repo-access" name="repo-access">
								<option value="false" selected>
									Public
								</option>
								<option value="true">Private</option>
							</select>
						</div>
					</div>
					<div className="form-section">
						<textarea
							name="repo-desc"
							className="form__repo-desc form__text-input"
							placeholder="Repo description..."
							rows="2"
							cols="40"
						></textarea>
					</div>
				</div>

				<div className="form__bottom">
					<div>
						<label for="repo-readme"> Add README.md</label>
						<input
							type="checkbox"
							className="form__readme"
							name="repo-readme"
							value="readme"
						/>
					</div>
					<button
						className="repo__button"
						onClick={(event) => {
							event.preventDefault();
							const name = document.getElementsByClassName('form__repo-name')[0]
								.value;
							const access = false;
							const desc = document.getElementsByClassName('form__repo-desc')[0]
								.value;
							const readme = false;
							createRepo(name, access, desc, readme, gitHubAccessToken);
							document.getElementsByClassName(
								'repocreation__form'
							)[0].style.display = 'none';
						}}
					>
						Create
					</button>
				</div>
			</form>
		</div>
	);
}

export default RepoCreation;
