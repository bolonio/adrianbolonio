type Messages = typeof import("../lib/messages/en.json")
declare interface IntlMessages extends Messages {}

declare module "*.svg" {
  import React = require("react")
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
