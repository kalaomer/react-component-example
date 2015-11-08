
import * as React from "react";

interface Props {
    children?: any;
    onClick?(e: any): void;
}

// Here is the magic! Don't touch it :P
// Add Styles to bundle and get class names.
var styles: any = require("./button.scss");

console.log(styles);

export class Button extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div onClick={this.props.onClick} className={styles.root}>
                <span className={styles.text}>
                    {this.props.children}
                </span>
            </div>
        );
    }
}