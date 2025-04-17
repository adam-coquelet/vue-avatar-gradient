// index.d.ts
import { Plugin, DefineComponent } from 'vue'

declare const Avatar: DefineComponent<{
    token: string;
    size?: number;
    rounded?: number;
    text?: string;
}> & Plugin;

export default Avatar
export { Avatar }