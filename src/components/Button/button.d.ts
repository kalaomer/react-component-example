declare module "components" {
    import * as React from "react";
    
    export module Button {
        export interface Props {
            children?: any;
            onClick?(e: any): void;
        }
    }

    export class Button extends React.Component<Button.Props, {}> { }
}
