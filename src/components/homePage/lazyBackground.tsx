import classNames from 'classnames';
import React from 'react';

type styleState = {
    classNames: string;
};
type backgroundProps = {
    fallbackStyles: string;
    lazyStyleSheet: Promise<{stylesBackground: string}>;
};

class LazyBackground extends React.PureComponent<backgroundProps, styleState> {

    state = {
        classNames: '',
    };

    async componentDidMount(): Promise<void> {
        const lazyStyles = await this.props.lazyStyleSheet;
        this.setState({
                classNames: classNames([
                    this.state.classNames,
                    lazyStyles.stylesBackground
                ]),
            });
    }

    render(): JSX.Element {
        const criticalStyles = this.props.fallbackStyles;
        if (!this.state.classNames) {
          this.setState({classNames: classNames([criticalStyles])});
        }

        return (
            <div
                className={this.state.classNames}
            />
        );
    }
}

export default LazyBackground;
