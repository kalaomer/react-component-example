
import * as React from "react";

import {Button as ButtonComponent} from "components";

// Here is the magic! Don't touch it :P
// Add Styles to bundle and get class names.
var styles: any = require("./button.scss");

console.log(styles);

export class Button extends React.Component<ButtonComponent.Props, {}> {
    constructor(props: ButtonComponent.Props) {
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
