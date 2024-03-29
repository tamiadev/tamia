import styled, { DefaultTheme } from 'styled-components';
import { ResponsiveValue, variant } from '../primitives';
import { AsProps } from '../types';
import { boxStyledProps, PROPS_TO_IGNORE, BoxProps } from './Box';

export type HeadingProps = BoxProps &
	AsProps & {
		level?: ResponsiveValue<keyof DefaultTheme['headingStyles']>;
	};

const ALL_PROPS_TO_IGNORE = [...PROPS_TO_IGNORE, 'level'];

/**
 * Heading component.
 */
export const Heading = styled.h1
	.withConfig({
		shouldForwardProp: (prop, defaultValidatorFn) =>
			ALL_PROPS_TO_IGNORE.includes(prop) === false && defaultValidatorFn(prop),
	})
	.attrs<HeadingProps>((props) => ({
		as: props.as ?? `h${props.level}`,
	}))<HeadingProps>(
	variant({
		scale: 'headingStyles',
		prop: 'level',
	}),
	boxStyledProps
);

Heading.defaultProps = {
	level: 1,
};

export default Heading;
