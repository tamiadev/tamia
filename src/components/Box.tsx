import { ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { getCss, RestrictedProps, CSSProps } from '../primitives';

export type BoxProps = RestrictedProps<DefaultTheme> & {
	children?: ReactNode;
	sx?: CSSProps<DefaultTheme>;
};

export const PROPS_TO_IGNORE: (string | number)[] = [
	'sx',
	'm',
	'mb',
	'ml',
	'mr',
	'mt',
	'mx',
	'my',
	'margin',
	'marginBottom',
	'marginLeft',
	'marginRight',
	'marginTop',
	'marginX',
	'marginY',
	'p',
	'pb',
	'pl',
	'pr',
	'pt',
	'px',
	'py',
	'padding',
	'paddingBottom',
	'paddingLeft',
	'paddingRight',
	'paddingTop',
	'paddingX',
	'paddingY',
	'display',
	'overflow',
	'overflowX',
	'overflowY',
	'width',
	'maxWidth',
	'minWidth',
	'height',
	'maxHeight',
	'minHeight',
	'size',
	'verticalAlign',
	'alignItems',
	'alignContent',
	'alignSelf',
	'justifyItems',
	'justifyContent',
	'justifySelf',
	'flexWrap',
	'flexDirection',
	'order',
	'flexGrow',
	'flexShrink',
	'flexBasis',
	'flex',
	'gap',
	'rowGap',
	'columnGap',
	'gridColumn',
	'gridRow',
	'gridAutoFlow',
	'gridTemplateAreas',
	'gridArea',
	'gridGap',
	'gridColumnGap',
	'gridRowGap',
	'gridAutoColumns',
	'gridAutoRows',
	'gridTemplateColumns',
	'gridTemplateRows',
	'zIndex',
	'position',
	'top',
	'right',
	'bottom',
	'left',
	'boxSizing',
	'variant',
];

const boxStyledProps = ({
	theme,
	sx,
	m,
	mb,
	ml,
	mr,
	mt,
	mx,
	my,
	margin,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	marginX,
	marginY,
	p,
	pb,
	pl,
	pr,
	pt,
	px,
	py,
	padding,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingX,
	paddingY,
	display,
	overflow,
	overflowX,
	overflowY,
	width,
	maxWidth,
	minWidth,
	height,
	maxHeight,
	minHeight,
	size,
	verticalAlign,
	alignItems,
	alignContent,
	alignSelf,
	justifyItems,
	justifyContent,
	justifySelf,
	flexWrap,
	flexDirection,
	order,
	flexGrow,
	flexShrink,
	flexBasis,
	flex,
	gap,
	rowGap,
	columnGap,
	gridColumn,
	gridRow,
	gridAutoFlow,
	gridTemplateAreas,
	gridArea,
	gridGap,
	gridColumnGap,
	gridRowGap,
	gridAutoColumns,
	gridAutoRows,
	gridTemplateColumns,
	gridTemplateRows,
	zIndex,
	position,
	top,
	right,
	bottom,
	left,
	boxSizing,
}: Omit<BoxProps, 'children'> & { theme: DefaultTheme }) => {
	return getCss(
		{
			m,
			mb,
			ml,
			mr,
			mt,
			mx,
			my,
			margin,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,
			marginX,
			marginY,
			p,
			pb,
			pl,
			pr,
			pt,
			px,
			py,
			padding,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTop,
			paddingX,
			paddingY,
			display,
			overflow,
			overflowX,
			overflowY,
			width,
			maxWidth,
			minWidth,
			height,
			maxHeight,
			minHeight,
			size,
			verticalAlign,
			alignItems,
			alignContent,
			alignSelf,
			justifyItems,
			justifyContent,
			justifySelf,
			flexWrap,
			flexDirection,
			order,
			flexGrow,
			flexShrink,
			flexBasis,
			flex,
			gap,
			rowGap,
			columnGap,
			gridColumn,
			gridRow,
			gridAutoFlow,
			gridTemplateAreas,
			gridArea,
			gridGap,
			gridColumnGap,
			gridRowGap,
			gridAutoColumns,
			gridAutoRows,
			gridTemplateColumns,
			gridTemplateRows,
			zIndex,
			position,
			top,
			right,
			bottom,
			left,
			boxSizing,
			...sx,
		},
		theme
	);
};

/**
 * Generic container with responsive props to control whitespace, layout,
 * positioning and colors.
 */
export const Box = styled.div.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) =>
		PROPS_TO_IGNORE.includes(prop) === false && defaultValidatorFn(prop),
})<BoxProps>(boxStyledProps);

Box.defaultProps = {
	boxSizing: 'border-box',
	minWidth: 0,
};

export default Box;
export { boxStyledProps };
