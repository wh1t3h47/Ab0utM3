import classNames from 'classnames';
import React from 'react';

type styleState = {
    className: string;
};
type backgroundProps = {
    fallbackStyles: string;
    lazyStyleSheet: Promise<{stylesBackground: string}>;
};

class LazyBackground extends React.PureComponent<backgroundProps, styleState> {
    // readonly props: React.ComponentPropsWithoutRef<string>
    state = {
        className: '',
    };

    async componentDidMount(): Promise<void> {
        const lazyStyles = await this.props.lazyStyleSheet;
        this.setState({className: lazyStyles.stylesBackground});
    }

    render(): JSX.Element {
        console.log(this.state);
        const criticalStyles = this.props.fallbackStyles;

        return (
            <div
                className={classNames([criticalStyles, this.state.className])}
            ></div>
        );
    }
}

export default LazyBackground;
