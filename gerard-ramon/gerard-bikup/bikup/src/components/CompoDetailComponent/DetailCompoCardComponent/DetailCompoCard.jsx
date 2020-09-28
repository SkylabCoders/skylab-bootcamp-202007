import React from 'react';
import './DetailCompoCard.scss';

function DetailCompoCard({ compoInfo }) {
	return (
		<div className='detailcompocard'>
			<div className='detailcompocard__content'>
				<img
					src='https://image.flaticon.com/icons/svg/2623/2623442.svg'
					alt='compo img'
					className='detailcompocard__img'
				/>
				<div className='detailcompocard__info'>
					<div className='detailcompocard__labels'>
						<p>{compoInfo.compoDisplayName}</p>

						<p className='labels__status'>
							(
							{Math.round(
								compoInfo.compoAccumulatedMeters / 1000
							)}{' '}
							/{compoInfo.compoLife / 1000} Km)
						</p>
					</div>
					<div>
						<progress
							id='progress_detail'
							value={compoInfo.compoAccumulatedMeters / 1000}
							max={compoInfo.compoLife / 1000}
						></progress>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailCompoCard;
