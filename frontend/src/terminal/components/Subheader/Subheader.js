import React from 'react'
import { withRouter } from 'react-router-dom'
import { MdArrowDropDownCircle, MdCancel } from 'react-icons/md'
import { connect } from 'react-redux'
import OutsideClickHandler from 'react-outside-click-handler'

import * as actionCreators from '../../store/actions/index'

import FilterMenu from './FilterMenu'

const subheader = ({
	filterMenu,
	hideFilterMenu,
	location,
	toggleFilterMenu
}) => (
	<div className="height-50p flex-row width-100 background-white border-bottom-grey space-between relative">
		<div className="centered flex-row space-between width-100 header-padding scrollable scrollbar-hide">
			<div className="flex-row height-100 centered-vertical">
				<div
					className={`centered flex-row height-30p radius-5 padding-horizontal-10 margin-right-10 text-500 pointer ${location.pathname.split('/')[1] === 'all' ? "background-hover text-grey border-grey" : "background-pink text-white pointer-filter"}`}
					onClick={() => this.props.showOverlay('boutit')}
				>
					<div className="margin-right-10 text-600 text-14">
						All
					</div>
					{location.pathname.split('/')[1] !== 'all' ? <MdCancel className="pointer-grey-text" /> : null}
				</div>
				<div className={`centered text-600 text-14 subheader-text height-30p radius-5 padding-horizontal-10 margin-right-10 ${2 < 1 ? "background-pink text-white pointer-filter" : "background-white text-grey border-grey pointer-pink-light"}`} >
						What
				</div>
				<div className={`centered text-600 text-14 subheader-text height-30p radius-5 padding-horizontal-10 margin-right-10 ${2 < 1 ? "background-pink text-white pointer-filter" : "background-white text-grey border-grey pointer-pink-light"}`}>
					Where
				</div>
				<div className={`centered text-600 text-14 subheader-text height-30p radius-5 padding-horizontal-10 margin-right-10 ${2 < 1 ? "background-pink text-white pointer-filter" : "background-white text-grey border-grey pointer-pink-light"}`}>
					When
				</div>
				<div className={`centered text-600 text-14 subheader-text height-30p radius-5 padding-horizontal-10 margin-right-10 ${2 < 1 ? "background-pink text-white pointer-filter" : "background-white text-grey border-grey pointer-pink-light"}`}>
					Who
				</div>
			</div>
			<OutsideClickHandler onOutsideClick={hideFilterMenu}>
				<div className="flex-row centered pointer" onClick={toggleFilterMenu}> 
					<div className={`text-600 text-16 ${filterMenu ? "text-blue" : "text-grey"} margin-right-5`}>Filter</div>
					<MdArrowDropDownCircle className={`text-16 text-blue filter-margin ${filterMenu ? "text-blue" : "text-grey"}`} />
				</div>
				{filterMenu ? 
				<FilterMenu /> : null}
			</OutsideClickHandler>
		</div>
		<div></div>
	</div>
);

const mapStateToProps = state => {
	return {
		filterMenu: state.filters.filterMenu,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		hideFilterMenu: () => dispatch(actionCreators.hideFilterMenu()),
		toggleFilterMenu: () => dispatch(actionCreators.toggleFilterMenu())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(subheader))
