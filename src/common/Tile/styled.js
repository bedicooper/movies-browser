import styled from "styled-components";
import { ReactComponent as NoPersonSVG } from "../../assets/icon-person.svg";
import { ReactComponent as NoMovieSVG } from "../../assets/icon-noMovie.svg";

//---Tiles---------------------------------------------------------------------

export const Tile = styled.article`
    width: 324px;
    min-height: 650px;
    padding: 16px;
	display: grid;
	grid-template-rows: auto 1fr;
	gap: 16px;
    text-decoration: none;
    overflow-wrap: break-word;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
    border-radius: 5px;

	@media (max-width: 767px) {
        width: 288px;
        height: auto;
        min-height: 201px;
		grid-template-columns: auto 1fr;
		grid-template-rows: none;	
	}
`

export const DetailTile = styled(Tile)`
    width: 100%;
    min-height: auto;
	margin-top: 64px;
    padding: 40px;
	grid-template-columns: auto 1fr;
	column-gap: 40px;
	grid-row-gap: 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		margin-top: 16px;
        padding: 16px;
		column-gap: 16px;
		grid-row-gap: 0;
        grid-template-columns: auto 1fr;
	    grid-template-rows: auto 1fr;
	}
`

export const SmallTile = styled(Tile)`
    max-width: 208px;
    min-height: 339px;
    gap: 8px;
    border-radius: 0px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		max-width: 136px;
        min-width: 135px;
        min-height: 245px;
		padding: 8px;
        grid-template-columns: none;
		grid-template-rows: auto 1fr;
	}
`

//---Image Containter & Image--------------------------------------------------

export const TileImageContainer = styled.div`
    width: 292px;
	height: 434px;
    overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	background: ${({ theme }) => theme.color.silver};
	color: ${({ theme }) => theme.color.white};

	@media (max-width: 767px) {
		width: 114px;
		height: 169px;
	}
`

export const DetailTileImageContainer = styled(TileImageContainer)`
    width: 312px;
	height: 464px;
    grid-row: 1 / 3;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		width: 114px;
		height: 169px;
        grid-row: 1 / 2;
	}
`

export const SmallTileImageContainer = styled(TileImageContainer)`
	width: 177px;
	height: 231px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		width: 120px;
		height: 178px;
	}
`

export const TileImage = styled.img`
    width: inherit;
`

//---Content-------------------------------------------------------------------

export const TileContent = styled.div`
    max-width: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;
`

export const DetailTileContent = styled(TileContent)`
	padding-top: 8px;
	justify-content: left;
	gap: 24px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		padding-top: 0px;
		gap: 4px;
	}
`

//---Content - Titles & Subtitles----------------------------------------------

export const TileTitle = styled.h2`
	margin: 0;
	font-size: 22px;
	font-weight: 500;
	line-height: 1.3;
	color: ${({ theme }) => theme.color.almostBlack};

	@media (max-width: 767px) {
		font-size: 16px;
	}
`

export const DetailTileTitle = styled(TileTitle)`
	font-size: 36px;
	font-weight: 600;
	line-height: 1.2;
    color: ${({ theme }) => theme.color.black};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		color: ${({ theme }) => theme.color.almostBlack};
	}
`

export const SmallTileTitle = styled(TileTitle)`
	margin: 4px 0 0 0;
	text-align: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		font-size: 14px;
	}
`

export const TileSubTitle = styled.h3`
	margin: 0;
	font-size: 16px;
	font-weight: 400;
	line-height: 1.5;
	height: auto;
	color: ${({ theme }) => theme.color.darkGray};

	@media (max-width: 767px) {
		font-size: 13px;
		line-height: 1.3;
	}
`

export const DetailTileSubTitle = styled(TileSubTitle)`
	font-size: 22px;
	line-height: 1.2;
    color: ${({ theme }) => theme.color.black};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		color: ${({ theme }) => theme.color.darkGray};
	}
`

export const SmallTileSubTitle = styled(TileSubTitle)`
    font-size: 18px;
	text-align: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		font-size: 13px;
		line-height: 1.3;
	}
`

//---Content - Data------------------------------------------------------------

export const TileData = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-height: 52px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		margin-top: 4px;
	}
`

export const TileDataContent = styled.p`
	margin: 0;
	padding: 0;
	font-size: 18px;
	line-height: 1.2;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		font-size: 12px;
		line-height: 1.3;
	}
`

export const TileDataTitle = styled.span`
	padding-right: 10px;
	color: ${({ theme }) => theme.color.slateGray};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		display: none;
	}
`

//---Content - Tags, Rating, Description---------------------------------------

export const TileTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		margin: 4px 0;
		gap: 8px;
	}
`

export const TileTag = styled.div`
	padding: 8px 16px;
    align-items: center;
	justify-content: center;
    font-size: 14px;
	line-height: 1;
    color: ${({ theme }) => theme.color.almostBlack};
	background-color: ${({ theme }) => theme.color.gray};
	border-radius: 5px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		padding: 4px 8px;
		font-size: 10px;
		line-height: 1.1;
	}
`


export const RatingContainer = styled.div`
	margin-top: auto;

	@media (max-width: 767px) {
		margin: 0;
	}
`

export const Description = styled.p`
	margin: 24px 0 0 0;
	padding: 0;
	font-size: 20px;
	line-height: 1.6;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		margin: 16px 0 0 0;
		grid-column: 1 / 3;
		grid-row: 2 / 3;
		font-size: 14px;
	}
`

export const NoPersonIcon = styled(NoPersonSVG)`
	width: 72px;
	height: 72px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		width: 48px;
		height: 48px;
	}
`

export const NoMovieIcon = styled(NoMovieSVG)`
	width: 72px;
	height: 72px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		width: 48px;
		height: 48px;
	}
`