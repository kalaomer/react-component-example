
import * as React from "react";

import {Button} from "components";

let styles = require("./app.scss");

export class App extends React.Component<{}, {}> {
    baseName = "App";

    onClick(e: any) {
        alert(e.target.textContent);
    }

    render() {
        return (
            <div className={styles.root}>
                <header className={styles.header}>This is component example with react</header>
                <div className={styles.content}>
                    <Button onClick={this.onClick}>Hi!</Button>
                    <Button onClick={this.onClick}>This is awesome!</Button>
                </div>
            </div>
        );
    }
}
