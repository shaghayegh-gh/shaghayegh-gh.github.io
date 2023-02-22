import 'styled-components'

type Object = { [key: string]: string }

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Object
    radius: Object
    fontSize: Object
    breakPoint: Object
  }
}
